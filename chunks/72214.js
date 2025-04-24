n.d(t, { s: () => p }), n(388685), n(35282);
var r = n(192379),
    l = n(442837),
    s = n(38618),
    i = n(51596),
    a = n(516373),
    o = n(314897),
    u = n(580005),
    c = n(987509),
    d = n(601565),
    f = n(41837);
function b(e) {
    let { query: t, queryMode: n } = (0, i.F_)(e),
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
    let { targetDestination: t, selectedDestinations: n, originDestination: i, includeMissingDMs: f = !1 } = e,
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
        _ = r.useRef(),
        S = r.useRef(n),
        E = y !== _.current ? n : S.current;
    r.useEffect(() => {
        y !== _.current && (S.current = n), (_.current = y);
    }, [y, n]),
        r.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = j;
            m({
                query: e,
                resultTypes: t
            });
        }, [m, j]),
        (0, a.D)();
    let P = (0, l.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        Z = (0, l.e7)([s.Z], () => s.Z.isConnected()),
        L = '' !== y;
    return {
        results: r.useMemo(
            () =>
                (0, c.ZP)({
                    results: g,
                    hasQuery: L,
                    queryMode: v,
                    targetDestination: t,
                    frequentChannels: P,
                    selectedDestinations: n,
                    pinnedDestinations: E,
                    originDestination: i,
                    includeMissingDMs: f,
                    isConnected: Z
                }),
            [g, L, v, t, P, n, E, i, f, Z]
        ),
        updateSearchText: O
    };
}
