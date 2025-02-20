n.d(t, { s: () => h }), n(47120), n(301563);
var a = n(192379),
    r = n(442837),
    l = n(38618),
    i = n(51596),
    s = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    m = n(41837);
function p(e) {
    let { query: t, queryMode: n } = (0, i.F_)(e),
        a = m.M,
        r = null;
    return (
        null != n && m.M.includes(n) && ((a = [n]), (r = n)),
        {
            query: t,
            queryMode: r,
            resultTypes: a
        }
    );
}
function h(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: i, includeMissingDMs: m = !1 } = e,
        h = (0, r.e7)([o.default], () => o.default.getId()),
        g = a.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(h)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [h]
        ),
        { search: _, query: f, results: b } = (0, d.Z)(g),
        [y, E] = a.useState(p('')),
        I = a.useCallback((e) => E(p(e)), [E]),
        { queryMode: v } = y,
        [S, C] = a.useState(null != n ? n : []),
        O = a.useRef(n);
    a.useEffect(() => {
        O.current = n;
    }),
        a.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = y;
            _({
                query: t,
                resultTypes: n
            }),
                C(null !== (e = O.current) && void 0 !== e ? e : []);
        }, [_, y]),
        (0, s.D)();
    let x = (0, r.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        A = (0, r.e7)([l.Z], () => l.Z.isConnected()),
        N = '' !== f;
    return {
        results: a.useMemo(
            () =>
                (0, u.ZP)({
                    results: b,
                    hasQuery: N,
                    queryMode: v,
                    targetDestination: t,
                    frequentChannels: x,
                    selectedDestinations: n,
                    pinnedDestinations: S,
                    originDestination: i,
                    includeMissingDMs: m,
                    isConnected: A
                }),
            [b, N, v, t, x, n, S, i, m, A]
        ),
        updateSearchText: I
    };
}
