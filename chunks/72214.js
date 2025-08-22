n.d(t, { s: () => m }), n(388685), n(35282);
var l = n(647438),
    r = n(442837),
    a = n(38618),
    s = n(51596),
    i = n(516373),
    o = n(314897),
    u = n(580005),
    c = n(987509),
    d = n(601565),
    h = n(41837);
function f(e) {
    let { query: t, queryMode: n } = (0, s.F_)(e),
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
    let { targetDestination: t, selectedDestinations: n, originDestination: s, includeMissingDMs: h = !1 } = e,
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
        { search: p, query: b, results: _ } = (0, d.Z)(g),
        [v, x] = l.useState(f("")),
        y = l.useCallback((e) => x(f(e)), [x]),
        { queryMode: w } = v,
        j = l.useRef(null),
        O = l.useRef(n),
        P = b !== j.current ? n : O.current;
    l.useEffect(() => {
        b !== j.current && (O.current = n), (j.current = b);
    }, [b, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = v;
            p({
                query: e,
                resultTypes: t,
            });
        }, [p, v]),
        (0, i.D)();
    let S = (0, r.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        E = (0, r.e7)([a.Z], () => a.Z.isConnected()),
        C = "" !== b;
    return {
        results: l.useMemo(
            () =>
                (0, c.ZP)({
                    results: _,
                    hasQuery: C,
                    queryMode: w,
                    targetDestination: t,
                    frequentChannels: S,
                    selectedDestinations: n,
                    pinnedDestinations: P,
                    originDestination: s,
                    includeMissingDMs: h,
                    isConnected: E,
                }),
            [_, C, w, t, S, n, P, s, h, E],
        ),
        updateSearchText: y,
    };
}
