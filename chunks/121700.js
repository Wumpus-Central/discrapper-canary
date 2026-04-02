"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(590180),
    o = n(139146),
    l = n(841e3),
    u = n(574499),
    c = n(471505),
    d = n(961350),
    _ = n(661492),
    f = n(33190),
    p = n(652215),
    h = n(985018),
    m = n(641632);
function E(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function g(e) {
    let { spec: t, sku: n, location: i, onError: a, ...l } = e,
        u = (0, s.bG)([d.default], () => d.default.getId()),
        {
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: p,
            handleToggle: h,
        } = (0, c.G)({ userId: u, sku: n, location: i, onError: a }),
        g = v();
    return (0, r.jsx)("div", {
        className: m.U,
        style: E(t),
        children: (0, r.jsx)(o._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: p,
            onClick: h,
            tooltipConfig: g,
            ...l,
        }),
    });
}
function A(e) {
    let { spec: t, sku: n, location: i, onError: a, ...l } = e,
        c = (0, s.bG)([d.default], () => d.default.getId()),
        {
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: p,
            handleToggle: h,
        } = (0, u.c)({ userId: c, skuId: n.id, location: i, onError: a }),
        g = v();
    return (0, r.jsx)("div", {
        className: m.U,
        style: E(t),
        children: (0, r.jsx)(o._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: p,
            onClick: h,
            tooltipConfig: g,
            ...l,
        }),
    });
}
function I(e) {
    let { spec: t, product: n, location: i, onError: a, ...u } = e,
        c = (0, s.bG)([d.default], () => d.default.getId()),
        {
            isWishlisted: f,
            isBusy: p,
            isFirstTimeWishlister: g,
            handleToggle: A,
            specificProductOrVariant: I,
            isPurchased: T,
        } = (0, l.z)({ userId: c, product: n, location: i, onError: a }),
        S = (0, _.qq)(I),
        y = T && !f,
        N = !S || y,
        C = v(S && y ? h.intl.string(h.t.nKA6v8) : void 0);
    return (0, r.jsx)("div", {
        className: m.U,
        style: E(t),
        children: (0, r.jsx)(o._, {
            skuId: I.skuId,
            productName: I.name,
            size: t.wishlistButtonSize,
            disabled: N,
            isWishlisted: f,
            isBusy: p,
            isFirstTimeWishlister: g,
            onClick: A,
            tooltipConfig: C,
            ...u,
        }),
    });
}
function T(e) {
    let { sku: t, replacedElement: n, ...i } = e,
        o = (0, s.bG)([a.A], () => a.A.getProduct(t.id));
    return null == o ? n : (0, r.jsx)(I, { product: o, ...i });
}
function S(e) {
    let { sku: t, isCardHovered: n, replacedElement: i, ...s } = e;
    if (!n) return i;
    switch (t.productLine) {
        case p.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(g, { sku: t, ...s });
        case p.EZt.COLLECTIBLES:
            return (0, r.jsx)(T, { sku: t, replacedElement: i, ...s });
        case p.EZt.PREMIUM:
            return (0, r.jsx)(A, { sku: t, ...s });
        default:
            return i;
    }
}
function y(e) {
    let { skipExperiment: t = !1, location: n, replacedElement: i, ...s } = e;
    return (0, f.H)(n) || t ? (0, r.jsx)(S, { location: n, replacedElement: i, ...s }) : i;
}
function v(e) {
    return i.useMemo(
        () => ({
            firstTimeBody: h.intl.string(h.t["5B3F2W"]),
            add: h.intl.string(h.t.Hcgz2S),
            remove: h.intl.string(h.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
