n.d(t, { G: () => d, _: () => o });
var i = n(64700),
    l = n(311907),
    a = n(599941),
    s = n(544199),
    r = n(697627);
function o(e, t) {
    let n = (0, l.bG)([r.A], () => r.A.getPriceTiersForGuildAndType(e, t)),
        a = (0, l.bG)([r.A], () => r.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        i.useEffect(() => {
            a === r.e.NOT_FETCHED && (0, s.F)(e, t);
        }, [e, a, t]),
        { loading: a === r.e.FETCHING, priceTiers: n }
    );
}
function d(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: l } = (0, a.XE)();
    i.useEffect(() => {
        t(e);
    }, [t, e]);
    let s = (0, a.Tq)(e);
    return { loaded: null != s && !n, subscriptionsSettings: s, loading: n, error: l };
}
