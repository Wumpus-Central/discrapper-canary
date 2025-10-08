n.d(t, {
    k: () => c,
    n: () => u,
}),
    n(388685);
var r = n(647438),
    i = n(442837),
    l = n(621853),
    a = n(46841),
    o = n(277511),
    s = n(607550);
function c(e, t) {
    let n = (0, a.S)({ location: "UserProfileModalV2" }),
        [c, u, d, p] = (0, i.Wu)([s.Z], () =>
            null != e && n
                ? [s.Z.getWishlist(e), s.Z.isFetching(e), s.Z.getError(e), s.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        f = (0, i.e7)([l.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = l.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            null != e && !u && n && null == d && (null == c || (null != f && p !== f)) && o.Z.fetchWishlist(e, f);
        }, [e, c, u, n, f, p, d]),
        {
            wishlist: c,
            isFetching: u,
            error: d,
        }
    );
}
function u(e, t) {
    return (0, i.e7)([s.Z], () => null != e && s.Z.hasSkuId(e, t));
}
