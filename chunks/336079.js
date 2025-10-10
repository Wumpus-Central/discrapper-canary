n.d(t, {
    C: () => b,
    d: () => f,
});
var r = n(951288),
    l = n(647438),
    i = n(772848),
    a = n(442837),
    o = n(583434),
    s = n(27123),
    c = n(594174),
    u = n(74538),
    d = n(43747);
let p = (0, l.createContext)({
        skuId: "123",
        loadId: (0, i.Z)(),
        analyticsLocations: [],
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    f = (e) => {
        let { skuId: t, loadId: n, analyticsLocations: i, onCheckoutSuccess: f, children: b } = e,
            y = (0, a.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: m } = (0, o.T)(t),
            O = (0, l.useMemo)(() => {
                if (null == m) return null;
                let e = (0, s.T)({
                        product: m,
                        isPremiumUser: y,
                    }),
                    t = null !== e ? e.amount : null;
                return {
                    orbPrice: e,
                    orbPriceAmount: t,
                    product: m,
                };
            }, [m, y]),
            { redeemVirtualCurrency: g, isSubmitting: j, error: h } = (0, d.f)(),
            v = (0, l.useCallback)(
                (e) => {
                    g(t, n, (n) => {
                        f({
                            entitlements: n,
                            skuId: t,
                        }),
                            e();
                    });
                },
                [t, n, g, f],
            );
        return (0, r.jsx)(p.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != i ? i : [],
                orbProductContext: O,
                onRedeemVirtualCurrency: v,
                isRedeeming: j,
                orbRedemptionError: h,
            },
            children: b,
        });
    },
    b = () => (0, l.useContext)(p);
