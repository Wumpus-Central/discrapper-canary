n.d(t, { x: () => E });
var l = n(284009),
    i = n.n(l),
    a = n(976634),
    r = n(94420),
    s = n(61299),
    o = n(954571),
    u = n(723702),
    c = n(937008),
    d = n(156312),
    p = n(166532),
    m = n(566980),
    h = n(615310),
    C = n(652215),
    A = n(788868);
function E(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: E,
            onReturn: y,
            continueSessionToInitialStep: P,
        } = e,
        S = (0, r.t4)((e) => e.selectedSkuId),
        {
            contextMetadata: _,
            paymentSources: T,
            paymentSourceId: f,
            setPaymentSourceId: N,
            purchaseError: x,
            setPurchaseError: I,
            purchaseErrorBlockRef: g,
            paymentAuthenticationState: v,
            activeSubscription: M,
            setPurchaseState: b,
            paymentElementsEnabled: R,
            isPremiumGroupPurchase: j,
            isEligibleForTrial: L,
        } = (0, d.P5)(),
        { step: O, previousStep: D } = (0, h.Ay)(),
        { isGift: w } = (0, c.Pv)(),
        U = {
            ...(0, s._V)(),
            paymentSources: T,
            paymentSourceId: f,
            setPaymentSourceId: N,
            purchaseError: x,
            setPurchaseError: I,
            purchaseErrorBlockRef: g,
            paymentAuthenticationState: v,
            selectedSkuId: S,
            isGift: w,
        },
        k =
            y ??
            (() => {
                E(Object.values(T).length < 1 && null == n ? p.pn.PLAN_SELECT : p.pn.REVIEW, {
                    trackedFromStep: R ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
                });
            });
    i()(O, "Step should be set here");
    let Y = (0, a.A)(() => Date.now(), [O]),
        G = (0, a.A)(
            () =>
                null != P && null == D ? (R ? p.pn.PAYMENT_ELEMENT : P) : R ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
            [P, D, R],
        );
    return (0, s.Y)({
        paymentModalArgs: U,
        initialStep: G,
        prependSteps: [p.pn.PROMOTION_INFO],
        appendSteps: [p.pn.REVIEW, p.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: O,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: j ? void 0 : k,
        onComplete: (e) => {
            p.l_.has(e)
                ? (b(m.h.COMPLETED), E(p.pn.CONFIRM, { trackedFromStep: e }))
                : E(p.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            o.default.track(C.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - Y,
                flow_duration_ms: i - _.startTime,
            });
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase:
            (0, u.isDesktop)() && null != S && [A.pe.TIER_0, A.pe.TIER_2].includes(S) && !w && null == M,
        continueSessionToInitialStep: P,
        shouldUseManaModal: !0,
    });
}
