n.d(t, {
    J: () => p,
    K: () => d,
}),
    n(388685),
    n(472816),
    n(794429);
var r = n(647438),
    i = n(442837),
    l = n(669764),
    a = n(836197),
    o = n(592183),
    s = n(224724),
    c = n(938236),
    u = n(747101);
function d(e) {
    var t;
    let [n, a] = (0, i.Wu)([l.Z], () => [l.Z.numNoDataAvailable(), l.Z.numSupplementalGames()]),
        { bump: o, bumpMultiple: s, gameIds: d } = (0, c.b)();
    !(function (e) {
        var t, n;
        let { remove: i, peekedGameIds: a } = (0, c.b)();
        (0, u.qU)(null != (t = a[e]) ? t : []);
        let o = r.useCallback((e) => l.Z.isFetching(e), []),
            s = (0, u.kN)(null != (n = a[e]) ? n : []);
        r.useEffect(() => {
            var t;
            for (let n of null != (t = a[e]) ? t : []) {
                let t = s[n];
                (null == t ? void 0 : t.coverImageUrl) != null || o(n) || i(n, e);
            }
        }, [a, i, e, o, s]);
    })(e);
    let p = r.useMemo(() => {
            var t;
            return null != (t = d[e]) ? t : [];
        }, [d, e]),
        f = r.useCallback(
            (t) => {
                o(t, e);
            },
            [o, e],
        );
    (0, u.qU)(p);
    let h = (0, u.kN)(p),
        [g, m] = r.useState([]),
        b = ((t = p.map((e) => l.Z.isFetching(e))), r.useMemo(() => t.join("\x1F"), [t]));
    return (
        r.useEffect(() => {
            let t = p.filter((e) => l.Z.noDataAvailable(e));
            t.length > 0 && s(t, e);
        }, [b, p, e, s, h]),
        r.useEffect(() => {
            m(
                p.map((e) => {
                    let t = h[e];
                    return {
                        applicationId: e,
                        gameName: null == t ? void 0 : t.name,
                        imageSrc: null == t ? void 0 : t.coverImageUrl,
                    };
                }),
            );
        }, [p, h, e, n, a]),
        {
            games: g,
            onAddGame: f,
        }
    );
}
function p(e, t) {
    let [n, l, u, d] = (0, i.Wu)([s.Z], () => [
            s.Z.suggestedFetchAttempted,
            s.Z.suggestedFetchError,
            s.Z.suggestedGameIds,
            s.Z.suggestedFetchIsLoading,
        ]),
        { onLoad: p } = (0, c.b)();
    r.useEffect(() => {
        !n && e && o.Z.fetchSuggestedGames();
    }, [n, e]);
    let f = n && !d;
    r.useEffect(() => {
        var e, n;
        if (!f) return;
        let r = t
            .filter(a.W)
            .map((e) => e.games)
            .flat();
        if (!l) p(null != (e = u.suggestedGamesIds) ? e : [], null != (n = u.suggestedWishlistGamesIds) ? n : [], r);
    }, [f]);
}
