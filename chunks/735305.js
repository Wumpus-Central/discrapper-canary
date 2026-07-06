n.d(t, { x: () => P });
var l = n(284009),
    i = n.n(l),
    r = n(976634),
    a = n(446044),
    s = n(426398),
    o = n(211083),
    u = n(463376),
    c = n(21713),
    d = n(650170),
    p = n(61299),
    m = n(174459),
    h = n(723702),
    C = n(937008),
    E = n(166532),
    A = n(566980),
    f = n(615310),
    S = n(652215),
    y = n(202541);
function P(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: P,
            onReturn: I,
            continueSessionToInitialStep: T,
        } = e,
        { paymentSources: _ } = (0, s.jm)(),
        {
            selectedSkuId: g,
            setPurchaseState: v,
            contextMetadata: x,
            paymentSourceId: N,
            setPaymentSourceId: R,
            purchaseError: b,
            setPurchaseError: M,
            activeSubscription: O,
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
        { paymentAuthenticationState: L } = (0, o.o)(),
        { enabled: D } = (0, a.Y)({ location: "PaymentModalAddPaymentStep" }),
        { isPremiumGroupPurchase: U, isEligibleForTrial: w } = (0, u.i)(),
        { step: k, previousStep: G } = (0, f.Ay)(),
        { isGift: F } = (0, C.Pv)(),
        B = {
            ...(0, p._V)(),
            paymentSources: _,
            paymentSourceId: N,
            setPaymentSourceId: R,
            purchaseError: b,
            setPurchaseError: M,
            purchaseErrorBlockRef: j,
            paymentAuthenticationState: L,
            selectedSkuId: g,
            isGift: F,
        },
        Y =
            I ??
            function () {
                P(Object.values(_).length < 1 && null == n ? E.pn.PLAN_SELECT : E.pn.REVIEW, {
                    trackedFromStep: D ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
                });
            };
    i()(k, "Step should be set here");
    let H = (0, r.A)(() => Date.now(), [k]),
        W = (0, r.A)(
            () =>
                null != T && null == G ? (D ? E.pn.PAYMENT_ELEMENT : T) : D ? E.pn.PAYMENT_ELEMENT : E.pn.PAYMENT_TYPE,
            [T, G, D],
        );
    return (0, p.Y)({
        paymentModalArgs: B,
        initialStep: W,
        prependSteps: [E.pn.PROMOTION_INFO],
        appendSteps: [E.pn.REVIEW, E.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: k,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: U ? void 0 : Y,
        onComplete: (e) => {
            E.l_.has(e)
                ? (v(A.h.COMPLETED), P(E.pn.CONFIRM, { trackedFromStep: e }))
                : P(E.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            m.default.track(S.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - H,
                flow_duration_ms: i - x.startTime,
            });
        },
        isEligibleForTrial: w,
        allowDesktopRedirectPurchase:
            (0, h.isDesktop)() && null != g && [y.pe.TIER_0, y.pe.TIER_2].includes(g) && !F && null == O,
        continueSessionToInitialStep: T,
        shouldUseManaModal: !0,
    });
}
