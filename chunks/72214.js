n.d(t, { s: () => _ }), n(388685), n(35282);
var l = n(192379),
    r = n(442837),
    i = n(38618),
    a = n(51596),
    s = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    f = n(41837);
function h(e) {
    let { query: t, queryMode: n } = (0, a.F_)(e),
        l = f.M,
        r = null;
    return (
        null != n && f.M.includes(n) && ((l = [n]), (r = n)),
        {
            query: t,
            queryMode: r,
            resultTypes: l
        }
    );
}
function _(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: f = !1 } = e,
        _ = (0, r.e7)([o.default], () => o.default.getId()),
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
        { search: m, query: p, results: b } = (0, d.Z)(g),
        [E, y] = l.useState(h('')),
        I = l.useCallback((e) => y(h(e)), [y]),
        { queryMode: S } = E,
        A = l.useRef(),
        O = l.useRef(n),
        v = p !== A.current ? n : O.current;
    l.useEffect(() => {
        p !== A.current && (O.current = n), (A.current = p);
    }, [p, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = E;
            m({
                query: e,
                resultTypes: t
            });
        }, [m, E]),
        (0, s.D)();
    let x = (0, r.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        C = (0, r.e7)([i.Z], () => i.Z.isConnected()),
        P = '' !== p;
    return {
        results: l.useMemo(
            () =>
                (0, u.ZP)({
                    results: b,
                    hasQuery: P,
                    queryMode: S,
                    targetDestination: t,
                    frequentChannels: x,
                    selectedDestinations: n,
                    pinnedDestinations: v,
                    originDestination: a,
                    includeMissingDMs: f,
                    isConnected: C
                }),
            [b, P, S, t, x, n, v, a, f, C]
        ),
        updateSearchText: I
    };
}
