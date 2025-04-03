r.d(t, {
    C: () => u,
    d: () => i
});
var n = r(200651),
    l = r(192379),
    s = r(43747);
let o = (0, l.createContext)({
        skuId: '123',
        isRedeeming: !1,
        orbRedemptionError: null,
        onRedeemVirtualCurrency: () => {}
    }),
    i = (e) => {
        let { skuId: t, onCheckoutSuccess: r, children: i } = e,
            { redeemVirtualCurrency: u, isSubmitting: c, error: a } = (0, s.f)(),
            d = (0, l.useCallback)(
                (e) => {
                    u(t, (n) => {
                        r({
                            entitlements: n,
                            skuId: t
                        }),
                            e();
                    });
                },
                [t, u, r]
            );
        return (0, n.jsx)(o.Provider, {
            value: {
                skuId: t,
                onRedeemVirtualCurrency: d,
                isRedeeming: c,
                orbRedemptionError: a
            },
            children: i
        });
    },
    u = () => (0, l.useContext)(o);
