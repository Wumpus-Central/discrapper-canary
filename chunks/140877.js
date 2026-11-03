n.d(t, { A: () => C, e: () => _ });
var r,
    i = n(477900),
    l = n(582128),
    s = n(702841),
    a = n(834730),
    u = n(287809),
    o = n(24482),
    d = n(298072),
    c = n(993408),
    f = n(740076),
    I = n(466459),
    v = n(623373),
    p = n(506742),
    m = n(219103),
    A = n(561769),
    g = n(57020),
    E = n(105292),
    h = n(178287),
    _ = (((r = {}).INLINE = "INLINE"), (r.STACKED = "STACKED"), r);
function x(e) {
    let { product: t, prioritizedCurrency: n, promoPriceLayout: r } = e,
        d = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        v = o.Ay.canUseCollectibles(d),
        A = (0, c.xM)(d),
        _ = null != A,
        { isDisabled: x } = (0, f.I)(t.skuId),
        { isPurchased: C, isPartiallyOwnedBundle: b } = (0, I.h)(t),
        R = (0, c.G0)(t),
        k = (0, c.tt)(t),
        {
            checkoutEligiblePrices: y,
            checkoutEligibleFormerPrices: S,
            hasSufficientOrbs: T,
            shouldCheckoutWithOrbs: j,
        } = (0, g.F)({ product: t, hasShopDiscount: _, prioritizedCurrency: n }),
        O = y[0]?.currency,
        P = l.useMemo(() => (0, c.fT)(t, _, O), [t, _, O]);
    if (x)
        return (0, i.jsx)(a.E, {
            variant: "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: E.intl.string(E.t.wu4gyV),
        });
    if (b)
        return (0, i.jsx)(a.E, {
            variant: "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: E.intl.string(E.t.BEjTij),
        });
    if (C && !(R && !v))
        return (0, i.jsx)(a.E, {
            variant: "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: E.intl.string(E.t["6cfuDj"]),
        });
    if (k)
        return (0, i.jsx)(a.E, {
            variant: "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: E.intl.string(E.t.nBtvYB),
        });
    if (R)
        return (0, i.jsx)(a.E, {
            variant: "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: E.intl.string(E.t.rt69oo),
        });
    if (0 === y.length) return null;
    let L = S[0],
        N = null != L,
        V = N && "STACKED" === r,
        D = j && !T ? h.cR : void 0,
        M = (0, i.jsx)(m.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: N ? c.rr : P,
            discountIconConfig: _ ? { displayMode: "default", source: A ?? c.D0.NITRO, size: "sm" } : void 0,
            className: V ? h.wC : D,
            variant: "body-md/semibold",
        });
    return N
        ? (0, i.jsxs)("div", {
              className: V ? h.rV : h.KQ,
              children: [(0, i.jsx)(p.a, { price: L, variant: "body-md/medium", className: V ? h.ug : void 0 }), M],
          })
        : M;
}
let C = function (e) {
    let { skuId: t, prioritizedCurrency: n, promoPriceLayout: r = "INLINE" } = e,
        l = (0, A.Vm)(t),
        s = (0, d.Q)(l);
    if (null == l) return null;
    let a = (0, v.rb)(l, s);
    return (0, i.jsx)(x, { product: a, prioritizedCurrency: n, promoPriceLayout: r });
};
