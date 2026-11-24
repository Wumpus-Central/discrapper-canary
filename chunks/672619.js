n.d(t, { W0: () => r.W, rQ: () => u, Qr: () => s.Q });
var r = n(309954),
    i = n(582128),
    a = n(855986),
    l = n(786953),
    o = n(505274);
function u(e) {
    let {
        totalRedeemed: t,
        isFetching: n,
        error: r,
    } = (0, a.cf)([o.A], () => ({
        totalRedeemed: o.A.totalRedeemed,
        isFetching: o.A.isFetchingTotalRedeemed,
        error: o.A.fetchTotalRedeemedError,
    }));
    return (
        (0, i.useEffect)(() => {
            e?.disableFetch === !0 || n || null != t || null != r || (0, l.Ce)();
        }, [t, n, r, e?.disableFetch]),
        { totalRedeemed: t, isFetching: n, error: r }
    );
}
var s = n(715054);
