r.d(t, {
    C: () => a,
    d: () => l
});
var n = r(200651),
    s = r(192379),
    i = r(43747);
let o = (0, s.createContext)({
        skuId: '123',
        isRedeeming: !1,
        orbRedemptionError: null,
        onRedeemVirtualCurrency: () => {}
    }),
    l = (e) => {
        let { skuId: t, onCheckoutSuccess: r, children: l } = e,
            { redeemVirtualCurrency: a, isSubmitting: c, error: u } = (0, i.f)(),
            d = (0, s.useCallback)(
                (e) => {
                    a(t, (n) => {
                        r({
                            entitlements: n,
                            skuId: t
                        }),
                            e();
                    });
                },
                [t, a, r]
            );
        return (0, n.jsx)(o.Provider, {
            value: {
                skuId: t,
                onRedeemVirtualCurrency: d,
                isRedeeming: c,
                orbRedemptionError: u
            },
            children: l
        });
    },
    a = () => (0, s.useContext)(o);
