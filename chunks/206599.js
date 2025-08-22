r.d(t, {
    J: () => d,
    K: () => u,
}),
    r(388685),
    r(472816),
    r(794429);
var n = r(647438),
    i = r(442837),
    a = r(669764),
    l = r(592183),
    o = r(224724),
    c = r(938236),
    s = r(747101);
function u(e) {
    var t, r;
    let { bump: i, bumpMultiple: l, gameIds: o } = (0, c.b)(),
        { remove: u, peekedGameIds: d } = (0, c.b)(),
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
            return null != (t = o[e]) ? t : [];
        }, [o, e]),
        p = n.useCallback(
            (t) => {
                i(t, e);
            },
            [i, e],
        ),
        { gameDataMap: m, isGameFetching: O } = (0, s.F)(b),
        [j, y] = n.useState([]),
        x = ((r = b.map((e) => O(e))), n.useMemo(() => r.join("\x1F"), [r]));
    return (
        n.useEffect(() => {
            let t = b.filter((e) => a.Z.noDataAvailable(e));
            t.length > 0 && l(t, e);
        }, [m, x, b, e, l]),
        n.useEffect(() => {
            y(
                b.map((e) => {
                    let t = m[e];
                    return {
                        applicationId: e,
                        gameName: null == t ? void 0 : t.name,
                        imageSrc: null == t ? void 0 : t.coverImageUrl,
                    };
                }),
            );
        }, [b, m, e]),
        {
            games: j,
            isGameFetching: O,
            onAddGame: p,
        }
    );
}
function d(e, t) {
    let [r, a, s, u] = (0, i.Wu)([o.Z], () => [
            o.Z.suggestedFetchAttempted,
            o.Z.suggestedFetchError,
            o.Z.suggestedGameIds,
            o.Z.suggestedFetchIsLoading,
        ]),
        { onLoad: d } = (0, c.b)();
    n.useEffect(() => {
        !r && e && l.Z.fetchSuggestedGames();
    }, [r, e]);
    let f = r && !u;
    n.useEffect(() => {
        if (!f) return;
        let e = t.map((e) => e.games).flat();
        d(a ? [] : s.suggestedGamesIds, a ? [] : s.suggestedWishlistGamesIds, e);
    }, [f]);
}
