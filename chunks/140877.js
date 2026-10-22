n.d(t, { A: () => _ });
var r = n(477900),
    i = n(582128),
    s = n(702841),
    a = n(834730),
    l = n(287809),
    u = n(158045),
    o = n(298072),
    d = n(993408),
    c = n(740076),
    I = n(466459),
    f = n(623373),
    v = n(219103),
    p = n(561769),
    g = n(57020),
    x = n(105292),
    A = n(178287);
function m(e) {
    let { product: t, prioritizedCurrency: n } = e,
        o = (0, s.bG)([l.default], () => l.default.getCurrentUser()),
        f = u.Ay.canUseCollectibles(o),
        p = (0, d.xM)(o),
        m = null != p,
        { isDisabled: _ } = (0, c.I)(t.skuId),
        { isPurchased: h, isPartiallyOwnedBundle: E } = (0, I.h)(t),
        C = (0, d.G0)(t),
        b = (0, d.tt)(t),
        {
            checkoutEligiblePrices: R,
            hasSufficientOrbs: k,
            shouldCheckoutWithOrbs: y,
        } = (0, g.F)({ product: t, hasShopDiscount: m, prioritizedCurrency: n }),
        j = R[0]?.currency,
        T = i.useMemo(() => (0, d.fT)(t, m, j), [t, m, j]);
    return _
        ? (0, r.jsx)(a.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: x.intl.string(x.t.wu4gyV),
          })
        : E
          ? (0, r.jsx)(a.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: x.intl.string(x.t.BEjTij),
            })
          : h && !(C && !f)
            ? (0, r.jsx)(a.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: x.intl.string(x.t["6cfuDj"]),
              })
            : b
              ? (0, r.jsx)(a.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: x.intl.string(x.t.nBtvYB),
                })
              : C
                ? (0, r.jsx)(a.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: x.intl.string(x.t.rt69oo),
                  })
                : 0 === R.length
                  ? null
                  : (0, r.jsx)(v.x, {
                        priceAmount: R[0].amount,
                        priceCurrency: R[0].currency,
                        discount: T,
                        discountIconConfig: m
                            ? { displayMode: "default", source: p ?? d.D0.NITRO, size: "sm" }
                            : void 0,
                        className: y && !k ? A.c : void 0,
                        variant: "text-md/bold",
                    });
}
let _ = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, p.Vm)(t),
        s = (0, o.Q)(i);
    if (null == i) return null;
    let a = (0, f.rb)(i, s);
    return (0, r.jsx)(m, { product: a, prioritizedCurrency: n });
};
