"use strict";
n.d(t, { x: () => g });
var i = n(284009),
    r = n.n(i),
    s = n(976634),
    a = n(94420),
    o = n(61299),
    l = n(954571),
    d = n(723702),
    _ = n(937008),
    u = n(156312),
    c = n(166532),
    E = n(566980),
    h = n(615310),
    m = n(652215),
    f = n(788868);
function g(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: i,
            handleStepChange: g,
            onReturn: p,
            continueSessionToInitialStep: A,
        } = e,
        I = (0, a.t4)((e) => e.selectedSkuId),
        {
            contextMetadata: T,
            paymentSources: S,
            paymentSourceId: N,
            setPaymentSourceId: C,
            purchaseError: R,
            setPurchaseError: O,
            purchaseErrorBlockRef: y,
            paymentAuthenticationState: v,
            activeSubscription: D,
            setPurchaseState: L,
            paymentElementsEnabled: b,
            isPremiumGroupPurchase: w,
            isEligibleForTrial: P,
        } = (0, u.P5)(),
        { step: k, previousStep: M } = (0, h.Ay)(),
        { isGift: U } = (0, _.Pv)(),
        x = {
            ...(0, o._V)(),
            paymentSources: S,
            paymentSourceId: N,
            setPaymentSourceId: C,
            purchaseError: R,
            setPurchaseError: O,
            purchaseErrorBlockRef: y,
            paymentAuthenticationState: v,
            selectedSkuId: I,
            isGift: U,
        },
        G =
            p ??
            (() => {
                g(Object.values(S).length < 1 && null == n ? c.pn.PLAN_SELECT : c.pn.REVIEW, {
                    trackedFromStep: b ? c.pn.PAYMENT_ELEMENT : c.pn.PAYMENT_TYPE,
                });
            });
    r()(k, "Step should be set here");
    let V = (0, s.A)(() => Date.now(), [k]),
        F = (0, s.A)(
            () =>
                null != A && null == M ? (b ? c.pn.PAYMENT_ELEMENT : A) : b ? c.pn.PAYMENT_ELEMENT : c.pn.PAYMENT_TYPE,
            [A, M, b],
        );
    return (0, o.Y)({
        paymentModalArgs: x,
        initialStep: F,
        prependSteps: [c.pn.PROMOTION_INFO],
        appendSteps: [c.pn.REVIEW, c.pn.CONFIRM],
        breadcrumpSteps: i,
        currentBreadcrumpStep: k,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: w ? void 0 : G,
        onComplete: (e) => {
            c.l_.has(e)
                ? (L(E.h.COMPLETED), g(c.pn.CONFIRM, { trackedFromStep: e }))
                : g(c.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: i } = e,
                r = Date.now();
            l.default.track(m.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: i,
                step_duration_ms: r - V,
                flow_duration_ms: r - T.startTime,
            });
        },
        isEligibleForTrial: P,
        allowDesktopRedirectPurchase:
            (0, d.isDesktop)() && null != I && [f.pe.TIER_0, f.pe.TIER_2].includes(I) && !U && null == D,
        continueSessionToInitialStep: A,
        shouldUseManaModal: !0,
    });
}
