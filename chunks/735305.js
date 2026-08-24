n.d(t, { x: () => I });
var l = n(284009),
    i = n.n(l),
    r = n(999129),
    a = n(202475),
    s = n(211083),
    o = n(463376),
    u = n(883645),
    c = n(601194),
    d = n(87725),
    m = n(469155),
    p = n(174459),
    C = n(723702),
    h = n(951305),
    f = n(166532),
    E = n(566980),
    S = n(652215),
    y = n(202541);
function I(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: l,
            handleStepChange: I,
            onReturn: A,
            continueSessionToInitialStep: g,
        } = e,
        { paymentSources: P } = (0, a.j)(),
        {
            selectedSkuId: v,
            setPurchaseState: x,
            contextMetadata: _,
            paymentSourceId: T,
            setPaymentSourceId: N,
            purchaseError: b,
            setPurchaseError: j,
            activeSubscription: R,
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
        { purchaseErrorBlockRef: M } = (0, c.Gm)(),
        { paymentAuthenticationState: O } = (0, s.o)(),
        { isPremiumGroupPurchase: L, isEligibleForTrial: k } = (0, o.i)(),
        { step: w } = (0, u.Ay)(),
        { isGift: U } = (0, h.Pv)(),
        D = {
            ...(0, m._V)(),
            paymentSources: P,
            paymentSourceId: T,
            setPaymentSourceId: N,
            purchaseError: b,
            setPurchaseError: j,
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: O,
            isGift: U,
        },
        G =
            A ??
            function () {
                I(Object.values(P).length < 1 && null == n ? f.pn.PLAN_SELECT : f.pn.REVIEW, {
                    trackedFromStep: f.pn.PAYMENT_ELEMENT,
                });
            };
    i()(null != w, "Step should be set here");
    let F = (0, r.A)(() => Date.now(), [w]),
        B = f.pn.PAYMENT_ELEMENT;
    return (0, m.Y)({
        paymentModalArgs: D,
        initialStep: B,
        prependSteps: [f.pn.PROMOTION_INFO],
        appendSteps: [f.pn.REVIEW, f.pn.CONFIRM],
        breadcrumpSteps: l,
        currentBreadcrumpStep: w,
        useCheckoutStep: !0,
        analyticsData: t,
        onReturn: L ? void 0 : G,
        onComplete: (e) => {
            f.l_.has(e)
                ? (x(E.h.COMPLETED), I(f.pn.CONFIRM, { trackedFromStep: e }))
                : I(f.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: l } = e,
                i = Date.now();
            p.default.track(S.HAw.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: l,
                step_duration_ms: i - F,
                flow_duration_ms: i - _.startTime,
            });
        },
        isEligibleForTrial: k,
        allowDesktopRedirectPurchase:
            (0, C.isDesktop)() && null != v && [y.pe.TIER_0, y.pe.TIER_2].includes(v) && !U && null == R,
        continueSessionToInitialStep: g,
        shouldUseManaModal: !0,
    });
}
