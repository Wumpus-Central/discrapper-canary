r.d(t, { W0: () => n.W, rQ: () => d, Qr: () => s.Q });
var n = r(309954),
    l = r(582128),
    a = r(855986),
    i = r(786953),
    c = r(505274);
function d(e) {
    let {
        totalRedeemed: t,
        isFetching: r,
        error: n,
    } = (0, a.cf)([c.A], () => ({
        totalRedeemed: c.A.totalRedeemed,
        isFetching: c.A.isFetchingTotalRedeemed,
        error: c.A.fetchTotalRedeemedError,
    }));
    return (
        (0, l.useEffect)(() => {
            e?.disableFetch === !0 || r || null != t || null != n || (0, i.Ce)();
        }, [t, r, n, e?.disableFetch]),
        { totalRedeemed: t, isFetching: r, error: n }
    );
}
var s = r(715054);
