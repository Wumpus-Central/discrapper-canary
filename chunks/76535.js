e.d(n, {
    H: function () {
        return s;
    },
    R: function () {
        return a;
    }
});
var i = e(192379),
    r = e(442837),
    l = e(584825),
    u = e(17079),
    o = e(281320);
function a(t, n) {
    let e = (0, r.e7)([o.Z], () => o.Z.getPriceTiersForGuildAndType(t, n)),
        l = (0, r.e7)([o.Z], () => o.Z.getPriceTiersFetchStateForGuildAndType(t, n));
    return (
        i.useEffect(() => {
            l === o.M.NOT_FETCHED && (0, u.T)(t, n);
        }, [t, l, n]),
        {
            loading: l === o.M.FETCHING,
            priceTiers: e
        }
    );
}
function s(t) {
    let { fetchSubscriptionsSettings: n, loading: e, error: r } = (0, l.JH)();
    i.useEffect(() => {
        n(t);
    }, [n, t]);
    let u = (0, l.YB)(t);
    return {
        loaded: null != u && !e,
        subscriptionsSettings: u,
        loading: e,
        error: r
    };
}
