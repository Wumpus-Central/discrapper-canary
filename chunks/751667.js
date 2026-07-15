e.d(t, { customWatchlistMachine: () => o, _: () => h });
var c = e(768672),
    i = e(368499),
    a = e(288052),
    r = e(168056);
async function n(s) {
    let t = await c.t.post(a.t.processWatchlist, {}, { signal: s });
    if (!t.ok) throw Error(`POST ${a.t.processWatchlist} failed: ${t.status} ${t.statusText}`);
    return t.data;
}
let o = (0, r.t)({
    types: { context: {}, events: {} },
    actors: {
        processWatchlist: (0, r.a)(async ({ signal: s }) => {
            await n(s);
        }),
    },
    actions: { markSuccess: (0, r.r)({ result: "success" }), markSkipped: (0, r.r)({ result: "skipped" }) },
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
function u(s) {
    let t = (0, i.o)(s.value);
    if (void 0 !== t)
        switch (t) {
            case "processing":
                return "watchlist.processing";
            case "success":
                return "watchlist.success";
            default:
                return;
        }
}
function p(s) {
    return s.matches("processing")
        ? { status: "processing" }
        : s.matches("success")
          ? { status: "success" }
          : s.matches("finished")
            ? { status: "finished", result: s.context.result ?? "skipped" }
            : { status: "idle" };
}
function l({ actor: s }) {
    return {
        load() {
            s.send({ type: "LOAD" });
        },
    };
}
function h() {
    return (0, r.l)({
        actor: (0, r.s)(o).start(),
        mapState: p,
        createApi: l,
        instrumentation: (0, i.s)(i.n.customWatchList, { getEventScreenName: u }),
    });
}
