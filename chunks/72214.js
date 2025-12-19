n.d(t, { s: () => m }), n(388685), n(35282);
var l = n(473749),
    r = n(442837),
    i = n(38618),
    a = n(51596),
    s = n(516373),
    o = n(314897),
    u = n(580005),
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
function m(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: b = !1 } = e,
        m = (0, r.e7)([o.default], () => o.default.getId()),
        p = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(["user:".concat(m)]),
                    frecencyBoosters: !0,
                    userFilters: null,
                },
            }),
            [m],
        ),
        { search: h, query: g, results: v } = (0, d.Z)(p),
        [x, y] = l.useState(f("")),
        j = l.useCallback((e) => y(f(e)), [y]),
        { queryMode: S } = x,
        O = l.useRef(null),
        P = l.useRef(n),
        w = g !== O.current ? n : P.current;
    l.useEffect(() => {
        g !== O.current && (P.current = n), (O.current = g);
    }, [g, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = x;
            h({
                query: e,
                resultTypes: t,
            });
        }, [h, x]),
        (0, s.D)();
    let C = (0, r.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        Z = (0, r.e7)([i.Z], () => i.Z.isConnected()),
        L = "" !== g;
    return {
        results: l.useMemo(
            () =>
                (0, c.ZP)({
                    results: v,
                    hasQuery: L,
                    queryMode: S,
                    targetDestination: t,
                    frequentChannels: C,
                    selectedDestinations: n,
                    pinnedDestinations: w,
                    originDestination: a,
                    includeMissingDMs: b,
                    isConnected: Z,
                }),
            [v, L, S, t, C, n, w, a, b, Z],
        ),
        updateSearchText: j,
    };
}
