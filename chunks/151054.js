n.d(t, { R: () => f });
var l = n(64700),
    i = n(17928),
    s = n(366853),
    a = n(793322),
    r = n(999886),
    u = n(495544),
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
function f(e) {
    let {
            targetDestination: t,
            selectedDestinations: n,
            originDestination: a,
            channelFilter: m,
            includeMissingDMs: f = !1,
        } = e,
        g = (0, i.bG)([u.default], () => u.default.getId()),
        b = l.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${g}`]), frecencyBoosters: !0, userFilters: null } }),
            [g],
        ),
        { search: x, query: p, results: A } = (0, d.A)(b),
        [_, v] = l.useState(h("")),
        S = l.useCallback((e) => v(h(e)), [v]),
        { queryMode: y } = _,
        C = l.useRef(null),
        j = l.useRef(n),
        N = p !== C.current ? n : j.current;
    l.useEffect(() => {
        p !== C.current && (j.current = n), (C.current = p);
    }, [p, n]),
        l.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = _;
            x({ query: e, resultTypes: t });
        }, [x, _]),
        (0, r.k)();
    let L = (0, i.bG)([o.A], () => o.A.getFrequentlyWithoutFetchingLatest()),
        E = (0, i.bG)([s.A], () => s.A.isConnected()),
        k = "" !== p;
    return {
        results: l.useMemo(
            () =>
                (0, c.Ay)({
                    results: A,
                    hasQuery: k,
                    queryMode: y,
                    targetDestination: t,
                    frequentChannels: L,
                    selectedDestinations: n,
                    pinnedDestinations: N,
                    originDestination: a,
                    channelFilter: m,
                    includeMissingDMs: f,
                    isConnected: E,
                }),
            [A, k, y, t, L, n, N, a, m, f, E],
        ),
        updateSearchText: S,
    };
}
