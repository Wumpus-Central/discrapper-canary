"use strict";
n.d(t, { e6: () => h }), n(627968);
var r = n(64700),
    i = n(835245),
    s = n(311907),
    a = n(674658),
    o = n(623373),
    l = n(287809),
    u = n(67480),
    c = n(739508),
    d = n(927578),
    _ = n(715054),
    f = n(955945),
    p = n(788868);
(0, i.A)();
let h = (e) => {
    let { skuId: t, loadId: n, analyticsLocations: i, onCheckoutSuccess: h } = e,
        m = (0, s.bG)([l.default], () => d.Ay.isPremium(l.default.getCurrentUser(), p.PremiumTypes.TIER_2)),
        E = (0, s.bG)([u.A], () => u.A.get(t), [t]),
        { product: g } = (0, a.q)(t),
        A = (0, r.useMemo)(() => {
            let e = null != E ? (0, f.d)(E.prices, m) : null;
            if (null != e) return { orbPrice: e, orbPriceAmount: e.amount };
            if (null != g) {
                let e = (0, o.CW)({ product: g, isPremiumUser: m }),
                    t = null !== e ? e.amount : null;
                return { orbPrice: e, orbPriceAmount: t };
            }
            return null;
        }, [E, g, m]);
    A?.orbPriceAmount == null && (0, c.hD)("Orb price not found for product", { tags: { sku_id: t } });
    let { redeemVirtualCurrency: I, isSubmitting: T, error: S } = (0, _.Q)({ skuId: t, loadId: n }),
        y = (0, r.useCallback)(
            (e) => {
                I(t, n, (n) => {
                    h({ entitlements: n, skuId: t }), e();
                });
            },
            [t, n, I, h],
        );
    return {
        skuId: t,
        loadId: n,
        analyticsLocations: i ?? [],
        orbProductContext: A,
        onRedeemVirtualCurrency: y,
        isRedeeming: T,
        orbRedemptionError: S,
    };
};
