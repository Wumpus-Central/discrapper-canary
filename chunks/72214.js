n.d(t, { s: () => m }), n(388685), n(35282);
var l = n(73800),
    r = n(442837),
    a = n(38618),
    i = n(51596),
    s = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    h = n(41837);
function f(e) {
    let { query: t, queryMode: n } = (0, i.F_)(e),
        l = h.M,
        r = null;
    return (
        null != n && h.M.includes(n) && ((l = [n]), (r = n)),
        {
            query: t,
            queryMode: r,
            resultTypes: l,
        }
    );
}
function m(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: i, includeMissingDMs: h = !1 } = e,
        m = (0, r.e7)([o.default], () => o.default.getId()),
        g = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(["user:".concat(m)]),
                    frecencyBoosters: !0,
                    userFilters: null,
                },
            }),
            [m],
        ),
        { search: _, query: p, results: b } = (0, d.Z)(g),
        [y, v] = l.useState(f("")),
        x = l.useCallback((e) => v(f(e)), [v]),
        { queryMode: E } = y,
        C = l.useRef(null),
        S = l.useRef(n),
        O = p !== C.current ? n : S.current;
    l.useEffect(() => {
        p !== C.current && (S.current = n), (C.current = p);
    }, [p, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = y;
            _({
                query: e,
                resultTypes: t,
            });
        }, [_, y]),
        (0, s.D)();
    let P = (0, r.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        w = (0, r.e7)([a.Z], () => a.Z.isConnected()),
        Z = "" !== p;
    return {
        results: l.useMemo(
            () =>
                (0, u.ZP)({
                    results: b,
                    hasQuery: Z,
                    queryMode: E,
                    targetDestination: t,
                    frequentChannels: P,
                    selectedDestinations: n,
                    pinnedDestinations: O,
                    originDestination: i,
                    includeMissingDMs: h,
                    isConnected: w,
                }),
            [b, Z, E, t, P, n, O, i, h, w],
        ),
        updateSearchText: x,
    };
}
