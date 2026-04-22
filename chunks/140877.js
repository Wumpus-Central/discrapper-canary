r.d(t, { A: () => _ });
var i = r(627968),
    n = r(64700),
    l = r(417597),
    s = r(834730),
    a = r(287809),
    u = r(927578),
    c = r(298072),
    o = r(993408),
    d = r(740076),
    k = r(466459),
    p = r(623373),
    C = r(219103),
    m = r(561769),
    x = r(525723),
    I = r(57020),
    A = r(985018),
    g = r(380836);
let h = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            c = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
            p = u.Ay.canUseCollectibles(c),
            { isDisabled: m } = (0, d.I)(t.skuId),
            { isPurchased: h, isPartiallyOwnedBundle: _ } = (0, k.h)(t),
            f = (0, o.G0)(t),
            T = (0, o.tt)(t),
            E = n.useMemo(() => (0, o.fT)(t, p), [t, p]),
            v = (0, x.V_)(t),
            {
                checkoutEligiblePrices: j,
                hasSufficientOrbs: y,
                shouldCheckoutWithOrbs: P,
            } = (0, I.F)({ product: t, isPremiumUser: p, prioritizedCurrency: r, hasDiscountOffer: null != v }),
            b = f && !p;
        return m
            ? (0, i.jsx)(s.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: A.intl.string(A.t.wu4gyV),
              })
            : _
              ? (0, i.jsx)(s.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: A.intl.string(A.t.BEjTij),
                })
              : h && !b
                ? (0, i.jsx)(s.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: A.intl.string(A.t["6cfuDj"]),
                  })
                : T
                  ? (0, i.jsx)(s.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: A.intl.string(A.t.nBtvYB),
                    })
                  : f
                    ? (0, i.jsx)(s.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: A.intl.string(A.t.rt69oo),
                      })
                    : 0 === j.length
                      ? null
                      : (0, i.jsx)(C.x, {
                            priceAmount: j[0].amount,
                            priceCurrency: j[0].currency,
                            discount: E,
                            nitroIconType: p ? "default" : void 0,
                            nitroIconSize: "sm",
                            discountOfferAmount: v,
                            className: P && !y ? g.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    _ = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            n = (0, m.Vm)(t),
            l = (0, c.Q)(n);
        if (null == n) return null;
        let s = (0, p.rb)(n, l);
        return (0, i.jsx)(h, { product: s, prioritizedCurrency: r });
    };
