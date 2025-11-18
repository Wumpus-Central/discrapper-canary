n.d(t, {
    C: () => h,
    d: () => p,
});
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(442837),
    s = n(583434),
    l = n(27123),
    c = n(594174),
    u = n(74538),
    d = n(43747),
    f = n(215023);
let _ = (0, i.createContext)({
        skuId: "123",
        loadId: (0, a.Z)(),
        analyticsLocations: [],
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        isRental: !1,
    }),
    p = (e) => {
        let { skuId: t, loadId: n, analyticsLocations: a, onCheckoutSuccess: p, isRental: h = !1, children: m } = e,
            g = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: E } = (0, s.T)(t),
            b = (0, i.useMemo)(() => {
                if (null == E) return null;
                let e = h
                        ? f.sT
                        : (0, l.T4)({
                              product: E,
                              isPremiumUser: g,
                          }),
                    t = null !== e ? e.amount : null;
                return {
                    orbPrice: e,
                    orbPriceAmount: t,
                    product: E,
                };
            }, [E, g, h]),
            { redeemVirtualCurrency: y, isSubmitting: O, error: v } = (0, d.f)(),
            I = (0, i.useCallback)(
                (e) => {
                    y(
                        t,
                        n,
                        (n) => {
                            p({
                                entitlements: n,
                                skuId: t,
                            }),
                                e();
                        },
                        h,
                    );
                },
                [t, n, y, p, h],
            );
        return (0, r.jsx)(_.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != a ? a : [],
                orbProductContext: b,
                onRedeemVirtualCurrency: I,
                isRedeeming: O,
                orbRedemptionError: v,
                isRental: h,
            },
            children: m,
        });
    },
    h = () => (0, i.useContext)(_);
