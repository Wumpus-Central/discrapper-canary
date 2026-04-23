"use strict";
n.d(t, { x: () => m });
var r = n(284009),
    i = n.n(r),
    s = n(330140),
    a = n(94420),
    o = n(480800),
    l = n(954571),
    u = n(723702),
    c = n(937008),
    d = n(156312),
    _ = n(166532),
    f = n(566980),
    p = n(615310),
    h = n(652215),
    E = n(788868);
function m(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: m,
            onReturn: g,
            continueSessionToInitialStep: A,
        } = e,
        I = (0, a.t4)((e) => e.selectedSkuId),
        {
            contextMetadata: T,
            paymentSources: S,
            paymentSourceId: y,
            setPaymentSourceId: N,
            purchaseError: v,
            setPurchaseError: C,
            purchaseErrorBlockRef: O,
            paymentAuthenticationState: R,
            activeSubscription: b,
            setPurchaseState: D,
            paymentElementsEnabled: L,
            isPremiumGroupPurchase: w,
            isEligibleForTrial: M,
        } = (0, d.P5)(),
        { step: P, previousStep: x } = (0, p.Ay)(),
        { isGift: k } = (0, c.Pv)(),
        U = {
            ...(0, o._V)(),
            paymentSources: S,
            paymentSourceId: y,
            setPaymentSourceId: N,
            purchaseError: v,
            setPurchaseError: C,
            purchaseErrorBlockRef: O,
            paymentAuthenticationState: R,
            selectedSkuId: I,
            isGift: k,
        },
        G =
            g ??
            (() => {
                m(Object.values(S).length < 1 && null == n ? _.pn.PLAN_SELECT : _.pn.REVIEW, {
                    trackedFromStep: L ? _.pn.PAYMENT_ELEMENT : _.pn.PAYMENT_TYPE,
                });
            });
    i()(P, "Step should be set here");
    let F = (0, s.A)(() => Date.now(), [P]),
        V = (0, s.A)(
            () =>
                null != A && null == x ? (L ? _.pn.PAYMENT_ELEMENT : A) : L ? _.pn.PAYMENT_ELEMENT : _.pn.PAYMENT_TYPE,
            [A, x, L],
        );
    return (0, o.Y)({
        paymentModalArgs: U,
        initialStep: V,
        prependSteps: [_.pn.PROMOTION_INFO],
        appendSteps: [_.pn.REVIEW, _.pn.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: P,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: w ? void 0 : G,
        onComplete: (e) => {
            _.l_.has(e)
                ? (D(f.h.COMPLETED), m(_.pn.CONFIRM, { trackedFromStep: e }))
                : m(_.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            l.default.track(h.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: r,
                step_duration_ms: i - F,
                flow_duration_ms: i - T.startTime,
            });
        },
        isEligibleForTrial: M,
        allowDesktopRedirectPurchase:
            (0, u.isDesktop)() && null != I && [E.pe.TIER_0, E.pe.TIER_2].includes(I) && !k && null == b,
        continueSessionToInitialStep: A,
        shouldUseManaModal: !0,
    });
}
