n.d(t, { x: () => I });
var l = n(284009),
    i = n.n(l),
    r = n(999129),
    a = n(202475),
    s = n(211083),
    o = n(463376),
    u = n(883645),
    c = n(601194),
    d = n(281044),
    m = n(174459),
    p = n(723702),
    C = n(951305),
    h = n(166532),
    f = n(566980),
    E = n(280341),
    S = n(652215),
    g = n(202541);
function I(e) {
    let { analyticsData: t, initialPlanId: n, handleStepChange: l, onReturn: I, continueSessionToInitialStep: A } = e,
        { paymentSources: y } = (0, a.j)(),
        {
            selectedSkuId: x,
            setPurchaseState: P,
            contextMetadata: v,
            paymentSourceId: _,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: b,
            activeSubscription: j,
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
        { purchaseErrorBlockRef: R } = (0, c.Gm)(),
        { paymentAuthenticationState: O } = (0, s.o)(),
        { isPremiumGroupPurchase: M, isEligibleForTrial: L } = (0, o.i)(),
        { step: k } = (0, u.Ay)(),
        { isGift: w } = (0, C.Pv)(),
        D = {
            ...(0, E.p)(),
            paymentSources: y,
            paymentSourceId: _,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: b,
            purchaseErrorBlockRef: R,
            paymentAuthenticationState: O,
            isGift: w,
        },
        U =
            I ??
            function () {
                l(Object.values(y).length < 1 && null == n ? h.pn.PLAN_SELECT : h.pn.REVIEW, {
                    trackedFromStep: h.pn.PAYMENT_ELEMENT,
                });
            };
    i()(null != k, "Step should be set here");
    let G = (0, r.A)(() => Date.now(), [k]),
        F = h.pn.PAYMENT_ELEMENT;
    return (0, E.Y)({
        addPaymentMethodStepState: D,
        initialStep: F,
        prependSteps: [h.pn.PROMOTION_INFO],
        appendSteps: [h.pn.REVIEW, h.pn.CONFIRM],
        useCheckoutStep: !0,
        analyticsData: t,
        onReturn: M ? void 0 : U,
        onComplete: (e) => {
            h.l_.has(e)
                ? (P(f.h.COMPLETED), l(h.pn.CONFIRM, { trackedFromStep: e }))
                : l(h.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            m.default.track(S.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - G,
                flow_duration_ms: i - v.startTime,
            });
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase:
            (0, p.isDesktop)() && null != x && [g.pe.TIER_0, g.pe.TIER_2].includes(x) && !w && null == j,
        continueSessionToInitialStep: A,
    });
}
