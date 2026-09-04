n.d(t, { x: () => I });
var l = n(284009),
    i = n.n(l),
    r = n(999129),
    a = n(202475),
    s = n(211083),
    o = n(463376),
    u = n(883645),
    c = n(601194),
    d = n(206441),
    m = n(306775),
    p = n(174459),
    C = n(723702),
    h = n(951305),
    f = n(166532),
    E = n(566980),
    S = n(652215),
    y = n(202541);
function I(e) {
    let { analyticsData: t, initialPlanId: n, handleStepChange: l, onReturn: I, continueSessionToInitialStep: g } = e,
        { paymentSources: A } = (0, a.j)(),
        {
            selectedSkuId: P,
            setPurchaseState: v,
            contextMetadata: _,
            paymentSourceId: x,
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
        { paymentAuthenticationState: M } = (0, s.o)(),
        { isPremiumGroupPurchase: O, isEligibleForTrial: L } = (0, o.i)(),
        { step: k } = (0, u.Ay)(),
        { isGift: w } = (0, h.Pv)(),
        U = {
            ...(0, m._)(),
            paymentSources: A,
            paymentSourceId: x,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: b,
            purchaseErrorBlockRef: R,
            paymentAuthenticationState: M,
            isGift: w,
        },
        D =
            I ??
            function () {
                l(Object.values(A).length < 1 && null == n ? f.pn.PLAN_SELECT : f.pn.REVIEW, {
                    trackedFromStep: f.pn.PAYMENT_ELEMENT,
                });
            };
    i()(null != k, "Step should be set here");
    let G = (0, r.A)(() => Date.now(), [k]),
        F = f.pn.PAYMENT_ELEMENT;
    return (0, m.Y)({
        paymentModalArgs: U,
        initialStep: F,
        prependSteps: [f.pn.PROMOTION_INFO],
        appendSteps: [f.pn.REVIEW, f.pn.CONFIRM],
        useCheckoutStep: !0,
        analyticsData: t,
        onReturn: O ? void 0 : D,
        onComplete: (e) => {
            f.l_.has(e)
                ? (v(E.h.COMPLETED), l(f.pn.CONFIRM, { trackedFromStep: e }))
                : l(f.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            p.default.track(S.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - G,
                flow_duration_ms: i - _.startTime,
            });
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase:
            (0, C.isDesktop)() && null != P && [y.pe.TIER_0, y.pe.TIER_2].includes(P) && !w && null == j,
        continueSessionToInitialStep: g,
        shouldUseManaModal: !0,
    });
}
