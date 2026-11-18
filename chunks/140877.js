var r,
    i = n(477900),
    l = n(582128),
    s = n(164636),
    a = n(834730),
    u = n(287809),
    o = n(448645),
    c = n(298072),
    d = n(993408),
    I = n(740076),
    f = n(466459),
    p = n(623373),
    g = n(506742),
    m = n(219103),
    v = n(561769),
    x = n(57020),
    C = n(792996),
    _ = n(178287),
    h = (((r = {}).INLINE = "INLINE"), (r.STACKED = "STACKED"), r);
function E(e) {
    let { product: t, prioritizedCurrency: n, promoPriceLayout: r, textVariant: c, discountIconSize: p = "sm" } = e,
        v = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        h = o.Ay.canUseCollectibles(v),
        E = (0, d.xM)(v),
        A = null != E,
        { isDisabled: b } = (0, I.I)(t.skuId),
        { isPurchased: R, isPartiallyOwnedBundle: k } = (0, f.h)(t),
        y = (0, d.G0)(t),
        L = (0, d.tt)(t),
        {
            checkoutEligiblePrices: O,
            checkoutEligibleFormerPrices: S,
            hasSufficientOrbs: T,
            shouldCheckoutWithOrbs: P,
        } = (0, x.F)({ product: t, hasShopDiscount: A, prioritizedCurrency: n }),
        j = O[0]?.currency,
        N = l.useMemo(() => (0, d.fT)(t, A, j), [t, A, j]);
    if (b)
        return (0, i.jsx)(a.E, {
            variant: c ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.wu4gyV),
        });
    if (k)
        return (0, i.jsx)(a.E, {
            variant: c ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t.BEjTij),
        });
    if (R && !(y && !h))
        return (0, i.jsx)(a.E, {
            variant: c ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: C.intl.string(C.t["6cfuDj"]),
        });
    if (L)
        return (0, i.jsx)(a.E, {
            variant: c ?? "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.nBtvYB),
        });
    if (y)
        return (0, i.jsx)(a.E, {
            variant: c ?? "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: C.intl.string(C.t.rt69oo),
        });
    if (0 === O.length) return null;
    let V = S[0],
        D = null != V,
        M = D && "STACKED" === r,
        B = P && !T ? _.cR : void 0,
        w = (0, i.jsx)(m.x, {
            priceAmount: O[0].amount,
            priceCurrency: O[0].currency,
            discount: D ? d.rr : N,
            discountIconConfig: A ? { displayMode: "default", source: E ?? d.D0.NITRO, size: p } : void 0,
            className: M ? _.wC : B,
            variant: c ?? "body-md/semibold",
        });
    return D
        ? (0, i.jsxs)("div", {
              className: M ? _.rV : _.KQ,
              children: [(0, i.jsx)(g.a, { price: V, variant: "body-md/medium", className: M ? _.ug : void 0 }), w],
          })
        : w;
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
                    textVariant: l,
                    discountIconSize: s,
                } = e,
                a = (0, v.Vm)(t),
                u = (0, c.Q)(a);
            if (null == a) return null;
            let o = (0, p.rb)(a, u);
            return (0, i.jsx)(E, {
                product: o,
                prioritizedCurrency: n,
                promoPriceLayout: r,
                textVariant: l,
                discountIconSize: s,
            });
        },
        e: h,
    },
);
