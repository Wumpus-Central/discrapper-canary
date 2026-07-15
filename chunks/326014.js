s.d(e, { fieldComparisonMachine: () => c, n: () => m });
var i = s(768672),
    n = s(368499),
    a = s(288052),
    r = s(168056);
async function u(t, e) {
    let s = await i.t.post(a.t.addCustomFields, t, { signal: e });
    if (!s.ok) throw Error(`POST ${a.t.addCustomFields} failed: ${s.status} ${s.statusText}`);
    return s.data;
}
function d(t) {
    return "" !== t.firstName.trim() && "" !== t.lastName.trim();
}
let c = (0, r.t)({
    types: { context: {}, events: {}, input: {} },
    actors: { submitFields: (0, r.a)(async ({ input: t, signal: e }) => u({ customFields: t }, e)) },
    actions: { setField: (0, r.r)(({ context: t, event: e }) => ({ fields: { ...t.fields, [e.field]: e.value } })) },
    guards: { canSubmit: ({ context: t }) => d(t.fields), apiSucceeded: ({ event: t }) => t.output.success },
}).createMachine({
    id: "fieldComparison",
    initial: "idle",
    context: ({ input: t }) => ({ config: t.config, fields: { firstName: "", lastName: "" } }),
    states: {
        idle: { on: { LOAD: "inputting" } },
        inputting: {
            on: { FIELD_CHANGED: { actions: "setField" }, SUBMIT: { target: "submitting", guard: "canSubmit" } },
        },
        submitting: {
            invoke: {
                id: "submitFields",
                src: "submitFields",
                input: ({ context: t }) => t.fields,
                onDone: [{ target: "success", guard: "apiSucceeded" }, { target: "error" }],
                onError: { target: "error" },
            },
        },
        success: { after: { 3e3: { target: "finished" } } },
        error: { on: { RETRY: { target: "inputting" }, SKIP: { target: "finished" } } },
        finished: { type: "final" },
    },
});
function o(t) {
    let { fields: e } = t.context;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("inputting")
          ? { status: "inputting", canSubmit: d(e), fields: e }
          : t.matches("submitting")
            ? { status: "submitting", fields: e }
            : t.matches("finished")
              ? { status: "finished" }
              : t.matches("success")
                ? { status: "success" }
                : t.matches("error")
                  ? { status: "error" }
                  : { status: "idle" };
}
function l({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setField(e, s) {
            t.send({ type: "FIELD_CHANGED", field: e, value: s });
        },
        submit() {
            e?.("submit"), t.send({ type: "SUBMIT" });
        },
        retry() {
            e?.("retry"), t.send({ type: "RETRY" });
        },
        skip() {
            e?.("skip"), t.send({ type: "SKIP" });
        },
    };
}
function m(t = {}) {
    return (0, r.l)({
        actor: (function (t = {}) {
            return (0, r.s)(c, { input: { config: t.config ?? {} } }).start();
        })(t),
        mapState: o,
        createApi: l,
        instrumentation: (0, n.s)(n.n.fieldComparison),
    });
}
