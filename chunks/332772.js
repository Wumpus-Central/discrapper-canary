"use strict";
n.d(t, { T: () => c });
var r = n(64700),
    i = n(311907),
    s = n(622543),
    a = n(576622),
    o = n(961350),
    l = n(33190),
    u = n(594832);
function c(e) {
    let { location: t, source: n } = e,
        c = (0, l.H)(t),
        { currentUserId: d, wishlistId: _ } = (0, i.cf)([o.default, s.A], () => {
            let e = o.default.getId(),
                t = s.A.getFirstWishlistId(e);
            return { currentUserId: e, wishlistId: t };
        });
    r.useEffect(() => {
        c && null == _ && (0, a.A)(d);
    }, [d, c, _]),
        (0, u.fw)({ wishlistId: c ? _ : null, userId: d, source: n });
}
