s.d(e, { customFieldsMachine: () => d, s: () => f });
var i = s(209688),
    n = s(588233),
    a = s(171251),
    u = s(64755),
    c = s(165964);
async function r(t, e) {
    let s = await i.t.post(a.t.addCustomFields, t.fields, { signal: e });
    if (!s.ok) throw Error(`POST ${a.t.addCustomFields} failed: ${s.status} ${s.statusText}`);
    return s.data;
}
let d = (0, u.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        submitFields: (0, u.a)(async ({ input: t, signal: e }) =>
            r(
                {
                    fields: (function (t, e) {
                        let s = {};
                        for (let [i, n] of Object.entries(t))
                            e.find((t) => t.name === i)?.type === "DATE" && "string" == typeof n && "" !== n
                                ? (s[i] = (0, c.t)(n))
                                : (s[i] = n);
                        return s;
                    })(t.fields, t.customFields),
                },
                e,
            ),
        ),
    },
    actions: {
        setField: (0, u.r)(({ context: t, event: e }) => ({ fields: { ...t.fields, [e.name]: e.value } })),
        markSuccess: (0, u.r)({ result: "success" }),
        markFailed: (0, u.r)({ result: "failed" }),
    },
    guards: { apiSucceeded: ({ event: t }) => t.output.success },
}).createMachine({
    id: "customFields",
    initial: "idle",
    context: ({ input: t }) => ({ config: t.config, fields: {}, result: null }),
    states: {
        idle: { on: { LOAD: { target: "inputting" } } },
        inputting: { on: { FIELD_CHANGED: { actions: "setField" }, SUBMIT: { target: "submitting" } } },
        submitting: {
            invoke: {
                id: "submitFields",
                src: "submitFields",
                input: ({ context: t }) => ({ fields: t.fields, customFields: t.config.customFields }),
                onDone: [
                    { target: "success", guard: "apiSucceeded" },
                    { target: "finished", actions: "markFailed" },
                ],
                onError: { target: "finished", actions: "markFailed" },
            },
        },
        success: { after: { 3e3: { target: "finished", actions: "markSuccess" } } },
        finished: { type: "final" },
    },
});
function l(t) {
    let { context: e } = t;
    if (t.matches("idle")) return { status: "idle" };
    if (t.matches("inputting")) {
        var s;
        return {
            status: "inputting",
            title: e.config.title,
            customFields: e.config.customFields.map((t) => ({
                ...t,
                label: t.alias ? t.alias : t.name.replace(/([A-Z])/g, " $1").replace(/^./, (t) => t.toUpperCase()),
            })),
            canSubmit:
                ((s = e.fields),
                e.config.customFields.every((t) => {
                    if ("BOOLEAN" === t.type) return !0;
                    let e = s[t.name];
                    return void 0 !== e && "" !== e;
                })),
        };
    }
    return t.matches("submitting")
        ? { status: "submitting", title: e.config.title }
        : t.matches("success")
          ? { status: "success" }
          : { status: "finished", result: t.context.result };
}
function o({ actor: t }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setField(e, s) {
            t.send({ type: "FIELD_CHANGED", name: e, value: s });
        },
        submit() {
            t.send({ type: "SUBMIT" });
        },
    };
}
function f(t) {
    return (0, u.c)({
        actor: (0, u.s)(d, { input: { config: t.config } }).start(),
        mapState: l,
        createApi: o,
        instrumentation: (0, n.o)(n.n.customFields),
    });
}
