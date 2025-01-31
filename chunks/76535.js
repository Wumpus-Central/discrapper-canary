n.d(t, {
    H: () => d,
    R: () => o
});
var i = n(192379),
    l = n(442837),
    r = n(584825),
    s = n(17079),
    a = n(281320);
function o(e, t) {
    let n = (0, l.e7)([a.Z], () => a.Z.getPriceTiersForGuildAndType(e, t)),
        r = (0, l.e7)([a.Z], () => a.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        i.useEffect(() => {
            r === a.M.NOT_FETCHED && (0, s.T)(e, t);
        }, [e, r, t]),
        {
            loading: r === a.M.FETCHING,
            priceTiers: n
        }
    );
}
function d(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: l } = (0, r.JH)();
    i.useEffect(() => {
        t(e);
    }, [t, e]);
    let s = (0, r.YB)(e);
    return {
        loaded: null != s && !n,
        subscriptionsSettings: s,
        loading: n,
        error: l
    };
}
