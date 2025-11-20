n.d(t, { Z: () => E });
var r = n(54381),
    l = n(473749),
    i = n(399606),
    a = n(481060),
    s = n(594174),
    o = n(55935),
    c = n(74538),
    u = n(429368),
    d = n(884697),
    f = n(290175),
    g = n(724994),
    p = n(409116),
    m = n(786040),
    h = n(58201),
    C = n(445794),
    _ = n(956472),
    b = n(388032),
    v = n(997033);
let x = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            u = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            h = (0, m.jB)(),
            x = c.ZP.canUseCollectibles(u),
            { isDisabled: E } = (0, f.G)(t.skuId),
            { isPurchased: O, isPartiallyOwnedBundle: S, isRented: y, rentalExpiresAt: j } = (0, g.L)(t),
            k = (0, d.G1)(t),
            I = (0, d.rN)(t),
            T = l.useMemo(() => (0, d.BH)(t, x), [t, x]),
            L = (0, C.Iw)(t),
            {
                checkoutEligiblePrices: B,
                hasSufficientOrbs: P,
                shouldCheckoutWithOrbs: N,
            } = (0, _.Ip)({
                product: t,
                isPremiumUser: x,
                prioritizedCurrency: n,
                hasDiscountOffer: null != L,
                isRental: null != h,
            }),
            A = k && !x;
        if (E)
            return (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-tertiary",
                lineClamp: 1,
                children: b.intl.string(b.t.wu4gyV),
            });
        if (S)
            return (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-tertiary",
                lineClamp: 1,
                children: b.intl.string(b.t.BEjTij),
            });
        if (y && null != j) {
            let e = (0, o.TD)(Date.now(), j);
            return (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-tertiary",
                lineClamp: 1,
                children: b.intl.format(b.t.Io7ozn, { days: e.days.toString() }),
            });
        }
        return O && !A
            ? (0, r.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "text-tertiary",
                  lineClamp: 1,
                  children: b.intl.string(b.t["6cfuDj"]),
              })
            : I
              ? (0, r.jsx)(a.Text, {
                    variant: "text-md/bold",
                    color: "text-primary",
                    lineClamp: 1,
                    children: b.intl.string(b.t.nBtvYB),
                })
              : k
                ? (0, r.jsx)(a.Text, {
                      variant: "text-md/bold",
                      color: "text-primary",
                      lineClamp: 1,
                      children: b.intl.string(b.t.rt69oo),
                  })
                : 0 === B.length
                  ? null
                  : (0, r.jsx)(p.F, {
                        price: B[0],
                        discount: T,
                        nitroIconType: x ? "default" : void 0,
                        nitroIconSize: "sm",
                        discountOfferAmount: L,
                        className: N && !P ? v.insufficientOrbs : void 0,
                        variant: "text-md/bold",
                    });
    },
    E = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, m.LJ)(t),
            i = (0, u.o)(l);
        if (null == l) return null;
        let a = (0, h.W)(l, i);
        return (0, r.jsx)(x, {
            product: a,
            prioritizedCurrency: n,
        });
    };
