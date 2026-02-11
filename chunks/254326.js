"use strict";
n.d(t, { OU: () => v });
var r = n(627968),
    i = n(64700),
    a = n(688810),
    s = n(736843),
    o = n(937008),
    l = n(156312),
    u = n(166532),
    c = n(165823),
    d = n(975189),
    _ = n(503516),
    f = n(652215),
    h = n(818348);
let p = (0, i.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    g = () => (0, i.useContext)(p),
    E = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: i } = g();
        return (0, r.jsx)(d.v, { analyticsLocations: t, hideConfetti: n, confettiCanvas: i, ...e });
    },
    A = { renderStep: (e) => (0, r.jsx)(E, { ...e }), options: c.yC },
    I = (e) => {
        let { skuId: t, analyticsLocations: n, children: s, ...o } = e,
            {
                environment: u,
                confettiCanvas: d,
                setConfettiCanvas: _,
                customConfettiVisible: f,
                setCustomConfettiVisible: g,
                customConfettiDisplayOptions: E,
                hideConfirmStepConfetti: A,
            } = (0, c.Ub)({ skuId: t }),
            { analyticsLocations: I } = (0, c.NW)({ analyticsLocations: n ?? [] }),
            T = (0, c.v1)({ skuId: t }),
            y = (0, i.useMemo)(
                () => ({
                    analyticsLocations: I,
                    skuIDs: T,
                    setCustomConfettiVisible: g,
                    hideConfirmStepConfetti: A,
                    confettiCanvas: d,
                }),
                [I, T, g, A, d],
            );
        return (0, r.jsxs)(a.f5, {
            value: I,
            children: [
                (0, r.jsx)(c.Kg, {
                    environment: u,
                    setConfettiCanvas: _,
                    customConfettiDisplayOptions: E,
                    customConfettiVisible: f,
                }),
                (0, r.jsx)(l.PaymentContextProvider, {
                    ...o,
                    skuIDs: T,
                    stepConfigs: o.stepConfigs,
                    activeSubscription: null,
                    purchaseType: h.VV.ONE_TIME,
                    excludeSubscriptionPlansBySKU: !0,
                    children: (0, r.jsx)(p.Provider, { value: y, children: s }),
                }),
            ],
        });
    },
    T = (e) => {
        let { onClose: t, step: n } = e,
            { isGift: i } = (0, o.Pv)();
        return (0, r.jsx)(c.kj, { step: n, onClose: () => t(!1), isGift: i });
    },
    y = (0, s.Mz)(),
    S = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: i } = n,
            {
                renderLeftColumn: a,
                renderRightColumn: s,
                ctaDisabled: o,
                loading: l,
            } = (0, _.e)({ handleStepChange: r, handleClose: i });
        return t({
            paymentModalStepProps: n,
            unifiedStepProps: {
                layout: "two-column",
                renderLeftColumn: a,
                renderRightColumn: s,
                primaryCTAButtonProps: { loading: l, disabled: o },
            },
        });
    },
    v = {
        CustomPaymentContextProvider: I,
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: a,
                    renderModalProps: s,
                    onClose: o,
                    onComplete: l,
                    flowSpecificOptions: u,
                    children: d,
                } = e,
                _ = s.onClose,
                h = (e) => {
                    _(), o?.(e);
                },
                { skuIDs: p, setCustomConfettiVisible: E, analyticsLocations: A } = g(),
                {
                    paymentModalSkuId: I,
                    paymentModalOnClose: T,
                    paymentModalOnComplete: S,
                } = (0, c.ot)({ onClose: h, onComplete: l, skuIDs: p, setCustomConfettiVisible: E }),
                v = (0, i.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: A,
                        analyticsSourceLocation: a,
                        flowSpecificOptions: u,
                    }),
                    [n, t, A, a, u],
                ),
                C = (0, i.useMemo)(
                    () => ({
                        skuId: I,
                        onClose: T,
                        onComplete: S,
                        applicationId: f.FYj,
                        initialPlanId: null,
                        analyticsLocations: A,
                        onStepChange: u.onStepChange,
                        hideShadow: !0,
                        transitionState: s.transitionState,
                        returnRef: s.returnRef,
                    }),
                    [I, T, S, A, u.onStepChange, s.transitionState, s.returnRef],
                );
            return (0, r.jsx)(y.Provider, {
                value: { sharedCheckoutContext: v, paymentModalProps: C, renderModalProps: s },
                children: d,
            });
        },
        UnifiedCheckoutCustomHeader: T,
        UnifiedCheckoutStepDefinitions: {
            [u.pn.GIFT_CUSTOMIZATION]: { StepController: S },
            [u.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: A,
    };
