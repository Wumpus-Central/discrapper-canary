n.d(t, { s: () => h }), n(388685), n(35282);
var r = n(73800),
    l = n(442837),
    i = n(38618),
    a = n(51596),
    s = n(516373),
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
function h(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: f = !1 } = e,
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
        [v, x] = r.useState(b('')),
        j = r.useCallback((e) => x(b(e)), [x]),
        { queryMode: O } = v,
        _ = r.useRef(null),
        S = r.useRef(n),
        P = g !== _.current ? n : S.current;
    r.useEffect(() => {
        g !== _.current && (S.current = n), (_.current = g);
    }, [g, n]),
        r.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = v;
            p({
                query: e,
                resultTypes: t
            });
        }, [p, v]),
        (0, s.D)();
    let w = (0, l.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        C = (0, l.e7)([i.Z], () => i.Z.isConnected()),
        E = '' !== g;
    return {
        results: r.useMemo(
            () =>
                (0, c.ZP)({
                    results: y,
                    hasQuery: E,
                    queryMode: O,
                    targetDestination: t,
                    frequentChannels: w,
                    selectedDestinations: n,
                    pinnedDestinations: P,
                    originDestination: a,
                    includeMissingDMs: f,
                    isConnected: C
                }),
            [y, E, O, t, w, n, P, a, f, C]
        ),
        updateSearchText: j
    };
}
