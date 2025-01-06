n.d(e, {
    H: function () {
        return s;
    },
    R: function () {
        return a;
    }
});
var i = n(192379),
    r = n(442837),
    l = n(584825),
    o = n(17079),
    u = n(281320);
function a(t, e) {
    let n = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(t, e)),
        l = (0, r.e7)([u.Z], () => u.Z.getPriceTiersFetchStateForGuildAndType(t, e));
    return (
        i.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(t, e);
        }, [t, l, e]),
        {
            loading: l === u.M.FETCHING,
            priceTiers: n
        }
    );
}
function s(t) {
    let { fetchSubscriptionsSettings: e, loading: n, error: r } = (0, l.JH)();
    i.useEffect(() => {
        e(t);
    }, [e, t]);
    let o = (0, l.YB)(t);
    return {
        loaded: null != o && !n,
        subscriptionsSettings: o,
        loading: n,
        error: r
    };
}
