"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(590180),
    o = n(139146),
    l = n(841e3),
    u = n(471505),
    c = n(961350),
    d = n(661492),
    _ = n(33190),
    f = n(652215),
    p = n(985018),
    h = n(207426);
function m(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function E(e) {
    let { spec: t, sku: n, location: i, onError: a, ...l } = e,
        d = (0, s.bG)([c.default], () => c.default.getId()),
        {
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: p,
            handleToggle: E,
        } = (0, u.G)({ userId: d, sku: n, location: i, onError: a }),
        g = S();
    return (0, r.jsx)("div", {
        className: h.U,
        style: m(t),
        children: (0, r.jsx)(o._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: p,
            onClick: E,
            tooltipConfig: g,
            ...l,
        }),
    });
}
function g(e) {
    let { spec: t, product: n, location: i, onError: a, ...u } = e,
        _ = (0, s.bG)([c.default], () => c.default.getId()),
        {
            isWishlisted: f,
            isBusy: E,
            isFirstTimeWishlister: g,
            handleToggle: A,
            specificProductOrVariant: I,
            isPurchased: T,
        } = (0, l.z)({ userId: _, product: n, location: i, onError: a }),
        y = (0, d.qq)(I),
        v = T && !f,
        N = !y || v,
        C = S(y && v ? p.intl.string(p.t.nKA6v8) : void 0);
    return (0, r.jsx)("div", {
        className: h.U,
        style: m(t),
        children: (0, r.jsx)(o._, {
            skuId: I.skuId,
            productName: I.name,
            size: t.wishlistButtonSize,
            disabled: N,
            isWishlisted: f,
            isBusy: E,
            isFirstTimeWishlister: g,
            onClick: A,
            tooltipConfig: C,
            ...u,
        }),
    });
}
function A(e) {
    let { sku: t, replacedElement: n, ...i } = e,
        o = (0, s.bG)([a.A], () => a.A.getProduct(t.id));
    return null == o ? n : (0, r.jsx)(g, { product: o, ...i });
}
function I(e) {
    let { sku: t, isCardHovered: n, replacedElement: i, ...s } = e;
    if (!n) return i;
    switch (t.productLine) {
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(E, { sku: t, ...s });
        case f.EZt.COLLECTIBLES:
            return (0, r.jsx)(A, { sku: t, replacedElement: i, ...s });
        default:
            return i;
    }
}
function T(e) {
    let { skipExperiment: t = !1, location: n, replacedElement: i, ...s } = e;
    return (0, _.H)(n) || t ? (0, r.jsx)(I, { location: n, replacedElement: i, ...s }) : i;
}
function S(e) {
    return i.useMemo(
        () => ({
            firstTimeBody: p.intl.string(p.t["5B3F2W"]),
            add: p.intl.string(p.t.Hcgz2S),
            remove: p.intl.string(p.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
