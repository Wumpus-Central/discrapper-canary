u.d(t, { R: () => p });
var s = u(64700),
    r = u(17928),
    n = u(454219),
    c = u(793322),
    l = u(999886),
    a = u(495544),
    i = u(205761),
    o = u(223863),
    d = u(146793),
    f = u(507696);
function h(e) {
    let { query: t, queryMode: u } = (0, c.LV)(e),
        s = f.D,
        r = null;
    return null != u && f.D.includes(u) && ((s = [u]), (r = u)), { query: t, queryMode: r, resultTypes: s };
}
function p(e) {
    let {
            targetDestination: t,
            selectedDestinations: u,
            originDestination: c,
            channelFilter: f,
            includeMissingDMs: p = !1,
        } = e,
        b = (0, r.bG)([a.default], () => a.default.getId()),
        k = s.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${b}`]), frecencyBoosters: !0, userFilters: null } }),
            [b],
        ),
        { search: A, query: y, results: C } = (0, d.A)(k),
        [g, w] = s.useState(h("")),
        F = s.useCallback((e) => w(h(e)), [w]),
        { queryMode: G } = g,
        L = s.useRef(null),
        M = s.useRef(u),
        R = y !== L.current ? u : M.current;
    s.useEffect(() => {
        y !== L.current && (M.current = u), (L.current = y);
    }, [y, u]),
        s.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = g;
            A({ query: e, resultTypes: t });
        }, [A, g]),
        (0, l.k)();
    let m = (0, r.bG)([i.A], () => i.A.getFrequentlyWithoutFetchingLatest()),
        q = (0, r.bG)([n.A], () => n.A.isConnected()),
        D = "" !== y;
    return {
        results: s.useMemo(
            () =>
                (0, o.Ay)({
                    results: C,
                    hasQuery: D,
                    queryMode: G,
                    targetDestination: t,
                    frequentChannels: m,
                    selectedDestinations: u,
                    pinnedDestinations: R,
                    originDestination: c,
                    channelFilter: f,
                    includeMissingDMs: p,
                    isConnected: q,
                }),
            [C, D, G, t, m, u, R, c, f, p, q],
        ),
        updateSearchText: F,
    };
}
