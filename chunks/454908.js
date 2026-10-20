n.d(t, { I: () => d, x: () => c });
var i = n(582128),
    r = n(17928),
    a = n(927813),
    s = n(920495),
    l = n(311043),
    o = n(652215);
let d = (0, r.UT)(l.A, {
    getQueryId: o.fic.GAME,
    failureStaleAfter: 15 * a.A.Seconds.SECOND,
    get: (e) => (null == e ? null : l.A.hasNoData(e) ? r.V5 : (l.A.getGame(e) ?? null)),
    load: async (e) => {
        null != e && (await (0, s.E)([e]));
    },
    getIsLoading: (e) => null != e && l.A.isFetching(e),
    getError: (e) => (null != e && l.A.didFetchingFail(e) ? Error("Failed to fetch game data") : null),
});
function c(e) {
    i.useEffect(() => {
        let t = e.map((e) => [e]);
        d.fetchMany(...t);
    }, [e]);
}
