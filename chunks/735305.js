"use strict";
n.d(t, { x: () => g });
var r = n(284009),
    i = n.n(r),
    s = n(330140),
    a = n(480800),
    o = n(954571),
    l = n(723702),
    u = n(413748),
    c = n(937008),
    d = n(156312),
    _ = n(166532),
    f = n(566980),
    p = n(615310),
    h = n(652215),
    m = n(788868);
function E(e, t, n) {
    return (0, l.isDesktop)() && null != e && [m.pe.TIER_0, m.pe.TIER_2].includes(e) && !t && null == n;
}
function g(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: l,
            onReturn: m,
            continueSessionToInitialStep: g,
        } = e,
        A = (0, u.t4)((e) => e.selectedSkuId),
        {
            contextMetadata: I,
            paymentSources: T,
            paymentSourceId: S,
            setPaymentSourceId: y,
            purchaseError: v,
            setPurchaseError: N,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: R,
            activeSubscription: O,
            setPurchaseState: b,
            paymentElementsEnabled: D,
            isPremiumGroupPurchase: L,
            isEligibleForTrial: w,
        } = (0, d.P5)(),
        { step: M, previousStep: P } = (0, p.Ay)(),
        { isGift: x } = (0, c.Pv)(),
        k = {
            ...(0, a._V)(),
            paymentSources: T,
            paymentSourceId: S,
            setPaymentSourceId: y,
            purchaseError: v,
            setPurchaseError: N,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: R,
            selectedSkuId: A,
            isGift: x,
        },
        U = () => {
            l(Object.values(T).length < 1 && null == n ? _.pn.PLAN_SELECT : _.pn.REVIEW, {
                trackedFromStep: D ? _.pn.PAYMENT_ELEMENT : _.pn.PAYMENT_TYPE,
            });
        },
        G = m ?? U;
    i()(M, "Step should be set here");
    let F = (0, s.A)(() => Date.now(), [M]),
        V = (0, s.A)(
            () =>
                null != g && null == P ? (D ? _.pn.PAYMENT_ELEMENT : g) : D ? _.pn.PAYMENT_ELEMENT : _.pn.PAYMENT_TYPE,
            [g, P, D],
        );
    return (0, a.Y)({
        paymentModalArgs: k,
        initialStep: V,
        prependSteps: [_.pn.PROMOTION_INFO],
        appendSteps: [_.pn.REVIEW, _.pn.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: M,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: L ? void 0 : G,
        onComplete: (e) => {
            _.l_.has(e)
                ? (b(f.h.COMPLETED), l(_.pn.CONFIRM, { trackedFromStep: e }))
                : l(_.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            o.default.track(h.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: r,
                step_duration_ms: i - F,
                flow_duration_ms: i - I.startTime,
            });
        },
        isEligibleForTrial: w,
        allowDesktopRedirectPurchase: E(A, x, O),
        continueSessionToInitialStep: g,
        shouldUseManaModal: !0,
    });
}
