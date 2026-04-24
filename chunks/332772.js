"use strict";
r.d(t, { T: () => u });
var i = r(64700),
    n = r(17928),
    a = r(841595),
    s = r(576622),
    l = r(495544),
    c = r(33190),
    o = r(594832);
function u(e) {
    let { location: t, source: r } = e,
        u = (0, c.H)(t),
        { currentUserId: d, wishlistId: _ } = (0, n.cf)([l.default, a.A], () => {
            let e = l.default.getId(),
                t = a.A.getFirstWishlistId(e);
            return { currentUserId: e, wishlistId: t };
        });
    i.useEffect(() => {
        u && null == _ && (0, s.A)(d);
    }, [d, u, _]),
        (0, o.fw)({ wishlistId: u ? _ : null, userId: d, source: r });
}
