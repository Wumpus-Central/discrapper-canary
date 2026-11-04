(r.r(e),
    r.d(e, {
        createRedirectToMobileManager: () => I,
        createRedirectToMobileManagerFromActor: () => R,
        defaultRedirectToMobileServices: () => S,
        redirectToMobileMachine: () => E,
    }));
var n = r(580607),
    i = r(41851),
    a = r(269882),
    s = r(528239),
    o = r(646613),
    c = r(225220);
async function u(t) {
    let e = await i.t.get(s.t.onboardingUrl, { signal: t });
    if (!e.ok) throw Error(`GET ${s.t.onboardingUrl} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function d(t) {
    let e = await i.t.get(s.t.onboardingStatus, { signal: t });
    if (!e.ok) throw Error(`GET ${s.t.onboardingStatus} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function l(t, e) {
    let r = await i.t.post(s.t.sendRedirectSms, t, { signal: e });
    if (!r.ok) throw Error(`POST ${s.t.sendRedirectSms} failed: ${r.status} ${r.statusText}`);
}
async function f(t, e) {
    let r = await i.t.post(s.t.phone, { phone: t }, { signal: e });
    if (!r.ok) throw Error(`POST ${s.t.phone} failed: ${r.status} ${r.statusText}`);
}
async function g(t, e) {
    let r = await i.t.post(s.t.qrRefreshUuid, { onboardingId: t }, { signal: e });
    if (!r.ok) throw Error(`POST ${s.t.qrRefreshUuid} failed: ${r.status} ${r.statusText}`);
    return r.data;
}
async function h(t) {
    let e = await i.t.get(s.t.startInfo, { signal: t });
    if (!e.ok) throw Error(`GET ${s.t.startInfo} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
let S = {
    fetchRedirectUrl: u,
    fetchOnboardingStatus: d,
    sendRedirectSms: l,
    addPhoneForRedirect: f,
    refreshQrUuid: g,
    fetchStartInfo: h,
};
function p(t, e, r, n) {
    let i = (0, c.n)(t, "uuid") ?? "";
    return (0, c.t)(e ?? t, {
        uuid: i,
        isRedirect: "true",
        lang: r.lang,
        externalId: r.externalId,
        auth_hint: r.authHint,
        url_uuid: n || void 0,
    });
}
let E = (0, o.t)({
    types: { context: {}, events: {}, input: {}, output: {} },
    actors: {
        fetchRedirectUrl: (0, o.a)(async ({ signal: t }) => u(t)),
        fetchStartInfo: (0, o.a)(async ({ signal: t }) => h(t)),
        pollOnboardingStatus: (0, o.i)(({ sendBack: t }) => {
            let e = n.t.getInstance(),
                r = e.setInterval(async () => {
                    try {
                        "ONBOARDING_FINISHED" === (await d()).onboardingStatus && t({ type: "POLL_TICK" });
                    } catch {}
                }, 5e3);
            return () => e.clearInterval(r);
        }),
        refreshQrUuid: (0, o.i)(({ sendBack: t, input: e }) => {
            let r = n.t.getInstance(),
                i = r.setInterval(async () => {
                    try {
                        let r = await g(e.uuid);
                        r.urlUuid && t({ type: "QR_REFRESHED", urlUuid: r.urlUuid });
                    } catch {}
                }, 5e3);
            return () => r.clearInterval(i);
        }),
        sendSms: (0, o.a)(async ({ input: t, signal: e }) => {
            await f(t.phone, e);
            let r = t.lang ? [`lang=${t.lang}`] : [];
            await l({ smsType: "DESKTOP_ONBOARDING", uuid: t.uuid, params: r }, e);
        }),
    },
    actions: {
        setBaseUrl: (0, o.r)(({ context: t, event: e }) => {
            let r = e.output.url;
            return {
                fetchedBaseUrl: r,
                uuid: (0, c.n)(r, "uuid") ?? "",
                redirectUrl: p(r, t.config.url, t.config, t.urlUuid),
            };
        }),
        setStartInfo: (0, o.r)(({ event: t }) => ({ phonePrefix: t.output.phonePrefix })),
        setError: (0, o.r)(({ event: t }) => ({ error: String(t.error) })),
        setSmsSent: (0, o.r)({ smsSent: () => !0 }),
        resetSmsSent: (0, o.r)({ smsSent: () => !1, error: () => void 0 }),
        setSmsError: (0, o.r)(({ event: t }) => ({ error: String(t.error) })),
        updateQrUrl: (0, o.r)(({ context: t, event: e }) => {
            let { urlUuid: r } = e;
            return { urlUuid: r, redirectUrl: p(t.fetchedBaseUrl, t.config.url, t.config, r) };
        }),
    },
    guards: { hasPhishingResistance: ({ context: t }) => !0 === t.config.qrPhishingResistance },
}).createMachine({
    id: "redirectToMobile",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        redirectUrl: "",
        fetchedBaseUrl: "",
        uuid: "",
        urlUuid: "",
        phonePrefix: "",
        smsSent: !1,
        error: void 0,
    }),
    states: {
        idle: { on: { LOAD: "generatingUrl" } },
        generatingUrl: {
            invoke: {
                id: "fetchRedirectUrl",
                src: "fetchRedirectUrl",
                onDone: { target: "loadingStartInfo", actions: "setBaseUrl" },
                onError: { target: "error", actions: "setError" },
            },
        },
        loadingStartInfo: {
            invoke: {
                id: "fetchStartInfo",
                src: "fetchStartInfo",
                onDone: { target: "showingQr", actions: "setStartInfo" },
                onError: { target: "showingQr" },
            },
        },
        showingQr: {
            type: "parallel",
            states: {
                polling: {
                    invoke: { id: "pollOnboardingStatus", src: "pollOnboardingStatus" },
                    on: { POLL_TICK: { target: "#redirectToMobile.finished" } },
                },
                qrRefresh: {
                    initial: "checking",
                    states: {
                        checking: {
                            always: [{ target: "refreshing", guard: "hasPhishingResistance" }, { target: "inactive" }],
                        },
                        refreshing: {
                            invoke: {
                                id: "refreshQrUuid",
                                src: "refreshQrUuid",
                                input: ({ context: t }) => ({ uuid: t.uuid }),
                            },
                            on: { QR_REFRESHED: { actions: "updateQrUrl" } },
                        },
                        inactive: { type: "final" },
                    },
                },
                sms: {
                    initial: "idle",
                    on: { RESET_SMS: { target: ".idle", actions: "resetSmsSent" } },
                    states: {
                        idle: { on: { SEND_SMS: "sending" } },
                        sending: {
                            invoke: {
                                id: "sendSms",
                                src: "sendSms",
                                input: ({ context: t, event: e }) => ({
                                    phone: e.phone,
                                    uuid: t.uuid,
                                    lang: t.config.lang,
                                }),
                                onDone: { target: "sent", actions: "setSmsSent" },
                                onError: { target: "idle", actions: "setSmsError" },
                            },
                        },
                        sent: { on: { SEND_SMS: "sending" } },
                    },
                },
            },
            on: { CONTINUE_ON_DESKTOP: "continue", CLOSE: "closed" },
        },
        finished: { type: "final", output: { action: "onboardingFinished" } },
        continue: { type: "final" },
        closed: { type: "final" },
        error: { on: { RETRY: "generatingUrl" } },
    },
});
function y(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("generatingUrl") || t.matches("loadingStartInfo")
          ? { status: "loading" }
          : t.matches("showingQr")
            ? {
                  status: "redirecting",
                  redirectUrl: e.redirectUrl,
                  phonePrefix: e.phonePrefix,
                  smsSent: e.smsSent,
                  error: e.error,
              }
            : t.matches("finished")
              ? { status: "finished" }
              : t.matches("continue")
                ? { status: "continue" }
                : t.matches("closed")
                  ? { status: "closed" }
                  : t.matches("error")
                    ? { status: "error", error: e.error ?? "An error occurred" }
                    : { status: "idle" };
}
function U({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        sendSms(r) {
            (e?.("sendSms"), t.send({ type: "SEND_SMS", phone: r }));
        },
        continueOnDesktop() {
            (e?.("continueOnDesktop"), t.send({ type: "CONTINUE_ON_DESKTOP" }));
        },
        resetSms() {
            t.send({ type: "RESET_SMS" });
        },
        close() {
            (e?.("close"), t.send({ type: "CLOSE" }));
        },
        retry() {
            (e?.("retry"), t.send({ type: "RETRY" }));
        },
    };
}
function I(t) {
    var e, r;
    return (0, o.l)({
        actor: (0, o.s)(
            t.services
                ? ((e = t.services),
                  (r = { ...S, ...e }),
                  E.provide({
                      actors: {
                          fetchRedirectUrl: (0, o.a)(async ({ signal: t }) => r.fetchRedirectUrl(t)),
                          fetchStartInfo: (0, o.a)(async ({ signal: t }) => r.fetchStartInfo(t)),
                          pollOnboardingStatus: (0, o.i)(({ sendBack: t }) => {
                              let e = n.t.getInstance(),
                                  i = e.setInterval(async () => {
                                      try {
                                          "ONBOARDING_FINISHED" ===
                                              (await r.fetchOnboardingStatus()).onboardingStatus &&
                                              t({ type: "POLL_TICK" });
                                      } catch {}
                                  }, 5e3);
                              return () => e.clearInterval(i);
                          }),
                          refreshQrUuid: (0, o.i)(({ sendBack: t, input: e }) => {
                              let i = n.t.getInstance(),
                                  a = i.setInterval(async () => {
                                      try {
                                          let n = await r.refreshQrUuid(e.uuid);
                                          n.urlUuid && t({ type: "QR_REFRESHED", urlUuid: n.urlUuid });
                                      } catch {}
                                  }, 5e3);
                              return () => i.clearInterval(a);
                          }),
                          sendSms: (0, o.a)(async ({ input: t, signal: e }) => {
                              await r.addPhoneForRedirect(t.phone, e);
                              let n = t.lang ? [`lang=${t.lang}`] : [];
                              await r.sendRedirectSms({ smsType: "DESKTOP_ONBOARDING", uuid: t.uuid, params: n }, e);
                          }),
                      },
                  }))
                : E,
            { input: { config: t.config } },
        ).start(),
        mapState: y,
        createApi: U,
        instrumentation: (0, a.s)(a.n.qr),
    });
}
function R(t) {
    return (0, o.l)({ actor: t, mapState: y, createApi: U, instrumentation: (0, a.s)(a.n.qr) });
}
