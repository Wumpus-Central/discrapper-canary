"use strict";
n.d(t, { G4: () => A });
var r = n(627968),
    i = n(64700),
    a = n(736843),
    s = n(166532),
    o = n(685944),
    l = n(775420),
    u = n(440612),
    c = n(324384),
    d = n(985018);
let _ = (e) => {
        let {
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: i,
                orbProductContext: a,
                isRedeeming: s,
                orbRedemptionError: o,
                onRedeemVirtualCurrency: l,
            } = e,
            {
                isStepLoading: _,
                orbPriceAmount: f,
                orbBalanceToDisplay: h,
                onClickCheckout: p,
                showCollectiblesDiscountWarning: g,
                errorMessage: E,
            } = (0, u.HG)({
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: i,
                orbProductContext: a,
                orbRedemptionError: o,
                onRedeemVirtualCurrency: l,
            }),
            { disabled: A, tooltipText: I, text: T } = (0, c.J)({ orbBalance: h, orbPriceAmount: f });
        return {
            isStepLoading: _,
            skuId: t,
            reviewBodyContent: (0, r.jsx)(c.c, {
                skuId: t,
                orbPriceAmount: f,
                orbBalance: h,
                renderWithoutContainer: !0,
            }),
            reviewBodyLegalContent: null,
            primaryCTAButtonProps: { onClick: p, loading: s, text: T, disabled: A, tooltipText: I },
            warningMessage: g ? d.intl.format(d.t.fsOXXO, {}) : null,
            errorMessage: E,
        };
    },
    f = (e) => {
        let {
                renderStep: t,
                paymentModalStepProps: n,
                sharedCheckoutContext: { skuId: r, analyticsLocations: i, analyticsSourceLocation: a },
            } = e,
            { handleClose: s } = n;
        (0, u.e1)({ handleClose: s });
        let { orbProductContext: o, isRedeeming: l, orbRedemptionError: c, onRedeemVirtualCurrency: d } = E();
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: _({
                skuId: r,
                analyticsLocations: i,
                analyticsSourceLocation: a,
                orbProductContext: o,
                isRedeeming: l,
                orbRedemptionError: c,
                onRedeemVirtualCurrency: d,
            }),
        });
    },
    h = (e) => {
        let { onClose: t, step: n } = e;
        return (0, r.jsx)(o.A, { isOrbCheckout: !0, step: n, onClose: () => t(!1) });
    },
    p = (0, a.Mz)(),
    g = (0, i.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    E = () => (0, i.useContext)(g),
    A = {
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: i,
                    analyticsSourceLocation: a,
                    renderModalProps: s,
                    flowSpecificOptions: o,
                    children: c,
                } = e,
                { onCheckoutSuccess: d } = o,
                {
                    orbProductContext: _,
                    isRedeeming: f,
                    orbRedemptionError: h,
                    onRedeemVirtualCurrency: E,
                } = (0, l.e6)({ skuId: t, loadId: n, onCheckoutSuccess: d, analyticsLocations: i }),
                A = (0, u.My)({
                    onClose: s.onClose,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: a,
                    orbProductContext: _,
                });
            return (0, r.jsx)(p.Provider, {
                value: {
                    sharedCheckoutContext: {
                        loadId: n,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: a,
                        flowSpecificOptions: o,
                    },
                    paymentModalProps: A,
                    renderModalProps: s,
                },
                children: (0, r.jsx)(g.Provider, {
                    value: { orbProductContext: _, isRedeeming: f, orbRedemptionError: h, onRedeemVirtualCurrency: E },
                    children: c,
                }),
            });
        },
        UnifiedCheckoutCustomHeader: h,
        UnifiedCheckoutStepDefinitions: { [s.pn.REVIEW]: { StepController: f } },
    };
