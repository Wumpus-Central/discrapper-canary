n.d(t, { s: () => b }), n(388685), n(35282);
var l = n(73800),
    r = n(442837),
    i = n(38618),
    a = n(51596),
    s = n(516373),
    o = n(314897),
    u = n(580005),
    c = n(987509),
    d = n(601565),
    f = n(41837);
function p(e) {
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
function b(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: f = !1 } = e,
        b = (0, r.e7)([o.default], () => o.default.getId()),
        h = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(["user:".concat(b)]),
                    frecencyBoosters: !0,
                    userFilters: null,
                },
            }),
            [b],
        ),
        { search: m, query: g, results: y } = (0, d.Z)(h),
        [v, x] = l.useState(p("")),
        j = l.useCallback((e) => x(p(e)), [x]),
        { queryMode: S } = v,
        C = l.useRef(null),
        _ = l.useRef(n),
        O = g !== C.current ? n : _.current;
    l.useEffect(() => {
        g !== C.current && (_.current = n), (C.current = g);
    }, [g, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = v;
            m({
                query: e,
                resultTypes: t,
            });
        }, [m, v]),
        (0, s.D)();
    let E = (0, r.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        P = (0, r.e7)([i.Z], () => i.Z.isConnected()),
        w = "" !== g;
    return {
        results: l.useMemo(
            () =>
                (0, c.ZP)({
                    results: y,
                    hasQuery: w,
                    queryMode: S,
                    targetDestination: t,
                    frequentChannels: E,
                    selectedDestinations: n,
                    pinnedDestinations: O,
                    originDestination: a,
                    includeMissingDMs: f,
                    isConnected: P,
                }),
            [y, w, S, t, E, n, O, a, f, P],
        ),
        updateSearchText: j,
    };
}
