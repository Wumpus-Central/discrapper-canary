n.d(t, { Z: () => E });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    o = n(481060),
    s = n(594174),
    a = n(74538),
    c = n(884697),
    u = n(290175),
    d = n(724994),
    g = n(409116),
    f = n(786040),
    p = n(445794),
    C = n(956472),
    h = n(231338),
    _ = n(388032),
    m = n(997033);
let b = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            f = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            b = a.ZP.canUseCollectibles(f),
            { isDisabled: E } = (0, u.G)(t.skuId),
            { isPurchased: S, isPartiallyOwnedBundle: v } = (0, d.L)(t),
            O = (0, c.G1)(t),
            x = (0, c.rN)(t),
            y = l.useMemo(() => (0, c.BH)(t, b), [t, b]),
            T = (0, p.Iw)(t),
            { displayPrices: j, hasSufficientOrbs: L } = (0, C.Ip)({
                product: t,
                isPremiumUser: b,
                prioritizedCurrency: n,
                hasDiscountOffer: null != T,
            }),
            k = O && !b;
        return E
            ? (0, r.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  color: "header-muted",
                  children: _.intl.string(_.t.wu4gyc),
              })
            : v
              ? (0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: _.intl.string(_.t.BEjTio),
                })
              : S && !k
                ? (0, r.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      children: _.intl.string(_.t["6cfuDg"]),
                  })
                : x
                  ? (0, r.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        children: _.intl.string(_.t.nBtvYG),
                    })
                  : O
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-md/semibold",
                          children: _.intl.string(_.t.rt69oq),
                      })
                    : 0 === j.length
                      ? null
                      : (0, r.jsx)(g.F, {
                            price: j[0],
                            discount: y,
                            nitroIconType: b ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: T,
                            className: j[0].currency !== h.pK.DISCORD_ORB || L ? void 0 : m.insufficientOrbs,
                        });
    },
    E = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, f.LJ)(t);
        return null == l
            ? null
            : (0, r.jsx)(b, {
                  product: l,
                  prioritizedCurrency: n,
              });
    };
