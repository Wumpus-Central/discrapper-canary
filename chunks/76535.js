n.d(t, {
    H: () => s,
    R: () => u
});
var r = n(192379),
    i = n(442837),
    l = n(584825),
    o = n(17079),
    a = n(281320);
function u(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.getPriceTiersForGuildAndType(e, t)),
        l = (0, i.e7)([a.Z], () => a.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        r.useEffect(() => {
            l === a.M.NOT_FETCHED && (0, o.T)(e, t);
        }, [e, l, t]),
        {
            loading: l === a.M.FETCHING,
            priceTiers: n
        }
    );
}
function s(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: i } = (0, l.JH)();
    r.useEffect(() => {
        t(e);
    }, [t, e]);
    let o = (0, l.YB)(e);
    return {
        loaded: null != o && !n,
        subscriptionsSettings: o,
        loading: n,
        error: i
    };
}
