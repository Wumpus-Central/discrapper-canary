r.d(t, { W0: () => n.W, rQ: () => u, Qr: () => d.Q });
var n = r(309954),
    i = r(582128),
    a = r(855986),
    l = r(786953),
    o = r(505274);
function u(e) {
    let {
        totalRedeemed: t,
        isFetching: r,
        error: n,
    } = (0, a.cf)([o.A], () => ({
        totalRedeemed: o.A.totalRedeemed,
        isFetching: o.A.isFetchingTotalRedeemed,
        error: o.A.fetchTotalRedeemedError,
    }));
    return (
        (0, i.useEffect)(() => {
            e?.disableFetch === !0 || r || null != t || null != n || (0, l.Ce)();
        }, [t, r, n, e?.disableFetch]),
        { totalRedeemed: t, isFetching: r, error: n }
    );
}
var d = r(715054);
