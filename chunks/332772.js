n.d(t, { T: () => d });
var i = n(64700),
    l = n(311907),
    a = n(622543),
    s = n(576622),
    r = n(961350),
    o = n(810809),
    c = n(594832);
function d(e) {
    let { location: t, source: n } = e,
        d = (0, o.H)(t),
        { currentUserId: u, wishlistId: h } = (0, l.cf)([r.default, a.A], () => {
            let e = r.default.getId(),
                t = a.A.getFirstWishlistId(e);
            return { currentUserId: e, wishlistId: t };
        });
    i.useEffect(() => {
        d && null == h && (0, s.A)(u);
    }, [u, d, h]),
        (0, c.fw)({ wishlistId: d ? h : null, userId: u, source: n });
}
