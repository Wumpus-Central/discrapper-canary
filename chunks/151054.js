u.d(t, { R: () => p });
var r = u(582128),
    s = u(17928),
    n = u(597643),
    c = u(793322),
    l = u(683973),
    i = u(280450),
    a = u(205761),
    o = u(223863),
    d = u(146793),
    f = u(507696);
function h(e) {
    let { query: t, queryMode: u } = (0, c.LV)(e),
        r = f.D,
        s = null;
    return null != u && f.D.includes(u) && ((r = [u]), (s = u)), { query: t, queryMode: s, resultTypes: r };
}
function p(e) {
    let {
            targetDestination: t,
            selectedDestinations: u,
            originDestination: c,
            channelFilter: f,
            includeMissingDMs: p = !1,
            includeFrecency: b = !0,
        } = e,
        k = (0, s.bG)([i.default], () => i.default.getId()),
        y = r.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${k}`]), frecencyBoosters: !0, userFilters: null } }),
            [k],
        ),
        { search: A, query: C, results: F } = (0, d.A)(y),
        [g, w] = r.useState(h("")),
        G = r.useCallback((e) => w(h(e)), [w]),
        { queryMode: L } = g,
        M = r.useRef(null),
        R = r.useRef(u),
        m = C !== M.current ? u : R.current;
    r.useEffect(() => {
        C !== M.current && (R.current = u), (M.current = C);
    }, [C, u]),
        r.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = g;
            A({ query: e, resultTypes: t });
        }, [A, g]),
        (0, l.k)(b);
    let q = (0, s.bG)([a.A], () => a.A.getFrequentlyWithoutFetchingLatest()),
        D = (0, s.bG)([n.A], () => n.A.isConnected()),
        E = "" !== C;
    return {
        results: r.useMemo(
            () =>
                (0, o.Ay)({
                    results: F,
                    hasQuery: E,
                    queryMode: L,
                    targetDestination: t,
                    frequentChannels: q,
                    selectedDestinations: u,
                    pinnedDestinations: m,
                    originDestination: c,
                    channelFilter: f,
                    includeMissingDMs: p,
                    isConnected: D,
                }),
            [F, E, L, t, q, u, m, c, f, p, D],
        ),
        updateSearchText: G,
    };
}
