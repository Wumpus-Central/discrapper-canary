"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(397927),
    o = n(287809),
    l = n(927578),
    u = n(298072),
    c = n(993408),
    d = n(740076),
    _ = n(466459),
    f = n(623373),
    h = n(219103),
    p = n(561769),
    g = n(525723),
    E = n(57020),
    A = n(985018),
    I = n(491153);
let T = (e) => {
        let { product: t, prioritizedCurrency: n } = e,
            u = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
            f = l.Ay.canUseCollectibles(u),
            { isDisabled: p } = (0, d.I)(t.skuId),
            { isPurchased: T, isPartiallyOwnedBundle: y } = (0, _.h)(t),
            S = (0, c.G0)(t),
            v = (0, c.tt)(t),
            C = i.useMemo(() => (0, c.fT)(t, f), [t, f]),
            b = (0, g.V_)(t),
            N = null != b,
            {
                checkoutEligiblePrices: R,
                hasSufficientOrbs: O,
                shouldCheckoutWithOrbs: D,
            } = (0, E.F)({ product: t, isPremiumUser: f, prioritizedCurrency: n, hasDiscountOffer: N }),
            L = S && !f;
        return p
            ? (0, r.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: A.intl.string(A.t.wu4gyV),
              })
            : y
              ? (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: A.intl.string(A.t.BEjTij),
                })
              : T && !L
                ? (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: A.intl.string(A.t["6cfuDj"]),
                  })
                : v
                  ? (0, r.jsx)(s.Text, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: A.intl.string(A.t.nBtvYB),
                    })
                  : S
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: A.intl.string(A.t.rt69oo),
                      })
                    : 0 === R.length
                      ? null
                      : (0, r.jsx)(h.x, {
                            priceAmount: R[0].amount,
                            priceCurrency: R[0].currency,
                            discount: C,
                            nitroIconType: f ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: b,
                            className: D && !O ? I.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    y = (e) => {
        let { skuId: t, prioritizedCurrency: n } = e,
            i = (0, p.Vm)(t),
            a = (0, u.Q)(i);
        if (null == i) return null;
        let s = (0, f.rb)(i, a);
        return (0, r.jsx)(T, { product: s, prioritizedCurrency: n });
    };
