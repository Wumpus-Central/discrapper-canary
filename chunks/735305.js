"use strict";
n.d(t, { x: () => g });
var r = n(284009),
    i = n.n(r),
    a = n(330140),
    s = n(998678),
    o = n(954571),
    l = n(723702),
    u = n(937008),
    c = n(156312),
    d = n(166532),
    _ = n(566980),
    f = n(652215),
    h = n(788868);
function p(e, t, n) {
    return (0, l.isDesktop)() && null != e && [h.pe.TIER_0, h.pe.TIER_2].includes(e) && !t && null == n;
}
function g(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: l,
            onReturn: h,
            continueSessionToInitialStep: g,
        } = e,
        {
            contextMetadata: E,
            step: A,
            paymentSources: I,
            paymentSourceId: T,
            setPaymentSourceId: y,
            purchaseError: S,
            setPurchaseError: v,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: b,
            selectedSkuId: N,
            activeSubscription: R,
            previousStepRef: O,
            setPurchaseState: D,
            paymentElementsEnabled: L,
            isPremiumGroupPurchase: w,
            isEligibleForTrial: x,
        } = (0, c.P5)(),
        { isGift: P } = (0, u.Pv)(),
        M = {
            ...(0, s.KP)(),
            paymentSources: I,
            paymentSourceId: T,
            setPaymentSourceId: y,
            purchaseError: S,
            setPurchaseError: v,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: b,
            selectedSkuId: N,
            isGift: P,
        },
        k = () => {
            l(Object.values(I).length < 1 && null == n ? d.pn.PLAN_SELECT : d.pn.REVIEW, {
                trackedFromStep: L ? d.pn.PAYMENT_ELEMENT : d.pn.PAYMENT_TYPE,
            });
        },
        U = h ?? k;
    i()(A, "Step should be set here");
    let G = (0, a.A)(() => Date.now(), [A]),
        F = (0, a.A)(
            () =>
                null != g && null == O.current
                    ? L
                        ? d.pn.PAYMENT_ELEMENT
                        : g
                    : L
                      ? d.pn.PAYMENT_ELEMENT
                      : d.pn.PAYMENT_TYPE,
            [g, O.current, L],
        );
    return (0, s.Y)({
        paymentModalArgs: M,
        initialStep: F,
        prependSteps: [d.pn.PROMOTION_INFO],
        appendSteps: [d.pn.REVIEW, d.pn.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: A,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: w ? void 0 : U,
        onComplete: (e) => {
            d.l_.has(e)
                ? (D(_.h.COMPLETED), l(d.pn.CONFIRM, { trackedFromStep: e }))
                : l(d.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            o.default.track(f.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: r,
                step_duration_ms: i - G,
                flow_duration_ms: i - E.startTime,
            });
        },
        isEligibleForTrial: x,
        allowDesktopRedirectPurchase: p(N, P, R),
        continueSessionToInitialStep: g,
        shouldUseManaModal: !0,
    });
}
