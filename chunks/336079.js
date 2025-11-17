n.d(t, {
    C: () => p,
    d: () => _,
});
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(442837),
    s = n(583434),
    l = n(27123),
    c = n(594174),
    u = n(74538),
    d = n(43747);
let f = (0, i.createContext)({
        skuId: "123",
        loadId: (0, a.Z)(),
        analyticsLocations: [],
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    _ = (e) => {
        let { skuId: t, loadId: n, analyticsLocations: a, onCheckoutSuccess: _, children: p } = e,
            h = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: m } = (0, s.T)(t),
            g = (0, i.useMemo)(() => {
                if (null == m) return null;
                let e = (0, l.T4)({
                        product: m,
                        isPremiumUser: h,
                    }),
                    t = null !== e ? e.amount : null;
                return {
                    orbPrice: e,
                    orbPriceAmount: t,
                    product: m,
                };
            }, [m, h]),
            { redeemVirtualCurrency: E, isSubmitting: b, error: y } = (0, d.f)(),
            O = (0, i.useCallback)(
                (e) => {
                    E(t, n, (n) => {
                        _({
                            entitlements: n,
                            skuId: t,
                        }),
                            e();
                    });
                },
                [t, n, E, _],
            );
        return (0, r.jsx)(f.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != a ? a : [],
                orbProductContext: g,
                onRedeemVirtualCurrency: O,
                isRedeeming: b,
                orbRedemptionError: y,
            },
            children: p,
        });
    },
    p = () => (0, i.useContext)(f);
