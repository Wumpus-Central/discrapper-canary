n.d(t, { x: () => A });
var l = n(284009),
    i = n.n(l),
    r = n(999129),
    a = n(202475),
    s = n(211083),
    o = n(463376),
    u = n(883645),
    c = n(601194),
    d = n(661899),
    p = n(174459),
    m = n(723702),
    h = n(951305),
    C = n(166532),
    f = n(566980),
    S = n(280341),
    E = n(652215),
    y = n(202541);
function A(e) {
    let { analyticsData: t, initialPlanId: n, handleStepChange: l, onReturn: A, continueSessionToInitialStep: I } = e,
        { paymentSources: g } = (0, a.j)(),
        {
            selectedSkuId: P,
            setPurchaseState: v,
            contextMetadata: x,
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
        { isGift: w } = (0, h.Pv)(),
        D = {
            ...(0, S.p)(),
            paymentSources: g,
            paymentSourceId: _,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: b,
            purchaseErrorBlockRef: R,
            paymentAuthenticationState: O,
            isGift: w,
        },
        U =
            A ??
            function () {
                l(Object.values(g).length < 1 && null == n ? C.pn.PLAN_SELECT : C.pn.REVIEW, {
                    trackedFromStep: C.pn.PAYMENT_ELEMENT,
                });
            };
    i()(null != k, "Step should be set here");
    let G = (0, r.A)(() => Date.now(), [k]),
        F = C.pn.PAYMENT_ELEMENT;
    return (0, S.Y)({
        addPaymentMethodStepState: D,
        initialStep: F,
        prependSteps: [C.pn.PROMOTION_INFO],
        appendSteps: [C.pn.REVIEW, C.pn.CONFIRM],
        useCheckoutStep: !0,
        analyticsData: t,
        onReturn: M ? void 0 : U,
        onComplete: (e) => {
            C.l_.has(e)
                ? (v(f.h.COMPLETED), l(C.pn.CONFIRM, { trackedFromStep: e }))
                : l(C.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            p.default.track(E.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - G,
                flow_duration_ms: i - x.startTime,
            });
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase:
            (0, m.isDesktop)() && null != P && [y.pe.TIER_0, y.pe.TIER_2].includes(P) && !w && null == j,
        continueSessionToInitialStep: I,
    });
}
