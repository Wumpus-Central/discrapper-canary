"use strict";
n.d(t, { x: () => T });
var i = n(284009),
    r = n.n(i),
    s = n(976634),
    a = n(446044),
    o = n(426398),
    l = n(211083),
    u = n(463376),
    c = n(21713),
    d = n(46332),
    _ = n(769160),
    h = n(174459),
    f = n(723702),
    p = n(937008),
    E = n(166532),
    m = n(566980),
    g = n(615310),
    A = n(652215),
    I = n(788868);
function T(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: i,
            handleStepChange: T,
            onReturn: S,
            continueSessionToInitialStep: y,
        } = e,
        { paymentSources: C } = (0, o.jm)(),
        {
            selectedSkuId: N,
            setPurchaseState: v,
            contextMetadata: R,
            paymentSourceId: O,
            setPaymentSourceId: b,
            purchaseError: D,
            setPurchaseError: L,
            activeSubscription: w,
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
        { purchaseErrorBlockRef: M } = (0, c.Gm)(),
        { paymentAuthenticationState: P } = (0, l.o)(),
        { enabled: x } = (0, a.Y)({ location: "PaymentModalAddPaymentStep" }),
        { isPremiumGroupPurchase: k, isEligibleForTrial: U } = (0, u.i)(),
        { step: G, previousStep: F } = (0, g.Ay)(),
        { isGift: V } = (0, p.Pv)(),
        B = {
            ...(0, _._V)(),
            paymentSources: C,
            paymentSourceId: O,
            setPaymentSourceId: b,
            purchaseError: D,
            setPurchaseError: L,
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: P,
            selectedSkuId: N,
            isGift: V,
        },
        j =
            S ??
            function () {
                T(Object.values(C).length < 1 && null == n ? E.pn.PLAN_SELECT : E.pn.REVIEW, {
                    trackedFromStep: x ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
                });
            };
    r()(G, "Step should be set here");
    let H = (0, s.A)(() => Date.now(), [G]),
        Y = (0, s.A)(
            () =>
                null != y && null == F ? (x ? E.pn.PAYMENT_ELEMENT : y) : x ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
            [y, F, x],
        );
    return (0, _.Y)({
        paymentModalArgs: B,
        initialStep: Y,
        prependSteps: [E.pn.PROMOTION_INFO],
        appendSteps: [E.pn.REVIEW, E.pn.CONFIRM],
        breadcrumpSteps: i,
        currentBreadcrumpStep: G,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: k ? void 0 : j,
        onComplete: (e) => {
            E.l_.has(e)
                ? (v(m.h.COMPLETED), T(E.pn.CONFIRM, { trackedFromStep: e }))
                : T(E.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: i } = e,
                r = Date.now();
            h.default.track(A.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: i,
                step_duration_ms: r - H,
                flow_duration_ms: r - R.startTime,
            });
        },
        isEligibleForTrial: U,
        allowDesktopRedirectPurchase:
            (0, f.isDesktop)() && null != N && [I.pe.TIER_0, I.pe.TIER_2].includes(N) && !V && null == w,
        continueSessionToInitialStep: y,
        shouldUseManaModal: !0,
    });
}
