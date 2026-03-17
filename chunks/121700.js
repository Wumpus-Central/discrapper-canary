"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(561769),
    s = n(139146),
    a = n(743693),
    o = n(33190),
    l = n(652215),
    u = n(207426);
function c(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function d(e) {
    let { sku: t, ...n } = e,
        a = (0, i.Vm)(t.id);
    return null != a ? (0, r.jsx)(s.R, { product: a, ...n }) : null;
}
function _(e) {
    let { sku: t, isCardHovered: n, spec: i, ...s } = e,
        o = null;
    switch (t.productLine) {
        case l.EZt.SOCIAL_LAYER_GAME_ITEM:
            o = (0, r.jsx)(a._, { sku: t, size: i.wishlistButtonSize, isCardHovered: n, showIfWishlisted: !1, ...s });
            break;
        case l.EZt.COLLECTIBLES:
            o = (0, r.jsx)(d, { sku: t, size: i.wishlistButtonSize, isCardHovered: n, showIfWishlisted: !1, ...s });
            break;
        default:
            o = null;
    }
    return null != o ? (0, r.jsx)("div", { className: u.U, style: c(i), children: o }) : null;
}
function f(e) {
    let { skipExperiment: t = !1, location: n, ...i } = e;
    return ((0, o.H)(n) || t) && (0, r.jsx)(_, { location: n, ...i });
}
