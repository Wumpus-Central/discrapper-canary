n.d(t, {
    H: () => c,
    R: () => l,
});
var r = n(473749),
    i = n(442837),
    a = n(584825),
    o = n(17079),
    s = n(281320);
function l(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getPriceTiersForGuildAndType(e, t)),
        a = (0, i.e7)([s.Z], () => s.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        r.useEffect(() => {
            a === s.M.NOT_FETCHED && (0, o.T)(e, t);
        }, [e, a, t]),
        {
            loading: a === s.M.FETCHING,
            priceTiers: n,
        }
    );
}
function c(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: i } = (0, a.JH)();
    r.useEffect(() => {
        t(e);
    }, [t, e]);
    let o = (0, a.YB)(e);
    return {
        loaded: null != o && !n,
        subscriptionsSettings: o,
        loading: n,
        error: i,
    };
}
