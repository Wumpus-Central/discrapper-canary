var l = n(284009),
    i = n.n(l),
    r = n(476231),
    a = n(202475),
    s = n(211083),
    o = n(883645),
    u = n(601194),
    c = n(316363),
    d = n(602787),
    m = n(129230),
    p = n(723702),
    h = n(418200),
    C = n(166532),
    f = n(566980),
    E = n(671334),
    S = n(652215),
    I = n(682901);
n.d(
    t,
    {},
    {
        x: function (e) {
            let {
                    analyticsData: t,
                    initialPlanId: n,
                    handleStepChange: l,
                    onReturn: g,
                    continueSessionToInitialStep: y,
                } = e,
                { paymentSources: A } = (0, a.j)(),
                {
                    selectedSkuId: P,
                    setPurchaseState: v,
                    contextMetadata: x,
                    paymentSourceId: _,
                    setPaymentSourceId: T,
                    purchaseError: b,
                    setPurchaseError: N,
                    activeSubscription: j,
                } = (0, c.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setPurchaseState: e.setPurchaseState,
                    contextMetadata: e.contextMetadata,
                    paymentSourceId: e.paymentSourceId,
                    setPaymentSourceId: e.setPaymentSourceId,
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                    activeSubscription: e.activeSubscription,
                })),
                { purchaseErrorBlockRef: R } = (0, u.Gm)(),
                { paymentAuthenticationState: O } = (0, s.o)(),
                { isPremiumGroupPurchase: M, isEligibleForTrial: L } = (0, d.i)(),
                { step: k } = (0, o.Ay)(),
                { isGift: w } = (0, h.Pv)(),
                D = {
                    ...(0, E.p)(),
                    paymentSources: A,
                    paymentSourceId: _,
                    setPaymentSourceId: T,
                    purchaseError: b,
                    setPurchaseError: N,
                    purchaseErrorBlockRef: R,
                    paymentAuthenticationState: O,
                    isGift: w,
                },
                U =
                    g ??
                    function () {
                        l(Object.values(A).length < 1 && null == n ? C.pn.PLAN_SELECT : C.pn.REVIEW, {
                            trackedFromStep: C.pn.PAYMENT_ELEMENT,
                        });
                    };
            i()(null != k, "Step should be set here");
            let G = (0, r.A)(() => Date.now(), [k]),
                F = C.pn.PAYMENT_ELEMENT;
            return (0, E.Y)({
                addPaymentMethodStepState: D,
                initialStep: F,
                prependSteps: [C.pn.PROMOTION_INFO],
                appendSteps: [C.pn.REVIEW, C.pn.CONFIRM],
                useCheckoutStep: !0,
                analyticsData: t,
                onReturn: M ? void 0 : U,
                onComplete: (e) => {
                    C.l_.has(e)
                        ? (v(f.h.COMPLETED), l(C.pn.CONFIRM, { trackedFromStep: e }))
                        : l(C.pn.REVIEW, { trackedFromStep: e });
                },
                onStepChange: (e) => {
                    let { currentStep: n, toStep: l } = e,
                        i = Date.now();
                    m.default.track(S.HAw.PAYMENT_FLOW_STEP, {
                        ...t,
                        from_step: n,
                        to_step: l,
                        step_duration_ms: i - G,
                        flow_duration_ms: i - x.startTime,
                    });
                },
                isEligibleForTrial: L,
                allowDesktopRedirectPurchase:
                    (0, p.xl)() && null != P && [I.pe.TIER_0, I.pe.TIER_2].includes(P) && !w && null == j,
                continueSessionToInitialStep: y,
            });
        },
    },
);
