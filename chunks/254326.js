"use strict";
n.d(t, { OU: () => S });
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
    p = n(818348);
let h = (0, i.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    m = () => (0, i.useContext)(h),
    g = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: i } = m();
        return (0, r.jsx)(d.v, { analyticsLocations: t, hideConfetti: n, confettiCanvas: i, ...e });
    },
    E = { renderStep: (e) => (0, r.jsx)(g, { ...e }), options: c.yC },
    A = (e) => {
        let { skuId: t, analyticsLocations: n, children: s, ...o } = e,
            {
                environment: u,
                confettiCanvas: d,
                setConfettiCanvas: _,
                customConfettiVisible: f,
                setCustomConfettiVisible: m,
                customConfettiDisplayOptions: g,
                hideConfirmStepConfetti: E,
            } = (0, c.Ub)({ skuId: t }),
            { analyticsLocations: A } = (0, c.NW)({ analyticsLocations: n ?? [] }),
            I = (0, c.v1)({ skuId: t }),
            T = (0, i.useMemo)(
                () => ({
                    analyticsLocations: A,
                    skuIDs: I,
                    setCustomConfettiVisible: m,
                    hideConfirmStepConfetti: E,
                    confettiCanvas: d,
                }),
                [A, I, m, E, d],
            );
        return (0, r.jsxs)(a.f5, {
            value: A,
            children: [
                (0, r.jsx)(c.Kg, {
                    environment: u,
                    setConfettiCanvas: _,
                    customConfettiDisplayOptions: g,
                    customConfettiVisible: f,
                }),
                (0, r.jsx)(l.PaymentContextProvider, {
                    ...o,
                    skuIDs: I,
                    stepConfigs: o.stepConfigs,
                    activeSubscription: null,
                    purchaseType: p.VV.ONE_TIME,
                    excludeSubscriptionPlansBySKU: !0,
                    children: (0, r.jsx)(h.Provider, { value: T, children: s }),
                }),
            ],
        });
    },
    I = (e) => {
        let { onClose: t, step: n } = e,
            { isGift: i, giftingOrigin: a } = (0, o.Pv)();
        return (0, r.jsx)(c.kj, { step: n, onClose: () => t(!1), isGift: i, giftingOrigin: a });
    },
    T = (0, s.Mz)(),
    y = (e) => {
        let { renderStep: t, paymentModalStepProps: n } = e,
            { handleStepChange: r, handleClose: i } = n,
            {
                renderLeftColumn: a,
                renderRightColumn: s,
                ctaDisabled: o,
                loading: l,
            } = (0, _.eI)({ handleStepChange: r, handleClose: i });
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
    S = {
        CustomPaymentContextProvider: A,
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
                p = (e) => {
                    _(), o?.(e);
                },
                { skuIDs: h, setCustomConfettiVisible: g, analyticsLocations: E } = m(),
                {
                    paymentModalSkuId: A,
                    paymentModalOnClose: I,
                    paymentModalOnComplete: y,
                } = (0, c.ot)({ onClose: p, onComplete: l, skuIDs: h, setCustomConfettiVisible: g }),
                S = (0, i.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: E,
                        analyticsSourceLocation: a,
                        flowSpecificOptions: u,
                    }),
                    [n, t, E, a, u],
                ),
                v = (0, i.useMemo)(
                    () => ({
                        skuId: A,
                        onClose: I,
                        onComplete: y,
                        applicationId: f.FYj,
                        initialPlanId: null,
                        analyticsLocations: E,
                        onStepChange: u.onStepChange,
                        hideShadow: !0,
                        transitionState: s.transitionState,
                        returnRef: s.returnRef,
                    }),
                    [A, I, y, E, u.onStepChange, s.transitionState, s.returnRef],
                );
            return (0, r.jsx)(T.Provider, {
                value: { sharedCheckoutContext: S, paymentModalProps: v, renderModalProps: s },
                children: d,
            });
        },
        UnifiedCheckoutCustomHeader: I,
        UnifiedCheckoutStepDefinitions: {
            [u.pn.GIFT_CUSTOMIZATION]: { StepController: y },
            [u.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: E,
    };
