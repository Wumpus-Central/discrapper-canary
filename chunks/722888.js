n.d(t, {
    G: () => c,
    _: () => l,
});
var r = n(64700),
    i = n(311907),
    a = n(599941),
    s = n(544199),
    o = n(697627);
function l(e, t) {
    let n = (0, i.bG)([o.A], () => o.A.getPriceTiersForGuildAndType(e, t)),
        a = (0, i.bG)([o.A], () => o.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        r.useEffect(() => {
            a === o.e.NOT_FETCHED && (0, s.F)(e, t);
        }, [e, a, t]),
        {
            loading: a === o.e.FETCHING,
            priceTiers: n,
        }
    );
}
function c(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: i } = (0, a.XE)();
    r.useEffect(() => {
        t(e);
    }, [t, e]);
    let s = (0, a.Tq)(e);
    return {
        loaded: null != s && !n,
        subscriptionsSettings: s,
        loading: n,
        error: i,
    };
}
