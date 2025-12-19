n.d(t, { Z: () => C });
var a = n(54381),
    r = n(473749),
    i = n(399606),
    l = n(481060),
    s = n(594174),
    o = n(55935),
    c = n(74538),
    d = n(429368),
    u = n(884697),
    m = n(290175),
    p = n(724994),
    h = n(409116),
    f = n(786040),
    x = n(58201),
    b = n(445794),
    g = n(956472),
    v = n(388032),
    j = n(897467);
let y = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            d = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            x = (0, f.jB)(),
            y = c.ZP.canUseCollectibles(d),
            { isDisabled: C } = (0, m.G)(t.skuId),
            { isPurchased: _, isPartiallyOwnedBundle: S, isRented: E, rentalExpiresAt: T } = (0, p.L)(t),
            O = (0, u.G1)(t),
            N = (0, u.rN)(t),
            P = r.useMemo(() => (0, u.BH)(t, y), [t, y]),
            w = (0, b.Iw)(t),
            {
                checkoutEligiblePrices: I,
                hasSufficientOrbs: k,
                shouldCheckoutWithOrbs: R,
            } = (0, g.Ip)({
                product: t,
                isPremiumUser: y,
                prioritizedCurrency: n,
                hasDiscountOffer: null != w,
                isRental: null != x,
            }),
            A = O && !y;
        if (C)
            return (0, a.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.wu4gyV),
            });
        if (S)
            return (0, a.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.BEjTij),
            });
        if (E && null != T) {
            let e = (0, o.TD)(Date.now(), T);
            return (0, a.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.format(v.t.Io7ozn, { days: e.days.toString() }),
            });
        }
        return _ && !A
            ? (0, a.jsx)(l.Text, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: v.intl.string(v.t["6cfuDj"]),
              })
            : N
              ? (0, a.jsx)(l.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: v.intl.string(v.t.nBtvYB),
                })
              : O
                ? (0, a.jsx)(l.Text, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: v.intl.string(v.t.rt69oo),
                  })
                : 0 === I.length
                  ? null
                  : (0, a.jsx)(h.F, {
                        price: I[0],
                        discount: P,
                        nitroIconType: y ? "default" : void 0,
                        nitroIconSize: "sm",
                        discountOfferAmount: w,
                        className: R && !k ? j.insufficientOrbs : void 0,
                        variant: "text-md/bold",
                    });
    },
    C = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            r = (0, f.LJ)(t),
            i = (0, d.o)(r);
        if (null == r) return null;
        let l = (0, x.W)(r, i);
        return (0, a.jsx)(y, {
            product: l,
            prioritizedCurrency: n,
        });
    };
