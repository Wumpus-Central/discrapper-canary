var l = n(582128),
    s = n(129230),
    a = n(857512),
    i = n(365491),
    r = n(856686);
n(758836);
var o = n(652215);
let c = null,
    u = null;
function d(e) {
    return e.trim().slice(0, 256);
}
function m() {
    ((c = null), u?.(), (u = null));
}
function g() {
    if (null == c) return;
    let {
        latestRequestId: e,
        resultsRequestId: t,
        resultsSearchQuery: n,
        totalCount: l,
        searchErrorReason: a,
    } = r.S.getState();
    if (e <= c.latestRequestIdAtSubmit || t !== e) return;
    let { query: i, searchQueryId: u, sessionId: d, submittedAt: g } = c;
    (m(),
        n === i &&
            s.default.track(o.HAw.COLLECTIBLES_SHOP_SEARCH_RESULTS_LOADED, {
                collectibles_shop_session_id: d,
                search_query_id: u,
                results_count: l,
                latency_ms: Math.round(performance.now() - g),
                error_type: a?.type ?? null,
                error_code: a?.code ?? null,
            }));
}
n.d(
    t,
    {},
    {
        Ay: function () {
            let e = (0, a.uM)()?.sessionId;
            return l.useCallback(
                (t, n, l, a, m) => {
                    let E = d(t),
                        h = a && E === d(i.vs.getState().searchQuery);
                    "" === E ||
                        h ||
                        ((c = {
                            query: t,
                            searchQueryId: l,
                            sessionId: e,
                            submittedAt: performance.now(),
                            latestRequestIdAtSubmit: r.S.getState().latestRequestId,
                        }),
                        (u ??= r.S.subscribe(g)),
                        s.default.track(o.HAw.COLLECTIBLES_SHOP_SEARCH_QUERY_SUBMITTED, {
                            collectibles_shop_session_id: e,
                            search_query_id: l,
                            input_method: n,
                            suggestion_text: m?.text,
                            suggestion_position: m?.position,
                        }));
                },
                [e],
            );
        },
        X_: function () {
            l.useEffect(() => m, []);
        },
    },
);
