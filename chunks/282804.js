(n.r(e),
    n.d(e, { antifraudMachine: () => c, createAntifraudManager: () => f, createAntifraudManagerFromActor: () => p }));
var r = n(41851),
    s = n(269882),
    a = n(528239),
    i = n(646613);
let c = (0, i.t)({
    types: { context: {}, events: {} },
    actors: {
        processAntifraud: (0, i.a)(async ({ signal: t }) =>
            (async function (t) {
                let e = await r.t.get(a.t.processAntifraud, { signal: t });
                if (!e.ok) throw Error(`GET ${a.t.processAntifraud} failed: ${e.status} ${e.statusText}`);
                return e.data;
            })(t),
        ),
    },
}).createMachine({
    id: "antifraud",
    initial: "idle",
    context: {},
    states: {
        idle: { on: { LOAD: { target: "processing" } } },
        processing: {
            invoke: {
                id: "processAntifraud",
                src: "processAntifraud",
                onDone: { target: "finished" },
                onError: { target: "finished" },
            },
        },
        finished: { type: "final" },
    },
});
function u(t) {
    let e = (0, s.o)(t.value);
    if (void 0 !== e)
        switch (e) {
            case "processing":
                return "Antifraud.processing";
            case "finished":
                return "antifraud.success";
            default:
                return;
        }
}
function o(t) {
    return t.matches("processing")
        ? { status: "processing" }
        : t.matches("finished")
          ? { status: "finished" }
          : { status: "idle" };
}
function d({ actor: t }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
    };
}
function f() {
    return (0, i.l)({
        actor: (0, i.s)(c).start(),
        mapState: o,
        createApi: d,
        instrumentation: (0, s.s)(s.n.antifraud, { getEventScreenName: u }),
    });
}
function p(t) {
    return (0, i.l)({
        actor: t,
        mapState: o,
        createApi: d,
        instrumentation: (0, s.s)(s.n.antifraud, { getEventScreenName: u }),
    });
}
