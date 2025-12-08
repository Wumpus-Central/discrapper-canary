n.d(t, { Z: () => y });
var a = n(54381),
    l = n(473749),
    r = n(399606),
    i = n(481060),
    s = n(594174),
    o = n(55935),
    c = n(74538),
    d = n(429368),
    u = n(884697),
    m = n(290175),
    p = n(724994),
    h = n(409116),
    x = n(786040),
    f = n(58201),
    g = n(445794),
    b = n(956472),
    v = n(388032),
    j = n(997033);
let _ = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            d = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
            f = (0, x.jB)(),
            _ = c.ZP.canUseCollectibles(d),
            { isDisabled: y } = (0, m.G)(t.skuId),
            { isPurchased: C, isPartiallyOwnedBundle: S, isRented: E, rentalExpiresAt: O } = (0, p.L)(t),
            N = (0, u.G1)(t),
            T = (0, u.rN)(t),
            P = l.useMemo(() => (0, u.BH)(t, _), [t, _]),
            I = (0, g.Iw)(t),
            {
                checkoutEligiblePrices: w,
                hasSufficientOrbs: k,
                shouldCheckoutWithOrbs: R,
            } = (0, b.Ip)({
                product: t,
                isPremiumUser: _,
                prioritizedCurrency: n,
                hasDiscountOffer: null != I,
                isRental: null != f,
            }),
            A = N && !_;
        if (y)
            return (0, a.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.wu4gyV),
            });
        if (S)
            return (0, a.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.BEjTij),
            });
        if (E && null != O) {
            let e = (0, o.TD)(Date.now(), O);
            return (0, a.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.format(v.t.Io7ozn, { days: e.days.toString() }),
            });
        }
        return C && !A
            ? (0, a.jsx)(i.Text, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: v.intl.string(v.t["6cfuDj"]),
              })
            : T
              ? (0, a.jsx)(i.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: v.intl.string(v.t.nBtvYB),
                })
              : N
                ? (0, a.jsx)(i.Text, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: v.intl.string(v.t.rt69oo),
                  })
                : 0 === w.length
                  ? null
                  : (0, a.jsx)(h.F, {
                        price: w[0],
                        discount: P,
                        nitroIconType: _ ? "default" : void 0,
                        nitroIconSize: "sm",
                        discountOfferAmount: I,
                        className: R && !k ? j.insufficientOrbs : void 0,
                        variant: "text-md/bold",
                    });
    },
    y = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, x.LJ)(t),
            r = (0, d.o)(l);
        if (null == l) return null;
        let i = (0, f.W)(l, r);
        return (0, a.jsx)(_, {
            product: i,
            prioritizedCurrency: n,
        });
    };
