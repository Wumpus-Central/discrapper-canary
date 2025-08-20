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
    c = r(224724),
    o = r(938236),
    s = r(747101);
function u(e) {
    var t, r;
    let { bump: l, bumpMultiple: a, gameIds: c } = (0, o.b)(),
        { remove: u, peekedGameIds: d } = (0, o.b)(),
        { gameDataMap: f, isGameFetching: g } = (0, s.F)(null != (t = d[e]) ? t : []);
    n.useEffect(() => {
        var t;
        for (let r of null != (t = d[e]) ? t : []) {
            let t = f[r];
            (null == t ? void 0 : t.coverImageUrl) != null || g(r) || u(r, e);
        }
    }, [d, f, g, u, e]);
    let b = n.useMemo(() => {
            var t;
            return null != (t = c[e]) ? t : [];
        }, [c, e]),
        p = n.useCallback(
            (t) => {
                l(t, e);
            },
            [l, e],
        ),
        { gameDataMap: O, isGameFetching: m } = (0, s.F)(b),
        [j, y] = n.useState([]),
        v = n.useCallback((e) => i.Z.noDataAvailable(e), []),
        x = ((r = b.map((e) => m(e))), n.useMemo(() => r.join("\x1F"), [r]));
    return (
        n.useEffect(() => {
            let t = b.filter((e) => v(e));
            t.length > 0 && a(t, e);
        }, [O, x, b, e, a, v]),
        n.useEffect(() => {
            y(
                b.map((e) => {
                    let t = O[e];
                    return {
                        applicationId: e,
                        gameName: null == t ? void 0 : t.name,
                        imageSrc: null == t ? void 0 : t.coverImageUrl,
                    };
                }),
            );
        }, [b, O, e]),
        {
            games: j,
            isGameFetching: m,
            onAddGame: p,
        }
    );
}
function d(e, t) {
    let [r, i, s, u] = (0, l.Wu)([c.Z], () => [
            c.Z.suggestedFetchAttempted,
            c.Z.suggestedFetchError,
            c.Z.suggestedGameIds,
            c.Z.suggestedFetchIsLoading,
        ]),
        { onLoad: d } = (0, o.b)();
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
