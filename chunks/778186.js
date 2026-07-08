n.d(t, { w: () => l, consentMachine: () => d });
var r = n(209688),
    o = n(588233),
    s = n(171251),
    i = n(64755);
async function c(e, t) {
    if (!e) throw Error("Combined consent id is required");
    let n = await r.t.get(s.t.getCombinedConsent, { signal: t, query: { id: e, language: "en" } });
    if (!n.ok) throw Error(`GET ${s.t.getCombinedConsent} failed: ${n.status} ${n.statusText}`);
    return n.data;
}
async function a(e, t) {
    let n = await r.t.post(s.t.signCombinedConsent, e, { signal: t });
    if (!n.ok) throw Error(`POST ${s.t.signCombinedConsent} failed: ${n.status} ${n.statusText}`);
}
let d = (0, i.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchConsent: (0, i.a)(async ({ input: e, signal: t }) => c(e.consentId, t)),
        submitConsent: (0, i.a)(async ({ input: e, signal: t }) => {
            await a(
                {
                    languageConsentId: e.languageConsentId,
                    checkboxes: e.checkboxes.reduce((e, t) => ((e[t.id] = t.checked), e), {}),
                },
                t,
            );
        }),
    },
    actions: {
        setConsentData: (0, i.r)(({ event: e }) => {
            let t = e.output;
            return {
                title: t.title,
                richText: t.terms,
                languageConsentId: t.languageConsentId,
                checkboxes: t.consents.map((e) => ({
                    id: e.checkboxId,
                    label: e.consentText,
                    required: !e.optional,
                    checked: !1,
                })),
                error: void 0,
            };
        }),
        toggleCheckbox: (0, i.r)(({ context: e, event: t }) => {
            let n = t.checkboxId;
            return { checkboxes: e.checkboxes.map((e) => (e.id === n ? { ...e, checked: !e.checked } : e)) };
        }),
        setError: (0, i.r)(({ event: e }) => ({ error: String(e.error) })),
        clearError: (0, i.r)({ error: () => void 0 }),
        resetContext: (0, i.r)(({ context: e }) => ({
            config: e.config,
            title: "",
            richText: "",
            languageConsentId: "",
            checkboxes: [],
            error: void 0,
        })),
    },
    guards: { canSubmit: ({ context: e }) => e.checkboxes.filter((e) => e.required).every((e) => e.checked) },
}).createMachine({
    id: "consent",
    initial: "idle",
    context: ({ input: e }) => ({
        config: e.config,
        title: "",
        richText: "",
        languageConsentId: "",
        checkboxes: [],
        error: void 0,
    }),
    states: {
        idle: { on: { LOAD: { target: "loading", actions: "clearError" } } },
        loading: {
            invoke: {
                id: "fetchConsent",
                src: "fetchConsent",
                input: ({ context: e }) => ({
                    consentId: String(e.config.combinedConsents ?? e.config.consentId ?? ""),
                }),
                onDone: { target: "display", actions: "setConsentData" },
                onError: { target: "error", actions: "setError" },
            },
        },
        display: {
            on: {
                TOGGLE_CHECKBOX: { actions: "toggleCheckbox" },
                SUBMIT: { target: "submitting", guard: "canSubmit" },
                RETRY: { target: "loading", actions: "clearError" },
            },
        },
        submitting: {
            invoke: {
                id: "submitConsent",
                src: "submitConsent",
                input: ({ context: e }) => ({ languageConsentId: e.languageConsentId, checkboxes: e.checkboxes }),
                onDone: { target: "finished" },
                onError: { target: "display", actions: "setError" },
            },
        },
        error: {
            on: {
                RETRY: { target: "loading", actions: "clearError" },
                RESET: { target: "idle", actions: "resetContext" },
            },
        },
        finished: { type: "final" },
    },
});
function u(e) {
    let { context: t } = e,
        n = t.checkboxes.filter((e) => e.required).every((e) => e.checked);
    return e.matches("idle")
        ? { status: "idle" }
        : e.matches("loading")
          ? { status: "loading" }
          : e.matches("display")
            ? {
                  status: "display",
                  title: t.title,
                  richText: t.richText,
                  checkboxes: t.checkboxes,
                  canSubmit: n,
                  error: t.error,
              }
            : e.matches("submitting")
              ? { status: "submitting", title: t.title, richText: t.richText, checkboxes: t.checkboxes, canSubmit: !1 }
              : e.matches("finished")
                ? { status: "finished" }
                : e.matches("error")
                  ? { status: "error", error: t.error ?? "Unknown error" }
                  : { status: "idle" };
}
function g({ actor: e, trackElementClicked: t }) {
    return {
        load() {
            e.send({ type: "LOAD" });
        },
        toggleCheckbox(t) {
            e.send({ type: "TOGGLE_CHECKBOX", checkboxId: t });
        },
        submit() {
            t?.("submit"), e.send({ type: "SUBMIT" });
        },
        retry() {
            t?.("retry"), e.send({ type: "RETRY" });
        },
        reset() {
            e.send({ type: "RESET" });
        },
    };
}
function l(e) {
    return (0, i.c)({
        actor: (0, i.s)(d, { input: { config: e.config } }).start(),
        mapState: u,
        createApi: g,
        instrumentation: (0, o.o)(o.n.combinedConsent),
    });
}
