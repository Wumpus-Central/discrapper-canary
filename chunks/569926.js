"use strict";
n.d(t, { x: () => f, I: () => m });
var i = n(64700),
    r = n(17928),
    s = n(735438),
    a = n.n(s),
    o = n(636537),
    l = n(451988),
    d = n(228366),
    _ = n(311043),
    u = n(652215);
async function c(e) {
    try {
        let t = (
            await o.Bo.get({
                url: u.Rsh.GAMES,
                query: { game_ids: e, with_supplemental_data: !0 },
                rejectWithError: !0,
            })
        ).body;
        d.h.dispatch({ type: "GAME_FETCH_SUCCESS", gameIds: e, games: t });
    } catch {
        d.h.dispatch({ type: "GAME_FETCH_FAILURE", gameIds: e });
    }
}
let E = new l.OC(
    async (e) => {
        d.h.dispatch({ type: "GAME_FETCH", gameIds: e }), await Promise.all(a().chunk(e, 20).map(c));
    },
    (e) => !_.A.hasNoData(e),
);
async function h(e) {
    0 !== e.length && (await E.queue(e));
}
let m = (0, r.UT)(_.A, {
    getQueryId: u.fic.GAME,
    get: (e) => (null == e ? null : _.A.hasNoData(e) ? r.V5 : (_.A.getGame(e) ?? null)),
    load: async (e) => {
        null != e && (await h([e]));
    },
    getIsLoading: (e) => null != e && _.A.isFetching(e),
    getError: (e) => (null != e && _.A.didFetchingFail(e) ? Error("Failed to fetch game data") : null),
});
function f(e) {
    i.useEffect(() => {
        let t = e.map((e) => [e]);
        m.fetchMany(...t);
    }, [e]);
}
