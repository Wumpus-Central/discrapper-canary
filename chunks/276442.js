n.d(t, { J: () => m });
var i = n(512722),
    r = n.n(i),
    a = n(252759),
    s = n(639119),
    o = n(3409),
    l = n(626135),
    u = n(987209),
    c = n(563132),
    d = n(409813),
    f = n(45572),
    _ = n(737143),
    p = n(981631),
    h = n(474936);
function m(e) {
    let { analyticsData: t, initialPlanId: n, breadcrumbSteps: i, handleStepChange: m, referralTrialOfferId: g, onReturn: E, continueSessionToInitialStep: v } = e,
        { contextMetadata: y, step: I, paymentSources: T, paymentSourceId: b, setPaymentSourceId: S, purchaseError: A, setPurchaseError: N, purchaseErrorBlockRef: C, paymentAuthenticationState: R, selectedSkuId: O, activeSubscription: D, previousStepRef: L, setPurchaseState: x } = (0, c.JL)(),
        { isGift: P } = (0, u.wD)(),
        w = {
            ...(0, o.fL)(),
            paymentSources: T,
            paymentSourceId: b,
            setPaymentSourceId: S,
            purchaseError: A,
            setPurchaseError: N,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: R,
            selectedSkuId: O,
            isGift: P
        },
        M = (0, s.N)(g),
        k = !P && null != M && null != O && h.nG[M.trial_id].skus.includes(O),
        U = () => {
            m(Object.values(T).length < 1 && null == n ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
        },
        G = null != E ? E : U;
    r()(I, 'Step should be set here');
    let B = (0, a.Z)(() => Date.now(), [I]),
        Z = null != v && null == L.current ? v : d.h8.PAYMENT_TYPE;
    return (0, o.vP)({
        paymentModalArgs: w,
        initialStep: Z,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
        breadcrumpSteps: i,
        currentBreadcrumpStep: I,
        usePaymentModalStep: !0,
        onReturn: G,
        onComplete: (e) => {
            d.Nj.has(e) ? (x(f.A.COMPLETED), m(d.h8.CONFIRM, { trackedFromStep: e })) : m(d.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: i } = e,
                r = Date.now();
            l.default.track(p.rMx.PAYMENT_FLOW_STEP, {
                ...t,
                from_step: n,
                to_step: i,
                step_duration_ms: r - B,
                flow_duration_ms: r - y.startTime
            });
        },
        isEligibleForTrial: k,
        allowDesktopRedirectPurchase: (0, _.tr)(O, P, D)
    });
}
