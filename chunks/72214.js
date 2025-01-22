n.d(t, {
    s: function () {
        return _;
    }
}),
    n(47120);
var l = n(192379),
    i = n(442837),
    a = n(38618),
    r = n(51596),
    s = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    h = n(41837);
function f(e) {
    let { query: t, queryMode: n } = (0, r.F_)(e),
        l = h.M,
        i = null;
    return (
        null != n && h.M.includes(n) && ((l = [n]), (i = n)),
        {
            query: t,
            queryMode: i,
            resultTypes: l
        }
    );
}
function _(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: r, includeMissingDMs: h = !1 } = e,
        _ = (0, i.e7)([o.default], () => o.default.getId()),
        g = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(_)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [_]
        ),
        { search: m, query: E, results: I } = (0, d.Z)(g),
        [p, S] = l.useState(f('')),
        A = l.useCallback((e) => S(f(e)), [S]),
        { queryMode: C } = p,
        [v, L] = l.useState(null != n ? n : []),
        b = l.useRef(n);
    l.useEffect(() => {
        b.current = n;
    }),
        l.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = p;
            m({
                query: t,
                resultTypes: n
            }),
                L(null !== (e = b.current) && void 0 !== e ? e : []);
        }, [m, p]),
        (0, s.D)();
    let N = (0, i.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        T = (0, i.e7)([a.Z], () => a.Z.isConnected()),
        x = '' !== E;
    return {
        results: l.useMemo(
            () =>
                (0, u.ZP)({
                    results: I,
                    hasQuery: x,
                    queryMode: C,
                    targetDestination: t,
                    frequentChannels: N,
                    selectedDestinations: n,
                    pinnedDestinations: v,
                    originDestination: r,
                    includeMissingDMs: h,
                    isConnected: T
                }),
            [I, x, C, t, N, n, v, r, h, T]
        ),
        updateSearchText: A
    };
}
