n.d(t, {
    H: () => c,
    R: () => l
});
var r = n(73800),
    i = n(442837),
    o = n(584825),
    a = n(17079),
    s = n(281320);
function l(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getPriceTiersForGuildAndType(e, t)),
        o = (0, i.e7)([s.Z], () => s.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        r.useEffect(() => {
            o === s.M.NOT_FETCHED && (0, a.T)(e, t);
        }, [e, o, t]),
        {
            loading: o === s.M.FETCHING,
            priceTiers: n
        }
    );
}
function c(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: i } = (0, o.JH)();
    r.useEffect(() => {
        t(e);
    }, [t, e]);
    let a = (0, o.YB)(e);
    return {
        loaded: null != a && !n,
        subscriptionsSettings: a,
        loading: n,
        error: i
    };
}
