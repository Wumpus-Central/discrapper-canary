"use strict";
n.d(t, { T: () => d });
var r = n(64700),
    i = n(311907),
    s = n(622543),
    a = n(576622),
    o = n(961350),
    l = n(178213),
    u = n(33190),
    c = n(594832);
function d(e) {
    let { location: t, source: n } = e,
        d = (0, l.GG)(t),
        _ = (0, u.H)(t),
        f = d && _,
        { currentUserId: p, wishlistId: h } = (0, i.cf)([o.default, s.A], () => {
            let e = o.default.getId(),
                t = s.A.getFirstWishlistId(e);
            return { currentUserId: e, wishlistId: t };
        });
    r.useEffect(() => {
        f && null == h && (0, a.A)(p);
    }, [p, f, h]),
        (0, c.fw)({ wishlistId: f ? h : null, userId: p, source: n });
}
