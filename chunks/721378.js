n.d(e, { n: () => u, mandatoryConsentMachine: () => d });
var s = n(768672),
    i = n(368499),
    r = n(288052),
    o = n(168056);
async function a(t, e, n, i) {
    let o = await s.t.get(r.t.getConsents, { signal: i, query: { type: n, language: e ?? "en", regulationType: t } });
    if (!o.ok) throw Error(`GET ${r.t.getConsents} failed: ${o.status} ${o.statusText}`);
    return o.data;
}
async function c(t, e) {
    let n = await s.t.post(r.t.submitMlConsent, t, { signal: e });
    if (!n.ok) throw Error(`POST ${r.t.submitMlConsent} failed: ${n.status} ${n.statusText}`);
}
let d = (0, o.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchConsent: (0, o.a)(async ({ input: t, signal: e }) =>
            a(t.config.consentType, t.config.language, t.config.type ?? "MANDATORY", e),
        ),
        submitConsent: (0, o.a)(async ({ input: t, signal: e }) =>
            c({ consents: [{ id: t.consentId, isSigned: t.isSigned }] }, e),
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
function g(t) {
    let { context: e } = t,
        n = !!(e.isSigned && e.consent?.id);
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loading")
          ? { status: "loading" }
          : t.matches("display")
            ? {
                  status: "display",
                  title: e.consent?.title ?? "",
                  text: e.consent?.text ?? "",
                  isSigned: e.isSigned,
                  canSubmit: n,
                  error: e.error,
              }
            : t.matches("submitting")
              ? {
                    status: "submitting",
                    title: e.consent?.title ?? "",
                    text: e.consent?.text ?? "",
                    isSigned: e.isSigned,
                    canSubmit: !1,
                }
              : t.matches("finished")
                ? { status: "finished" }
                : t.matches("closed")
                  ? { status: "closed" }
                  : t.matches("error")
                    ? { status: "error", error: e.error ?? "Unknown error" }
                    : { status: "idle" };
}
function l({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        toggle() {
            t.send({ type: "TOGGLE" });
        },
        submit() {
            e?.("submit"), t.send({ type: "SUBMIT" });
        },
        cancel() {
            e?.("cancel"), t.send({ type: "CANCEL" });
        },
        retry() {
            e?.("retry"), t.send({ type: "RETRY" });
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function u(t) {
    return (0, o.l)({
        actor: (0, o.s)(d, { input: { config: t.config } }).start(),
        mapState: g,
        createApi: l,
        instrumentation: (0, i.s)(i.n.mlConsent),
    });
}
