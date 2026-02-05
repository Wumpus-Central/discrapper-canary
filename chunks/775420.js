"use strict";
n.d(t, { e6: () => d }), n(627968);
var r = n(64700),
    i = n(835245),
    a = n(311907),
    s = n(674658),
    o = n(623373),
    l = n(287809),
    u = n(927578),
    c = n(715054);
(0, i.A)();
let d = (e) => {
    let { skuId: t, loadId: n, analyticsLocations: i, onCheckoutSuccess: d, rentalDuration: _ } = e,
        f = (0, a.bG)([l.default], () => u.Ay.canUseCollectibles(l.default.getCurrentUser())),
        { product: p } = (0, s.q)(t),
        h = (0, r.useMemo)(() => {
            if (null == p) return null;
            let e = (0, o.CW)({ product: p, isPremiumUser: f, isRental: null != _ }),
                t = null !== e ? e.amount : null;
            return { orbPrice: e, orbPriceAmount: t, product: p };
        }, [p, f, _]),
        { redeemVirtualCurrency: m, isSubmitting: g, error: E } = (0, c.Q)({ skuId: t, loadId: n }),
        A = (0, r.useCallback)(
            (e) => {
                m(
                    t,
                    n,
                    (n) => {
                        d({ entitlements: n, skuId: t }), e();
                    },
                    null != _,
                );
            },
            [t, n, m, d, _],
        );
    return {
        skuId: t,
        loadId: n,
        analyticsLocations: i ?? [],
        product: p,
        orbProductContext: h,
        onRedeemVirtualCurrency: A,
        isRedeeming: g,
        orbRedemptionError: E,
        rentalDuration: _,
    };
};
