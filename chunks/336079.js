n.d(t, {
    CH: () => x,
    dv: () => b,
});
var r = n(54381),
    l = n(473749),
    i = n(772848),
    s = n(442837),
    o = n(583434),
    a = n(27123),
    c = n(594174),
    u = n(74538),
    d = n(43747);
let p = (0, l.createContext)({
        skuId: "123",
        loadId: (0, i.Z)(),
        analyticsLocations: [],
        analyticsSourceLocation: void 0,
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        isRental: !1,
    }),
    b = (e) => {
        let {
                skuId: t,
                loadId: n,
                analyticsSourceLocation: i,
                analyticsLocations: b,
                onCheckoutSuccess: x,
                isRental: y = !1,
                children: f,
            } = e,
            {
                orbProductContext: m,
                onRedeemVirtualCurrency: j,
                isRedeeming: O,
                orbRedemptionError: g,
            } = ((e) => {
                let { skuId: t, loadId: n, analyticsLocations: r, onCheckoutSuccess: i, isRental: p = !1 } = e,
                    b = (0, s.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())),
                    { product: x } = (0, o.T)(t),
                    y = (0, l.useMemo)(() => {
                        if (null == x) return null;
                        let e = (0, a.T4)({
                                product: x,
                                isPremiumUser: b,
                                isRental: p,
                            }),
                            t = null !== e ? e.amount : null;
                        return {
                            orbPrice: e,
                            orbPriceAmount: t,
                            product: x,
                        };
                    }, [x, b, p]),
                    { redeemVirtualCurrency: f, isSubmitting: m, error: j } = (0, d.f)(),
                    O = (0, l.useCallback)(
                        (e) => {
                            f(
                                t,
                                n,
                                (n) => {
                                    i({
                                        entitlements: n,
                                        skuId: t,
                                    }),
                                        e();
                                },
                                p,
                            );
                        },
                        [t, n, f, i, p],
                    );
                return {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: null != r ? r : [],
                    product: x,
                    orbProductContext: y,
                    onRedeemVirtualCurrency: O,
                    isRedeeming: m,
                    orbRedemptionError: j,
                    isRental: p,
                };
            })({
                skuId: t,
                loadId: n,
                analyticsLocations: b,
                analyticsSourceLocation: i,
                onCheckoutSuccess: x,
                isRental: y,
            });
        return (0, r.jsx)(p.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != b ? b : [],
                analyticsSourceLocation: i,
                orbProductContext: m,
                onRedeemVirtualCurrency: j,
                isRedeeming: O,
                orbRedemptionError: g,
                isRental: y,
            },
            children: f,
        });
    },
    x = () => (0, l.useContext)(p);
