t.d(s, { A: () => S });
var i = t(627968),
    l = t(64700),
    n = t(311907),
    a = t(590180),
    r = t(139146),
    u = t(841e3),
    d = t(574499),
    o = t(274681),
    c = t(471505),
    m = t(961350),
    h = t(661492),
    f = t(810809),
    g = t(652215),
    I = t(985018),
    A = t(948277);
function p(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function v(e) {
    let { spec: s, sku: t, location: l, onError: a, ...u } = e,
        d = (0, n.bG)([m.default], () => m.default.getId()),
        {
            isWishlisted: o,
            isBusy: h,
            isFirstTimeWishlister: f,
            handleToggle: g,
        } = (0, c.G)({ userId: d, sku: t, location: l, onError: a }),
        I = b();
    return (0, i.jsx)("div", {
        className: A.U,
        style: p(s),
        children: (0, i.jsx)(r._, {
            skuId: t.id,
            productName: t.name,
            size: s.wishlistButtonSize,
            isWishlisted: o,
            isBusy: h,
            isFirstTimeWishlister: f,
            onClick: g,
            tooltipConfig: I,
            ...u,
        }),
    });
}
function x(e) {
    let { spec: s, sku: t, location: l, onError: a, ...u } = e,
        c = (0, n.bG)([m.default], () => m.default.getId()),
        {
            isWishlisted: h,
            isBusy: f,
            isFirstTimeWishlister: g,
            handleToggle: I,
        } = (0, d.c)({ userId: c, skuId: t.id, location: l, onError: a, onAddSuccess: o.w }),
        v = b();
    return (0, i.jsx)("div", {
        className: A.U,
        style: p(s),
        children: (0, i.jsx)(r._, {
            skuId: t.id,
            productName: t.name,
            size: s.wishlistButtonSize,
            isWishlisted: h,
            isBusy: f,
            isFirstTimeWishlister: g,
            onClick: I,
            tooltipConfig: v,
            ...u,
        }),
    });
}
function j(e) {
    let { spec: s, product: t, location: l, onError: a, ...d } = e,
        o = (0, n.bG)([m.default], () => m.default.getId()),
        {
            isWishlisted: c,
            isBusy: f,
            isFirstTimeWishlister: g,
            handleToggle: v,
            specificProductOrVariant: x,
            isPurchased: j,
        } = (0, u.z)({ userId: o, product: t, location: l, onError: a }),
        E = (0, h.qq)(x),
        N = j && !c,
        S = !E || N,
        _ = b(E && N ? I.intl.string(I.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: A.U,
        style: p(s),
        children: (0, i.jsx)(r._, {
            skuId: x.skuId,
            productName: x.name,
            size: s.wishlistButtonSize,
            disabled: S,
            isWishlisted: c,
            isBusy: f,
            isFirstTimeWishlister: g,
            onClick: v,
            tooltipConfig: _,
            ...d,
        }),
    });
}
function E(e) {
    let { sku: s, replacedElement: t, ...l } = e,
        r = (0, n.bG)([a.A], () => a.A.getProduct(s.id));
    return null == r ? t : (0, i.jsx)(j, { product: r, ...l });
}
function N(e) {
    let { sku: s, isCardHovered: t, replacedElement: l, ...n } = e;
    if (!t) return l;
    switch (s.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(v, { sku: s, ...n });
        case g.EZt.COLLECTIBLES:
            return (0, i.jsx)(E, { sku: s, replacedElement: l, ...n });
        case g.EZt.PREMIUM:
            return (0, i.jsx)(x, { sku: s, ...n });
        default:
            return l;
    }
}
function S(e) {
    let { skipExperiment: s = !1, location: t, replacedElement: l, ...n } = e;
    return (0, f.H)(t) || s ? (0, i.jsx)(N, { location: t, replacedElement: l, ...n }) : l;
}
function b(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: I.intl.string(I.t["5B3F2W"]),
            add: I.intl.string(I.t.Hcgz2S),
            remove: I.intl.string(I.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
