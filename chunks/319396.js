n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(541699),
    a = n(594174),
    o = n(621853),
    s = n(835255),
    c = n(465004);
function u(e) {
    let { item: t, profileOwner: n, wishlistId: i, isOwner: a } = e;
    return (0, l.Q)(t)
        ? (0, r.jsx)(s.Z, {
              item: t,
              profileOwner: n,
              wishlistId: i,
              isOwner: a,
          })
        : null;
}
function d(e) {
    let { items: t, profileOwner: n, isOwner: l } = e,
        s = a.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, i.cj)([o.Z], () => ({ defaultWishlistId: o.Z.getFirstWishlistId(n.id) }));
    return null == s || null == d
        ? null
        : (0, r.jsx)("ul", {
              className: c.grid,
              children: t.map((e) =>
                  (0, r.jsx)(
                      "li",
                      {
                          children: (0, r.jsx)(u, {
                              item: e,
                              profileOwner: n,
                              wishlistId: d,
                              isOwner: l,
                          }),
                      },
                      e.skuId,
                  ),
              ),
          });
}
