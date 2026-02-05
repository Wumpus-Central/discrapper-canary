n.d(t, { R: () => b });
var l = n(64700),
    i = n(311907),
    s = n(142120),
    a = n(793322),
    r = n(999886),
    u = n(961350),
    o = n(205761),
    c = n(223863),
    d = n(146793),
    m = n(507696);
function h(e) {
    let { query: t, queryMode: n } = (0, a.LV)(e),
        l = m.D,
        i = null;
    return null != n && m.D.includes(n) && ((l = [n]), (i = n)), { query: t, queryMode: i, resultTypes: l };
}
function b(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: a, includeMissingDMs: m = !1 } = e,
        b = (0, i.bG)([u.default], () => u.default.getId()),
        f = l.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${b}`]), frecencyBoosters: !0, userFilters: null } }),
            [b],
        ),
        { search: x, query: g, results: p } = (0, d.A)(f),
        [A, _] = l.useState(h("")),
        v = l.useCallback((e) => _(h(e)), [_]),
        { queryMode: y } = A,
        S = l.useRef(null),
        C = l.useRef(n),
        j = g !== S.current ? n : C.current;
    l.useEffect(() => {
        g !== S.current && (C.current = n), (S.current = g);
    }, [g, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = A;
            x({ query: e, resultTypes: t });
        }, [x, A]),
        (0, r.k)();
    let N = (0, i.bG)([o.A], () => o.A.getFrequentlyWithoutFetchingLatest()),
        T = (0, i.bG)([s.A], () => s.A.isConnected()),
        L = "" !== g;
    return {
        results: l.useMemo(
            () =>
                (0, c.Ay)({
                    results: p,
                    hasQuery: L,
                    queryMode: y,
                    targetDestination: t,
                    frequentChannels: N,
                    selectedDestinations: n,
                    pinnedDestinations: j,
                    originDestination: a,
                    includeMissingDMs: m,
                    isConnected: T,
                }),
            [p, L, y, t, N, n, j, a, m, T],
        ),
        updateSearchText: v,
    };
}
