var r,
    i = n(477900),
    l = n(582128),
    s = n(164636),
    a = n(834730),
    u = n(287809),
    o = n(448645),
    d = n(298072),
    c = n(993408),
    f = n(740076),
    I = n(466459),
    v = n(623373),
    m = n(506742),
    p = n(219103),
    g = n(561769),
    A = n(57020),
    E = n(792996),
    x = n(178287),
    h = (((r = {}).INLINE = "INLINE"), (r.STACKED = "STACKED"), r);
function _(e) {
    let { product: t, prioritizedCurrency: n, promoPriceLayout: r } = e,
        d = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        v = o.Ay.canUseCollectibles(d),
        g = (0, c.xM)(d),
        h = null != g,
        { isDisabled: _ } = (0, f.I)(t.skuId),
        { isPurchased: C, isPartiallyOwnedBundle: b } = (0, I.h)(t),
        R = (0, c.G0)(t),
        k = (0, c.tt)(t),
        {
            checkoutEligiblePrices: y,
            checkoutEligibleFormerPrices: S,
            hasSufficientOrbs: T,
            shouldCheckoutWithOrbs: j,
        } = (0, A.F)({ product: t, hasShopDiscount: h, prioritizedCurrency: n }),
        O = y[0]?.currency,
        P = l.useMemo(() => (0, c.fT)(t, h, O), [t, h, O]);
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
        L = null != N,
        V = L && "STACKED" === r,
        D = j && !T ? x.cR : void 0,
        M = (0, i.jsx)(p.x, {
            priceAmount: y[0].amount,
            priceCurrency: y[0].currency,
            discount: L ? c.rr : P,
            discountIconConfig: h ? { displayMode: "default", source: g ?? c.D0.NITRO, size: "sm" } : void 0,
            className: V ? x.wC : D,
            variant: "body-md/semibold",
        });
    return L
        ? (0, i.jsxs)("div", {
              className: V ? x.rV : x.KQ,
              children: [(0, i.jsx)(m.a, { price: N, variant: "body-md/medium", className: V ? x.ug : void 0 }), M],
          })
        : M;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { skuId: t, prioritizedCurrency: n, promoPriceLayout: r = "INLINE" } = e,
                l = (0, g.Vm)(t),
                s = (0, d.Q)(l);
            if (null == l) return null;
            let a = (0, v.rb)(l, s);
            return (0, i.jsx)(_, { product: a, prioritizedCurrency: n, promoPriceLayout: r });
        },
        e: h,
    },
);
