var r,
    i = n(477900),
    s = n(582128),
    a = n(164636),
    l = n(834730),
    o = n(287809),
    u = n(448645),
    d = n(298072),
    c = n(993408),
    I = n(740076),
    v = n(466459),
    f = n(623373),
    p = n(506742),
    m = n(219103),
    g = n(561769),
    x = n(57020),
    _ = n(792996),
    A = n(178287),
    E = (((r = {}).INLINE = "INLINE"), (r.STACKED = "STACKED"), r);
function C(e) {
    let { product: t, prioritizedCurrency: n, promoPriceLayout: r, textVariant: d, discountIconSize: f = "sm" } = e,
        g = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        E = u.Ay.canUseCollectibles(g),
        C = (0, c.xM)(g),
        h = null != C,
        { isDisabled: b } = (0, I.I)(t.skuId),
        { isPurchased: R, isPartiallyOwnedBundle: k } = (0, v.h)(t),
        O = (0, c.G0)(t),
        y = (0, c.tt)(t),
        {
            checkoutEligiblePrices: S,
            checkoutEligibleFormerPrices: j,
            hasSufficientOrbs: T,
            shouldCheckoutWithOrbs: N,
        } = (0, x.F)({ product: t, hasShopDiscount: h, prioritizedCurrency: n }),
        P = S[0]?.currency,
        V = s.useMemo(() => (0, c.fT)(t, h, P), [t, h, P]);
    if (b)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: _.intl.string(_.t.wu4gyV),
        });
    if (k)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: _.intl.string(_.t.BEjTij),
        });
    if (R && !(O && !E))
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/medium",
            color: "text-muted",
            lineClamp: 1,
            children: _.intl.string(_.t["6cfuDj"]),
        });
    if (y)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: _.intl.string(_.t.nBtvYB),
        });
    if (O)
        return (0, i.jsx)(l.E, {
            variant: d ?? "body-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: _.intl.string(_.t.rt69oo),
        });
    if (0 === S.length) return null;
    let L = j[0],
        D = null != L,
        M = D && "STACKED" === r,
        B = N && !T ? A.cR : void 0,
        w = (0, i.jsx)(m.x, {
            priceAmount: S[0].amount,
            priceCurrency: S[0].currency,
            discount: D ? c.rr : V,
            discountIconConfig: h ? { displayMode: "default", source: C ?? c.D0.NITRO, size: f } : void 0,
            className: M ? A.wC : B,
            variant: d ?? "body-md/semibold",
        });
    return D
        ? (0, i.jsxs)("div", {
              className: M ? A.rV : A.KQ,
              children: [(0, i.jsx)(p.a, { price: L, variant: "body-md/medium", className: M ? A.ug : void 0 }), w],
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
                    textVariant: s,
                    discountIconSize: a,
                } = e,
                l = (0, g.Vm)(t),
                o = (0, d.Q)(l);
            if (null == l) return null;
            let u = (0, f.rb)(l, o);
            return (0, i.jsx)(C, {
                product: u,
                prioritizedCurrency: n,
                promoPriceLayout: r,
                textVariant: s,
                discountIconSize: a,
            });
        },
        e: E,
    },
);
