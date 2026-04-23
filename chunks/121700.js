n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(590180),
    a = n(139146),
    u = n(841e3),
    o = n(574499),
    d = n(274681),
    c = n(471505),
    h = n(961350),
    m = n(661492),
    f = n(810809),
    g = n(652215),
    _ = n(985018),
    E = n(948277);
function A(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function p(e) {
    let { spec: t, sku: n, location: l, onError: r, ...u } = e,
        o = (0, s.bG)([h.default], () => h.default.getId()),
        {
            isWishlisted: d,
            isBusy: m,
            isFirstTimeWishlister: f,
            handleToggle: g,
        } = (0, c.G)({ userId: o, sku: n, location: l, onError: r }),
        _ = y();
    return (0, i.jsx)("div", {
        className: E.U,
        style: A(t),
        children: (0, i.jsx)(a._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: m,
            isFirstTimeWishlister: f,
            onClick: g,
            tooltipConfig: _,
            ...u,
        }),
    });
}
function I(e) {
    let { spec: t, sku: n, location: l, onError: r, ...u } = e,
        c = (0, s.bG)([h.default], () => h.default.getId()),
        {
            isWishlisted: m,
            isBusy: f,
            isFirstTimeWishlister: g,
            handleToggle: _,
        } = (0, o.c)({ userId: c, skuId: n.id, location: l, onError: r, onAddSuccess: d.w }),
        p = y();
    return (0, i.jsx)("div", {
        className: E.U,
        style: A(t),
        children: (0, i.jsx)(a._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: m,
            isBusy: f,
            isFirstTimeWishlister: g,
            onClick: _,
            tooltipConfig: p,
            ...u,
        }),
    });
}
function C(e) {
    let { spec: t, product: n, location: l, onError: r, ...o } = e,
        d = (0, s.bG)([h.default], () => h.default.getId()),
        {
            isWishlisted: c,
            isBusy: f,
            isFirstTimeWishlister: g,
            handleToggle: p,
            specificProductOrVariant: I,
            isPurchased: C,
        } = (0, u.z)({ userId: d, product: n, location: l, onError: r }),
        R = (0, m.qq)(I),
        S = C && !c,
        v = !R || S,
        N = y(R && S ? _.intl.string(_.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: E.U,
        style: A(t),
        children: (0, i.jsx)(a._, {
            skuId: I.skuId,
            productName: I.name,
            size: t.wishlistButtonSize,
            disabled: v,
            isWishlisted: c,
            isBusy: f,
            isFirstTimeWishlister: g,
            onClick: p,
            tooltipConfig: N,
            ...o,
        }),
    });
}
function R(e) {
    let { sku: t, replacedElement: n, ...l } = e,
        a = (0, s.bG)([r.A], () => r.A.getProduct(t.id));
    return null == a ? n : (0, i.jsx)(C, { product: a, ...l });
}
function S(e) {
    let { sku: t, isCardHovered: n, replacedElement: l, ...s } = e;
    if (!n) return l;
    switch (t.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(p, { sku: t, ...s });
        case g.EZt.COLLECTIBLES:
            return (0, i.jsx)(R, { sku: t, replacedElement: l, ...s });
        case g.EZt.PREMIUM:
            return (0, i.jsx)(I, { sku: t, ...s });
        default:
            return l;
    }
}
function v(e) {
    let { skipExperiment: t = !1, location: n, replacedElement: l, ...s } = e;
    return (0, f.H)(n) || t ? (0, i.jsx)(S, { location: n, replacedElement: l, ...s }) : l;
}
function y(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: _.intl.string(_.t["5B3F2W"]),
            add: _.intl.string(_.t.Hcgz2S),
            remove: _.intl.string(_.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
