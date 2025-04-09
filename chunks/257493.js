n.d(t, {
    C: () => p,
    d: () => g
});
var r = n(200651),
    i = n(192379),
    s = n(772848),
    a = n(442837),
    l = n(583434),
    o = n(956472),
    c = n(594174),
    d = n(74538),
    u = n(43747);
let m = (0, i.createContext)({
        skuId: '123',
        loadId: (0, s.Z)(),
        analyticsLocations: [],
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {}
    }),
    g = (e) => {
        let { skuId: t, loadId: n, analyticsLocations: s, onCheckoutSuccess: g, children: p } = e,
            h = (0, a.e7)([c.default], () => d.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: f } = (0, l.T)(t),
            b = (0, i.useMemo)(() => {
                if (null == f) return null;
                let e = (0, o.T4)({
                        product: f,
                        isPremiumUser: h
                    }),
                    t = null !== e ? e.amount : null;
                return {
                    orbPrice: e,
                    orbPriceAmount: t,
                    product: f
                };
            }, [f, h]),
            { redeemVirtualCurrency: N, isSubmitting: x, error: _ } = (0, u.f)(),
            E = (0, i.useCallback)(
                (e) => {
                    N(t, (n) => {
                        g({
                            entitlements: n,
                            skuId: t
                        }),
                            e();
                    });
                },
                [t, N, g]
            );
        return (0, r.jsx)(m.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != s ? s : [],
                orbProductContext: b,
                onRedeemVirtualCurrency: E,
                isRedeeming: x,
                orbRedemptionError: _
            },
            children: p
        });
    },
    p = () => (0, i.useContext)(m);
