n.d(t, { A: () => m });
var r = n(477900),
    i = n(582128),
    s = n(702841),
    l = n(834730),
    a = n(287809),
    o = n(158045),
    u = n(298072),
    d = n(993408),
    c = n(740076),
    I = n(466459),
    f = n(623373),
    p = n(219103),
    g = n(561769),
    A = n(57020),
    v = n(375708),
    x = n(178287);
function C(e) {
    let { product: t, prioritizedCurrency: n } = e,
        u = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        f = o.Ay.canUseCollectibles(u),
        g = (0, d.xM)(u),
        C = null != g,
        { isDisabled: m } = (0, c.I)(t.skuId),
        { isPurchased: _, isPartiallyOwnedBundle: h } = (0, I.h)(t),
        E = (0, d.G0)(t),
        b = (0, d.tt)(t),
        {
            checkoutEligiblePrices: R,
            hasSufficientOrbs: k,
            shouldCheckoutWithOrbs: y,
        } = (0, A.F)({ product: t, hasShopDiscount: C, prioritizedCurrency: n }),
        T = R[0]?.currency,
        S = i.useMemo(() => (0, d.fT)(t, C, T), [t, C, T]);
    return m
        ? (0, r.jsx)(l.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: v.intl.string(v.t.wu4gyV),
          })
        : h
          ? (0, r.jsx)(l.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.BEjTij),
            })
          : _ && !(E && !f)
            ? (0, r.jsx)(l.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: v.intl.string(v.t["6cfuDj"]),
              })
            : b
              ? (0, r.jsx)(l.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: v.intl.string(v.t.nBtvYB),
                })
              : E
                ? (0, r.jsx)(l.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: v.intl.string(v.t.rt69oo),
                  })
                : 0 === R.length
                  ? null
                  : (0, r.jsx)(p.x, {
                        priceAmount: R[0].amount,
                        priceCurrency: R[0].currency,
                        discount: S,
                        discountIconConfig: C
                            ? { displayMode: "default", source: g ?? d.D0.NITRO, size: "sm" }
                            : void 0,
                        className: y && !k ? x.c : void 0,
                        variant: "text-md/bold",
                    });
}
let m = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, g.Vm)(t),
        s = (0, u.Q)(i);
    if (null == i) return null;
    let l = (0, f.rb)(i, s);
    return (0, r.jsx)(C, { product: l, prioritizedCurrency: n });
};
