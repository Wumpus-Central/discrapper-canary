n.d(t, {
    C: () => g,
    d: () => p
});
var i = n(200651),
    r = n(192379),
    s = n(772848),
    l = n(442837),
    a = n(583434),
    o = n(956472),
    c = n(594174),
    d = n(74538),
    u = n(43747);
let m = (0, r.createContext)({
        skuId: '123',
        loadId: (0, s.Z)(),
        analyticsLocations: [],
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {}
    }),
    p = (e) => {
        let { skuId: t, loadId: n, analyticsLocations: s, onCheckoutSuccess: p, children: g } = e,
            h = (0, l.e7)([c.default], () => d.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: f } = (0, a.T)(t),
            b = (0, r.useMemo)(() => {
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
            { redeemVirtualCurrency: _, isSubmitting: x, error: E } = (0, u.f)(),
            j = (0, r.useCallback)(
                (e) => {
                    _(t, (n) => {
                        p({
                            entitlements: n,
                            skuId: t
                        }),
                            e();
                    });
                },
                [t, _, p]
            );
        return (0, i.jsx)(m.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != s ? s : [],
                orbProductContext: b,
                onRedeemVirtualCurrency: j,
                isRedeeming: x,
                orbRedemptionError: E
            },
            children: g
        });
    },
    g = () => (0, r.useContext)(m);
