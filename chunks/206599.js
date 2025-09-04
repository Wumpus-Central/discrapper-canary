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
    a = n(774073),
    o = n(592183),
    s = n(224724),
    c = n(938236),
    u = n(747101);
function d(e) {
    var t;
    let { bump: n, bumpMultiple: i, gameIds: a } = (0, c.b)();
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
    let o = r.useMemo(() => {
            var t;
            return null != (t = a[e]) ? t : [];
        }, [a, e]),
        s = r.useCallback(
            (t) => {
                n(t, e);
            },
            [n, e],
        );
    (0, u.qU)(o);
    let d = (0, u.kN)(o),
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
            onAddGame: s,
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
        let r = t.map((e) => e.games).flat();
        p(
            l ? [] : (null != (e = u.suggestedGamesIds) ? e : []).filter(a.z6),
            l ? [] : (null != (n = u.suggestedWishlistGamesIds) ? n : []).filter(a.z6),
            r,
        );
    }, [f]);
}
