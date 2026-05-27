n.d(t, { x: () => P });
var l = n(284009),
    i = n.n(l),
    a = n(976634),
    r = n(426398),
    s = n(463376),
    o = n(722847),
    u = n(61299),
    c = n(174459),
    d = n(723702),
    p = n(937008),
    m = n(834252),
    h = n(166532),
    C = n(566980),
    A = n(615310),
    y = n(652215),
    E = n(788868);
function P(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: P,
            onReturn: S,
            continueSessionToInitialStep: _,
        } = e,
        { paymentSources: f } = (0, r.jm)(),
        {
            selectedSkuId: T,
            setPurchaseState: I,
            contextMetadata: x,
            paymentSourceId: N,
            setPaymentSourceId: g,
            purchaseError: v,
            setPurchaseError: M,
        } = (0, o.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
            purchaseError: e.purchaseError,
            setPurchaseError: e.setPurchaseError,
        })),
        {
            purchaseErrorBlockRef: b,
            paymentAuthenticationState: j,
            activeSubscription: R,
            paymentElementsEnabled: L,
        } = (0, m.P5)(),
        { isPremiumGroupPurchase: O, isEligibleForTrial: D } = (0, s.i)(),
        { step: w, previousStep: U } = (0, A.Ay)(),
        { isGift: k } = (0, p.Pv)(),
        G = {
            ...(0, u._V)(),
            paymentSources: f,
            paymentSourceId: N,
            setPaymentSourceId: g,
            purchaseError: v,
            setPurchaseError: M,
            purchaseErrorBlockRef: b,
            paymentAuthenticationState: j,
            selectedSkuId: T,
            isGift: k,
        },
        Y =
            S ??
            (() => {
                P(Object.values(f).length < 1 && null == n ? h.pn.PLAN_SELECT : h.pn.REVIEW, {
                    trackedFromStep: L ? h.pn.PAYMENT_ELEMENT : h.pn.PAYMENT_TYPE,
                });
            });
    i()(w, "Step should be set here");
    let F = (0, a.A)(() => Date.now(), [w]),
        B = (0, a.A)(
            () =>
                null != _ && null == U ? (L ? h.pn.PAYMENT_ELEMENT : _) : L ? h.pn.PAYMENT_ELEMENT : h.pn.PAYMENT_TYPE,
            [_, U, L],
        );
    return (0, u.Y)({
        paymentModalArgs: G,
        initialStep: B,
        prependSteps: [h.pn.PROMOTION_INFO],
        appendSteps: [h.pn.REVIEW, h.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: w,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: O ? void 0 : Y,
        onComplete: (e) => {
            h.l_.has(e)
                ? (I(C.h.COMPLETED), P(h.pn.CONFIRM, { trackedFromStep: e }))
                : P(h.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            c.default.track(y.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - F,
                flow_duration_ms: i - x.startTime,
            });
        },
        isEligibleForTrial: D,
        allowDesktopRedirectPurchase:
            (0, d.isDesktop)() && null != T && [E.pe.TIER_0, E.pe.TIER_2].includes(T) && !k && null == R,
        continueSessionToInitialStep: _,
        shouldUseManaModal: !0,
    });
}
