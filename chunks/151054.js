"use strict";
n.d(t, { R: () => p });
var i = n(64700),
    a = n(17928),
    r = n(366853),
    s = n(793322),
    l = n(999886),
    c = n(495544),
    o = n(205761),
    d = n(223863),
    u = n(146793),
    _ = n(507696);
function m(e) {
    let { query: t, queryMode: n } = (0, s.LV)(e),
        i = _.D,
        a = null;
    return null != n && _.D.includes(n) && ((i = [n]), (a = n)), { query: t, queryMode: a, resultTypes: i };
}
function p(e) {
    let {
            targetDestination: t,
            selectedDestinations: n,
            originDestination: s,
            channelFilter: _,
            includeMissingDMs: p = !1,
        } = e,
        f = (0, a.bG)([c.default], () => c.default.getId()),
        g = i.useMemo(
            () => ({ searchOptions: { blacklist: new Set([`user:${f}`]), frecencyBoosters: !0, userFilters: null } }),
            [f],
        ),
        { search: h, query: b, results: C } = (0, u.A)(g),
        [I, T] = i.useState(m("")),
        x = i.useCallback((e) => T(m(e)), [T]),
        { queryMode: A } = I,
        E = i.useRef(null),
        S = i.useRef(n),
        v = b !== E.current ? n : S.current;
    i.useEffect(() => {
        b !== E.current && (S.current = n), (E.current = b);
    }, [b, n]),
        i.useLayoutEffect(() => {
            let { query: e, resultTypes: t } = I;
            h({ query: e, resultTypes: t });
        }, [h, I]),
        (0, l.k)();
    let N = (0, a.bG)([o.A], () => o.A.getFrequentlyWithoutFetchingLatest()),
        L = (0, a.bG)([r.A], () => r.A.isConnected()),
        y = "" !== b;
    return {
        results: i.useMemo(
            () =>
                (0, d.Ay)({
                    results: C,
                    hasQuery: y,
                    queryMode: A,
                    targetDestination: t,
                    frequentChannels: N,
                    selectedDestinations: n,
                    pinnedDestinations: v,
                    originDestination: s,
                    channelFilter: _,
                    includeMissingDMs: p,
                    isConnected: L,
                }),
            [C, y, A, t, N, n, v, s, _, p, L],
        ),
        updateSearchText: x,
    };
}
