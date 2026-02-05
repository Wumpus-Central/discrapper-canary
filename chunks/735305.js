"use strict";
n.d(t, { x: () => m });
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
    p = n(788868);
function h(e, t, n) {
    return (0, l.isDesktop)() && null != e && [p.pe.TIER_0, p.pe.TIER_2].includes(e) && !t && null == n;
}
function m(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: l,
            onReturn: p,
            continueSessionToInitialStep: m,
        } = e,
        {
            contextMetadata: g,
            step: E,
            paymentSources: A,
            paymentSourceId: I,
            setPaymentSourceId: T,
            purchaseError: y,
            setPurchaseError: S,
            purchaseErrorBlockRef: v,
            paymentAuthenticationState: C,
            selectedSkuId: b,
            activeSubscription: N,
            previousStepRef: R,
            setPurchaseState: O,
            paymentElementsEnabled: D,
            isPremiumGroupPurchase: L,
            isEligibleForTrial: w,
        } = (0, c.P5)(),
        { isGift: x } = (0, u.Pv)(),
        P = {
            ...(0, s.KP)(),
            paymentSources: A,
            paymentSourceId: I,
            setPaymentSourceId: T,
            purchaseError: y,
            setPurchaseError: S,
            purchaseErrorBlockRef: v,
            paymentAuthenticationState: C,
            selectedSkuId: b,
            isGift: x,
        },
        M = () => {
            l(Object.values(A).length < 1 && null == n ? d.pn.PLAN_SELECT : d.pn.REVIEW, {
                trackedFromStep: D ? d.pn.PAYMENT_ELEMENT : d.pn.PAYMENT_TYPE,
            });
        },
        k = p ?? M;
    i()(E, "Step should be set here");
    let U = (0, a.A)(() => Date.now(), [E]),
        G = (0, a.A)(
            () =>
                null != m && null == R.current
                    ? D
                        ? d.pn.PAYMENT_ELEMENT
                        : m
                    : D
                      ? d.pn.PAYMENT_ELEMENT
                      : d.pn.PAYMENT_TYPE,
            [m, R.current, D],
        );
    return (0, s.Y)({
        paymentModalArgs: P,
        initialStep: G,
        prependSteps: [d.pn.PROMOTION_INFO],
        appendSteps: [d.pn.REVIEW, d.pn.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: E,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: L ? void 0 : k,
        onComplete: (e) => {
            d.l_.has(e)
                ? (O(_.h.COMPLETED), l(d.pn.CONFIRM, { trackedFromStep: e }))
                : l(d.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            o.default.track(f.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: r,
                step_duration_ms: i - U,
                flow_duration_ms: i - g.startTime,
            });
        },
        isEligibleForTrial: w,
        allowDesktopRedirectPurchase: h(b, x, N),
        continueSessionToInitialStep: m,
    });
}
