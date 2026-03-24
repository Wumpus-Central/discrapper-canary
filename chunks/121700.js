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
    let { spec: t, sku: n, location: s, onError: o, ...c } = e,
        d = (0, i.bG)([u.default], () => u.default.getId()),
        {
            isWishlisted: _,
            isBusy: h,
            isFirstTimeWishlister: m,
            handleToggle: E,
        } = (0, l.G)({ userId: d, sku: n, location: s, onError: o });
    return (0, r.jsx)("div", {
        className: f.U,
        style: p(t),
        children: (0, r.jsx)(a._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: _,
            isBusy: h,
            isFirstTimeWishlister: m,
            onClick: E,
            ...c,
        }),
    });
}
function m(e) {
    let { spec: t, product: n, location: s, onError: l, replacedElement: d, ..._ } = e,
        h = (0, i.bG)([u.default], () => u.default.getId()),
        {
            isWishlisted: m,
            isBusy: E,
            isFirstTimeWishlister: g,
            handleToggle: A,
            specificProductOrVariant: I,
            isPurchased: T,
        } = (0, o.z)({ userId: h, product: n, location: s, onError: l });
    return T && !m
        ? d
        : (0, r.jsx)("div", {
              className: f.U,
              style: p(t),
              children: (0, r.jsx)(a._, {
                  skuId: I.skuId,
                  productName: I.name,
                  size: t.wishlistButtonSize,
                  disabled: !(0, c.q)(I),
                  isWishlisted: m,
                  isBusy: E,
                  isFirstTimeWishlister: g,
                  onClick: A,
                  ..._,
              }),
          });
}
function E(e) {
    let { sku: t, replacedElement: n, ...a } = e,
        o = (0, i.bG)([s.A], () => s.A.getProduct(t.id));
    return null == o ? n : (0, r.jsx)(m, { product: o, replacedElement: n, ...a });
}
function g(e) {
    let { sku: t, isCardHovered: n, replacedElement: i, ...s } = e;
    if (!n) return i;
    switch (t.productLine) {
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(h, { sku: t, ...s });
        case _.EZt.COLLECTIBLES:
            return (0, r.jsx)(E, { sku: t, replacedElement: i, ...s });
        default:
            return i;
    }
}
function A(e) {
    let { skipExperiment: t = !1, location: n, replacedElement: i, ...s } = e;
    return (0, d.H)(n) || t ? (0, r.jsx)(g, { location: n, replacedElement: i, ...s }) : i;
}
