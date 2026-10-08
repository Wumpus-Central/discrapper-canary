r.d(t, { rQ: () => c, W0: () => n.W, Qr: () => s.Q });
var n = r(309954),
    a = r(582128),
    l = r(17928),
    i = r(786953),
    d = r(505274);
function c(e) {
    let {
        totalRedeemed: t,
        isFetching: r,
        error: n,
    } = (0, l.cf)([d.A], () => ({
        totalRedeemed: d.A.totalRedeemed,
        isFetching: d.A.isFetchingTotalRedeemed,
        error: d.A.fetchTotalRedeemedError,
    }));
    return (
        (0, a.useEffect)(() => {
            e?.disableFetch === !0 || r || null != t || null != n || (0, i.Ce)();
        }, [t, r, n, e?.disableFetch]),
        { totalRedeemed: t, isFetching: r, error: n }
    );
}
var s = r(715054);
