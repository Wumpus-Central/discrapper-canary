r.d(t, { W0: () => n.W, rQ: () => s, Qr: () => c.Q });
var n = r(309954),
    l = r(582128),
    a = r(855986),
    i = r(786953),
    d = r(505274);
function s(e) {
    let {
        totalRedeemed: t,
        isFetching: r,
        error: n,
    } = (0, a.cf)([d.A], () => ({
        totalRedeemed: d.A.totalRedeemed,
        isFetching: d.A.isFetchingTotalRedeemed,
        error: d.A.fetchTotalRedeemedError,
    }));
    return (
        (0, l.useEffect)(() => {
            e?.disableFetch === !0 || r || null != t || null != n || (0, i.Ce)();
        }, [t, r, n, e?.disableFetch]),
        { totalRedeemed: t, isFetching: r, error: n }
    );
}
var c = r(715054);
