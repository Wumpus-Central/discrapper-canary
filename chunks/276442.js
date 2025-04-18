n.d(t, { J: () => y });
var r = n(512722),
    i = n.n(r),
    a = n(252759),
    o = n(639119),
    s = n(3409),
    l = n(626135),
    c = n(358085),
    u = n(987209),
    d = n(563132),
    f = n(409813),
    _ = n(45572),
    p = n(981631),
    h = n(474936);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { analyticsData: t, initialPlanId: n, breadcrumbSteps: r, handleStepChange: c, referralTrialOfferId: m, onReturn: E, continueSessionToInitialStep: y } = e,
        { contextMetadata: O, step: I, paymentSources: S, paymentSourceId: T, setPaymentSourceId: N, purchaseError: A, setPurchaseError: C, purchaseErrorBlockRef: R, paymentAuthenticationState: P, selectedSkuId: w, activeSubscription: D, previousStepRef: L, setPurchaseState: x } = (0, d.JL)(),
        { isGift: M } = (0, u.wD)(),
        k = b(g({}, (0, s.fL)()), {
            paymentSources: S,
            paymentSourceId: T,
            setPaymentSourceId: N,
            purchaseError: A,
            setPurchaseError: C,
            purchaseErrorBlockRef: R,
            paymentAuthenticationState: P,
            selectedSkuId: w,
            isGift: M
        }),
        j = (0, o.N)(m),
        U = !M && null != j && null != w && h.nG[j.trial_id].skus.includes(w),
        G = () => {
            c(Object.values(S).length < 1 && null == n ? f.h8.PLAN_SELECT : f.h8.REVIEW, { trackedFromStep: f.h8.PAYMENT_TYPE });
        },
        B = null != E ? E : G;
    i()(I, 'Step should be set here');
    let F = (0, a.Z)(() => Date.now(), [I]),
        V = null != y && null == L.current ? y : f.h8.PAYMENT_TYPE;
    return (0, s.vP)({
        paymentModalArgs: k,
        initialStep: V,
        prependSteps: [f.h8.PROMOTION_INFO],
        appendSteps: [f.h8.REVIEW, f.h8.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: I,
        usePaymentModalStep: !0,
        onReturn: B,
        onComplete: (e) => {
            f.Nj.has(e) ? (x(_.A.COMPLETED), c(f.h8.CONFIRM, { trackedFromStep: e })) : c(f.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            l.default.track(
                p.rMx.PAYMENT_FLOW_STEP,
                b(g({}, t), {
                    from_step: n,
                    to_step: r,
                    step_duration_ms: i - F,
                    flow_duration_ms: i - O.startTime
                })
            );
        },
        isEligibleForTrial: U,
        allowDesktopRedirectPurchase: v(w, M, D)
    });
}
function v(e, t, n) {
    return (0, c.isDesktop)() && null != e && [h.Si.TIER_0, h.Si.TIER_2].includes(e) && !t && null == n;
}
