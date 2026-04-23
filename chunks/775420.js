"use strict";
n.d(t, { e6: () => h }), n(627968);
var r = n(64700),
    i = n(835245),
    s = n(311907),
    a = n(674658),
    o = n(623373),
    l = n(993046),
    u = n(287809),
    c = n(67480),
    d = n(739508),
    _ = n(927578),
    f = n(715054),
    p = n(788868);
(0, i.A)();
let h = (e) => {
    let { skuId: t, loadId: n, analyticsLocations: i, onCheckoutSuccess: h } = e,
        E = (0, s.bG)([u.default], () => _.Ay.isPremium(u.default.getCurrentUser(), p.PremiumTypes.TIER_2)),
        m = (0, s.bG)([c.A], () => c.A.get(t), [t]),
        g = (0, l.JL)({ sku: m }),
        { product: A } = (0, a.q)(t),
        I = (0, r.useMemo)(() => {
            if (null != g) return { orbPriceAmount: g.amount };
            if (null != A) {
                let e = (0, o.CW)({ product: A, isPremiumUser: E });
                return { orbPriceAmount: null !== e ? e.amount : null };
            }
            return null;
        }, [g, A, E]);
    I?.orbPriceAmount == null && (0, d.hD)("Orb price not found for product", { tags: { sku_id: t } });
    let { redeemVirtualCurrency: T, isSubmitting: S, error: y } = (0, f.Q)({ skuId: t, loadId: n }),
        N = (0, r.useCallback)(
            (e) => {
                T(t, n, (n) => {
                    h({ entitlements: n, skuId: t }), e();
                });
            },
            [t, n, T, h],
        );
    return {
        skuId: t,
        loadId: n,
        analyticsLocations: i ?? [],
        orbProductContext: I,
        onRedeemVirtualCurrency: N,
        isRedeeming: S,
        orbRedemptionError: y,
    };
};
