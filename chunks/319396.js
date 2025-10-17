n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(541699),
    l = n(594174),
    o = n(621853),
    s = n(835255),
    c = n(855587);
function u(e) {
    let { item: t, profileOwner: n, wishlistId: i, isOwner: l } = e;
    return (0, a.Q)(t)
        ? (0, r.jsx)(s.Z, {
              item: t,
              profileOwner: n,
              wishlistId: i,
              isOwner: l,
          })
        : null;
}
function d(e) {
    let { items: t, profileOwner: n, isOwner: a } = e,
        s = l.default.getCurrentUser(),
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
                              isOwner: a,
                          }),
                      },
                      e.skuId,
                  ),
              ),
          });
}
