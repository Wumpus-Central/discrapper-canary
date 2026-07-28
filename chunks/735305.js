n.d(t, { x: () => y });
var l = n(284009),
    i = n.n(l),
    r = n(999129),
    a = n(202475),
    s = n(211083),
    o = n(463376),
    u = n(883645),
    c = n(601194),
    d = n(316915),
    p = n(61299),
    m = n(174459),
    C = n(723702),
    h = n(951305),
    E = n(166532),
    f = n(566980),
    A = n(652215),
    S = n(202541);
function y(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: y,
            onReturn: P,
            continueSessionToInitialStep: I,
        } = e,
        { paymentSources: _ } = (0, a.jm)(),
        {
            selectedSkuId: T,
            setPurchaseState: g,
            contextMetadata: v,
            paymentSourceId: x,
            setPaymentSourceId: N,
            purchaseError: R,
            setPurchaseError: b,
            activeSubscription: M,
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
        { purchaseErrorBlockRef: j } = (0, c.Gm)(),
        { paymentAuthenticationState: O } = (0, s.o)(),
        { isPremiumGroupPurchase: L, isEligibleForTrial: w } = (0, o.i)(),
        { step: k } = (0, u.Ay)(),
        { isGift: U } = (0, h.Pv)(),
        D = {
            ...(0, p._V)(),
            paymentSources: _,
            paymentSourceId: x,
            setPaymentSourceId: N,
            purchaseError: R,
            setPurchaseError: b,
            purchaseErrorBlockRef: j,
            paymentAuthenticationState: O,
            selectedSkuId: T,
            isGift: U,
        },
        G =
            P ??
            function () {
                y(Object.values(_).length < 1 && null == n ? E.pn.PLAN_SELECT : E.pn.REVIEW, {
                    trackedFromStep: E.pn.PAYMENT_ELEMENT,
                });
            };
    i()(null != k, "Step should be set here");
    let F = (0, r.A)(() => Date.now(), [k]),
        H = E.pn.PAYMENT_ELEMENT;
    return (0, p.Y)({
        paymentModalArgs: D,
        initialStep: H,
        prependSteps: [E.pn.PROMOTION_INFO],
        appendSteps: [E.pn.REVIEW, E.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: k,
        useCheckoutStep: !0,
        analyticsData: t,
        onReturn: L ? void 0 : G,
        onComplete: (e) => {
            E.l_.has(e)
                ? (g(f.h.COMPLETED), y(E.pn.CONFIRM, { trackedFromStep: e }))
                : y(E.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            m.default.track(A.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - F,
                flow_duration_ms: i - v.startTime,
            });
        },
        isEligibleForTrial: w,
        allowDesktopRedirectPurchase:
            (0, C.isDesktop)() && null != T && [S.pe.TIER_0, S.pe.TIER_2].includes(T) && !U && null == M,
        continueSessionToInitialStep: I,
        shouldUseManaModal: !0,
    });
}
