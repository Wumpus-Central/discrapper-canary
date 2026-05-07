t.d(l, { A: () => T });
var s = t(627968),
    i = t(64700),
    n = t(17928),
    a = t(590180),
    r = t(139146),
    d = t(113265),
    o = t(152472),
    c = t(274681),
    u = t(471505),
    p = t(495544),
    m = t(661492),
    h = t(33190),
    A = t(652215),
    x = t(375708),
    g = t(948277);
function f(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function I(e) {
    let { spec: l, sku: t, location: i, onError: a, ...d } = e,
        o = (0, n.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: c,
            isBusy: m,
            isFirstTimeWishlister: h,
            handleToggle: A,
        } = (0, u.G)({ userId: o, sku: t, location: i, onError: a }),
        x = C();
    return (0, s.jsx)("div", {
        className: g.U,
        style: f(l),
        children: (0, s.jsx)(r._, {
            skuId: t.id,
            productName: t.name,
            size: l.wishlistButtonSize,
            isWishlisted: c,
            isBusy: m,
            isFirstTimeWishlister: h,
            onClick: A,
            tooltipConfig: x,
            ...d,
        }),
    });
}
function y(e) {
    let { spec: l, sku: t, location: i, onError: a, ...d } = e,
        u = (0, n.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: m,
            isBusy: h,
            isFirstTimeWishlister: A,
            handleToggle: x,
        } = (0, o.c)({ userId: u, skuId: t.id, location: i, onError: a, onAddSuccess: c.w }),
        I = C();
    return (0, s.jsx)("div", {
        className: g.U,
        style: f(l),
        children: (0, s.jsx)(r._, {
            skuId: t.id,
            productName: t.name,
            size: l.wishlistButtonSize,
            isWishlisted: m,
            isBusy: h,
            isFirstTimeWishlister: A,
            onClick: x,
            tooltipConfig: I,
            ...d,
        }),
    });
}
function j(e) {
    let { spec: l, product: t, location: i, onError: a, ...o } = e,
        c = (0, n.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: u,
            isBusy: h,
            isFirstTimeWishlister: A,
            handleToggle: I,
            specificProductOrVariant: y,
            isPurchased: j,
        } = (0, d.z)({ userId: c, product: t, location: i, onError: a }),
        E = (0, m.qq)(y),
        T = j && !u,
        N = !E || T,
        b = C(E && T ? x.intl.string(x.t.nKA6v8) : void 0);
    return (0, s.jsx)("div", {
        className: g.U,
        style: f(l),
        children: (0, s.jsx)(r._, {
            skuId: y.skuId,
            productName: y.name,
            size: l.wishlistButtonSize,
            disabled: N,
            isWishlisted: u,
            isBusy: h,
            isFirstTimeWishlister: A,
            onClick: I,
            tooltipConfig: b,
            ...o,
        }),
    });
}
function E(e) {
    let l,
        { sku: t, isCardHovered: i, replacedElement: r, ...d } = e,
        o = (0, n.bG)([a.A], () => a.A.getProduct(t.id));
    switch (t.productLine) {
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            l = (0, s.jsx)(I, { sku: t, isVisuallyHidden: !i, ...d });
            break;
        case A.EZt.COLLECTIBLES:
            if (null == o) return r;
            l = (0, s.jsx)(j, { product: o, isVisuallyHidden: !i, ...d });
            break;
        case A.EZt.PREMIUM:
            l = (0, s.jsx)(y, { sku: t, isVisuallyHidden: !i, ...d });
            break;
        default:
            return r;
    }
    return (0, s.jsxs)(s.Fragment, { children: [l, !i && r] });
}
function T(e) {
    let { skipExperiment: l = !1, location: t, replacedElement: i, ...n } = e;
    return (0, h.H)(t) || l ? (0, s.jsx)(E, { location: t, replacedElement: i, ...n }) : i;
}
function C(e) {
    return i.useMemo(
        () => ({
            firstTimeBody: x.intl.string(x.t["5B3F2W"]),
            add: x.intl.string(x.t.Hcgz2S),
            remove: x.intl.string(x.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
