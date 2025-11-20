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
        isRental: !1,
    }),
    _ = (e) => {
        let { skuId: t, loadId: n, analyticsLocations: a, onCheckoutSuccess: _, isRental: p = !1, children: h } = e,
            m = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: g } = (0, s.T)(t),
            E = (0, i.useMemo)(() => {
                if (null == g) return null;
                let e = (0, l.T4)({
                        product: g,
                        isPremiumUser: m,
                        isRental: p,
                    }),
                    t = null !== e ? e.amount : null;
                return {
                    orbPrice: e,
                    orbPriceAmount: t,
                    product: g,
                };
            }, [g, m, p]),
            { redeemVirtualCurrency: b, isSubmitting: y, error: O } = (0, d.f)(),
            v = (0, i.useCallback)(
                (e) => {
                    b(
                        t,
                        n,
                        (n) => {
                            _({
                                entitlements: n,
                                skuId: t,
                            }),
                                e();
                        },
                        p,
                    );
                },
                [t, n, b, _, p],
            );
        return (0, r.jsx)(f.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != a ? a : [],
                orbProductContext: E,
                onRedeemVirtualCurrency: v,
                isRedeeming: y,
                orbRedemptionError: O,
                isRental: p,
            },
            children: h,
        });
    },
    p = () => (0, i.useContext)(f);
