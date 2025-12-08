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
    b = n(41837);
function f(e) {
    let { query: t, queryMode: n } = (0, a.F_)(e),
        l = b.M,
        r = null;
    return (
        null != n && b.M.includes(n) && ((l = [n]), (r = n)),
        {
            query: t,
            queryMode: r,
            resultTypes: l,
        }
    );
}
function h(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: b = !1 } = e,
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
        [y, j] = l.useState(f("")),
        v = l.useCallback((e) => j(f(e)), [j]),
        { queryMode: S } = y,
        P = l.useRef(null),
        O = l.useRef(n),
        _ = g !== P.current ? n : O.current;
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
    let Z = (0, r.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
        E = (0, r.e7)([s.Z], () => s.Z.isConnected()),
        L = "" !== g;
    return {
        results: l.useMemo(
            () =>
                (0, c.ZP)({
                    results: x,
                    hasQuery: L,
                    queryMode: S,
                    targetDestination: t,
                    frequentChannels: Z,
                    selectedDestinations: n,
                    pinnedDestinations: _,
                    originDestination: a,
                    includeMissingDMs: b,
                    isConnected: E,
                }),
            [x, L, S, t, Z, n, _, a, b, E],
        ),
        updateSearchText: v,
    };
}
