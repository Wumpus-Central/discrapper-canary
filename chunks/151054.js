r.d(t, { R: () => y });
var n = r(582128),
    u = r(17928),
    l = r(597643),
    i = r(793322),
    c = r(683973),
    s = r(280450),
    d = r(205761),
    o = r(446244),
    f = r(146793),
    a = r(507696);
function p(e) {
    let { query: t, queryMode: r } = (0, i.LV)(e),
        n = a.D,
        u = null;
    return (null != r && a.D.includes(r) && ((n = [r]), (u = r)), { query: t, queryMode: u, resultTypes: n });
}
function y(e) {
    let {
            targetDestination: t,
            selectedDestinations: r,
            originDestination: i,
            channelFilter: a,
            includeMissingDMs: y = !1,
            includeFrecency: A = !0,
        } = e,
        h = (0, u.bG)([s.default], () => s.default.getId()),
        D = n.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${h}`]), frecencyBoosters: !0, userFilters: null } }),
            [h],
        ),
        { search: E, query: g, results: C } = (0, f.A)(D),
        [R, U] = n.useState(p("")),
        _ = n.useCallback((e) => U(p(e)), [U]),
        { queryMode: M } = R,
        S = n.useRef(null),
        b = n.useRef(r),
        I = g !== S.current ? r : b.current;
    (n.useEffect(() => {
        (g !== S.current && (b.current = r), (S.current = g));
    }, [g, r]),
        n.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = R;
            E({ query: e, resultTypes: t });
        }, [E, R]),
        (0, c.k)(A));
    let N = (0, u.bG)([d.A], () => d.A.getFrequentlyWithoutFetchingLatest()),
        k = (0, u.bG)([l.A], () => l.A.isConnected()),
        m = "" !== g;
    return {
        results: n.useMemo(
            () =>
                (0, o.Ay)({
                    results: C,
                    hasQuery: m,
                    queryMode: M,
                    targetDestination: t,
                    frequentChannels: N,
                    selectedDestinations: r,
                    pinnedDestinations: I,
                    originDestination: i,
                    channelFilter: a,
                    includeMissingDMs: y,
                    isConnected: k,
                }),
            [C, m, M, t, N, r, I, i, a, y, k],
        ),
        updateSearchText: _,
    };
}
