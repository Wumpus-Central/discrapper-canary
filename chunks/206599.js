n.d(t, {
    J: () => d,
    K: () => u,
}),
    n(388685),
    n(472816),
    n(794429);
var r = n(647438),
    i = n(442837),
    l = n(669764),
    a = n(592183),
    o = n(224724),
    s = n(938236),
    c = n(747101);
function u(e) {
    var t;
    let { bump: n, bumpMultiple: i, gameIds: a } = (0, s.b)();
    !(function (e) {
        var t, n;
        let { remove: i, peekedGameIds: a } = (0, s.b)();
        (0, c.qU)(null != (t = a[e]) ? t : []);
        let o = r.useCallback((e) => l.Z.isFetching(e), []),
            u = (0, c.kN)(null != (n = a[e]) ? n : []);
        r.useEffect(() => {
            var t;
            for (let n of null != (t = a[e]) ? t : []) {
                let t = u[n];
                (null == t ? void 0 : t.coverImageUrl) != null || o(n) || i(n, e);
            }
        }, [a, i, e, o, u]);
    })(e);
    let o = r.useMemo(() => {
            var t;
            return null != (t = a[e]) ? t : [];
        }, [a, e]),
        u = r.useCallback(
            (t) => {
                n(t, e);
            },
            [n, e],
        );
    (0, c.qU)(o);
    let d = (0, c.kN)(o),
        [p, f] = r.useState([]),
        h = ((t = o.map((e) => l.Z.isFetching(e))), r.useMemo(() => t.join("\x1F"), [t]));
    return (
        r.useEffect(() => {
            let t = o.filter((e) => l.Z.noDataAvailable(e));
            t.length > 0 && i(t, e);
        }, [h, o, e, i, d]),
        r.useEffect(() => {
            f(
                o.map((e) => {
                    let t = d[e];
                    return {
                        applicationId: e,
                        gameName: null == t ? void 0 : t.name,
                        imageSrc: null == t ? void 0 : t.coverImageUrl,
                    };
                }),
            );
        }, [o, d, e]),
        {
            games: p,
            onAddGame: u,
        }
    );
}
function d(e, t) {
    let [n, l, c, u] = (0, i.Wu)([o.Z], () => [
            o.Z.suggestedFetchAttempted,
            o.Z.suggestedFetchError,
            o.Z.suggestedGameIds,
            o.Z.suggestedFetchIsLoading,
        ]),
        { onLoad: d } = (0, s.b)();
    r.useEffect(() => {
        !n && e && a.Z.fetchSuggestedGames();
    }, [n, e]);
    let p = n && !u;
    r.useEffect(() => {
        var e, n;
        if (!p) return;
        let r = t.map((e) => e.games).flat();
        if (!l) d(null != (e = c.suggestedGamesIds) ? e : [], null != (n = c.suggestedWishlistGamesIds) ? n : [], r);
    }, [p]);
}
