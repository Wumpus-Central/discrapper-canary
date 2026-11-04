(e.r(r),
    e.d(r, {
        cpfOcrMachine: () => d,
        createCpfOcrManager: () => f,
        createCpfOcrManagerFromActor: () => g,
        formatCPF: () => c,
        isValidCPF: () => u,
    }));
var i = e(41851),
    n = e(269882),
    s = e(528239),
    a = e(646613),
    o = e(176912);
function c(t) {
    let r = t.replace(/\D/g, "").slice(0, 11),
        e = r.slice(0, 3),
        i = r.slice(3, 6),
        n = r.slice(6, 9),
        s = r.slice(9, 11);
    return r.length > 9 ? `${e}.${i}.${n}-${s}` : r.length > 6 ? `${e}.${i}.${n}` : r.length > 3 ? `${e}.${i}` : e;
}
function u(t) {
    return (0, o.t)(t);
}
let d = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchCpfOcrData: (0, a.a)(async ({ signal: t }) =>
            (async function (t) {
                let r = await i.t.get(s.t.ocrData, { signal: t });
                if (!r.ok) throw Error(`GET ${s.t.ocrData} failed: ${r.status} ${r.statusText}`);
                return r.data;
            })(t),
        ),
        submitCpfOcr: (0, a.a)(async ({ input: t, signal: r }) =>
            (async function (t, r) {
                let e = await i.t.put(s.t.updateSession, { documentNumber: t }, { signal: r });
                if (!e.ok) throw Error(`PUT ${s.t.updateSession} failed: ${e.status} ${e.statusText}`);
                return e.data;
            })(t.cpf, r),
        ),
    },
    actions: {
        setPrefill: (0, a.r)(({ event: t }) => {
            let r = c(t.output.documentNumber ?? "");
            return { cpf: r, isValid: u(r), error: void 0 };
        }),
        setCpf: (0, a.r)(({ event: t }) => {
            let r = c(t.cpf);
            return { cpf: r, isValid: u(r), error: void 0 };
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
function l(t) {
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
function p({ actor: t, trackElementClicked: r }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setCpf(r) {
            t.send({ type: "SET_CPF", cpf: r });
        },
        submit() {
            (r?.("continue"), t.send({ type: "SUBMIT" }));
        },
        retry() {
            (r?.("retry"), t.send({ type: "RETRY" }));
        },
    };
}
function f() {
    return (0, a.l)({
        actor: (0, a.s)(d, { input: {} }).start(),
        mapState: l,
        createApi: p,
        instrumentation: (0, n.s)(n.n.idOcr),
    });
}
function g(t) {
    return (0, a.l)({ actor: t, mapState: l, createApi: p, instrumentation: (0, n.s)(n.n.idOcr) });
}
