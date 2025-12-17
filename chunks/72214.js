n.d(t, { s: () => h }), n(388685), n(35282);
var l = n(473749),
    r = n(442837),
    s = n(38618),
    a = n(51596),
    i = n(516373),
    u = n(314897),
    o = n(580005),
    c = n(987509),
    d = n(601565),
    f = n(41837);
function b(e) {
    let { query: t, queryMode: n } = (0, a.F_)(e),
        l = f.M,
        r = null;
    return (
        null != n && f.M.includes(n) && ((l = [n]), (r = n)),
        {
            query: t,
            queryMode: r,
            resultTypes: l,
        }
    );
}
function h(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: f = !1 } = e,
        h = (0, r.e7)([u.default], () => u.default.getId()),
        m = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(["user:".concat(h)]),
                    frecencyBoosters: !0,
                    userFilters: null,
                },
            }),
            [h],
        ),
        { search: p, query: g, results: x } = (0, d.Z)(m),
        [y, j] = l.useState(b("")),
        v = l.useCallback((e) => j(b(e)), [j]),
        { queryMode: S } = y,
        P = l.useRef(null),
        O = l.useRef(n),
        Z = g !== P.current ? n : O.current;
    l.useEffect(() => {
        g !== P.current && (O.current = n), (P.current = g);
    }, [g, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = y;
            p({
                query: e,
                resultTypes: t,
            });
        }, [p, y]),
        (0, i.D)();
    let E = (0, r.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
        L = (0, r.e7)([s.Z], () => s.Z.isConnected()),
        T = "" !== g;
    return {
        results: l.useMemo(
            () =>
                (0, c.ZP)({
                    results: x,
                    hasQuery: T,
                    queryMode: S,
                    targetDestination: t,
                    frequentChannels: E,
                    selectedDestinations: n,
                    pinnedDestinations: Z,
                    originDestination: a,
                    includeMissingDMs: f,
                    isConnected: L,
                }),
            [x, T, S, t, E, n, Z, a, f, L],
        ),
        updateSearchText: v,
    };
}
