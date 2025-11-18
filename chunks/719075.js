n.d(t, { Z: () => x });
var r = n(54381),
    l = n(473749),
    i = n(399606),
    a = n(481060),
    o = n(594174),
    s = n(74538),
    c = n(429368),
    u = n(884697),
    d = n(290175),
    p = n(724994),
    g = n(409116),
    f = n(786040),
    h = n(58201),
    m = n(445794),
    C = n(956472),
    _ = n(388032),
    b = n(997033);
let v = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            c = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            h = (0, f.$l)(),
            v = s.ZP.canUseCollectibles(c),
            { isDisabled: x } = (0, d.G)(t.skuId),
            { isPurchased: E, isPartiallyOwnedBundle: O } = (0, p.L)(t),
            S = (0, u.G1)(t),
            y = (0, u.rN)(t),
            j = l.useMemo(() => (0, u.BH)(t, v), [t, v]),
            k = (0, m.Iw)(t),
            {
                checkoutEligiblePrices: I,
                hasSufficientOrbs: T,
                shouldCheckoutWithOrbs: L,
            } = (0, C.Ip)({
                product: t,
                isPremiumUser: v,
                prioritizedCurrency: n,
                hasDiscountOffer: null != k,
                isRental: h,
            }),
            B = S && !v;
        return x
            ? (0, r.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "text-tertiary",
                  lineClamp: 1,
                  children: _.intl.string(_.t.wu4gyV),
              })
            : O
              ? (0, r.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "text-tertiary",
                    lineClamp: 1,
                    children: _.intl.string(_.t.BEjTij),
                })
              : E && !B
                ? (0, r.jsx)(a.Text, {
                      variant: "text-md/medium",
                      color: "text-tertiary",
                      lineClamp: 1,
                      children: _.intl.string(_.t["6cfuDj"]),
                  })
                : y
                  ? (0, r.jsx)(a.Text, {
                        variant: "text-md/bold",
                        lineClamp: 1,
                        children: _.intl.string(_.t.nBtvYB),
                    })
                  : S
                    ? (0, r.jsx)(a.Text, {
                          variant: "text-md/bold",
                          lineClamp: 1,
                          children: _.intl.string(_.t.rt69oo),
                      })
                    : 0 === I.length
                      ? null
                      : (0, r.jsx)(g.F, {
                            price: I[0],
                            discount: j,
                            nitroIconType: v ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: k,
                            className: L && !T ? b.insufficientOrbs : void 0,
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
