n.d(t, {
    CH: () => m,
    Gw: () => p,
    dv: () => _,
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
        analyticsSourceLocation: void 0,
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        isRental: !1,
    }),
    p = (e) => {
        let { skuId: t, loadId: n, analyticsLocations: r, onCheckoutSuccess: a, isRental: f = !1 } = e,
            p = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())),
            { product: _ } = (0, s.T)(t),
            m = (0, i.useMemo)(() => {
                if (null == _) return null;
                let e = (0, l.T4)({
                        product: _,
                        isPremiumUser: p,
                        isRental: f,
                    }),
                    t = null !== e ? e.amount : null;
                return {
                    orbPrice: e,
                    orbPriceAmount: t,
                    product: _,
                };
            }, [_, p, f]),
            { redeemVirtualCurrency: h, isSubmitting: g, error: E } = (0, d.f)(),
            b = (0, i.useCallback)(
                (e) => {
                    h(
                        t,
                        n,
                        (n) => {
                            a({
                                entitlements: n,
                                skuId: t,
                            }),
                                e();
                        },
                        f,
                    );
                },
                [t, n, h, a, f],
            );
        return {
            skuId: t,
            loadId: n,
            analyticsLocations: null != r ? r : [],
            product: _,
            orbProductContext: m,
            onRedeemVirtualCurrency: b,
            isRedeeming: g,
            orbRedemptionError: E,
            isRental: f,
        };
    },
    _ = (e) => {
        let {
                skuId: t,
                loadId: n,
                analyticsSourceLocation: i,
                analyticsLocations: a,
                onCheckoutSuccess: o,
                isRental: s = !1,
                children: l,
            } = e,
            {
                orbProductContext: c,
                onRedeemVirtualCurrency: u,
                isRedeeming: d,
                orbRedemptionError: _,
            } = p({
                skuId: t,
                loadId: n,
                analyticsLocations: a,
                onCheckoutSuccess: o,
                isRental: s,
            });
        return (0, r.jsx)(f.Provider, {
            value: {
                skuId: t,
                loadId: n,
                analyticsLocations: null != a ? a : [],
                analyticsSourceLocation: i,
                orbProductContext: c,
                onRedeemVirtualCurrency: u,
                isRedeeming: d,
                orbRedemptionError: _,
                isRental: s,
            },
            children: l,
        });
    },
    m = () => (0, i.useContext)(f);
