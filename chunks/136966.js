a.r(s);
var e = a(41851),
    c = a(269882),
    n = a(528239),
    o = a(646613),
    r = a(280366);
let i = (0, o.t)({
    types: { context: {}, events: {} },
    actors: {
        processCrossDocumentDataMatch: (0, o.a)(async ({ signal: t }) =>
            (async function (t) {
                let [s] = await Promise.all([
                    e.t.post(n.t.processCrossDocumentDataMatch, {}, { signal: t }),
                    (0, r.t)(3e3),
                ]);
                if (!s.ok) throw Error(`POST ${n.t.processCrossDocumentDataMatch} failed: ${s.status} ${s.statusText}`);
                return s.data;
            })(t),
        ),
    },
}).createMachine({
    id: "crossDocumentDataMatch",
    initial: "idle",
    context: {},
    states: {
        idle: { on: { LOAD: { target: "processing" } } },
        processing: {
            invoke: {
                id: "processCrossDocumentDataMatch",
                src: "processCrossDocumentDataMatch",
                onDone: { target: "finished" },
                onError: { target: "finished" },
            },
        },
        finished: { type: "final" },
    },
});
function u(t) {
    return t.matches("processing")
        ? { status: "processing" }
        : t.matches("finished")
          ? { status: "finished" }
          : { status: "idle" };
}
function h({ actor: t }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
    };
}
a.d(
    s,
    {},
    {
        createCrossDocumentDataMatchManager: function () {
            return (0, o.l)({
                actor: (0, o.s)(i).start(),
                mapState: u,
                createApi: h,
                instrumentation: (0, c.s)(c.n.crossDocumentDataMatch),
            });
        },
        crossDocumentDataMatchMachine: i,
    },
);
