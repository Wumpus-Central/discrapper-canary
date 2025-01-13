n.d(t, {
    s: function () {
        return m;
    }
}),
    n(47120);
var l = n(192379),
    r = n(442837),
    s = n(38618),
    i = n(51596),
    a = n(516373),
    u = n(314897),
    o = n(580005),
    c = n(987509),
    d = n(601565),
    f = n(41837);
function h(e) {
    let { query: t, queryMode: n } = (0, i.F_)(e),
        l = f.M,
        r = null;
    return (
        null != n && f.M.includes(n) && ((l = [n]), (r = n)),
        {
            query: t,
            queryMode: r,
            resultTypes: l
        }
    );
}
function m(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: i, includeMissingDMs: f = !1 } = e,
        m = (0, r.e7)([u.default], () => u.default.getId()),
        b = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(m)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [m]
        ),
        { search: p, query: x, results: g } = (0, d.Z)(b),
        [y, S] = l.useState(h('')),
        C = l.useCallback((e) => S(h(e)), [S]),
        { queryMode: v } = y,
        [E, Z] = l.useState(null != n ? n : []),
        N = l.useRef(n);
    l.useEffect(() => {
        N.current = n;
    }),
        l.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = y;
            p({
                query: t,
                resultTypes: n
            }),
                Z(null !== (e = N.current) && void 0 !== e ? e : []);
        }, [p, y]),
        (0, a.D)();
    let L = (0, r.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
        _ = (0, r.e7)([s.Z], () => s.Z.isConnected()),
        j = '' !== x;
    return {
        results: l.useMemo(
            () =>
                (0, c.ZP)({
                    results: g,
                    hasQuery: j,
                    queryMode: v,
                    targetDestination: t,
                    frequentChannels: L,
                    selectedDestinations: n,
                    pinnedDestinations: E,
                    originDestination: i,
                    includeMissingDMs: f,
                    isConnected: _
                }),
            [g, j, v, t, L, n, E, i, f, _]
        ),
        updateSearchText: C
    };
}
