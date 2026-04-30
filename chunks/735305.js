n.d(t, { x: () => E });
var l = n(284009),
    a = n.n(l),
    i = n(976634),
    s = n(94420),
    r = n(61299),
    o = n(954571),
    u = n(723702),
    c = n(937008),
    d = n(156312),
    p = n(166532),
    m = n(566980),
    h = n(615310),
    A = n(652215),
    C = n(788868);
function E(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: E,
            onReturn: y,
            continueSessionToInitialStep: P,
        } = e,
        { selectedSkuId: S, setPurchaseState: _ } = (0, s.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setPurchaseState: e.setPurchaseState,
        })),
        {
            contextMetadata: T,
            paymentSources: f,
            paymentSourceId: N,
            setPaymentSourceId: x,
            purchaseError: I,
            setPurchaseError: g,
            purchaseErrorBlockRef: v,
            paymentAuthenticationState: M,
            activeSubscription: b,
            paymentElementsEnabled: R,
            isPremiumGroupPurchase: j,
            isEligibleForTrial: L,
        } = (0, d.P5)(),
        { step: O, previousStep: D } = (0, h.Ay)(),
        { isGift: w } = (0, c.Pv)(),
        U = {
            ...(0, r._V)(),
            paymentSources: f,
            paymentSourceId: N,
            setPaymentSourceId: x,
            purchaseError: I,
            setPurchaseError: g,
            purchaseErrorBlockRef: v,
            paymentAuthenticationState: M,
            selectedSkuId: S,
            isGift: w,
        },
        k =
            y ??
            (() => {
                E(Object.values(f).length < 1 && null == n ? p.pn.PLAN_SELECT : p.pn.REVIEW, {
                    trackedFromStep: R ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
                });
            });
    a()(O, "Step should be set here");
    let Y = (0, i.A)(() => Date.now(), [O]),
        G = (0, i.A)(
            () =>
                null != P && null == D ? (R ? p.pn.PAYMENT_ELEMENT : P) : R ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
            [P, D, R],
        );
    return (0, r.Y)({
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
                ? (_(m.h.COMPLETED), E(p.pn.CONFIRM, { trackedFromStep: e }))
                : E(p.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                a = Date.now();
            o.default.track(A.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: a - Y,
                flow_duration_ms: a - T.startTime,
            });
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase:
            (0, u.isDesktop)() && null != S && [C.pe.TIER_0, C.pe.TIER_2].includes(S) && !w && null == b,
        continueSessionToInitialStep: P,
        shouldUseManaModal: !0,
    });
}
