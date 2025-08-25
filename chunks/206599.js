r.d(t, {
    J: () => f,
    K: () => d,
}),
    r(388685),
    r(472816),
    r(794429);
var n = r(647438),
    i = r(442837),
    a = r(669764),
    l = r(774073),
    o = r(592183),
    c = r(224724),
    s = r(938236),
    u = r(747101);
function d(e) {
    var t, r;
    let { bump: i, bumpMultiple: l, gameIds: o } = (0, s.b)(),
        { remove: c, peekedGameIds: d } = (0, s.b)(),
        { gameDataMap: f, isGameFetching: g } = (0, u.F)(null != (t = d[e]) ? t : []);
    n.useEffect(() => {
        var t;
        for (let r of null != (t = d[e]) ? t : []) {
            let t = f[r];
            (null == t ? void 0 : t.coverImageUrl) != null || g(r) || c(r, e);
        }
    }, [d, f, g, c, e]);
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
        { gameDataMap: m, isGameFetching: O } = (0, u.F)(b),
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
function f(e, t) {
    let [r, a, u, d] = (0, i.Wu)([c.Z], () => [
            c.Z.suggestedFetchAttempted,
            c.Z.suggestedFetchError,
            c.Z.suggestedGameIds,
            c.Z.suggestedFetchIsLoading,
        ]),
        { onLoad: f } = (0, s.b)();
    n.useEffect(() => {
        !r && e && o.Z.fetchSuggestedGames();
    }, [r, e]);
    let g = r && !d;
    n.useEffect(() => {
        var e, r;
        if (!g) return;
        let n = t.map((e) => e.games).flat();
        f(
            a ? [] : (null != (e = u.suggestedGamesIds) ? e : []).filter(l.z6),
            a ? [] : (null != (r = u.suggestedWishlistGamesIds) ? r : []).filter(l.z6),
            n,
        );
    }, [g]);
}
