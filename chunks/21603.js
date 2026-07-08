e.d(r, { bb: () => d, cpfOcrMachine: () => l, ll: () => g });
var i = e(209688),
    s = e(588233),
    n = e(171251),
    a = e(64755),
    o = e(260872);
async function c(t) {
    let r = await i.t.get(n.t.ocrData, { signal: t });
    if (!r.ok) throw Error(`GET ${n.t.ocrData} failed: ${r.status} ${r.statusText}`);
    return r.data;
}
async function u(t, r) {
    let e = await i.t.put(n.t.updateSession, { documentNumber: t }, { signal: r });
    if (!e.ok) throw Error(`PUT ${n.t.updateSession} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
function d(t) {
    let r = t.replace(/\D/g, "").slice(0, 11),
        e = r.slice(0, 3),
        i = r.slice(3, 6),
        s = r.slice(6, 9),
        n = r.slice(9, 11);
    return r.length > 9 ? `${e}.${i}.${s}-${n}` : r.length > 6 ? `${e}.${i}.${s}` : r.length > 3 ? `${e}.${i}` : e;
}
let l = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchCpfOcrData: (0, a.a)(async ({ signal: t }) => c(t)),
        submitCpfOcr: (0, a.a)(async ({ input: t, signal: r }) => u(t.cpf, r)),
    },
    actions: {
        setPrefill: (0, a.r)(({ event: t }) => {
            let r = d(t.output.documentNumber ?? "");
            return { cpf: r, isValid: (0, o.t)(r), error: void 0 };
        }),
        setCpf: (0, a.r)(({ event: t }) => {
            let r = d(t.cpf);
            return { cpf: r, isValid: (0, o.t)(r), error: void 0 };
        }),
        setError: (0, a.r)(({ event: t }) => ({ error: String(t.error) })),
        clearError: (0, a.r)({ error: () => void 0 }),
    },
    guards: { isValid: ({ context: t }) => t.isValid },
}).createMachine({
    id: "cpfOcr",
    initial: "idle",
    context: { cpf: "", isValid: !1, error: void 0 },
    states: {
        idle: { on: { LOAD: "loading" } },
        loading: {
            invoke: {
                src: "fetchCpfOcrData",
                onDone: { target: "inputting", actions: "setPrefill" },
                onError: { target: "error", actions: "setError" },
            },
        },
        inputting: { on: { SET_CPF: { actions: "setCpf" }, SUBMIT: { guard: "isValid", target: "submitting" } } },
        submitting: {
            invoke: {
                src: "submitCpfOcr",
                input: ({ context: t }) => ({ cpf: t.cpf }),
                onDone: { target: "finished" },
                onError: { target: "error", actions: "setError" },
            },
        },
        error: {
            on: {
                RETRY: { target: "loading", actions: "clearError" },
                SET_CPF: { target: "inputting", actions: "setCpf" },
            },
        },
        finished: { type: "final" },
    },
});
function p(t) {
    let { context: r } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loading")
          ? { status: "loading" }
          : t.matches("inputting")
            ? { status: "inputting", cpf: r.cpf, isValid: r.isValid }
            : t.matches("submitting")
              ? { status: "submitting" }
              : t.matches("error")
                ? { status: "error", error: r.error ?? "Unknown error" }
                : t.matches("finished")
                  ? { status: "finished" }
                  : { status: "idle" };
}
function f({ actor: t, trackElementClicked: r }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setCpf(r) {
            t.send({ type: "SET_CPF", cpf: r });
        },
        submit() {
            r?.("continue"), t.send({ type: "SUBMIT" });
        },
        retry() {
            r?.("retry"), t.send({ type: "RETRY" });
        },
    };
}
function g() {
    return (0, a.c)({
        actor: (0, a.s)(l, { input: {} }).start(),
        mapState: p,
        createApi: f,
        instrumentation: (0, s.o)(s.n.idOcr),
    });
}
