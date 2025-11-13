n.d(t, { Z: () => x });
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(481060),
    o = n(594174),
    s = n(74538),
    c = n(429368),
    u = n(884697),
    d = n(290175),
    g = n(724994),
    p = n(409116),
    f = n(786040),
    h = n(58201),
    C = n(445794),
    m = n(956472),
    _ = n(388032),
    b = n(997033);
let v = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            c = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            f = s.ZP.canUseCollectibles(c),
            { isDisabled: h } = (0, d.G)(t.skuId),
            { isPurchased: v, isPartiallyOwnedBundle: x } = (0, g.L)(t),
            E = (0, u.G1)(t),
            S = (0, u.rN)(t),
            O = l.useMemo(() => (0, u.BH)(t, f), [t, f]),
            y = (0, C.Iw)(t),
            {
                checkoutEligiblePrices: j,
                hasSufficientOrbs: k,
                shouldCheckoutWithOrbs: I,
            } = (0, m.Ip)({
                product: t,
                isPremiumUser: f,
                prioritizedCurrency: n,
                hasDiscountOffer: null != y,
            }),
            T = E && !f;
        return h
            ? (0, r.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "text-tertiary",
                  lineClamp: 1,
                  children: _.intl.string(_.t.wu4gyV),
              })
            : x
              ? (0, r.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "text-tertiary",
                    lineClamp: 1,
                    children: _.intl.string(_.t.BEjTij),
                })
              : v && !T
                ? (0, r.jsx)(a.Text, {
                      variant: "text-md/medium",
                      color: "text-tertiary",
                      lineClamp: 1,
                      children: _.intl.string(_.t["6cfuDj"]),
                  })
                : S
                  ? (0, r.jsx)(a.Text, {
                        variant: "text-md/bold",
                        lineClamp: 1,
                        children: _.intl.string(_.t.nBtvYB),
                    })
                  : E
                    ? (0, r.jsx)(a.Text, {
                          variant: "text-md/bold",
                          lineClamp: 1,
                          children: _.intl.string(_.t.rt69oo),
                      })
                    : 0 === j.length
                      ? null
                      : (0, r.jsx)(p.F, {
                            price: j[0],
                            discount: O,
                            nitroIconType: f ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: y,
                            className: I && !k ? b.insufficientOrbs : void 0,
                            variant: "text-md/bold",
                        });
    },
    x = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, f.LJ)(t),
            i = (0, c.o)(l);
        if (null == l) return null;
        let a = (0, h.W)(l, i);
        return (0, r.jsx)(v, {
            product: a,
            prioritizedCurrency: n,
        });
    };
