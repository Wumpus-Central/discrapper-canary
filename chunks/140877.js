var r,
    i = n(477900),
    s = n(582128),
    a = n(164636),
    l = n(834730),
    u = n(287809),
    o = n(448645),
    d = n(298072),
    c = n(993408),
    I = n(740076),
    v = n(466459),
    f = n(623373),
    p = n(506742),
    m = n(219103),
    g = n(561769),
    x = n(57020),
    h = n(792996),
    A = n(178287),
    _ = (((r = {}).INLINE = "INLINE"), (r.STACKED = "STACKED"), r);
function E(e) {
    let { product: t, prioritizedCurrency: n, promoPriceLayout: r } = e,
        d = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        f = o.Ay.canUseCollectibles(d),
        g = (0, c.xM)(d),
        _ = null != g,
        { isDisabled: E } = (0, I.I)(t.skuId),
        { isPurchased: C, isPartiallyOwnedBundle: b } = (0, v.h)(t),
        R = (0, c.G0)(t),
        k = (0, c.tt)(t),
        {
            checkoutEligiblePrices: y,
            checkoutEligibleFormerPrices: S,
            hasSufficientOrbs: j,
            shouldCheckoutWithOrbs: O,
        } = (0, x.F)({ product: t, hasShopDiscount: _, prioritizedCurrency: n }),
        T = y[0]?.currency,
        N = s.useMemo(() => (0, c.fT)(t, _, T), [t, _, T]);
    if (E)
        return (0, i.jsx)(l.E, {
            variant: "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t.wu4gyV),
        });
    if (b)
        return (0, i.jsx)(l.E, {
            variant: "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t.BEjTij),
        });
    if (C && !(R && !f))
        return (0, i.jsx)(l.E, {
            variant: "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: h.intl.string(h.t["6cfuDj"]),
        });
    if (k)
        return (0, i.jsx)(l.E, {
            variant: "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: h.intl.string(h.t.nBtvYB),
        });
    if (R)
        return (0, i.jsx)(l.E, {
            variant: "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: h.intl.string(h.t.rt69oo),
        });
    if (0 === y.length) return null;
    let P = S[0],
        V = null != P,
        L = V && "STACKED" === r,
        D = O && !j ? A.cR : void 0,
        M = (0, i.jsx)(m.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: V ? c.rr : N,
            discountIconConfig: _ ? { displayMode: "default", source: g ?? c.D0.NITRO, size: "sm" } : void 0,
            className: L ? A.wC : D,
            variant: "body-md/semibold",
        });
    return V
        ? (0, i.jsxs)("div", {
              className: L ? A.rV : A.KQ,
              children: [(0, i.jsx)(p.a, { price: P, variant: "body-md/medium", className: L ? A.ug : void 0 }), M],
          })
        : M;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { skuId: t, prioritizedCurrency: n, promoPriceLayout: r = "INLINE" } = e,
                s = (0, g.Vm)(t),
                a = (0, d.Q)(s);
            if (null == s) return null;
            let l = (0, f.rb)(s, a);
            return (0, i.jsx)(E, { product: l, prioritizedCurrency: n, promoPriceLayout: r });
        },
        e: _,
    },
);
