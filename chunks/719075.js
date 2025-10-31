n.d(t, { Z: () => v });
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
    C = n(231338),
    m = n(388032),
    _ = n(997033);
let b = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            g = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
            b = o.ZP.canUseCollectibles(g),
            { isDisabled: v } = (0, u.G)(t.skuId),
            { isPurchased: E, isPartiallyOwnedBundle: x } = (0, d.L)(t),
            O = (0, c.G1)(t),
            S = (0, c.rN)(t),
            y = l.useMemo(() => (0, c.BH)(t, b), [t, b]),
            j = (0, f.Iw)(t),
            { displayPrices: k, hasSufficientOrbs: I } = (0, h.Ip)({
                product: t,
                isPremiumUser: b,
                prioritizedCurrency: n,
                hasDiscountOffer: null != j,
            }),
            T = O && !b;
        return v
            ? (0, r.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-tertiary",
                  children: m.intl.string(m.t.wu4gyV),
              })
            : x
              ? (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-tertiary",
                    children: m.intl.string(m.t.BEjTij),
                })
              : E && !T
                ? (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-tertiary",
                      children: m.intl.string(m.t["6cfuDj"]),
                  })
                : S
                  ? (0, r.jsx)(s.Text, {
                        variant: "text-md/bold",
                        children: m.intl.string(m.t.nBtvYB),
                    })
                  : O
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-md/bold",
                          children: m.intl.string(m.t.rt69oo),
                      })
                    : 0 === k.length
                      ? null
                      : (0, r.jsx)(p.F, {
                            price: k[0],
                            discount: y,
                            nitroIconType: b ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: j,
                            className: k[0].currency !== C.pK.DISCORD_ORB || I ? void 0 : _.insufficientOrbs,
                            variant: "text-md/bold",
                        });
    },
    v = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, g.LJ)(t);
        return null == l
            ? null
            : (0, r.jsx)(b, {
                  product: l,
                  prioritizedCurrency: n,
              });
    };
