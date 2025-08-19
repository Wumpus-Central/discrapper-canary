r.d(t, {
    J: () => d,
    K: () => u,
}),
    r(388685),
    r(472816),
    r(794429);
var n = r(647438),
    l = r(442837),
    i = r(669764),
    a = r(592183),
    o = r(224724),
    c = r(938236),
    s = r(747101);
function u(e) {
    var t, r;
    let { bump: l, bumpMultiple: a, gameIds: o } = (0, c.b)(),
        { remove: u, peekedGameIds: d } = (0, c.b)(),
        { gameDataMap: f, isGameFetching: g } = (0, s.F)(null != (t = d[e]) ? t : []);
    n.useEffect(() => {
        var t;
        for (let r of null != (t = d[e]) ? t : []) {
            let t = f[r];
            (null == t ? void 0 : t.coverImageUrl) != null || g(r) || u(r, e);
        }
    }, [d, f, g, u, e]);
    let p = n.useMemo(() => {
            var t;
            return null != (t = o[e]) ? t : [];
        }, [o, e]),
        b = n.useCallback(
            (t) => {
                l(t, e);
            },
            [l, e],
        ),
        { gameDataMap: O, isGameFetching: m } = (0, s.F)(p),
        [y, j] = n.useState([]),
        v = n.useCallback((e) => i.Z.noDataAvailable(e), []),
        x = ((r = p.map((e) => m(e))), n.useMemo(() => r.join("\x1F"), [r]));
    return (
        n.useEffect(() => {
            let t = p.filter((e) => v(e));
            t.length > 0 && a(t, e);
        }, [O, x, p, e, a, v]),
        n.useEffect(() => {
            j(
                p.map((e) => {
                    let t = O[e];
                    return {
                        applicationId: e,
                        gameName: null == t ? void 0 : t.name,
                        imageSrc: null == t ? void 0 : t.coverImageUrl,
                    };
                }),
            );
        }, [p, O, e]),
        {
            games: y,
            isGameFetching: m,
            onAddGame: b,
        }
    );
}
function d(e, t) {
    let [r, i, s, u] = (0, l.Wu)([o.Z], () => [
            o.Z.suggestedFetchAttempted,
            o.Z.suggestedFetchError,
            o.Z.suggestedGameIds,
            o.Z.suggestedFetchIsLoading,
        ]),
        { onLoad: d } = (0, c.b)();
    n.useEffect(() => {
        !r && e && a.Z.fetchSuggestedGames();
    }, [r, e]);
    let f = r && !u;
    n.useEffect(() => {
        if (!f) return;
        let e = t.map((e) => e.games).flat();
        d(i ? [] : s.suggestedGamesIds, i ? [] : s.suggestedWishlistGamesIds, e);
    }, [f]);
}
