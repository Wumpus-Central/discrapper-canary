r.d(t, { W0: () => n.W, rQ: () => u, Qr: () => c.Q });
var n = r(309954),
    i = r(582128),
    l = r(855986),
    a = r(786953),
    o = r(505274);
function u(e) {
    let {
        totalRedeemed: t,
        isFetching: r,
        error: n,
    } = (0, l.cf)([o.A], () => ({
        totalRedeemed: o.A.totalRedeemed,
        isFetching: o.A.isFetchingTotalRedeemed,
        error: o.A.fetchTotalRedeemedError,
    }));
    return (
        (0, i.useEffect)(() => {
            e?.disableFetch === !0 || r || null != t || null != n || (0, a.Ce)();
        }, [t, r, n, e?.disableFetch]),
        { totalRedeemed: t, isFetching: r, error: n }
    );
}
var c = r(715054);
