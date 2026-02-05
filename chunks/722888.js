n.d(t, { G: () => d, _: () => o });
var i = n(64700),
    l = n(311907),
    a = n(599941),
    r = n(544199),
    s = n(697627);
function o(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getPriceTiersForGuildAndType(e, t)),
        a = (0, l.bG)([s.A], () => s.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        i.useEffect(() => {
            a === s.e.NOT_FETCHED && (0, r.F)(e, t);
        }, [e, a, t]),
        { loading: a === s.e.FETCHING, priceTiers: n }
    );
}
function d(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: l } = (0, a.XE)();
    i.useEffect(() => {
        t(e);
    }, [t, e]);
    let r = (0, a.Tq)(e);
    return { loaded: null != r && !n, subscriptionsSettings: r, loading: n, error: l };
}
