(e.r(n),
    e.d(n, {
        createMandatoryConsentManager: () => g,
        createMandatoryConsentManagerFromActor: () => u,
        mandatoryConsentMachine: () => a,
    }));
var s = e(41851),
    i = e(269882),
    r = e(528239),
    o = e(646613);
let a = (0, o.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchConsent: (0, o.a)(async ({ input: t, signal: n }) =>
            (async function (t, n, e, i) {
                let o = await s.t.get(r.t.getConsents, {
                    signal: i,
                    query: { type: e, language: n ?? "en", regulationType: t },
                });
                if (!o.ok) throw Error(`GET ${r.t.getConsents} failed: ${o.status} ${o.statusText}`);
                return o.data;
            })(t.config.consentType, t.config.language, t.config.type ?? "MANDATORY", n),
        ),
        submitConsent: (0, o.a)(async ({ input: t, signal: n }) =>
            (async function (t, n) {
                let e = await s.t.post(r.t.submitMlConsent, t, { signal: n });
                if (!e.ok) throw Error(`POST ${r.t.submitMlConsent} failed: ${e.status} ${e.statusText}`);
            })({ consents: [{ id: t.consentId, isSigned: t.isSigned }] }, n),
        ),
    },
    actions: {
        setConsent: (0, o.r)(({ event: t }) => ({ consent: t.output.consents[0], isSigned: !1, error: void 0 })),
        toggleSigned: (0, o.r)(({ context: t }) => ({ isSigned: !t.isSigned })),
        setError: (0, o.r)(({ event: t }) => ({ error: String(t.error) })),
        clearError: (0, o.r)({ error: () => void 0 }),
        resetContext: (0, o.r)(({ context: t }) => ({
            config: t.config,
            consent: void 0,
            isSigned: !1,
            error: void 0,
        })),
    },
    guards: { canSubmit: ({ context: t }) => !!t.consent?.id && t.isSigned },
}).createMachine({
    id: "mandatoryConsent",
    initial: "idle",
    context: ({ input: t }) => ({ config: t.config, consent: void 0, isSigned: !1, error: void 0 }),
    states: {
        idle: { on: { LOAD: { target: "loading", actions: "clearError" } } },
        loading: {
            invoke: {
                id: "fetchConsent",
                src: "fetchConsent",
                input: ({ context: t }) => ({ config: t.config }),
                onDone: { target: "display", actions: "setConsent" },
                onError: { target: "error", actions: "setError" },
            },
        },
        display: {
            on: {
                TOGGLE: { actions: "toggleSigned" },
                SUBMIT: { target: "submitting", guard: "canSubmit" },
                CANCEL: { target: "closed" },
                RETRY: { target: "loading", actions: "clearError" },
            },
        },
        submitting: {
            invoke: {
                id: "submitConsent",
                src: "submitConsent",
                input: ({ context: t }) => ({ consentId: t.consent?.id ?? "", isSigned: t.isSigned }),
                onDone: { target: "finished" },
                onError: { target: "display", actions: "setError" },
            },
        },
        error: {
            on: {
                RETRY: { target: "loading", actions: "clearError" },
                CANCEL: { target: "closed" },
                RESET: { target: "idle", actions: "resetContext" },
            },
        },
        finished: { type: "final" },
        closed: { type: "final" },
    },
});
function c(t) {
    let { context: n } = t,
        e = !!(n.isSigned && n.consent?.id);
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loading")
          ? { status: "loading" }
          : t.matches("display")
            ? {
                  status: "display",
                  title: n.consent?.title ?? "",
                  text: n.consent?.text ?? "",
                  isSigned: n.isSigned,
                  canSubmit: e,
                  error: n.error,
              }
            : t.matches("submitting")
              ? {
                    status: "submitting",
                    title: n.consent?.title ?? "",
                    text: n.consent?.text ?? "",
                    isSigned: n.isSigned,
                    canSubmit: !1,
                }
              : t.matches("finished")
                ? { status: "finished" }
                : t.matches("closed")
                  ? { status: "closed" }
                  : t.matches("error")
                    ? { status: "error", error: n.error ?? "Unknown error" }
                    : { status: "idle" };
}
function d({ actor: t, trackElementClicked: n }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        toggle() {
            t.send({ type: "TOGGLE" });
        },
        submit() {
            (n?.("submit"), t.send({ type: "SUBMIT" }));
        },
        cancel() {
            (n?.("cancel"), t.send({ type: "CANCEL" }));
        },
        retry() {
            (n?.("retry"), t.send({ type: "RETRY" }));
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function g(t) {
    return (0, o.l)({
        actor: (0, o.s)(a, { input: { config: t.config } }).start(),
        mapState: c,
        createApi: d,
        instrumentation: (0, i.s)(i.n.mlConsent),
    });
}
function u(t) {
    return (0, o.l)({ actor: t, mapState: c, createApi: d, instrumentation: (0, i.s)(i.n.mlConsent) });
}
