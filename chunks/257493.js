r.d(t, {
    C: () => O,
    d: () => b
});
var n = r(255367),
    l = r(73800),
    i = r(772848),
    o = r(442837),
    s = r(583434),
    a = r(956472),
    c = r(594174),
    u = r(74538),
    d = r(43747);
let p = (0, l.createContext)({
        skuId: '123',
        loadId: (0, i.Z)(),
        analyticsLocations: [],
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {}
    }),
    b = (e) => {
        let { skuId: t, loadId: r, analyticsLocations: i, onCheckoutSuccess: b, children: O } = e,
            y = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: m } = (0, s.T)(t),
            E = (0, l.useMemo)(() => {
                if (null == m) return null;
                let e = (0, a.T4)({
                        product: m,
                        isPremiumUser: y
                    }),
                    t = null !== e ? e.amount : null;
                return {
                    orbPrice: e,
                    orbPriceAmount: t,
                    product: m
                };
            }, [m, y]),
            { redeemVirtualCurrency: _, isSubmitting: x, error: f } = (0, d.f)(),
            j = (0, l.useCallback)(
                (e) => {
                    _(t, r, (r) => {
                        (b({
                            entitlements: r,
                            skuId: t
                        }),
                            e());
                    });
                },
                [t, r, _, b]
            );
        return (0, n.jsx)(p.Provider, {
            value: {
                skuId: t,
                loadId: r,
                analyticsLocations: null != i ? i : [],
                orbProductContext: E,
                onRedeemVirtualCurrency: j,
                isRedeeming: x,
                orbRedemptionError: f
            },
            children: O
        });
    },
    O = () => (0, l.useContext)(p);
