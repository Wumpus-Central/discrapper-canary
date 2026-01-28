n.d(t, {
    A: () => v,
});
var r = n(627968),
    i = n(64700),
    a = n(417597),
    o = n(397927),
    s = n(287809),
    l = n(405269),
    c = n(927578),
    u = n(298072),
    d = n(993408),
    f = n(740076),
    p = n(466459),
    _ = n(623373),
    h = n(219103),
    m = n(561769),
    g = n(525723),
    E = n(57020),
    y = n(985018),
    b = n(491153);
let O = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            u = (0, a.bG)([s.default], () => s.default.getCurrentUser()),
            _ = (0, m.sC)(),
            O = c.Ay.canUseCollectibles(u),
            { isDisabled: v } = (0, f.I)(t.skuId),
            { isPurchased: A, isPartiallyOwnedBundle: I, isRented: S, rentalExpiresAt: T } = (0, p.h)(t),
            C = (0, d.G0)(t),
            N = (0, d.tt)(t),
            w = i.useMemo(() => (0, d.fT)(t, O), [t, O]),
            R = (0, g.V_)(t),
            P = null != R,
            {
                checkoutEligiblePrices: D,
                hasSufficientOrbs: L,
                shouldCheckoutWithOrbs: x,
            } = (0, E.FI)({
                product: t,
                isPremiumUser: O,
                prioritizedCurrency: n,
                hasDiscountOffer: P,
                isRental: null != _,
            }),
            M = C && !O;
        if (v)
            return (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: y.intl.string(y.t.wu4gyV),
            });
        if (I)
            return (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: y.intl.string(y.t.BEjTij),
            });
        if (S && null != T) {
            let e = (0, l.Tf)(Date.now(), T);
            return (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: y.intl.format(y.t.Io7ozn, {
                    days: e.days.toString(),
                }),
            });
        }
        return A && !M
            ? (0, r.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: y.intl.string(y.t["6cfuDj"]),
              })
            : N
              ? (0, r.jsx)(o.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: y.intl.string(y.t.nBtvYB),
                })
              : C
                ? (0, r.jsx)(o.Text, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: y.intl.string(y.t.rt69oo),
                  })
                : 0 === D.length
                  ? null
                  : (0, r.jsx)(h.x, {
                        priceAmount: D[0].amount,
                        priceCurrency: D[0].currency,
                        discount: w,
                        nitroIconType: O ? "default" : void 0,
                        nitroIconSize: "sm",
                        discountOfferAmount: R,
                        className: x && !L ? b.c : void 0,
                        variant: "text-md/bold",
                    });
    },
    v = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            i = (0, m.Vm)(t),
            a = (0, u.Q)(i);
        if (null == i) return null;
        let o = (0, _.rb)(i, a);
        return (0, r.jsx)(O, {
            product: o,
            prioritizedCurrency: n,
        });
    };
