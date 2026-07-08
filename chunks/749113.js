r.d(e, { X: () => m, redirectToMobileMachine: () => p });
var n = r(257300),
    s = r(209688),
    i = r(588233),
    a = r(171251),
    o = r(64755);
function c(t, e) {
    try {
        return new URL(t).searchParams.get(e);
    } catch {
        return null;
    }
}
async function d(t) {
    let e = await s.t.get(a.t.onboardingUrl, { signal: t });
    if (!e.ok) throw Error(`GET ${a.t.onboardingUrl} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function u(t) {
    let e = await s.t.get(a.t.onboardingStatus, { signal: t });
    if (!e.ok) throw Error(`GET ${a.t.onboardingStatus} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function l(t, e) {
    let r = await s.t.post(a.t.sendRedirectSms, t, { signal: e });
    if (!r.ok) throw Error(`POST ${a.t.sendRedirectSms} failed: ${r.status} ${r.statusText}`);
}
async function f(t, e) {
    let r = await s.t.post(a.t.phone, { phone: t }, { signal: e });
    if (!r.ok) throw Error(`POST ${a.t.phone} failed: ${r.status} ${r.statusText}`);
}
async function h(t, e) {
    let r = await s.t.post(a.t.qrRefreshUuid, { onboardingId: t }, { signal: e });
    if (!r.ok) throw Error(`POST ${a.t.qrRefreshUuid} failed: ${r.status} ${r.statusText}`);
    return r.data;
}
async function g(t) {
    let e = await s.t.get(a.t.startInfo, { signal: t });
    if (!e.ok) throw Error(`GET ${a.t.startInfo} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
function S(t, e, r, n) {
    let s = c(t, "uuid") ?? "";
    return (function (t, e) {
        let r = new URL(t);
        for (let [t, n] of Object.entries(e)) void 0 !== n && r.searchParams.set(t, n);
        return r.href;
    })(e ?? t, {
        uuid: s,
        isRedirect: "true",
        lang: r.lang,
        externalId: r.externalId,
        auth_hint: r.authHint,
        url_uuid: n || void 0,
    });
}
let p = (0, o.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchRedirectUrl: (0, o.a)(async ({ signal: t }) => d(t)),
        fetchStartInfo: (0, o.a)(async ({ signal: t }) => g(t)),
        pollOnboardingStatus: (0, o.i)(({ sendBack: t }) => {
            let e = n.t.getInstance(),
                r = e.setInterval(async () => {
                    try {
                        "ONBOARDING_FINISHED" === (await u()).onboardingStatus && t({ type: "POLL_TICK" });
                    } catch {}
                }, 5e3);
            return () => e.clearInterval(r);
        }),
        refreshQrUuid: (0, o.i)(({ sendBack: t, input: e }) => {
            let r = n.t.getInstance(),
                s = r.setInterval(async () => {
                    try {
                        let r = await h(e.uuid);
                        r.urlUuid && t({ type: "QR_REFRESHED", urlUuid: r.urlUuid });
                    } catch {}
                }, 5e3);
            return () => r.clearInterval(s);
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
                uuid: c(r, "uuid") ?? "",
                redirectUrl: S(r, t.config.url, t.config, t.urlUuid),
            };
        }),
        setStartInfo: (0, o.r)(({ event: t }) => ({ phonePrefix: t.output.phonePrefix })),
        setError: (0, o.r)(({ event: t }) => ({ error: String(t.error) })),
        setSmsSent: (0, o.r)({ smsSent: () => !0 }),
        resetSmsSent: (0, o.r)({ smsSent: () => !1, error: () => void 0 }),
        setSmsError: (0, o.r)(({ event: t }) => ({ error: String(t.error) })),
        updateQrUrl: (0, o.r)(({ context: t, event: e }) => {
            let { urlUuid: r } = e;
            return { urlUuid: r, redirectUrl: S(t.fetchedBaseUrl, t.config.url, t.config, r) };
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
                        sent: { on: { SEND_SMS: "sending", RESET_SMS: { target: "idle", actions: "resetSmsSent" } } },
                    },
                },
            },
            on: { CONTINUE_ON_DESKTOP: "closed", CLOSE: "closed" },
        },
        finished: { type: "final" },
        closed: { type: "final" },
        error: { on: { RETRY: "generatingUrl" } },
    },
});
function E(t) {
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
            e?.("sendSms"), t.send({ type: "SEND_SMS", phone: r });
        },
        continueOnDesktop() {
            e?.("continueOnDesktop"), t.send({ type: "CONTINUE_ON_DESKTOP" });
        },
        resetSms() {
            t.send({ type: "RESET_SMS" });
        },
        close() {
            e?.("close"), t.send({ type: "CLOSE" });
        },
        retry() {
            e?.("retry"), t.send({ type: "RETRY" });
        },
    };
}
function m(t) {
    return (0, o.c)({
        actor: (0, o.s)(p, { input: { config: t.config } }).start(),
        mapState: E,
        createApi: U,
        instrumentation: (0, i.o)(i.n.qr),
    });
}
