n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(594174),
    l = n(621853),
    o = n(796483),
    c = n(855587);
function s(e) {
    let { items: t, profileOwner: n, isOwner: s } = e,
        u = a.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, i.cj)([l.Z], () => ({ defaultWishlistId: l.Z.getFirstWishlistId(n.id) }));
    return null == u || null == d
        ? null
        : (0, r.jsx)("ul", {
              className: c.grid,
              children: t.map((e) =>
                  (0, r.jsx)(
                      "li",
                      {
                          children: (0, r.jsx)(o.Z, {
                              item: e,
                              profileOwner: n,
                              wishlistId: d,
                              isOwner: s,
                          }),
                      },
                      e.skuId,
                  ),
              ),
          });
}
