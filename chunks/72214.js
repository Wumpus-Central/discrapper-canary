n.d(t, { s: () => h }), n(388685), n(35282);
var r = n(192379),
    l = n(442837),
    a = n(38618),
    s = n(51596),
    i = n(516373),
    o = n(314897),
    u = n(580005),
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
function h(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: s, includeMissingDMs: f = !1 } = e,
        h = (0, l.e7)([o.default], () => o.default.getId()),
        m = r.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(h)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [h]
        ),
        { search: p, query: g, results: y } = (0, d.Z)(m),
        [v, j] = r.useState(b('')),
        x = r.useCallback((e) => j(b(e)), [j]),
        { queryMode: O } = v,
        [_, N] = r.useState(null != n ? n : []),
        S = r.useRef(n);
    r.useEffect(() => {
        S.current = n;
    }),
        r.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = v;
            p({
                query: t,
                resultTypes: n
            }),
                N(null != (e = S.current) ? e : []);
        }, [p, v]),
        (0, i.D)();
    let P = (0, l.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        w = (0, l.e7)([a.Z], () => a.Z.isConnected()),
        E = '' !== g;
    return {
        results: r.useMemo(
            () =>
                (0, c.ZP)({
                    results: y,
                    hasQuery: E,
                    queryMode: O,
                    targetDestination: t,
                    frequentChannels: P,
                    selectedDestinations: n,
                    pinnedDestinations: _,
                    originDestination: s,
                    includeMissingDMs: f,
                    isConnected: w
                }),
            [y, E, O, t, P, n, _, s, f, w]
        ),
        updateSearchText: x
    };
}
