"use strict";
n.d(t, { OU: () => N });
var r = n(627968),
    i = n(64700),
    s = n(20742),
    a = n(688810),
    o = n(736843),
    l = n(937008),
    u = n(156312),
    c = n(166532),
    d = n(165823),
    _ = n(975189),
    f = n(503516),
    p = n(652215),
    h = n(818348),
    E = n(985018);
let m = (0, i.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    g = () => (0, i.useContext)(m),
    A = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: i } = g();
        return (0, r.jsx)(_.v, { analyticsLocations: t, hideConfetti: n, confettiCanvas: i, ...e });
    },
    I = { renderStep: (e) => (0, r.jsx)(A, { ...e }), options: d.yC },
    T = (0, o.Mz)(),
    S = {
        [c.pn.GIFT_CUSTOMIZATION]: () => E.intl.string(E.t["JCFN/y"]),
        [c.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => E.intl.string(E.t.lDbi6H),
        [c.pn.CONFIRM]: () => "",
    },
    y = (e) => {
        let { step: t } = e,
            n = S[t];
        return null == n ? null : (0, r.jsx)(s.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    N = {
        CustomPaymentContextProvider: (e) => {
            let { skuId: t, analyticsLocations: n, children: s, ...o } = e,
                {
                    environment: l,
                    confettiCanvas: c,
                    setConfettiCanvas: _,
                    customConfettiVisible: f,
                    setCustomConfettiVisible: p,
                    customConfettiDisplayOptions: E,
                    hideConfirmStepConfetti: g,
                } = (0, d.Ub)({ skuId: t }),
                { analyticsLocations: A } = (0, d.NW)({ analyticsLocations: n ?? [] }),
                I = (0, d.v1)({ skuId: t }),
                T = (0, i.useMemo)(
                    () => ({
                        analyticsLocations: A,
                        skuIDs: I,
                        setCustomConfettiVisible: p,
                        hideConfirmStepConfetti: g,
                        confettiCanvas: c,
                    }),
                    [A, I, p, g, c],
                );
            return (0, r.jsxs)(a.f5, {
                value: A,
                children: [
                    (0, r.jsx)(d.Kg, {
                        environment: l,
                        setConfettiCanvas: _,
                        customConfettiDisplayOptions: E,
                        customConfettiVisible: f,
                    }),
                    (0, r.jsx)(u.PaymentContextProvider, {
                        ...o,
                        skuIDs: I,
                        stepConfigs: o.stepConfigs,
                        activeSubscription: null,
                        purchaseType: h.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(m.Provider, { value: T, children: s }),
                    }),
                ],
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: s,
                    renderModalProps: a,
                    onClose: o,
                    onComplete: l,
                    flowSpecificOptions: u,
                    children: c,
                } = e,
                _ = a.onClose,
                { skuIDs: f, setCustomConfettiVisible: h, analyticsLocations: E } = g(),
                {
                    paymentModalSkuId: m,
                    paymentModalOnClose: A,
                    paymentModalOnComplete: I,
                } = (0, d.ot)({
                    onClose: (e) => {
                        _(), o?.(e);
                    },
                    onComplete: l,
                    skuIDs: f,
                    setCustomConfettiVisible: h,
                }),
                S = (0, i.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: E,
                        analyticsSourceLocation: s,
                        flowSpecificOptions: u,
                    }),
                    [n, t, E, s, u],
                ),
                y = (0, i.useMemo)(
                    () => ({
                        skuId: m,
                        onClose: A,
                        onComplete: I,
                        applicationId: p.FYj,
                        initialPlanId: null,
                        analyticsLocations: E,
                        onStepChange: u.onStepChange,
                        hideShadow: !0,
                        transitionState: a.transitionState,
                        returnRef: a.returnRef,
                    }),
                    [m, A, I, E, u.onStepChange, a.transitionState, a.returnRef],
                );
            return (0, r.jsx)(T.Provider, {
                value: { sharedCheckoutContext: S, paymentModalProps: y, renderModalProps: a },
                children: c,
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, l.Pv)();
            return n ? (0, r.jsx)(y, { step: t }) : null;
        },
        UnifiedCheckoutStepDefinitions: {
            [c.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: r, handleClose: i } = n,
                        {
                            renderLeftColumn: s,
                            renderRightColumn: a,
                            ctaDisabled: o,
                            loading: l,
                        } = (0, f.e)({ handleStepChange: r, handleClose: i });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: {
                            layout: "two-column",
                            renderLeftColumn: s,
                            renderRightColumn: a,
                            primaryCTAButtonProps: { loading: l, disabled: o },
                        },
                    });
                },
            },
            [c.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: I,
    };
