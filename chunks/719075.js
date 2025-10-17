n.d(t, { Z: () => v });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(481060),
    o = n(594174),
    s = n(74538),
    c = n(884697),
    u = n(290175),
    d = n(724994),
    g = n(409116),
    p = n(786040),
    f = n(445794),
    C = n(956472),
    h = n(231338),
    _ = n(388032),
    m = n(997033);
let b = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            p = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            b = s.ZP.canUseCollectibles(p),
            { isDisabled: v } = (0, u.G)(t.skuId),
            { isPurchased: E, isPartiallyOwnedBundle: x } = (0, d.L)(t),
            O = (0, c.G1)(t),
            S = (0, c.rN)(t),
            y = l.useMemo(() => (0, c.BH)(t, b), [t, b]),
            j = (0, f.Iw)(t),
            { displayPrices: k, hasSufficientOrbs: T } = (0, C.Ip)({
                product: t,
                isPremiumUser: b,
                prioritizedCurrency: n,
                hasDiscountOffer: null != j,
            }),
            L = O && !b;
        return v
            ? (0, r.jsx)(a.Text, {
                  variant: "text-md/semibold",
                  color: "header-muted",
                  children: _.intl.string(_.t.wu4gyc),
              })
            : x
              ? (0, r.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: _.intl.string(_.t.BEjTio),
                })
              : E && !L
                ? (0, r.jsx)(a.Text, {
                      variant: "text-md/semibold",
                      children: _.intl.string(_.t["6cfuDg"]),
                  })
                : S
                  ? (0, r.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        children: _.intl.string(_.t.nBtvYG),
                    })
                  : O
                    ? (0, r.jsx)(a.Text, {
                          variant: "text-md/semibold",
                          children: _.intl.string(_.t.rt69oq),
                      })
                    : 0 === k.length
                      ? null
                      : (0, r.jsx)(g.F, {
                            price: k[0],
                            discount: y,
                            nitroIconType: b ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: j,
                            className: k[0].currency !== h.pK.DISCORD_ORB || T ? void 0 : m.insufficientOrbs,
                        });
    },
    v = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, p.LJ)(t);
        return null == l
            ? null
            : (0, r.jsx)(b, {
                  product: l,
                  prioritizedCurrency: n,
              });
    };
