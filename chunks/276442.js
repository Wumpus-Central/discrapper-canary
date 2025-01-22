r.d(n, {
    J: function () {
        return g;
    }
});
var i = r(512722),
    a = r.n(i),
    o = r(252759),
    s = r(639119),
    l = r(3409),
    u = r(626135),
    c = r(987209),
    d = r(563132),
    f = r(409813),
    p = r(45572),
    h = r(737143),
    _ = r(981631),
    m = r(474936);
function g(e) {
    let { analyticsData: n, initialPlanId: r, breadcrumbSteps: i, handleStepChange: g, referralTrialOfferId: E, onReturn: v, continueSessionToInitialStep: y } = e,
        { contextMetadata: b, step: I, paymentSources: T, paymentSourceId: S, setPaymentSourceId: A, purchaseError: C, setPurchaseError: N, purchaseErrorBlockRef: R, paymentAuthenticationState: O, selectedSkuId: D, activeSubscription: x, previousStepRef: L, setPurchaseState: w } = (0, d.usePaymentContext)(),
        { isGift: P } = (0, c.wD)(),
        M = {
            ...(0, l.fL)(),
            paymentSources: T,
            paymentSourceId: S,
            setPaymentSourceId: A,
            purchaseError: C,
            setPurchaseError: N,
            purchaseErrorBlockRef: R,
            paymentAuthenticationState: O,
            selectedSkuId: D,
            isGift: P
        },
        k = (0, s.N)(E),
        U = !P && null != k && null != D && m.nG[k.trial_id].skus.includes(D),
        B = () => {
            g(Object.values(T).length < 1 && null == r ? f.h8.PLAN_SELECT : f.h8.REVIEW, { trackedFromStep: f.h8.PAYMENT_TYPE });
        },
        G = null != v ? v : B;
    a()(I, 'Step should be set here');
    let Z = (0, o.Z)(() => Date.now(), [I]),
        F = null != y && null == L.current ? y : f.h8.PAYMENT_TYPE;
    return (0, l.vP)({
        paymentModalArgs: M,
        initialStep: F,
        prependSteps: [f.h8.PROMOTION_INFO],
        appendSteps: [f.h8.REVIEW, f.h8.CONFIRM],
        breadcrumpSteps: i,
        currentBreadcrumpStep: I,
        usePaymentModalStep: !0,
        onReturn: G,
        onComplete: (e) => {
            f.Nj.has(e) ? (w(p.A.COMPLETED), g(f.h8.CONFIRM, { trackedFromStep: e })) : g(f.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: r, toStep: i } = e,
                a = Date.now();
            u.default.track(_.rMx.PAYMENT_FLOW_STEP, {
                ...n,
                from_step: r,
                to_step: i,
                step_duration_ms: a - Z,
                flow_duration_ms: a - b.startTime
            });
        },
        isEligibleForTrial: U,
        allowDesktopRedirectPurchase: (0, h.tr)(D, P, x)
    });
}
