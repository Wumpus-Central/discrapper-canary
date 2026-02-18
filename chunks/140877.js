r.d(e, { A: () => k });
var i = r(627968),
    l = r(64700),
    n = r(417597),
    s = r(397927),
    a = r(287809),
    u = r(927578),
    o = r(298072),
    d = r(993408),
    c = r(740076),
    m = r(466459),
    x = r(623373),
    p = r(219103),
    g = r(561769),
    h = r(525723),
    C = r(57020),
    A = r(985018),
    I = r(491153);
let j = (t) => {
        let { product: e, prioritizedCurrency: r } = t,
            o = (0, n.bG)([a.default], () => a.default.getCurrentUser()),
            x = u.Ay.canUseCollectibles(o),
            { isDisabled: g } = (0, c.I)(e.skuId),
            { isPurchased: j, isPartiallyOwnedBundle: k } = (0, m.h)(e),
            f = (0, d.G0)(e),
            v = (0, d.tt)(e),
            y = l.useMemo(() => (0, d.fT)(e, x), [e, x]),
            E = (0, h.V_)(e),
            {
                checkoutEligiblePrices: _,
                hasSufficientOrbs: b,
                shouldCheckoutWithOrbs: T,
            } = (0, C.F)({ product: e, isPremiumUser: x, prioritizedCurrency: r, hasDiscountOffer: null != E }),
            R = f && !x;
        return g
            ? (0, i.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: A.intl.string(A.t.wu4gyV),
              })
            : k
              ? (0, i.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: A.intl.string(A.t.BEjTij),
                })
              : j && !R
                ? (0, i.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: A.intl.string(A.t["6cfuDj"]),
                  })
                : v
                  ? (0, i.jsx)(s.Text, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: A.intl.string(A.t.nBtvYB),
                    })
                  : f
                    ? (0, i.jsx)(s.Text, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: A.intl.string(A.t.rt69oo),
                      })
                    : 0 === _.length
                      ? null
                      : (0, i.jsx)(p.x, {
                            priceAmount: _[0].amount,
                            priceCurrency: _[0].currency,
                            discount: y,
                            nitroIconType: x ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: E,
                            className: T && !b ? I.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    k = (t) => {
        let { skuId: e, prioritizedCurrency: r } = t,
            l = (0, g.Vm)(e),
            n = (0, o.Q)(l);
        if (null == l) return null;
        let s = (0, x.rb)(l, n);
        return (0, i.jsx)(j, { product: s, prioritizedCurrency: r });
    };
