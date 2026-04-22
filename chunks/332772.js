t.d(a, { T: () => c });
var d = t(64700),
    l = t(311907),
    i = t(622543),
    r = t(576622),
    n = t(961350),
    s = t(810809),
    o = t(594832);
function c(e) {
    let { location: a, source: t } = e,
        c = (0, s.H)(a),
        { currentUserId: b, wishlistId: _ } = (0, l.cf)([n.default, i.A], () => {
            let e = n.default.getId(),
                a = i.A.getFirstWishlistId(e);
            return { currentUserId: e, wishlistId: a };
        });
    d.useEffect(() => {
        c && null == _ && (0, r.A)(b);
    }, [b, c, _]),
        (0, o.fw)({ wishlistId: c ? _ : null, userId: b, source: t });
}
