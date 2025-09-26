n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(541699),
    a = n(594174),
    o = n(621853),
    s = n(835255),
    c = n(855587);
function u(e) {
    let { item: t, user: n, profileOwner: i, wishlistId: a } = e;
    return (0, l.Q)(t)
        ? (0, r.jsx)(s.Z, {
              item: t,
              user: n,
              profileOwner: i,
              wishlistId: a,
          })
        : null;
}
function d(e) {
    let { items: t, profileOwner: n } = e,
        l = a.default.getCurrentUser(),
        { defaultWishlistId: s } = (0, i.cj)([o.Z], () => ({ defaultWishlistId: o.Z.getFirstWishlistId(n.id) }));
    return null == l || null == s
        ? null
        : (0, r.jsx)("div", {
              className: c.grid,
              children: t.map((e) =>
                  (0, r.jsx)(
                      u,
                      {
                          item: e,
                          user: l,
                          profileOwner: n,
                          wishlistId: s,
                      },
                      e.skuId,
                  ),
              ),
          });
}
