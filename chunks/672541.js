"use strict";
n.d(t, { G4: () => E });
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
                rentalDuration: _,
            } = e,
            {
                isStepLoading: f,
                orbPriceAmount: p,
                orbBalanceToDisplay: h,
                onClickCheckout: m,
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
            {
                disabled: A,
                tooltipText: I,
                text: T,
            } = (0, c.J)({ orbBalance: h, orbPriceAmount: p, rentalDuration: _ });
        return {
            isStepLoading: f,
            skuId: t,
            reviewBodyContent: (0, r.jsx)(c.c, {
                skuId: t,
                orbPriceAmount: p,
                orbBalance: h,
                renderWithoutContainer: !0,
                rentalDuration: _,
            }),
            reviewBodyLegalContent: null,
            primaryCTAButtonProps: { onClick: m, loading: s, text: T, disabled: A, tooltipText: I },
            warningMessage: g ? d.intl.format(d.t.fsOXXO, {}) : null,
            errorMessage: E,
        };
    },
    f = (e) => {
        let {
                renderStep: t,
                paymentModalStepProps: n,
                sharedCheckoutContext: {
                    skuId: r,
                    analyticsLocations: i,
                    analyticsSourceLocation: a,
                    flowSpecificOptions: s,
                },
            } = e,
            o = s.rentalDuration ?? void 0,
            { handleClose: l } = n;
        (0, u.e1)({ handleClose: l });
        let { orbProductContext: c, isRedeeming: d, orbRedemptionError: f, onRedeemVirtualCurrency: p } = g(),
            h = _({
                skuId: r,
                analyticsLocations: i,
                analyticsSourceLocation: a,
                orbProductContext: c,
                isRedeeming: d,
                orbRedemptionError: f,
                onRedeemVirtualCurrency: p,
                rentalDuration: o,
            });
        return t({ paymentModalStepProps: n, unifiedStepProps: h });
    },
    p = (e) => {
        let { onClose: t, step: n } = e;
        return (0, r.jsx)(o.A, { isOrbCheckout: !0, step: n, onClose: () => t(!1) });
    },
    h = (0, a.Mz)(),
    m = (0, i.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
    }),
    g = () => (0, i.useContext)(m),
    E = {
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
                { onCheckoutSuccess: d, rentalDuration: _ } = o,
                {
                    orbProductContext: f,
                    isRedeeming: p,
                    orbRedemptionError: g,
                    onRedeemVirtualCurrency: E,
                } = (0, l.e6)({ skuId: t, loadId: n, onCheckoutSuccess: d, analyticsLocations: i, rentalDuration: _ }),
                A = (0, u.My)({
                    onClose: s.onClose,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: a,
                    orbProductContext: f,
                });
            return (0, r.jsx)(h.Provider, {
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
                children: (0, r.jsx)(m.Provider, {
                    value: { orbProductContext: f, isRedeeming: p, orbRedemptionError: g, onRedeemVirtualCurrency: E },
                    children: c,
                }),
            });
        },
        UnifiedCheckoutCustomHeader: p,
        UnifiedCheckoutStepDefinitions: { [s.pn.REVIEW]: { StepController: f } },
    };
