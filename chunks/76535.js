n.d(t, {
    H: () => c,
    R: () => s
});
var r = n(73800),
    i = n(442837),
    l = n(584825),
    a = n(17079),
    o = n(281320);
function s(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getPriceTiersForGuildAndType(e, t)),
        l = (0, i.e7)([o.Z], () => o.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        r.useEffect(() => {
            l === o.M.NOT_FETCHED && (0, a.T)(e, t);
        }, [e, l, t]),
        {
            loading: l === o.M.FETCHING,
            priceTiers: n
        }
    );
}
function c(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: i } = (0, l.JH)();
    r.useEffect(() => {
        t(e);
    }, [t, e]);
    let a = (0, l.YB)(e);
    return {
        loaded: null != a && !n,
        subscriptionsSettings: a,
        loading: n,
        error: i
    };
}
