n.d(t, {
    A: () => y,
});
var a = n(627968),
    l = n(64700),
    r = n(417597),
    i = n(397927),
    s = n(287809),
    o = n(405269),
    c = n(927578),
    d = n(298072),
    u = n(993408),
    m = n(740076),
    p = n(466459),
    h = n(623373),
    x = n(219103),
    g = n(561769),
    f = n(525723),
    b = n(57020),
    v = n(985018),
    j = n(491153);
let _ = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            d = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
            h = (0, g.sC)(),
            _ = c.Ay.canUseCollectibles(d),
            { isDisabled: y } = (0, m.I)(t.skuId),
            { isPurchased: A, isPartiallyOwnedBundle: C, isRented: S, rentalExpiresAt: O } = (0, p.h)(t),
            E = (0, u.G0)(t),
            T = (0, u.tt)(t),
            N = l.useMemo(() => (0, u.fT)(t, _), [t, _]),
            w = (0, f.V_)(t),
            {
                checkoutEligiblePrices: I,
                hasSufficientOrbs: k,
                shouldCheckoutWithOrbs: P,
            } = (0, b.FI)({
                product: t,
                isPremiumUser: _,
                prioritizedCurrency: n,
                hasDiscountOffer: null != w,
                isRental: null != h,
            }),
            R = E && !_;
        if (y)
            return (0, a.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.wu4gyV),
            });
        if (C)
            return (0, a.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.BEjTij),
            });
        if (S && null != O) {
            let e = (0, o.Tf)(Date.now(), O);
            return (0, a.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.format(v.t.Io7ozn, {
                    days: e.days.toString(),
                }),
            });
        }
        return A && !R
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
              : E
                ? (0, a.jsx)(i.Text, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: v.intl.string(v.t.rt69oo),
                  })
                : 0 === I.length
                  ? null
                  : (0, a.jsx)(x.x, {
                        price: I[0],
                        discount: N,
                        nitroIconType: _ ? "default" : void 0,
                        nitroIconSize: "sm",
                        discountOfferAmount: w,
                        className: P && !k ? j.c : void 0,
                        variant: "text-md/bold",
                    });
    },
    y = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, g.Vm)(t),
            r = (0, d.Q)(l);
        if (null == l) return null;
        let i = (0, h.rb)(l, r);
        return (0, a.jsx)(_, {
            product: i,
            prioritizedCurrency: n,
        });
    };
