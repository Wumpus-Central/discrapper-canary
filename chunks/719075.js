n.d(t, { Z: () => b });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    s = n(481060),
    a = n(594174),
    o = n(74538),
    c = n(884697),
    u = n(290175),
    d = n(724994),
    p = n(409116),
    g = n(786040),
    f = n(445794),
    h = n(956472),
    C = n(388032),
    m = n(189084);
let _ = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            g = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
            _ = o.ZP.canUseCollectibles(g),
            { isDisabled: b } = (0, u.G)(t.skuId),
            { isPurchased: v, isPartiallyOwnedBundle: E } = (0, d.L)(t),
            x = (0, c.G1)(t),
            O = (0, c.rN)(t),
            S = l.useMemo(() => (0, c.BH)(t, _), [t, _]),
            y = (0, f.Iw)(t),
            {
                checkoutEligiblePrices: j,
                hasSufficientOrbs: k,
                shouldCheckoutWithOrbs: I,
            } = (0, h.Ip)({
                product: t,
                isPremiumUser: _,
                prioritizedCurrency: n,
                hasDiscountOffer: null != y,
            }),
            T = x && !_;
        return b
            ? (0, r.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-tertiary",
                  children: C.intl.string(C.t.wu4gyV),
              })
            : E
              ? (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-tertiary",
                    children: C.intl.string(C.t.BEjTij),
                })
              : v && !T
                ? (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-tertiary",
                      children: C.intl.string(C.t["6cfuDj"]),
                  })
                : O
                  ? (0, r.jsx)(s.Text, {
                        variant: "text-md/bold",
                        children: C.intl.string(C.t.nBtvYB),
                    })
                  : x
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-md/bold",
                          children: C.intl.string(C.t.rt69oo),
                      })
                    : 0 === j.length
                      ? null
                      : (0, r.jsx)(p.F, {
                            price: j[0],
                            discount: S,
                            nitroIconType: _ ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: y,
                            className: I && !k ? m.insufficientOrbs : void 0,
                            variant: "text-md/bold",
                        });
    },
    b = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, g.LJ)(t);
        return null == l
            ? null
            : (0, r.jsx)(_, {
                  product: l,
                  prioritizedCurrency: n,
              });
    };
