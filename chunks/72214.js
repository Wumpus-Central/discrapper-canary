n.d(t, { s: () => h }), n(47120);
var a = n(192379),
    l = n(442837),
    i = n(38618),
    s = n(51596),
    r = n(516373),
    o = n(314897),
    c = n(580005),
    d = n(987509),
    u = n(601565),
    m = n(41837);
function _(e) {
    let { query: t, queryMode: n } = (0, s.F_)(e),
        a = m.M,
        l = null;
    return (
        null != n && m.M.includes(n) && ((a = [n]), (l = n)),
        {
            query: t,
            queryMode: l,
            resultTypes: a
        }
    );
}
function h(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: s, includeMissingDMs: m = !1 } = e,
        h = (0, l.e7)([o.default], () => o.default.getId()),
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
        { search: p, query: f, results: E } = (0, u.Z)(g),
        [I, C] = a.useState(_('')),
        x = a.useCallback((e) => C(_(e)), [C]),
        { queryMode: A } = I,
        [S, T] = a.useState(null != n ? n : []),
        v = a.useRef(n);
    a.useEffect(() => {
        v.current = n;
    }),
        a.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = I;
            p({
                query: t,
                resultTypes: n
            }),
                T(null !== (e = v.current) && void 0 !== e ? e : []);
        }, [p, I]),
        (0, r.D)();
    let b = (0, l.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        L = (0, l.e7)([i.Z], () => i.Z.isConnected()),
        y = '' !== f;
    return {
        results: a.useMemo(
            () =>
                (0, d.ZP)({
                    results: E,
                    hasQuery: y,
                    queryMode: A,
                    targetDestination: t,
                    frequentChannels: b,
                    selectedDestinations: n,
                    pinnedDestinations: S,
                    originDestination: s,
                    includeMissingDMs: m,
                    isConnected: L
                }),
            [E, y, A, t, b, n, S, s, m, L]
        ),
        updateSearchText: x
    };
}
