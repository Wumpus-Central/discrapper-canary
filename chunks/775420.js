n.d(t, { e6: () => E }), n(627968);
var l = n(64700),
    r = n(835245),
    i = n(311907),
    s = n(674658),
    a = n(623373),
    o = n(993046),
    u = n(287809),
    d = n(67480),
    c = n(739508),
    C = n(927578),
    p = n(715054),
    m = n(788868);
(0, r.A)();
let E = (e) => {
    let { skuId: t, loadId: n, analyticsLocations: r, onCheckoutSuccess: E } = e,
        A = (0, i.bG)([u.default], () => C.Ay.isPremium(u.default.getCurrentUser(), m.PremiumTypes.TIER_2)),
        h = (0, i.bG)([d.A], () => d.A.get(t), [t]),
        f = (0, o.JL)({ sku: h }),
        { product: _ } = (0, s.q)(t),
        g = (0, l.useMemo)(() => {
            if (null != f) return { orbPriceAmount: f.amount };
            if (null != _) {
                let e = (0, a.CW)({ product: _, isPremiumUser: A });
                return { orbPriceAmount: null !== e ? e.amount : null };
            }
            return null;
        }, [f, _, A]);
    g?.orbPriceAmount == null && (0, c.hD)("Orb price not found for product", { tags: { sku_id: t } });
    let { redeemVirtualCurrency: T, isSubmitting: x, error: S } = (0, p.Q)({ skuId: t, loadId: n }),
        I = (0, l.useCallback)(
            (e) => {
                T(t, n, (n) => {
                    E({ entitlements: n, skuId: t }), e();
                });
            },
            [t, n, T, E],
        );
    return {
        skuId: t,
        loadId: n,
        analyticsLocations: r ?? [],
        orbProductContext: g,
        onRedeemVirtualCurrency: I,
        isRedeeming: x,
        orbRedemptionError: S,
    };
};
