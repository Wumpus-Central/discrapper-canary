n.d(t, {
    k: () => s,
    n: () => c,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    l = n(46841),
    a = n(277511),
    o = n(607550);
function s(e) {
    let t = (0, l.S)({ location: "UserProfileModalV2" }),
        [n, s, c] = (0, i.Wu)([o.Z], () =>
            null != e && t ? [o.Z.getWishlist(e), o.Z.isFetching(e), o.Z.getError(e)] : [null, !1, void 0],
        );
    return (
        (0, r.useEffect)(() => {
            null != e && null == n && !s && t && a.Z.fetchWishlist(e);
        }, [e, n, s, t]),
        {
            wishlist: n,
            isFetching: s,
            error: c,
        }
    );
}
function c(e, t) {
    return (0, i.e7)([o.Z], () => null != e && o.Z.hasSkuId(e, t));
}
