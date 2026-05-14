n.d(t, { x: () => E });
var l = n(284009),
    a = n.n(l),
    i = n(976634),
    r = n(94420),
    s = n(61299),
    o = n(174459),
    u = n(723702),
    c = n(937008),
    d = n(834252),
    p = n(166532),
    m = n(566980),
    h = n(615310),
    C = n(652215),
    A = n(788868);
function E(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: E,
            onReturn: y,
            continueSessionToInitialStep: P,
        } = e,
        {
            selectedSkuId: S,
            setPurchaseState: _,
            contextMetadata: T,
        } = (0, r.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
        })),
        {
            paymentSources: f,
            paymentSourceId: N,
            setPaymentSourceId: I,
            purchaseErrorBlockRef: x,
            paymentAuthenticationState: g,
            activeSubscription: v,
            paymentElementsEnabled: M,
            isPremiumGroupPurchase: b,
            isEligibleForTrial: R,
        } = (0, d.P5)(),
        { purchaseError: j, setPurchaseError: L } = (0, r.t4)((e) => ({
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
        })),
        { step: O, previousStep: D } = (0, h.Ay)(),
        { isGift: w } = (0, c.Pv)(),
        U = {
            ...(0, s._V)(),
            paymentSources: f,
            paymentSourceId: N,
            setPaymentSourceId: I,
            purchaseError: j,
            setPurchaseError: L,
            purchaseErrorBlockRef: x,
            paymentAuthenticationState: g,
            selectedSkuId: S,
            isGift: w,
        },
        k =
            y ??
            (() => {
                E(Object.values(f).length < 1 && null == n ? p.pn.PLAN_SELECT : p.pn.REVIEW, {
                    trackedFromStep: M ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
                });
            });
    a()(O, "Step should be set here");
    let Y = (0, i.A)(() => Date.now(), [O]),
        G = (0, i.A)(
            () =>
                null != P && null == D ? (M ? p.pn.PAYMENT_ELEMENT : P) : M ? p.pn.PAYMENT_ELEMENT : p.pn.PAYMENT_TYPE,
            [P, D, M],
        );
    return (0, s.Y)({
        paymentModalArgs: U,
        initialStep: G,
        prependSteps: [p.pn.PROMOTION_INFO],
        appendSteps: [p.pn.REVIEW, p.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: O,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: b ? void 0 : k,
        onComplete: (e) => {
            p.l_.has(e)
                ? (_(m.h.COMPLETED), E(p.pn.CONFIRM, { trackedFromStep: e }))
                : E(p.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                a = Date.now();
            o.default.track(C.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: a - Y,
                flow_duration_ms: a - T.startTime,
            });
        },
        isEligibleForTrial: R,
        allowDesktopRedirectPurchase:
            (0, u.isDesktop)() && null != S && [A.pe.TIER_0, A.pe.TIER_2].includes(S) && !w && null == v,
        continueSessionToInitialStep: P,
        shouldUseManaModal: !0,
    });
}
