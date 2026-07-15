e.d(r, { uG: () => d, ll: () => h, cpfOcrMachine: () => p, bb: () => l });
var i = e(768672),
    n = e(368499),
    s = e(288052),
    a = e(168056),
    o = e(300964);
async function c(t) {
    let r = await i.t.get(s.t.ocrData, { signal: t });
    if (!r.ok) throw Error(`GET ${s.t.ocrData} failed: ${r.status} ${r.statusText}`);
    return r.data;
}
async function u(t, r) {
    let e = await i.t.put(s.t.updateSession, { documentNumber: t }, { signal: r });
    if (!e.ok) throw Error(`PUT ${s.t.updateSession} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
function l(t) {
    let r = t.replace(/\D/g, "").slice(0, 11),
        e = r.slice(0, 3),
        i = r.slice(3, 6),
        n = r.slice(6, 9),
        s = r.slice(9, 11);
    return r.length > 9 ? `${e}.${i}.${n}-${s}` : r.length > 6 ? `${e}.${i}.${n}` : r.length > 3 ? `${e}.${i}` : e;
}
function d(t) {
    return (0, o.t)(t);
}
let p = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchCpfOcrData: (0, a.a)(async ({ signal: t }) => c(t)),
        submitCpfOcr: (0, a.a)(async ({ input: t, signal: r }) => u(t.cpf, r)),
    },
    actions: {
        setPrefill: (0, a.r)(({ event: t }) => {
            let r = l(t.output.documentNumber ?? "");
            return { cpf: r, isValid: d(r), error: void 0 };
        }),
        setCpf: (0, a.r)(({ event: t }) => {
            let r = l(t.cpf);
            return { cpf: r, isValid: d(r), error: void 0 };
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
function f(t) {
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
function g({ actor: t, trackElementClicked: r }) {
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
function h() {
    return (0, a.l)({
        actor: (0, a.s)(p, { input: {} }).start(),
        mapState: f,
        createApi: g,
        instrumentation: (0, n.s)(n.n.idOcr),
    });
}
