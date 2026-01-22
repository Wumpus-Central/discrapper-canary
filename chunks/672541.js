n.d(t, { G4: () => E });
var r = n(627968),
    i = n(64700),
    a = n(736843),
    s = n(166532),
    o = n(685944),
    l = n(775420),
    c = n(440612),
    u = n(324384),
    d = n(985018);
let f = (e) => {
        let {
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: i,
                orbProductContext: a,
                isRedeeming: s,
                orbRedemptionError: o,
                onRedeemVirtualCurrency: l,
                rentalDuration: f,
            } = e,
            {
                isStepLoading: p,
                orbPriceAmount: _,
                orbBalanceToDisplay: h,
                onClickCheckout: m,
                showCollectiblesDiscountWarning: g,
                errorMessage: E,
            } = (0, c.HG)({
                skuId: t,
                analyticsSourceLocation: n,
                analyticsLocations: i,
                orbProductContext: a,
                orbRedemptionError: o,
                onRedeemVirtualCurrency: l,
            }),
            {
                disabled: b,
                tooltipText: y,
                text: O,
            } = (0, u.J6)({
                orbBalance: h,
                orbPriceAmount: _,
                rentalDuration: f,
            });
        return {
            isStepLoading: p,
            skuId: t,
            reviewBodyContent: (0, r.jsx)(u.cL, {
                skuId: t,
                orbPriceAmount: _,
                orbBalance: h,
                renderWithoutContainer: !0,
                rentalDuration: f,
            }),
            reviewBodyLegalContent: null,
            primaryCTAButtonProps: {
                onClick: m,
                loading: s,
                text: O,
                disabled: b,
                tooltipText: y,
            },
            warningMessage: g ? d.intl.format(d.t.fsOXXO, {}) : null,
            errorMessage: E,
        };
    },
    p = (e) => {
        var t;
        let {
                renderStep: n,
                paymentModalStepProps: r,
                sharedCheckoutContext: {
                    skuId: i,
                    analyticsLocations: a,
                    analyticsSourceLocation: s,
                    flowSpecificOptions: o,
                },
            } = e,
            l = null != (t = o.rentalDuration) ? t : void 0,
            { handleClose: u } = r;
        (0, c.e1)({ handleClose: u });
        let { orbProductContext: d, isRedeeming: p, orbRedemptionError: _, onRedeemVirtualCurrency: h } = g(),
            m = f({
                skuId: i,
                analyticsLocations: a,
                analyticsSourceLocation: s,
                orbProductContext: d,
                isRedeeming: p,
                orbRedemptionError: _,
                onRedeemVirtualCurrency: h,
                rentalDuration: l,
            });
        return n({
            paymentModalStepProps: r,
            unifiedStepProps: m,
        });
    },
    _ = (e) => {
        let { onClose: t, step: n } = e;
        return (0, r.jsx)(o.A, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1),
        });
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
                    children: u,
                } = e,
                { onCheckoutSuccess: d, rentalDuration: f } = o,
                {
                    orbProductContext: p,
                    isRedeeming: _,
                    orbRedemptionError: g,
                    onRedeemVirtualCurrency: E,
                } = (0, l.e6)({
                    skuId: t,
                    loadId: n,
                    onCheckoutSuccess: d,
                    analyticsLocations: i,
                    rentalDuration: f,
                }),
                b = (0, c.My)({
                    onClose: s.onClose,
                    skuId: t,
                    analyticsLocations: i,
                    analyticsSourceLocation: a,
                    orbProductContext: p,
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
                    paymentModalProps: b,
                    renderModalProps: s,
                },
                children: (0, r.jsx)(m.Provider, {
                    value: {
                        orbProductContext: p,
                        isRedeeming: _,
                        orbRedemptionError: g,
                        onRedeemVirtualCurrency: E,
                    },
                    children: u,
                }),
            });
        },
        UnifiedCheckoutCustomHeader: _,
        UnifiedCheckoutStepDefinitions: { [s.pn.REVIEW]: { StepController: p } },
    };
