n.d(t, { A: () => v });
var r = n(477900),
    i = n(582128),
    s = n(575593),
    l = n(702841),
    a = n(834730),
    o = n(287809),
    u = n(158045),
    c = n(298072),
    d = n(993408),
    p = n(13875),
    g = n(740076),
    I = n(466459),
    _ = n(623373),
    f = n(219103),
    C = n(561769),
    A = n(57020),
    m = n(375708),
    E = n(178287);
function h(e) {
    let { product: t, prioritizedCurrency: n } = e,
        c = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        _ = u.Ay.canUseCollectibles(c),
        C = (0, d.xM)(c),
        h = (0, p.Do)("ProductCardPriceInner") && t.type === s.R.PROFILE_FRAME,
        v = null != C || h,
        { isDisabled: x } = (0, g.I)(t.skuId),
        { isPurchased: R, isPartiallyOwnedBundle: b } = (0, I.h)(t),
        k = (0, d.G0)(t),
        y = (0, d.tt)(t),
        {
            checkoutEligiblePrices: S,
            hasSufficientOrbs: L,
            shouldCheckoutWithOrbs: T,
        } = (0, A.F)({ product: t, hasShopDiscount: v, prioritizedCurrency: n }),
        O = S[0]?.currency,
        j = i.useMemo(() => (0, d.fT)(t, v, O), [t, v, O]);
    return x
        ? (0, r.jsx)(a.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: m.intl.string(m.t.wu4gyV),
          })
        : b
          ? (0, r.jsx)(a.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: m.intl.string(m.t.BEjTij),
            })
          : R && !(k && !_)
            ? (0, r.jsx)(a.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: m.intl.string(m.t["6cfuDj"]),
              })
            : y
              ? (0, r.jsx)(a.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: m.intl.string(m.t.nBtvYB),
                })
              : k
                ? (0, r.jsx)(a.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: m.intl.string(m.t.rt69oo),
                  })
                : 0 === S.length
                  ? null
                  : (0, r.jsx)(f.x, {
                        priceAmount: S[0].amount,
                        priceCurrency: S[0].currency,
                        discount: j,
                        discountIconConfig: v
                            ? { displayMode: "default", source: C ?? d.D0.NITRO, size: "sm" }
                            : void 0,
                        className: T && !L ? E.c : void 0,
                        variant: "text-md/bold",
                    });
}
let v = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, C.Vm)(t),
        s = (0, c.Q)(i);
    if (null == i) return null;
    let l = (0, _.rb)(i, s);
    return (0, r.jsx)(h, { product: l, prioritizedCurrency: n });
};
