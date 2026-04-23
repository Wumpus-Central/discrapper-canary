l.d(t, { R: () => f });
var n = l(64700),
    s = l(311907),
    r = l(142120),
    a = l(793322),
    i = l(999886),
    u = l(961350),
    c = l(205761),
    o = l(223863),
    d = l(146793),
    h = l(507696);
function m(e) {
    let { query: t, queryMode: l } = (0, a.LV)(e),
        n = h.D,
        s = null;
    return null != l && h.D.includes(l) && ((n = [l]), (s = l)), { query: t, queryMode: s, resultTypes: n };
}
function f(e) {
    let {
            targetDestination: t,
            selectedDestinations: l,
            originDestination: a,
            channelFilter: h,
            includeMissingDMs: f = !1,
        } = e,
        g = (0, s.bG)([u.default], () => u.default.getId()),
        b = n.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${g}`]), frecencyBoosters: !0, userFilters: null } }),
            [g],
        ),
        { search: x, query: A, results: _ } = (0, d.A)(b),
        [p, S] = n.useState(m("")),
        C = n.useCallback((e) => S(m(e)), [S]),
        { queryMode: j } = p,
        E = n.useRef(null),
        L = n.useRef(l),
        y = A !== E.current ? l : L.current;
    n.useEffect(() => {
        A !== E.current && (L.current = l), (E.current = A);
    }, [A, l]),
        n.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = p;
            x({ query: e, resultTypes: t });
        }, [x, p]),
        (0, i.k)();
    let N = (0, s.bG)([c.A], () => c.A.getFrequentlyWithoutFetchingLatest()),
        v = (0, s.bG)([r.A], () => r.A.isConnected()),
        k = "" !== A;
    return {
        results: n.useMemo(
            () =>
                (0, o.Ay)({
                    results: _,
                    hasQuery: k,
                    queryMode: j,
                    targetDestination: t,
                    frequentChannels: N,
                    selectedDestinations: l,
                    pinnedDestinations: y,
                    originDestination: a,
                    channelFilter: h,
                    includeMissingDMs: f,
                    isConnected: v,
                }),
            [_, k, j, t, N, l, y, a, h, f, v],
        ),
        updateSearchText: C,
    };
}
