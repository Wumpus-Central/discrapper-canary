n.d(t, {
    J: () => d,
    K: () => u,
}),
    n(388685),
    n(472816),
    n(794429);
var r = n(473749),
    i = n(442837),
    a = n(669764),
    l = n(592183),
    o = n(224724),
    c = n(938236),
    s = n(747101);
function u(e) {
    var t;
    let [n, l] = (0, i.Wu)([a.Z], () => [a.Z.numNoDataAvailable(), a.Z.numSupplementalGames()]),
        { bump: o, bumpMultiple: u, gameIds: d } = (0, c.b)();
    !(function (e) {
        var t, n;
        let { remove: i, peekedGameIds: l } = (0, c.b)();
        (0, s.qU)(null != (t = l[e]) ? t : []);
        let o = r.useCallback((e) => a.Z.isFetching(e), []),
            u = (0, s.kN)(null != (n = l[e]) ? n : []);
        r.useEffect(() => {
            var t;
            for (let n of null != (t = l[e]) ? t : []) {
                let t = u[n];
                (null == t ? void 0 : t.coverImageUrl) != null || o(n) || i(n, e);
            }
        }, [l, i, e, o, u]);
    })(e);
    let f = r.useMemo(() => {
            var t;
            return null != (t = d[e]) ? t : [];
        }, [d, e]),
        g = r.useCallback(
            (t) => {
                o(t, e);
            },
            [o, e],
        );
    (0, s.qU)(f);
    let p = (0, s.kN)(f),
        [m, b] = r.useState([]),
        h = ((t = f.map((e) => a.Z.isFetching(e))), r.useMemo(() => t.join("\x1F"), [t]));
    return (
        r.useEffect(() => {
            let t = f.filter((e) => a.Z.noDataAvailable(e));
            t.length > 0 && u(t, e);
        }, [h, f, e, u, p]),
        r.useEffect(() => {
            b(
                f.map((e) => {
                    let t = p[e];
                    return {
                        applicationId: e,
                        gameName: null == t ? void 0 : t.name,
                        imageSrc: null == t ? void 0 : t.coverImageUrl,
                    };
                }),
            );
        }, [f, p, e, n, l]),
        {
            games: m,
            onAddGame: g,
        }
    );
}
function d(e, t) {
    let [n, a, s, u] = (0, i.Wu)([o.Z], () => [
            o.Z.suggestedFetchAttempted,
            o.Z.suggestedFetchError,
            o.Z.suggestedGameIds,
            o.Z.suggestedFetchIsLoading,
        ]),
        { onLoad: d } = (0, c.b)();
    r.useEffect(() => {
        !n && e && l.Z.fetchSuggestedGames();
    }, [n, e]);
    let f = n && !u;
    r.useEffect(() => {
        var e, n;
        if (!f) return;
        let r = t.map((e) => e.games).flat();
        if (!a) d(null != (e = s.suggestedGamesIds) ? e : [], null != (n = s.suggestedWishlistGamesIds) ? n : [], r);
    }, [f]);
}
