n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    i = n(417597),
    r = n(397927),
    s = n(287809),
    o = n(405269),
    c = n(927578),
    d = n(298072),
    u = n(993408),
    m = n(740076),
    p = n(466459),
    h = n(219103),
    f = n(561769),
    x = n(767503),
    b = n(525723),
    g = n(57020),
    v = n(985018),
    j = n(491153);
let y = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            d = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
            x = (0, f.sC)(),
            y = c.Ay.canUseCollectibles(d),
            { isDisabled: _ } = (0, m.I)(t.skuId),
            { isPurchased: A, isPartiallyOwnedBundle: C, isRented: S, rentalExpiresAt: O } = (0, p.h)(t),
            E = (0, u.G0)(t),
            N = (0, u.tt)(t),
            T = l.useMemo(() => (0, u.fT)(t, y), [t, y]),
            I = (0, b.V_)(t),
            {
                checkoutEligiblePrices: w,
                hasSufficientOrbs: k,
                shouldCheckoutWithOrbs: P,
            } = (0, g.FI)({
                product: t,
                isPremiumUser: y,
                prioritizedCurrency: n,
                hasDiscountOffer: null != I,
                isRental: null != x,
            }),
            R = E && !y;
        if (_)
            return (0, a.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.wu4gyV),
            });
        if (C)
            return (0, a.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.string(v.t.BEjTij),
            });
        if (S && null != O) {
            let e = (0, o.Tf)(Date.now(), O);
            return (0, a.jsx)(r.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: v.intl.format(v.t.Io7ozn, { days: e.days.toString() }),
            });
        }
        return A && !R
            ? (0, a.jsx)(r.Text, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: v.intl.string(v.t["6cfuDj"]),
              })
            : N
              ? (0, a.jsx)(r.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: v.intl.string(v.t.nBtvYB),
                })
              : E
                ? (0, a.jsx)(r.Text, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: v.intl.string(v.t.rt69oo),
                  })
                : 0 === w.length
                  ? null
                  : (0, a.jsx)(h.x, {
                        price: w[0],
                        discount: T,
                        nitroIconType: y ? "default" : void 0,
                        nitroIconSize: "sm",
                        discountOfferAmount: I,
                        className: P && !k ? j.c : void 0,
                        variant: "text-md/bold",
                    });
    },
    _ = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            l = (0, f.Vm)(t),
            i = (0, d.Q)(l);
        if (null == l) return null;
        let r = (0, x.r)(l, i);
        return (0, a.jsx)(y, {
            product: r,
            prioritizedCurrency: n,
        });
    };
