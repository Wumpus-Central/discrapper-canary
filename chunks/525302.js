n.d(t, { Q: () => c });
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(442837),
    o = n(812206),
    a = n(321947),
    s = n(701488);
function c(e) {
    return (0, r.jsx)(d, { wishlistItem: e });
}
function u(e) {
    let { application: t } = e,
        n = null != t ? t.getIconURL(s.Si.SMALL) : void 0;
    return null != n
        ? (0, r.jsx)("img", {
              src: n,
              alt: null == t ? void 0 : t.name,
          })
        : (0, r.jsx)(i.EOn, {
              color: "currentColor",
              size: "xs",
          });
}
function d(e) {
    let { wishlistItem: t } = e,
        n = (0, l.e7)([o.Z], () => ((0, a.F)(t) ? o.Z.getApplication(t.sku.applicationId) : void 0));
    return (0, r.jsx)(u, { application: n });
}
