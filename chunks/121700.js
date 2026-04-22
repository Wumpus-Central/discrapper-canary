n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(590180),
    a = n(139146),
    u = n(841e3),
    o = n(574499),
    d = n(471505),
    c = n(961350),
    h = n(661492),
    m = n(810809),
    f = n(652215),
    g = n(985018),
    _ = n(948277);
function E(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function A(e) {
    let { spec: t, sku: n, location: l, onError: r, ...u } = e,
        o = (0, s.bG)([c.default], () => c.default.getId()),
        {
            isWishlisted: h,
            isBusy: m,
            isFirstTimeWishlister: f,
            handleToggle: g,
        } = (0, d.G)({ userId: o, sku: n, location: l, onError: r }),
        A = v();
    return (0, i.jsx)("div", {
        className: _.U,
        style: E(t),
        children: (0, i.jsx)(a._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: h,
            isBusy: m,
            isFirstTimeWishlister: f,
            onClick: g,
            tooltipConfig: A,
            ...u,
        }),
    });
}
function p(e) {
    let { spec: t, sku: n, location: l, onError: r, ...u } = e,
        d = (0, s.bG)([c.default], () => c.default.getId()),
        {
            isWishlisted: h,
            isBusy: m,
            isFirstTimeWishlister: f,
            handleToggle: g,
        } = (0, o.c)({ userId: d, skuId: n.id, location: l, onError: r }),
        A = v();
    return (0, i.jsx)("div", {
        className: _.U,
        style: E(t),
        children: (0, i.jsx)(a._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: h,
            isBusy: m,
            isFirstTimeWishlister: f,
            onClick: g,
            tooltipConfig: A,
            ...u,
        }),
    });
}
function I(e) {
    let { spec: t, product: n, location: l, onError: r, ...o } = e,
        d = (0, s.bG)([c.default], () => c.default.getId()),
        {
            isWishlisted: m,
            isBusy: f,
            isFirstTimeWishlister: A,
            handleToggle: p,
            specificProductOrVariant: I,
            isPurchased: C,
        } = (0, u.z)({ userId: d, product: n, location: l, onError: r }),
        R = (0, h.qq)(I),
        S = C && !m,
        y = !R || S,
        N = v(R && S ? g.intl.string(g.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: _.U,
        style: E(t),
        children: (0, i.jsx)(a._, {
            skuId: I.skuId,
            productName: I.name,
            size: t.wishlistButtonSize,
            disabled: y,
            isWishlisted: m,
            isBusy: f,
            isFirstTimeWishlister: A,
            onClick: p,
            tooltipConfig: N,
            ...o,
        }),
    });
}
function C(e) {
    let { sku: t, replacedElement: n, ...l } = e,
        a = (0, s.bG)([r.A], () => r.A.getProduct(t.id));
    return null == a ? n : (0, i.jsx)(I, { product: a, ...l });
}
function R(e) {
    let { sku: t, isCardHovered: n, replacedElement: l, ...s } = e;
    if (!n) return l;
    switch (t.productLine) {
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(A, { sku: t, ...s });
        case f.EZt.COLLECTIBLES:
            return (0, i.jsx)(C, { sku: t, replacedElement: l, ...s });
        case f.EZt.PREMIUM:
            return (0, i.jsx)(p, { sku: t, ...s });
        default:
            return l;
    }
}
function S(e) {
    let { skipExperiment: t = !1, location: n, replacedElement: l, ...s } = e;
    return (0, m.H)(n) || t ? (0, i.jsx)(R, { location: n, replacedElement: l, ...s }) : l;
}
function v(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: g.intl.string(g.t["5B3F2W"]),
            add: g.intl.string(g.t.Hcgz2S),
            remove: g.intl.string(g.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
