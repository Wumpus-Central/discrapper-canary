"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(590180),
    a = n(139146),
    o = n(841e3),
    l = n(471505),
    u = n(961350),
    c = n(661492),
    d = n(33190),
    _ = n(652215),
    f = n(207426);
function p(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function h(e) {
    let { sku: t, location: n, onError: s, ...o } = e,
        c = (0, i.bG)([u.default], () => u.default.getId()),
        {
            isWishlisted: d,
            isBusy: _,
            isFirstTimeWishlister: f,
            handleToggle: p,
        } = (0, l.G)({ userId: c, sku: t, location: n, onError: s });
    return (0, r.jsx)(a._, {
        skuId: t.id,
        productName: t.name,
        isWishlisted: d,
        isBusy: _,
        isFirstTimeWishlister: f,
        onClick: p,
        ...o,
    });
}
function m(e) {
    let { product: t, location: n, onError: s, ...l } = e,
        d = (0, i.bG)([u.default], () => u.default.getId()),
        {
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: p,
            handleToggle: h,
            specificProductOrVariant: m,
            isPurchased: E,
        } = (0, o.z)({ userId: d, product: t, location: n, onError: s });
    return E && !_
        ? null
        : (0, r.jsx)(a._, {
              skuId: m.skuId,
              productName: m.name,
              disabled: !(0, c.q)(m),
              isWishlisted: _,
              isBusy: f,
              isFirstTimeWishlister: p,
              onClick: h,
              ...l,
          });
}
function E(e) {
    let { sku: t, ...n } = e,
        a = (0, i.bG)([s.A], () => s.A.getProduct(t.id));
    return null == a ? null : (0, r.jsx)(m, { product: a, ...n });
}
function g(e) {
    let { sku: t, isCardHovered: n, spec: i, ...s } = e;
    if (!n) return null;
    let a = null;
    switch (t.productLine) {
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            a = (0, r.jsx)(h, { sku: t, size: i.wishlistButtonSize, ...s });
            break;
        case _.EZt.COLLECTIBLES:
            a = (0, r.jsx)(E, { sku: t, size: i.wishlistButtonSize, ...s });
            break;
        default:
            a = null;
    }
    return null != a ? (0, r.jsx)("div", { className: f.U, style: p(i), children: a }) : null;
}
function A(e) {
    let { skipExperiment: t = !1, location: n, ...i } = e;
    return ((0, d.H)(n) || t) && (0, r.jsx)(g, { location: n, ...i });
}
