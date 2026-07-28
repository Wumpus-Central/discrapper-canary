n.d(t, { G: () => c, _: () => o });
var i = n(582128),
    l = n(17928),
    s = n(599941),
    a = n(916603),
    r = n(697627);
function o(e, t) {
    let n = (0, l.bG)([r.A], () => r.A.getPriceTiersForGuildAndType(e, t)),
        s = (0, l.bG)([r.A], () => r.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        i.useEffect(() => {
            s === r.e.NOT_FETCHED && (0, a.F)(e, t);
        }, [e, s, t]),
        { loading: s === r.e.FETCHING, priceTiers: n }
    );
}
function c(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: l } = (0, s.XE)();
    i.useEffect(() => {
        t(e);
    }, [t, e]);
    let a = (0, s.Tq)(e);
    return { loaded: null != a && !n, subscriptionsSettings: a, loading: n, error: l };
}
