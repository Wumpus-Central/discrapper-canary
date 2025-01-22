n.d(t, {
    H: function () {
        return u;
    },
    R: function () {
        return a;
    }
});
var i = n(192379),
    r = n(442837),
    l = n(584825),
    o = n(17079),
    s = n(281320);
function a(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getPriceTiersForGuildAndType(e, t)),
        l = (0, r.e7)([s.Z], () => s.Z.getPriceTiersFetchStateForGuildAndType(e, t));
    return (
        i.useEffect(() => {
            l === s.M.NOT_FETCHED && (0, o.T)(e, t);
        }, [e, l, t]),
        {
            loading: l === s.M.FETCHING,
            priceTiers: n
        }
    );
}
function u(e) {
    let { fetchSubscriptionsSettings: t, loading: n, error: r } = (0, l.JH)();
    i.useEffect(() => {
        t(e);
    }, [t, e]);
    let o = (0, l.YB)(e);
    return {
        loaded: null != o && !n,
        subscriptionsSettings: o,
        loading: n,
        error: r
    };
}
