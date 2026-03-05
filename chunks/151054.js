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
    let {
            targetDestination: t,
            selectedDestinations: n,
            originDestination: a,
            channelFilter: m,
            includeMissingDMs: b = !1,
        } = e,
        f = (0, i.bG)([u.default], () => u.default.getId()),
        x = l.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${f}`]), frecencyBoosters: !0, userFilters: null } }),
            [f],
        ),
        { search: g, query: p, results: A } = (0, d.A)(x),
        [_, v] = l.useState(h("")),
        y = l.useCallback((e) => v(h(e)), [v]),
        { queryMode: S } = _,
        C = l.useRef(null),
        j = l.useRef(n),
        N = p !== C.current ? n : j.current;
    l.useEffect(() => {
        p !== C.current && (j.current = n), (C.current = p);
    }, [p, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = _;
            g({ query: e, resultTypes: t });
        }, [g, _]),
        (0, r.k)();
    let T = (0, i.bG)([o.A], () => o.A.getFrequentlyWithoutFetchingLatest()),
        L = (0, i.bG)([s.A], () => s.A.isConnected()),
        D = "" !== p;
    return {
        results: l.useMemo(
            () =>
                (0, c.Ay)({
                    results: A,
                    hasQuery: D,
                    queryMode: S,
                    targetDestination: t,
                    frequentChannels: T,
                    selectedDestinations: n,
                    pinnedDestinations: N,
                    originDestination: a,
                    channelFilter: m,
                    includeMissingDMs: b,
                    isConnected: L,
                }),
            [A, D, S, t, T, n, N, a, m, b, L],
        ),
        updateSearchText: y,
    };
}
