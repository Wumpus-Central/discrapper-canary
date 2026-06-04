n.d(t, { x: () => _ });
var l = n(284009),
    r = n.n(l),
    i = n(976634),
    a = n(446044),
    s = n(426398),
    o = n(211083),
    u = n(463376),
    c = n(738909),
    d = n(571878),
    p = n(61299),
    m = n(174459),
    h = n(723702),
    A = n(937008),
    C = n(166532),
    E = n(566980),
    y = n(615310),
    P = n(652215),
    S = n(788868);
function _(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: _,
            onReturn: f,
            continueSessionToInitialStep: I,
        } = e,
        { paymentSources: T } = (0, s.jm)(),
        {
            selectedSkuId: N,
            setPurchaseState: v,
            contextMetadata: g,
            paymentSourceId: x,
            setPaymentSourceId: R,
            purchaseError: M,
            setPurchaseError: b,
            activeSubscription: L,
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
        { paymentAuthenticationState: O } = (0, o.o)(),
        { enabled: w } = (0, a.Y)({ location: "PaymentModalAddPaymentStep" }),
        { isPremiumGroupPurchase: D, isEligibleForTrial: U } = (0, u.i)(),
        { step: k, previousStep: G } = (0, y.Ay)(),
        { isGift: Y } = (0, A.Pv)(),
        F = {
            ...(0, p._V)(),
            paymentSources: T,
            paymentSourceId: x,
            setPaymentSourceId: R,
            purchaseError: M,
            setPurchaseError: b,
            purchaseErrorBlockRef: j,
            paymentAuthenticationState: O,
            selectedSkuId: N,
            isGift: Y,
        },
        B =
            f ??
            (() => {
                _(Object.values(T).length < 1 && null == n ? C.pn.PLAN_SELECT : C.pn.REVIEW, {
                    trackedFromStep: w ? C.pn.PAYMENT_ELEMENT : C.pn.PAYMENT_TYPE,
                });
            });
    r()(k, "Step should be set here");
    let W = (0, i.A)(() => Date.now(), [k]),
        H = (0, i.A)(
            () =>
                null != I && null == G ? (w ? C.pn.PAYMENT_ELEMENT : I) : w ? C.pn.PAYMENT_ELEMENT : C.pn.PAYMENT_TYPE,
            [I, G, w],
        );
    return (0, p.Y)({
        paymentModalArgs: F,
        initialStep: H,
        prependSteps: [C.pn.PROMOTION_INFO],
        appendSteps: [C.pn.REVIEW, C.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: k,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: D ? void 0 : B,
        onComplete: (e) => {
            C.l_.has(e)
                ? (v(E.h.COMPLETED), _(C.pn.CONFIRM, { trackedFromStep: e }))
                : _(C.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                r = Date.now();
            m.default.track(P.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: r - W,
                flow_duration_ms: r - g.startTime,
            });
        },
        isEligibleForTrial: U,
        allowDesktopRedirectPurchase:
            (0, h.isDesktop)() && null != N && [S.pe.TIER_0, S.pe.TIER_2].includes(N) && !Y && null == L,
        continueSessionToInitialStep: I,
        shouldUseManaModal: !0,
    });
}
