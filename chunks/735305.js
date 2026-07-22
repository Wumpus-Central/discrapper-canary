n.d(t, { x: () => P });
var l = n(284009),
    i = n.n(l),
    r = n(976634),
    a = n(446044),
    s = n(426398),
    o = n(211083),
    u = n(463376),
    c = n(883645),
    d = n(601194),
    p = n(316915),
    m = n(61299),
    h = n(174459),
    C = n(723702),
    E = n(951305),
    f = n(166532),
    A = n(566980),
    y = n(652215),
    S = n(202541);
function P(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: P,
            onReturn: I,
            continueSessionToInitialStep: _,
        } = e,
        { paymentSources: T } = (0, s.jm)(),
        {
            selectedSkuId: g,
            setPurchaseState: x,
            contextMetadata: v,
            paymentSourceId: N,
            setPaymentSourceId: R,
            purchaseError: M,
            setPurchaseError: b,
            activeSubscription: j,
        } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
            activeSubscription: e.activeSubscription,
        })),
        { purchaseErrorBlockRef: O } = (0, d.Gm)(),
        { paymentAuthenticationState: L } = (0, o.o)(),
        { enabled: w } = (0, a.Y)({ location: "PaymentModalAddPaymentStep" }),
        { isPremiumGroupPurchase: k, isEligibleForTrial: D } = (0, u.i)(),
        { step: U, previousStep: G } = (0, c.Ay)(),
        { isGift: F } = (0, E.Pv)(),
        H = {
            ...(0, m._V)(),
            paymentSources: T,
            paymentSourceId: N,
            setPaymentSourceId: R,
            purchaseError: M,
            setPurchaseError: b,
            purchaseErrorBlockRef: O,
            paymentAuthenticationState: L,
            selectedSkuId: g,
            isGift: F,
        },
        B =
            I ??
            function () {
                P(Object.values(T).length < 1 && null == n ? f.pn.PLAN_SELECT : f.pn.REVIEW, {
                    trackedFromStep: w ? f.pn.PAYMENT_ELEMENT : f.pn.PAYMENT_TYPE,
                });
            };
    i()(U, "Step should be set here");
    let Y = (0, r.A)(() => Date.now(), [U]),
        W = (0, r.A)(
            () =>
                null != _ && null == G ? (w ? f.pn.PAYMENT_ELEMENT : _) : w ? f.pn.PAYMENT_ELEMENT : f.pn.PAYMENT_TYPE,
            [_, G, w],
        );
    return (0, m.Y)({
        paymentModalArgs: H,
        initialStep: W,
        prependSteps: [f.pn.PROMOTION_INFO],
        appendSteps: [f.pn.REVIEW, f.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: U,
        useCheckoutStep: !0,
        analyticsData: t,
        onReturn: k ? void 0 : B,
        onComplete: (e) => {
            f.l_.has(e)
                ? (x(A.h.COMPLETED), P(f.pn.CONFIRM, { trackedFromStep: e }))
                : P(f.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            h.default.track(y.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - Y,
                flow_duration_ms: i - v.startTime,
            });
        },
        isEligibleForTrial: D,
        allowDesktopRedirectPurchase:
            (0, C.isDesktop)() && null != g && [S.pe.TIER_0, S.pe.TIER_2].includes(g) && !F && null == j,
        continueSessionToInitialStep: _,
        shouldUseManaModal: !0,
    });
}
