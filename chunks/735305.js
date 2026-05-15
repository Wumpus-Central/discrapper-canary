n.d(t, { x: () => E });
var l = n(284009),
    a = n.n(l),
    i = n(976634),
    r = n(426398),
    s = n(94420),
    o = n(61299),
    u = n(174459),
    c = n(723702),
    d = n(937008),
    p = n(834252),
    m = n(166532),
    h = n(566980),
    C = n(615310),
    A = n(652215),
    y = n(788868);
function E(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: E,
            onReturn: P,
            continueSessionToInitialStep: S,
        } = e,
        { paymentSources: _ } = (0, r.jm)(),
        {
            selectedSkuId: T,
            setPurchaseState: f,
            contextMetadata: I,
            paymentSourceId: N,
            setPaymentSourceId: x,
            purchaseError: g,
            setPurchaseError: v,
        } = (0, s.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
        })),
        {
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: b,
            activeSubscription: j,
            paymentElementsEnabled: R,
            isPremiumGroupPurchase: L,
            isEligibleForTrial: O,
        } = (0, p.P5)(),
        { step: D, previousStep: w } = (0, C.Ay)(),
        { isGift: U } = (0, d.Pv)(),
        k = {
            ...(0, o._V)(),
            paymentSources: _,
            paymentSourceId: N,
            setPaymentSourceId: x,
            purchaseError: g,
            setPurchaseError: v,
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: b,
            selectedSkuId: T,
            isGift: U,
        },
        Y =
            P ??
            (() => {
                E(Object.values(_).length < 1 && null == n ? m.pn.PLAN_SELECT : m.pn.REVIEW, {
                    trackedFromStep: R ? m.pn.PAYMENT_ELEMENT : m.pn.PAYMENT_TYPE,
                });
            });
    a()(D, "Step should be set here");
    let G = (0, i.A)(() => Date.now(), [D]),
        F = (0, i.A)(
            () =>
                null != S && null == w ? (R ? m.pn.PAYMENT_ELEMENT : S) : R ? m.pn.PAYMENT_ELEMENT : m.pn.PAYMENT_TYPE,
            [S, w, R],
        );
    return (0, o.Y)({
        paymentModalArgs: k,
        initialStep: F,
        prependSteps: [m.pn.PROMOTION_INFO],
        appendSteps: [m.pn.REVIEW, m.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: D,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: L ? void 0 : Y,
        onComplete: (e) => {
            m.l_.has(e)
                ? (f(h.h.COMPLETED), E(m.pn.CONFIRM, { trackedFromStep: e }))
                : E(m.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                a = Date.now();
            u.default.track(A.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: a - G,
                flow_duration_ms: a - I.startTime,
            });
        },
        isEligibleForTrial: O,
        allowDesktopRedirectPurchase:
            (0, c.isDesktop)() && null != T && [y.pe.TIER_0, y.pe.TIER_2].includes(T) && !U && null == j,
        continueSessionToInitialStep: S,
        shouldUseManaModal: !0,
    });
}
