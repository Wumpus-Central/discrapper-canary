n.d(t, { P: () => p, A: () => m });
var l = n(627968);
n(64700);
var a = n(94420),
    i = n(525723),
    r = n(834730),
    s = n(661531),
    o = n(738188),
    u = n(897831);
function c(e) {
    let { message: t } = e;
    return (0, l.jsxs)("div", {
        className: u.U,
        children: [
            (0, l.jsx)(o.i, { color: s.A.colors.ICON_STRONG }),
            (0, l.jsx)(r.E, { variant: "text-sm/medium", color: "text-feedback-warning", children: t }),
        ],
    });
}
var d = n(375708);
let p = () => {
    let e = (0, a.t4)((e) => e.selectedSkuId);
    return (0, i.vw)({ skuId: e }) ? d.intl.format(d.t.fsOXXO, {}) : null;
};
function m() {
    let e = p();
    return null == e ? null : (0, l.jsx)(c, { message: e });
}
