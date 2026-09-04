r.d(t, { A: () => h });
var n = r(477900),
    i = r(582128),
    s = r(575593),
    l = r(702841),
    a = r(834730),
    o = r(287809),
    u = r(158045),
    c = r(298072),
    d = r(993408),
    p = r(13875),
    g = r(740076),
    f = r(466459),
    I = r(623373),
    _ = r(219103),
    A = r(561769),
    C = r(57020),
    m = r(375708),
    v = r(178287);
function E(e) {
    let { product: t, prioritizedCurrency: r } = e,
        c = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        I = u.Ay.canUseCollectibles(c),
        A = (0, d.xM)(c),
        E = (0, p.Do)("ProductCardPriceInner") && t.type === s.R.PROFILE_FRAME,
        h = null != A || E,
        { isDisabled: x } = (0, g.I)(t.skuId),
        { isPurchased: R, isPartiallyOwnedBundle: k } = (0, f.h)(t),
        b = (0, d.G0)(t),
        y = (0, d.tt)(t),
        {
            checkoutEligiblePrices: S,
            hasSufficientOrbs: L,
            shouldCheckoutWithOrbs: P,
        } = (0, C.F)({ product: t, hasShopDiscount: h, prioritizedCurrency: r }),
        T = S[0]?.currency,
        O = i.useMemo(() => (0, d.fT)(t, h, T), [t, h, T]);
    return x
        ? (0, n.jsx)(a.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: m.intl.string(m.t.wu4gyV),
          })
        : k
          ? (0, n.jsx)(a.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: m.intl.string(m.t.BEjTij),
            })
          : R && !(b && !I)
            ? (0, n.jsx)(a.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: m.intl.string(m.t["6cfuDj"]),
              })
            : y
              ? (0, n.jsx)(a.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: m.intl.string(m.t.nBtvYB),
                })
              : b
                ? (0, n.jsx)(a.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: m.intl.string(m.t.rt69oo),
                  })
                : 0 === S.length
                  ? null
                  : (0, n.jsx)(_.x, {
                        priceAmount: S[0].amount,
                        priceCurrency: S[0].currency,
                        discount: O,
                        discountIconConfig: h
                            ? { displayMode: "default", source: A ?? d.D0.NITRO, size: "sm" }
                            : void 0,
                        className: P && !L ? v.c : void 0,
                        variant: "text-md/bold",
                    });
}
let h = function (e) {
    let { skuId: t, prioritizedCurrency: r } = e,
        i = (0, A.Vm)(t),
        s = (0, c.Q)(i);
    if (null == i) return null;
    let l = (0, I.rb)(i, s);
    return (0, n.jsx)(E, { product: l, prioritizedCurrency: r });
};
