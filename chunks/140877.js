"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(397927),
    o = n(287809),
    l = n(405269),
    u = n(927578),
    c = n(298072),
    d = n(993408),
    _ = n(740076),
    f = n(466459),
    p = n(623373),
    h = n(219103),
    m = n(561769),
    g = n(525723),
    E = n(57020),
    A = n(985018),
    I = n(491153);
let T = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            c = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
            p = (0, m.sC)(),
            T = u.Ay.canUseCollectibles(c),
            { isDisabled: y } = (0, _.I)(t.skuId),
            { isPurchased: S, isPartiallyOwnedBundle: v, isRented: C, rentalExpiresAt: b } = (0, f.h)(t),
            N = (0, d.G0)(t),
            R = (0, d.tt)(t),
            O = i.useMemo(() => (0, d.fT)(t, T), [t, T]),
            D = (0, g.V_)(t),
            L = null != D,
            {
                checkoutEligiblePrices: w,
                hasSufficientOrbs: x,
                shouldCheckoutWithOrbs: P,
            } = (0, E.FI)({
                product: t,
                isPremiumUser: T,
                prioritizedCurrency: n,
                hasDiscountOffer: L,
                isRental: null != p,
            }),
            M = N && !T;
        if (y)
            return (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: A.intl.string(A.t.wu4gyV),
            });
        if (v)
            return (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: A.intl.string(A.t.BEjTij),
            });
        if (C && null != b) {
            let e = (0, l.Tf)(Date.now(), b);
            return (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: A.intl.format(A.t.Io7ozn, { days: e.days.toString() }),
            });
        }
        return S && !M
            ? (0, r.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: A.intl.string(A.t["6cfuDj"]),
              })
            : R
              ? (0, r.jsx)(s.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: A.intl.string(A.t.nBtvYB),
                })
              : N
                ? (0, r.jsx)(s.Text, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: A.intl.string(A.t.rt69oo),
                  })
                : 0 === w.length
                  ? null
                  : (0, r.jsx)(h.x, {
                        priceAmount: w[0].amount,
                        priceCurrency: w[0].currency,
                        discount: O,
                        nitroIconType: T ? "default" : void 0,
                        nitroIconSize: "sm",
                        discountOfferAmount: D,
                        className: P && !x ? I.c : void 0,
                        variant: "text-md/bold",
                    });
    },
    y = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            i = (0, m.Vm)(t),
            a = (0, c.Q)(i);
        if (null == i) return null;
        let s = (0, p.rb)(i, a);
        return (0, r.jsx)(T, { product: s, prioritizedCurrency: n });
    };
