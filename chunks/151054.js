n.d(t, { R: () => p }), n(896048), n(747238);
var r = n(64700),
    l = n(311907),
    a = n(142120),
    s = n(793322),
    i = n(999886),
    u = n(961350),
    c = n(205761),
    o = n(223863),
    d = n(146793),
    f = n(507696);
function b(e) {
    let { query: t, queryMode: n } = (0, s.LV)(e),
        r = f.D,
        l = null;
    return (
        null != n && f.D.includes(n) && ((r = [n]), (l = n)),
        {
            query: t,
            queryMode: l,
            resultTypes: r,
        }
    );
}
function p(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: s, includeMissingDMs: f = !1 } = e,
        p = (0, l.bG)([u.default], () => u.default.getId()),
        m = r.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(["user:".concat(p)]),
                    frecencyBoosters: !0,
                    userFilters: null,
                },
            }),
            [p],
        ),
        { search: g, query: h, results: y } = (0, d.A)(m),
        [x, j] = r.useState(b("")),
        A = r.useCallback((e) => j(b(e)), [j]),
        { queryMode: v } = x,
        O = r.useRef(null),
        S = r.useRef(n),
        P = h !== O.current ? n : S.current;
    r.useEffect(() => {
        h !== O.current && (S.current = n), (O.current = h);
    }, [h, n]),
        r.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = x;
            g({
                query: e,
                resultTypes: t,
            });
        }, [g, x]),
        (0, i.k)();
    let T = (0, l.bG)([c.A], () => c.A.getFrequentlyWithoutFetchingLatest()),
        E = (0, l.bG)([a.A], () => a.A.isConnected()),
        w = "" !== h;
    return {
        results: r.useMemo(
            () =>
                (0, o.Ay)({
                    results: y,
                    hasQuery: w,
                    queryMode: v,
                    targetDestination: t,
                    frequentChannels: T,
                    selectedDestinations: n,
                    pinnedDestinations: P,
                    originDestination: s,
                    includeMissingDMs: f,
                    isConnected: E,
                }),
            [y, w, v, t, T, n, P, s, f, E],
        ),
        updateSearchText: A,
    };
}
