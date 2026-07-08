e.d(t, { _: () => u, customWatchlistMachine: () => n }), e(209688);
var c = e(588233);
e(171251);
var i = e(64755),
    a = e(279648);
let n = (0, i.t)({
    types: { context: {}, events: {} },
    actors: {
        processWatchlist: (0, i.a)(async ({ signal: s }) => {
            await (0, a.t)(s);
        }),
    },
    actions: { markSuccess: (0, i.r)({ result: "success" }), markSkipped: (0, i.r)({ result: "skipped" }) },
}).createMachine({
    id: "customWatchlist",
    initial: "idle",
    context: { result: null },
    states: {
        idle: { on: { LOAD: { target: "processing" } } },
        processing: {
            invoke: {
                id: "processWatchlist",
                src: "processWatchlist",
                onDone: { target: "success" },
                onError: { target: "finished", actions: "markSkipped" },
            },
        },
        success: { after: { 3e3: { target: "finished", actions: "markSuccess" } } },
        finished: { type: "final" },
    },
});
function r(s) {
    return s.matches("processing")
        ? { status: "processing" }
        : s.matches("success")
          ? { status: "success" }
          : s.matches("finished")
            ? { status: "finished", result: s.context.result ?? "skipped" }
            : { status: "idle" };
}
function o({ actor: s }) {
    return {
        load() {
            s.send({ type: "LOAD" });
        },
    };
}
function u() {
    return (0, i.c)({
        actor: (0, i.s)(n).start(),
        mapState: r,
        createApi: o,
        instrumentation: (0, c.o)(c.n.customWatchList),
    });
}
