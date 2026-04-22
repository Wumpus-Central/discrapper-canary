n.d(t, { OU: () => I });
var l = n(627968),
    r = n(64700),
    i = n(20742),
    s = n(688810),
    a = n(736843),
    o = n(937008),
    u = n(156312),
    d = n(166532),
    c = n(165823),
    C = n(975189),
    p = n(503516),
    m = n(652215),
    E = n(818348),
    A = n(985018);
let h = (0, r.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        analyticsLocations: [],
    }),
    f = () => (0, r.useContext)(h),
    _ = (e) => {
        let { analyticsLocations: t, hideConfirmStepConfetti: n, confettiCanvas: r } = f();
        return (0, l.jsx)(C.v, { analyticsLocations: t, hideConfetti: n, confettiCanvas: r, ...e });
    },
    g = { renderStep: (e) => (0, l.jsx)(_, { ...e }), options: c.yC },
    T = (0, a.Mz)(),
    x = {
        [d.pn.GIFT_CUSTOMIZATION]: () => A.intl.string(A.t["JCFN/y"]),
        [d.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => A.intl.string(A.t.lDbi6H),
        [d.pn.CONFIRM]: () => "",
    },
    S = (e) => {
        let { step: t } = e,
            n = x[t];
        return null == n ? null : (0, l.jsx)(i.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    I = {
        CustomPaymentContextProvider: (e) => {
            let { skuId: t, analyticsLocations: n, children: i, ...a } = e,
                {
                    environment: o,
                    confettiCanvas: d,
                    setConfettiCanvas: C,
                    customConfettiVisible: p,
                    setCustomConfettiVisible: m,
                    customConfettiDisplayOptions: A,
                    hideConfirmStepConfetti: f,
                } = (0, c.Ub)({ skuId: t }),
                { analyticsLocations: _ } = (0, c.NW)({ analyticsLocations: n ?? [] }),
                g = (0, c.v1)({ skuId: t }),
                T = (0, r.useMemo)(
                    () => ({
                        analyticsLocations: _,
                        skuIDs: g,
                        setCustomConfettiVisible: m,
                        hideConfirmStepConfetti: f,
                        confettiCanvas: d,
                    }),
                    [_, g, m, f, d],
                );
            return (0, l.jsxs)(s.f5, {
                value: _,
                children: [
                    (0, l.jsx)(c.Kg, {
                        environment: o,
                        setConfettiCanvas: C,
                        customConfettiDisplayOptions: A,
                        customConfettiVisible: p,
                    }),
                    (0, l.jsx)(u.PaymentContextProvider, {
                        ...a,
                        skuIDs: g,
                        stepConfigs: a.stepConfigs,
                        activeSubscription: null,
                        purchaseType: E.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, l.jsx)(h.Provider, { value: T, children: i }),
                    }),
                ],
            });
        },
        UnifiedCheckoutContextProvider: (e) => {
            let {
                    skuId: t,
                    loadId: n,
                    analyticsSourceLocation: i,
                    renderModalProps: s,
                    onClose: a,
                    onComplete: o,
                    flowSpecificOptions: u,
                    children: d,
                } = e,
                C = s.onClose,
                { skuIDs: p, setCustomConfettiVisible: E, analyticsLocations: A } = f(),
                {
                    paymentModalSkuId: h,
                    paymentModalOnClose: _,
                    paymentModalOnComplete: g,
                } = (0, c.ot)({
                    onClose: (e) => {
                        C(), a?.(e);
                    },
                    onComplete: o,
                    skuIDs: p,
                    setCustomConfettiVisible: E,
                }),
                x = (0, r.useMemo)(
                    () => ({
                        loadId: n,
                        skuId: t,
                        analyticsLocations: A,
                        analyticsSourceLocation: i,
                        flowSpecificOptions: u,
                    }),
                    [n, t, A, i, u],
                ),
                S = (0, r.useMemo)(
                    () => ({
                        skuId: h,
                        onClose: _,
                        onComplete: g,
                        applicationId: m.FYj,
                        initialPlanId: null,
                        analyticsLocations: A,
                        onStepChange: u.onStepChange,
                        hideShadow: !0,
                        transitionState: s.transitionState,
                        returnRef: s.returnRef,
                    }),
                    [h, _, g, A, u.onStepChange, s.transitionState, s.returnRef],
                );
            return (0, l.jsx)(T.Provider, {
                value: { sharedCheckoutContext: x, paymentModalProps: S, renderModalProps: s },
                children: d,
            });
        },
        UnifiedCheckoutCustomHeader: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, o.Pv)();
            return n ? (0, l.jsx)(S, { step: t }) : null;
        },
        UnifiedCheckoutStepDefinitions: {
            [d.pn.GIFT_CUSTOMIZATION]: {
                StepController: (e) => {
                    let { renderStep: t, paymentModalStepProps: n } = e,
                        { handleStepChange: l, handleClose: r } = n,
                        {
                            renderLeftColumn: i,
                            renderRightColumn: s,
                            ctaDisabled: a,
                            loading: o,
                        } = (0, p.e)({ handleStepChange: l, handleClose: r });
                    return t({
                        paymentModalStepProps: n,
                        unifiedStepProps: {
                            layout: "two-column",
                            renderLeftColumn: i,
                            renderRightColumn: s,
                            primaryCTAButtonProps: { loading: o, disabled: a },
                        },
                    });
                },
            },
            [d.pn.REVIEW]: { legacyStepConfig: !0 },
        },
        CUSTOM_CONFIRM_STEP_CONFIG: g,
    };
