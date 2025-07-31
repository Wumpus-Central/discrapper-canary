(n.d(t, { s: () => p }), n(388685), n(35282));
var r = n(73800),
    l = n(442837),
    a = n(38618),
    s = n(51596),
    i = n(516373),
    u = n(314897),
    o = n(580005),
    c = n(987509),
    d = n(601565),
    f = n(41837);
function b(e) {
    let { query: t, queryMode: n } = (0, s.F_)(e),
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
    let { targetDestination: t, selectedDestinations: n, originDestination: s, includeMissingDMs: f = !1 } = e,
        p = (0, l.e7)([u.default], () => u.default.getId()),
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
        { search: m, query: g, results: y } = (0, d.Z)(h),
        [x, v] = r.useState(b('')),
        S = r.useCallback((e) => v(b(e)), [v]),
        { queryMode: E } = x,
        j = r.useRef(null),
        Z = r.useRef(n),
        O = g !== j.current ? n : Z.current;
    (r.useEffect(() => {
        (g !== j.current && (Z.current = n), (j.current = g));
    }, [g, n]),
        r.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = x;
            m({
                query: e,
                resultTypes: t
            });
        }, [m, x]),
        (0, i.D)());
    let _ = (0, l.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
        P = (0, l.e7)([a.Z], () => a.Z.isConnected()),
        C = '' !== g;
    return {
        results: r.useMemo(
            () =>
                (0, c.ZP)({
                    results: y,
                    hasQuery: C,
                    queryMode: E,
                    targetDestination: t,
                    frequentChannels: _,
                    selectedDestinations: n,
                    pinnedDestinations: O,
                    originDestination: s,
                    includeMissingDMs: f,
                    isConnected: P
                }),
            [y, C, E, t, _, n, O, s, f, P]
        ),
        updateSearchText: S
    };
}
