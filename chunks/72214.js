n.d(t, { s: () => p }), n(47120), n(301563);
var r = n(192379),
    l = n(442837),
    s = n(38618),
    a = n(51596),
    i = n(516373),
    o = n(314897),
    u = n(580005),
    c = n(987509),
    d = n(601565),
    f = n(41837);
function b(e) {
    let { query: t, queryMode: n } = (0, a.F_)(e),
        r = f.M,
        l = null;
    return (
        null != n && f.M.includes(n) && ((r = [n]), (l = n)),
        {
            query: t,
            queryMode: l,
            resultTypes: r
        }
    );
}
function p(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: f = !1 } = e,
        p = (0, l.e7)([o.default], () => o.default.getId()),
        h = r.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(p)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [p]
        ),
        { search: m, query: y, results: g } = (0, d.Z)(h),
        [j, x] = r.useState(b('')),
        O = r.useCallback((e) => x(b(e)), [x]),
        { queryMode: v } = j,
        [S, _] = r.useState(null != n ? n : []),
        N = r.useRef(n);
    r.useEffect(() => {
        N.current = n;
    }),
        r.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = j;
            m({
                query: t,
                resultTypes: n
            }),
                _(null != (e = N.current) ? e : []);
        }, [m, j]),
        (0, i.D)();
    let E = (0, l.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        P = (0, l.e7)([s.Z], () => s.Z.isConnected()),
        Z = '' !== y;
    return {
        results: r.useMemo(
            () =>
                (0, c.ZP)({
                    results: g,
                    hasQuery: Z,
                    queryMode: v,
                    targetDestination: t,
                    frequentChannels: E,
                    selectedDestinations: n,
                    pinnedDestinations: S,
                    originDestination: a,
                    includeMissingDMs: f,
                    isConnected: P
                }),
            [g, Z, v, t, E, n, S, a, f, P]
        ),
        updateSearchText: O
    };
}
