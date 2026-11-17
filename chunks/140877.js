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
    E = n(792996),
    _ = n(178287),
    A = (((r = {}).INLINE = "INLINE"), (r.STACKED = "STACKED"), r);
function h(e) {
    let { product: t, prioritizedCurrency: n, promoPriceLayout: r, textVariant: d, discountIconSize: f = "sm" } = e,
        g = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        A = o.Ay.canUseCollectibles(g),
        h = (0, c.xM)(g),
        C = null != h,
        { isDisabled: b } = (0, I.I)(t.skuId),
        { isPurchased: R, isPartiallyOwnedBundle: k } = (0, v.h)(t),
        y = (0, c.G0)(t),
        S = (0, c.tt)(t),
        {
            checkoutEligiblePrices: j,
            checkoutEligibleFormerPrices: O,
            hasSufficientOrbs: T,
            shouldCheckoutWithOrbs: N,
        } = (0, x.F)({ product: t, hasShopDiscount: C, prioritizedCurrency: n }),
        P = j[0]?.currency,
        V = s.useMemo(() => (0, c.fT)(t, C, P), [t, C, P]);
    if (b)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: E.intl.string(E.t.wu4gyV),
        });
    if (k)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: E.intl.string(E.t.BEjTij),
        });
    if (R && !(y && !A))
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: E.intl.string(E.t["6cfuDj"]),
        });
    if (S)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: E.intl.string(E.t.nBtvYB),
        });
    if (y)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: E.intl.string(E.t.rt69oo),
        });
    if (0 === j.length) return null;
    let L = O[0],
        D = null != L,
        M = D && "STACKED" === r,
        w = N && !T ? _.cR : void 0,
        B = (0, i.jsx)(m.x, {
            priceAmount: j[0].amount,
            priceCurrency: j[0].currency,
            discount: D ? c.rr : V,
            discountIconConfig: C ? { displayMode: "default", source: h ?? c.D0.NITRO, size: f } : void 0,
            className: M ? _.wC : w,
            variant: d ?? "body-md/semibold",
        });
    return D
        ? (0, i.jsxs)("div", {
              className: M ? _.rV : _.KQ,
              children: [(0, i.jsx)(p.a, { price: L, variant: "body-md/medium", className: M ? _.ug : void 0 }), B],
          })
        : B;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    skuId: t,
                    prioritizedCurrency: n,
                    promoPriceLayout: r = "INLINE",
                    textVariant: s,
                    discountIconSize: a,
                } = e,
                l = (0, g.Vm)(t),
                u = (0, d.Q)(l);
            if (null == l) return null;
            let o = (0, f.rb)(l, u);
            return (0, i.jsx)(h, {
                product: o,
                prioritizedCurrency: n,
                promoPriceLayout: r,
                textVariant: s,
                discountIconSize: a,
            });
        },
        e: A,
    },
);
