n.d(t, { Z: () => v });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    s = n(481060),
    o = n(594174),
    a = n(74538),
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
            E = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            v = a.ZP.canUseCollectibles(E),
            { isDisabled: S } = (0, d.G)(t.skuId),
            { isPurchased: O, isPartiallyOwnedBundle: x } = (0, g.L)(t),
            y = (0, u.G1)(t),
            T = (0, u.rN)(t),
            j = l.useMemo(() => (0, u.BH)(t, v), [t, v]),
            L = (0, C.Iw)(t),
            { displayPrices: k, hasSufficientOrbs: I } = (0, h.Ip)({
                product: t,
                isPremiumUser: v,
                tab: p,
                hasDiscountOffer: null != L,
            }),
            B = y && !v;
        return S
            ? (0, r.jsx)(s.Text, {
                  variant: "text-md/semibold",
                  color: "header-muted",
                  children: m.intl.string(m.t.wu4gyc),
              })
            : x
              ? (0, r.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: m.intl.string(m.t.BEjTio),
                })
              : O && !B
                ? (0, r.jsx)(s.Text, {
                      variant: "text-md/semibold",
                      children: m.intl.string(m.t["6cfuDg"]),
                  })
                : T
                  ? (0, r.jsx)(s.Text, {
                        variant: "text-md/semibold",
                        children: m.intl.string(m.t.nBtvYG),
                    })
                  : y
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-md/semibold",
                          children: m.intl.string(m.t.rt69oq),
                      })
                    : 0 === k.length
                      ? null
                      : (0, r.jsx)(f.F, {
                            price: k[0],
                            discount: j,
                            nitroIconType: v ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: L,
                            className: k[0].currency !== _.pK.DISCORD_ORB || I ? void 0 : b.insufficientOrbs,
                        });
    },
    v = (e) => {
        let { skuId: t } = e,
            n = (0, p.LJ)(t);
        return null == n ? null : (0, r.jsx)(E, { product: n });
    };
