n.d(t, { Z: () => S });
var r = n(951288),
    l = n(647438),
    s = n(399606),
    a = n(481060),
    i = n(594174),
    o = n(74538),
    c = n(994587),
    u = n(884697),
    d = n(290175),
    g = n(724994),
    f = n(409116),
    p = n(786040),
    C = n(445794),
    h = n(956472),
    _ = n(231338),
    m = n(388032),
    b = n(997033);
let E = (e) => {
        let { product: t } = e,
            n = (0, c.Nd)(),
            p = null == n ? void 0 : n.tab,
            E = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
            S = o.ZP.canUseCollectibles(E),
            { isDisabled: v } = (0, d.G)(t.skuId),
            { isPurchased: x, isPartiallyOwnedBundle: O } = (0, g.L)(t),
            y = (0, u.G1)(t),
            T = (0, u.rN)(t),
            L = l.useMemo(() => (0, u.BH)(t, S), [t, S]),
            j = (0, C.Iw)(t),
            { displayPrices: k, hasSufficientOrbs: I } = (0, h.Ip)({
                product: t,
                isPremiumUser: S,
                tab: p,
                hasDiscountOffer: null != j,
            }),
            P = y && !S;
        return v
            ? (0, r.jsx)(a.Text, {
                  variant: "text-md/semibold",
                  color: "header-muted",
                  children: m.intl.string(m.t.wu4gyc),
              })
            : O
              ? (0, r.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: m.intl.string(m.t.BEjTio),
                })
              : x && !P
                ? (0, r.jsx)(a.Text, {
                      variant: "text-md/semibold",
                      children: m.intl.string(m.t["6cfuDg"]),
                  })
                : T
                  ? (0, r.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        children: m.intl.string(m.t.nBtvYG),
                    })
                  : y
                    ? (0, r.jsx)(a.Text, {
                          variant: "text-md/semibold",
                          children: m.intl.string(m.t.rt69oq),
                      })
                    : 0 === k.length
                      ? null
                      : (0, r.jsx)(f.F, {
                            price: k[0],
                            discount: L,
                            nitroIconType: S ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: j,
                            className: k[0].currency !== _.pK.DISCORD_ORB || I ? void 0 : b.insufficientOrbs,
                        });
    },
    S = (e) => {
        let { skuId: t } = e,
            n = (0, p.LJ)(t);
        return null == n ? null : (0, r.jsx)(E, { product: n });
    };
