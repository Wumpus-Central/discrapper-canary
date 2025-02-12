l.d(t, { s: () => m }), l(47120);
var n = l(192379),
    s = l(442837),
    r = l(38618),
    a = l(51596),
    i = l(516373),
    u = l(314897),
    o = l(580005),
    c = l(987509),
    d = l(601565),
    h = l(41837);
function f(e) {
    let { query: t, queryMode: l } = (0, a.F_)(e),
        n = h.M,
        s = null;
    return (
        null != l && h.M.includes(l) && ((n = [l]), (s = l)),
        {
            query: t,
            queryMode: s,
            resultTypes: n
        }
    );
}
function m(e) {
    let { targetDestination: t, selectedDestinations: l, originDestination: a, includeMissingDMs: h = !1 } = e,
        m = (0, s.e7)([u.default], () => u.default.getId()),
        p = n.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(m)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [m]
        ),
        { search: x, query: g, results: b } = (0, d.Z)(p),
        [_, y] = n.useState(f('')),
        E = n.useCallback((e) => y(f(e)), [y]),
        { queryMode: S } = _,
        [Z, N] = n.useState(null != l ? l : []),
        j = n.useRef(l);
    n.useEffect(() => {
        j.current = l;
    }),
        n.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: l } = _;
            x({
                query: t,
                resultTypes: l
            }),
                N(null !== (e = j.current) && void 0 !== e ? e : []);
        }, [x, _]),
        (0, i.D)();
    let v = (0, s.e7)([o.Z], () => o.Z.getFrequentlyWithoutFetchingLatest()),
        C = (0, s.e7)([r.Z], () => r.Z.isConnected()),
        L = '' !== g;
    return {
        results: n.useMemo(
            () =>
                (0, c.ZP)({
                    results: b,
                    hasQuery: L,
                    queryMode: S,
                    targetDestination: t,
                    frequentChannels: v,
                    selectedDestinations: l,
                    pinnedDestinations: Z,
                    originDestination: a,
                    includeMissingDMs: h,
                    isConnected: C
                }),
            [b, L, S, t, v, l, Z, a, h, C]
        ),
        updateSearchText: E
    };
}
