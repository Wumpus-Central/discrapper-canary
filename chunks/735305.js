n.d(t, { x: () => C });
var l = n(284009),
    i = n.n(l),
    a = n(330140),
    r = n(94420),
    s = n(480800),
    o = n(954571),
    u = n(723702),
    c = n(937008),
    d = n(156312),
    p = n(166532),
    m = n(566980),
    h = n(615310),
    A = n(652215),
    _ = n(788868);
function C(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: C,
            onReturn: E,
            continueSessionToInitialStep: y,
        } = e,
        f = (0, r.t4)((e) => e.selectedSkuId),
        {
            contextMetadata: P,
            paymentSources: S,
            paymentSourceId: x,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: g,
            purchaseErrorBlockRef: I,
            paymentAuthenticationState: v,
            activeSubscription: b,
            setPurchaseState: R,
            paymentElementsEnabled: M,
            isPremiumGroupPurchase: j,
            isEligibleForTrial: L,
        } = (0, d.P5)(),
        { step: O, previousStep: D } = (0, h.Ay)(),
        { isGift: U } = (0, c.Pv)(),
        w = {
            ...(0, s._V)(),
            paymentSources: S,
            paymentSourceId: x,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: g,
            purchaseErrorBlockRef: I,
            paymentAuthenticationState: v,
            selectedSkuId: f,
            isGift: U,
        },
        k =
            E ??
            (() => {
                C(Object.values(S).length < 1 && null == n ? p.pn.PLAN_SELECT : p.pn.REVIEW, {
                    trackedFromStep: M ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
                });
            });
    i()(O, "Step should be set here");
    let F = (0, a.A)(() => Date.now(), [O]),
        G = (0, a.A)(
            () =>
                null != y && null == D ? (M ? p.pn.PAYMENT_ELEMENT : y) : M ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
            [y, D, M],
        );
    return (0, s.Y)({
        paymentModalArgs: w,
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
                ? (R(m.h.COMPLETED), C(p.pn.CONFIRM, { trackedFromStep: e }))
                : C(p.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            o.default.track(A.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - F,
                flow_duration_ms: i - P.startTime,
            });
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase:
            (0, u.isDesktop)() && null != f && [_.pe.TIER_0, _.pe.TIER_2].includes(f) && !U && null == b,
        continueSessionToInitialStep: y,
        shouldUseManaModal: !0,
    });
}
