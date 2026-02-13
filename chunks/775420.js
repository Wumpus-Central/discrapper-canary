"use strict";
n.d(t, { e6: () => _ }), n(627968);
var r = n(64700),
    i = n(835245),
    a = n(311907),
    s = n(674658),
    o = n(623373),
    l = n(287809),
    u = n(739508),
    c = n(927578),
    d = n(715054);
(0, i.A)();
let _ = (e) => {
    let { skuId: t, loadId: n, analyticsLocations: i, onCheckoutSuccess: _ } = e,
        f = (0, a.bG)([l.default], () => c.Ay.canUseCollectibles(l.default.getCurrentUser())),
        { product: h } = (0, s.q)(t),
        p = (0, r.useMemo)(() => {
            if (null == h) return null;
            let e = (0, o.CW)({ product: h, isPremiumUser: f }),
                t = null !== e ? e.amount : null;
            return { orbPrice: e, orbPriceAmount: t, product: h };
        }, [h, f]);
    p?.orbPriceAmount == null && (0, u.hD)("Orb price not found for product", { tags: { sku_id: t } });
    let { redeemVirtualCurrency: g, isSubmitting: E, error: A } = (0, d.Q)({ skuId: t, loadId: n }),
        I = (0, r.useCallback)(
            (e) => {
                g(t, n, (n) => {
                    _({ entitlements: n, skuId: t }), e();
                });
            },
            [t, n, g, _],
        );
    return {
        skuId: t,
        loadId: n,
        analyticsLocations: i ?? [],
        product: h,
        orbProductContext: p,
        onRedeemVirtualCurrency: I,
        isRedeeming: E,
        orbRedemptionError: A,
    };
};
