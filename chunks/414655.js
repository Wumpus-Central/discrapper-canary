n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(602733),
    a = n(621853),
    o = n(319396);
function s(e) {
    let { profileOwner: t } = e,
        { defaultWishlistId: n } = (0, i.cj)([a.Z], () => ({ defaultWishlistId: a.Z.getFirstWishlistId(t.id) })),
        { wishlist: s, isFetching: c, error: u } = (0, l.k)(n);
    return c
        ? (0, r.jsx)("div", { children: "Loading wishlist" })
        : null != u
          ? (0, r.jsx)("div", { children: "Error loading wishlist" })
          : null == s || 0 === s.items.length
            ? (0, r.jsx)("div", { children: "Empty State" })
            : (0, r.jsx)(o.Z, {
                  items: s.items,
                  profileOwner: t,
              });
}
