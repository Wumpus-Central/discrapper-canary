n.d(t, {
    k: () => l,
    n: () => c,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    a = n(46841),
    o = n(277511),
    s = n(607550);
function l(e) {
    let t = (0, a.S)({ location: "UserProfileModalV2" }),
        [n, l, c] = (0, i.Wu)([s.Z], () =>
            null != e && t ? [s.Z.getWishlist(e), s.Z.isFetching(e), s.Z.getError(e)] : [null, !1, void 0],
        );
    return (
        (0, r.useEffect)(() => {
            null != e && null == n && !l && t && o.Z.fetchWishlist(e);
        }, [e, n, l, t]),
        {
            wishlist: n,
            isFetching: l,
            error: c,
        }
    );
}
function c(e, t) {
    return (0, i.e7)([s.Z], () => s.Z.hasSkuId(e, t));
}
