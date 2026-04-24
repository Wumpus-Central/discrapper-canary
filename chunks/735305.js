n.d(t, { x: () => _ });
var l = n(284009),
    a = n.n(l),
    i = n(976634),
    r = n(94420),
    s = n(61299),
    o = n(954571),
    u = n(723702),
    c = n(937008),
    d = n(156312),
    p = n(166532),
    m = n(566980),
    h = n(615310),
    A = n(652215),
    C = n(788868);
function _(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: _,
            onReturn: E,
            continueSessionToInitialStep: y,
        } = e,
        f = (0, r.t4)((e) => e.selectedSkuId),
        {
            contextMetadata: P,
            paymentSources: S,
            paymentSourceId: T,
            setPaymentSourceId: x,
            purchaseError: N,
            setPurchaseError: g,
            purchaseErrorBlockRef: I,
            paymentAuthenticationState: v,
            activeSubscription: b,
            setPurchaseState: M,
            paymentElementsEnabled: L,
            isPremiumGroupPurchase: R,
            isEligibleForTrial: j,
        } = (0, d.P5)(),
        { step: O, previousStep: D } = (0, h.Ay)(),
        { isGift: w } = (0, c.Pv)(),
        U = {
            ...(0, s._V)(),
            paymentSources: S,
            paymentSourceId: T,
            setPaymentSourceId: x,
            purchaseError: N,
            setPurchaseError: g,
            purchaseErrorBlockRef: I,
            paymentAuthenticationState: v,
            selectedSkuId: f,
            isGift: w,
        },
        k =
            E ??
            (() => {
                _(Object.values(S).length < 1 && null == n ? p.pn.PLAN_SELECT : p.pn.REVIEW, {
                    trackedFromStep: L ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
                });
            });
    a()(O, "Step should be set here");
    let Y = (0, i.A)(() => Date.now(), [O]),
        F = (0, i.A)(
            () =>
                null != y && null == D ? (L ? p.pn.PAYMENT_ELEMENT : y) : L ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
            [y, D, L],
        );
    return (0, s.Y)({
        paymentModalArgs: U,
        initialStep: F,
        prependSteps: [p.pn.PROMOTION_INFO],
        appendSteps: [p.pn.REVIEW, p.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: O,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: R ? void 0 : k,
        onComplete: (e) => {
            p.l_.has(e)
                ? (M(m.h.COMPLETED), _(p.pn.CONFIRM, { trackedFromStep: e }))
                : _(p.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                a = Date.now();
            o.default.track(A.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: a - Y,
                flow_duration_ms: a - P.startTime,
            });
        },
        isEligibleForTrial: j,
        allowDesktopRedirectPurchase:
            (0, u.isDesktop)() && null != f && [C.pe.TIER_0, C.pe.TIER_2].includes(f) && !w && null == b,
        continueSessionToInitialStep: y,
        shouldUseManaModal: !0,
    });
}
