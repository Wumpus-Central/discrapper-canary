n.d(t, { x: () => P });
var l = n(284009),
    r = n.n(l),
    i = n(976634),
    a = n(446044),
    s = n(426398),
    o = n(211083),
    u = n(463376),
    c = n(738909),
    d = n(211159),
    p = n(61299),
    m = n(174459),
    h = n(723702),
    A = n(937008),
    E = n(166532),
    C = n(566980),
    y = n(615310),
    _ = n(652215),
    S = n(788868);
function P(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: P,
            onReturn: I,
            continueSessionToInitialStep: f,
        } = e,
        { paymentSources: T } = (0, s.jm)(),
        {
            selectedSkuId: N,
            setPurchaseState: g,
            contextMetadata: v,
            paymentSourceId: x,
            setPaymentSourceId: R,
            purchaseError: M,
            setPurchaseError: b,
            activeSubscription: L,
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
        { paymentAuthenticationState: j } = (0, o.o)(),
        { enabled: w } = (0, a.Y)({ location: "PaymentModalAddPaymentStep" }),
        { isPremiumGroupPurchase: D, isEligibleForTrial: U } = (0, u.i)(),
        { step: k, previousStep: G } = (0, y.Ay)(),
        { isGift: F } = (0, A.Pv)(),
        Y = {
            ...(0, p._V)(),
            paymentSources: T,
            paymentSourceId: x,
            setPaymentSourceId: R,
            purchaseError: M,
            setPurchaseError: b,
            purchaseErrorBlockRef: O,
            paymentAuthenticationState: j,
            selectedSkuId: N,
            isGift: F,
        },
        B =
            I ??
            (() => {
                P(Object.values(T).length < 1 && null == n ? E.pn.PLAN_SELECT : E.pn.REVIEW, {
                    trackedFromStep: w ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
                });
            });
    r()(k, "Step should be set here");
    let W = (0, i.A)(() => Date.now(), [k]),
        H = (0, i.A)(
            () =>
                null != f && null == G ? (w ? E.pn.PAYMENT_ELEMENT : f) : w ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
            [f, G, w],
        );
    return (0, p.Y)({
        paymentModalArgs: Y,
        initialStep: H,
        prependSteps: [E.pn.PROMOTION_INFO],
        appendSteps: [E.pn.REVIEW, E.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: k,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: D ? void 0 : B,
        onComplete: (e) => {
            E.l_.has(e)
                ? (g(C.h.COMPLETED), P(E.pn.CONFIRM, { trackedFromStep: e }))
                : P(E.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                r = Date.now();
            m.default.track(_.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: r - W,
                flow_duration_ms: r - v.startTime,
            });
        },
        isEligibleForTrial: U,
        allowDesktopRedirectPurchase:
            (0, h.isDesktop)() && null != N && [S.pe.TIER_0, S.pe.TIER_2].includes(N) && !F && null == L,
        continueSessionToInitialStep: f,
        shouldUseManaModal: !0,
    });
}
