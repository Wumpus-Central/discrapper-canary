n.d(t, { q: () => u });
var i = n(951288),
    r = n(120356),
    l = n.n(r),
    a = n(757746),
    s = n(73346),
    o = n(551760);
function u(e) {
    var t;
    let { sku: n, className: r } = e,
        { data: u } = (0, a.Z)(null == n ? void 0 : n.id),
        c =
            (null == u ? void 0 : u.headerBackground) != null && (null == n ? void 0 : n.applicationId) != null
                ? (0, s._W)(n.applicationId, u.headerBackground, 256)
                : void 0;
    return (
        null != c &&
        (0, i.jsx)("img", {
            className: l()(o.skuImage, r),
            src: c,
            alt: null != (t = null == n ? void 0 : n.name) ? t : "",
        })
    );
}
