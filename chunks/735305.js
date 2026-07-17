n.d(t, { x: () => P });
var l = n(284009),
    i = n.n(l),
    r = n(976634),
    a = n(446044),
    s = n(426398),
    o = n(211083),
    u = n(463376),
    c = n(21713),
    d = n(316915),
    p = n(61299),
    m = n(174459),
    h = n(723702),
    C = n(951305),
    E = n(166532),
    f = n(566980),
    A = n(615310),
    S = n(652215),
    y = n(202541);
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
            setPaymentSourceId: M,
            purchaseError: R,
            setPurchaseError: b,
            activeSubscription: j,
        } = (0, d.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
            activeSubscription: e.activeSubscription,
        })),
        { purchaseErrorBlockRef: O } = (0, c.Gm)(),
        { paymentAuthenticationState: L } = (0, o.o)(),
        { enabled: w } = (0, a.Y)({ location: "PaymentModalAddPaymentStep" }),
        { isPremiumGroupPurchase: k, isEligibleForTrial: D } = (0, u.i)(),
        { step: U, previousStep: G } = (0, A.Ay)(),
        { isGift: F } = (0, C.Pv)(),
        H = {
            ...(0, p._V)(),
            paymentSources: T,
            paymentSourceId: N,
            setPaymentSourceId: M,
            purchaseError: R,
            setPurchaseError: b,
            purchaseErrorBlockRef: O,
            paymentAuthenticationState: L,
            selectedSkuId: g,
            isGift: F,
        },
        B =
            I ??
            function () {
                P(Object.values(T).length < 1 && null == n ? E.pn.PLAN_SELECT : E.pn.REVIEW, {
                    trackedFromStep: w ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
                });
            };
    i()(U, "Step should be set here");
    let Y = (0, r.A)(() => Date.now(), [U]),
        W = (0, r.A)(
            () =>
                null != _ && null == G ? (w ? E.pn.PAYMENT_ELEMENT : _) : w ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
            [_, G, w],
        );
    return (0, p.Y)({
        paymentModalArgs: H,
        initialStep: W,
        prependSteps: [E.pn.PROMOTION_INFO],
        appendSteps: [E.pn.REVIEW, E.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: U,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: k ? void 0 : B,
        onComplete: (e) => {
            E.l_.has(e)
                ? (x(f.h.COMPLETED), P(E.pn.CONFIRM, { trackedFromStep: e }))
                : P(E.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            m.default.track(S.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - Y,
                flow_duration_ms: i - v.startTime,
            });
        },
        isEligibleForTrial: D,
        allowDesktopRedirectPurchase:
            (0, h.isDesktop)() && null != g && [y.pe.TIER_0, y.pe.TIER_2].includes(g) && !F && null == j,
        continueSessionToInitialStep: _,
        shouldUseManaModal: !0,
    });
}
