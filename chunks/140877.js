var r,
    i = n(477900),
    s = n(582128),
    l = n(164636),
    a = n(834730),
    u = n(287809),
    o = n(722178),
    d = n(298072),
    c = n(993408),
    f = n(740076),
    I = n(466459),
    v = n(623373),
    p = n(506742),
    m = n(219103),
    A = n(561769),
    g = n(57020),
    E = n(792996),
    x = n(178287),
    h = (((r = {}).INLINE = "INLINE"), (r.STACKED = "STACKED"), r);
function _(e) {
    let { product: t, prioritizedCurrency: n, promoPriceLayout: r } = e,
        d = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        v = o.Ay.canUseCollectibles(d),
        A = (0, c.xM)(d),
        h = null != A,
        { isDisabled: _ } = (0, f.I)(t.skuId),
        { isPurchased: C, isPartiallyOwnedBundle: b } = (0, I.h)(t),
        R = (0, c.G0)(t),
        k = (0, c.tt)(t),
        {
            checkoutEligiblePrices: y,
            checkoutEligibleFormerPrices: S,
            hasSufficientOrbs: T,
            shouldCheckoutWithOrbs: j,
        } = (0, g.F)({ product: t, hasShopDiscount: h, prioritizedCurrency: n }),
        O = y[0]?.currency,
        P = s.useMemo(() => (0, c.fT)(t, h, O), [t, h, O]);
    if (_)
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
    let N = S[0],
        V = null != N,
        L = V && "STACKED" === r,
        D = j && !T ? x.cR : void 0,
        M = (0, i.jsx)(m.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: V ? c.rr : P,
            discountIconConfig: h ? { displayMode: "default", source: A ?? c.D0.NITRO, size: "sm" } : void 0,
            className: L ? x.wC : D,
            variant: "body-md/semibold",
        });
    return V
        ? (0, i.jsxs)("div", {
              className: L ? x.rV : x.KQ,
              children: [(0, i.jsx)(p.a, { price: N, variant: "body-md/medium", className: L ? x.ug : void 0 }), M],
          })
        : M;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { skuId: t, prioritizedCurrency: n, promoPriceLayout: r = "INLINE" } = e,
                s = (0, A.Vm)(t),
                l = (0, d.Q)(s);
            if (null == s) return null;
            let a = (0, v.rb)(s, l);
            return (0, i.jsx)(_, { product: a, prioritizedCurrency: n, promoPriceLayout: r });
        },
        e: h,
    },
);
