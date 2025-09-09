n.d(e, { q: () => u });
var i = n(951288),
    r = n(120356),
    l = n.n(r),
    s = n(757746),
    a = n(73346),
    o = n(551760);
function u(t) {
    var e;
    let { sku: n, className: r } = t,
        { data: u } = (0, s.Z)(null == n ? void 0 : n.id),
        c =
            (null == u ? void 0 : u.headerBackground) != null && (null == n ? void 0 : n.applicationId) != null
                ? (0, a._W)(n.applicationId, u.headerBackground, 256)
                : void 0;
    return (
        null != c &&
        (0, i.jsx)("img", {
            className: l()(o.skuImage, r),
            src: c,
            alt: null != (e = null == n ? void 0 : n.name) ? e : "",
        })
    );
}
