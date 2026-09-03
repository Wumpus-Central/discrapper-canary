n.d(t, { x: () => f, I: () => I });
var i = n(582128),
    r = n(17928),
    a = n(927813),
    s = n(435558),
    l = n.n(s),
    o = n(636537),
    d = n(451988),
    c = n(228366),
    u = n(311043),
    _ = n(652215);
async function E(e) {
    try {
        let t = (await o.Bo.get({ url: _.Rsh.GAMES, query: { game_ids: e }, rejectWithError: !0 })).body;
        c.h.dispatch({ type: "GAME_FETCH_SUCCESS", gameIds: e, games: t });
    } catch {
        c.h.dispatch({ type: "GAME_FETCH_FAILURE", gameIds: e });
    }
}
let A = new d.OC(
    async (e) => {
        await Promise.all(l().chunk(e, 20).map(E));
    },
    {
        predicate: (e) => !u.A.hasNoData(e),
        onQueued: (e) => c.h.dispatch({ type: "GAME_FETCH", gameIds: e }),
        onCancelled: (e) => c.h.dispatch({ type: "GAME_FETCH_CANCELLED", gameIds: e }),
    },
);
async function h(e) {
    0 !== e.length && (await A.queue(e));
}
let I = (0, r.UT)(u.A, {
    getQueryId: _.fic.GAME,
    failureStaleAfter: 15 * a.A.Seconds.SECOND,
    get: (e) => (null == e ? null : u.A.hasNoData(e) ? r.V5 : (u.A.getGame(e) ?? null)),
    load: async (e) => {
        null != e && (await h([e]));
    },
    getIsLoading: (e) => null != e && u.A.isFetching(e),
    getError: (e) => (null != e && u.A.didFetchingFail(e) ? Error("Failed to fetch game data") : null),
});
function f(e) {
    i.useEffect(() => {
        let t = e.map((e) => [e]);
        I.fetchMany(...t);
    }, [e]);
}
