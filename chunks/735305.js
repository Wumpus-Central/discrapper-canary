"use strict";
n.d(t, { x: () => E });
var r = n(284009),
    i = n.n(r),
    s = n(330140),
    a = n(998678),
    o = n(954571),
    l = n(723702),
    u = n(937008),
    c = n(156312),
    d = n(166532),
    _ = n(566980),
    f = n(615310),
    p = n(652215),
    h = n(788868);
function m(e, t, n) {
    return (0, l.isDesktop)() && null != e && [h.pe.TIER_0, h.pe.TIER_2].includes(e) && !t && null == n;
}
function E(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: l,
            onReturn: h,
            continueSessionToInitialStep: E,
        } = e,
        {
            contextMetadata: g,
            paymentSources: A,
            paymentSourceId: I,
            setPaymentSourceId: T,
            purchaseError: S,
            setPurchaseError: y,
            purchaseErrorBlockRef: v,
            paymentAuthenticationState: N,
            selectedSkuId: C,
            activeSubscription: R,
            setPurchaseState: O,
            paymentElementsEnabled: b,
            isPremiumGroupPurchase: D,
            isEligibleForTrial: L,
        } = (0, c.P5)(),
        { step: w, previousStep: M } = (0, f.Ay)(),
        { isGift: x } = (0, u.Pv)(),
        P = {
            ...(0, a.KP)(),
            paymentSources: A,
            paymentSourceId: I,
            setPaymentSourceId: T,
            purchaseError: S,
            setPurchaseError: y,
            purchaseErrorBlockRef: v,
            paymentAuthenticationState: N,
            selectedSkuId: C,
            isGift: x,
        },
        k = () => {
            l(Object.values(A).length < 1 && null == n ? d.pn.PLAN_SELECT : d.pn.REVIEW, {
                trackedFromStep: b ? d.pn.PAYMENT_ELEMENT : d.pn.PAYMENT_TYPE,
            });
        },
        U = h ?? k;
    i()(w, "Step should be set here");
    let G = (0, s.A)(() => Date.now(), [w]),
        F = (0, s.A)(
            () =>
                null != E && null == M ? (b ? d.pn.PAYMENT_ELEMENT : E) : b ? d.pn.PAYMENT_ELEMENT : d.pn.PAYMENT_TYPE,
            [E, M, b],
        );
    return (0, a.Y)({
        paymentModalArgs: P,
        initialStep: F,
        prependSteps: [d.pn.PROMOTION_INFO],
        appendSteps: [d.pn.REVIEW, d.pn.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: w,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: D ? void 0 : U,
        onComplete: (e) => {
            d.l_.has(e)
                ? (O(_.h.COMPLETED), l(d.pn.CONFIRM, { trackedFromStep: e }))
                : l(d.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            o.default.track(p.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: r,
                step_duration_ms: i - G,
                flow_duration_ms: i - g.startTime,
            });
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase: m(C, x, R),
        continueSessionToInitialStep: E,
        shouldUseManaModal: !0,
    });
}
