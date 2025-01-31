n.d(t, { s: () => f }), n(47120);
var l = n(192379),
    i = n(442837),
    a = n(38618),
    s = n(51596),
    r = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    _ = n(41837);
function h(e) {
    let { query: t, queryMode: n } = (0, s.F_)(e),
        l = _.M,
        i = null;
    return (
        null != n && _.M.includes(n) && ((l = [n]), (i = n)),
        {
            query: t,
            queryMode: i,
            resultTypes: l
        }
    );
}
function f(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: s, includeMissingDMs: _ = !1 } = e,
        f = (0, i.e7)([o.default], () => o.default.getId()),
        g = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(f)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [f]
        ),
        { search: m, query: E, results: p } = (0, d.Z)(g),
        [I, A] = l.useState(h('')),
        S = l.useCallback((e) => A(h(e)), [A]),
        { queryMode: C } = I,
        [x, b] = l.useState(null != n ? n : []),
        L = l.useRef(n);
    l.useEffect(() => {
        L.current = n;
    }),
        l.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = I;
            m({
                query: t,
                resultTypes: n
            }),
                b(null !== (e = L.current) && void 0 !== e ? e : []);
        }, [m, I]),
        (0, r.D)();
    let v = (0, i.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        N = (0, i.e7)([a.Z], () => a.Z.isConnected()),
        T = '' !== E;
    return {
        results: l.useMemo(
            () =>
                (0, u.ZP)({
                    results: p,
                    hasQuery: T,
                    queryMode: C,
                    targetDestination: t,
                    frequentChannels: v,
                    selectedDestinations: n,
                    pinnedDestinations: x,
                    originDestination: s,
                    includeMissingDMs: _,
                    isConnected: N
                }),
            [p, T, C, t, v, n, x, s, _, N]
        ),
        updateSearchText: S
    };
}
