n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(602733),
    l = n(319396);
function a() {
    let { wishlist: e, isFetching: t, error: n } = (0, i.k)("123");
    return t
        ? (0, r.jsx)("div", { children: "Loading wishlist" })
        : null != n
          ? (0, r.jsx)("div", { children: "Error loading wishlist" })
          : null == e || 0 === e.items.length
            ? (0, r.jsx)("div", { children: "Empty State" })
            : (0, r.jsx)(l.Z, { items: e.items });
}
