n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(602733),
    l = n(319396);
function a(e) {
    let { profileOwner: t } = e,
        { wishlist: n, isFetching: a, error: o } = (0, i.k)("123");
    return a
        ? (0, r.jsx)("div", { children: "Loading wishlist" })
        : null != o
          ? (0, r.jsx)("div", { children: "Error loading wishlist" })
          : null == n || 0 === n.items.length
            ? (0, r.jsx)("div", { children: "Empty State" })
            : (0, r.jsx)(l.Z, {
                  items: n.items,
                  profileOwner: t,
              });
}
