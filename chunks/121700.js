"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(590180),
    a = n(139146),
    o = n(743693),
    l = n(33190),
    u = n(652215),
    c = n(207426);
function d(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function _(e) {
    let { sku: t, ...n } = e,
        o = (0, i.bG)([s.A], () => s.A.getProduct(t.id));
    return null != o ? (0, r.jsx)(a.R, { product: o, ...n }) : null;
}
function f(e) {
    let { sku: t, isCardHovered: n, spec: i, ...s } = e,
        a = null;
    switch (t.productLine) {
        case u.EZt.SOCIAL_LAYER_GAME_ITEM:
            a = (0, r.jsx)(o._, { sku: t, size: i.wishlistButtonSize, isCardHovered: n, showIfWishlisted: !1, ...s });
            break;
        case u.EZt.COLLECTIBLES:
            a = (0, r.jsx)(_, { sku: t, size: i.wishlistButtonSize, isCardHovered: n, showIfWishlisted: !1, ...s });
            break;
        default:
            a = null;
    }
    return null != a ? (0, r.jsx)("div", { className: c.U, style: d(i), children: a }) : null;
}
function p(e) {
    let { skipExperiment: t = !1, location: n, ...i } = e;
    return ((0, l.H)(n) || t) && (0, r.jsx)(f, { location: n, ...i });
}
