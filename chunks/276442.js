n.d(t, { J: () => y });
var r = n(512722),
    i = n.n(r),
    o = n(252759),
    a = n(639119),
    s = n(3409),
    l = n(626135),
    c = n(987209),
    u = n(563132),
    d = n(409813),
    f = n(45572),
    _ = n(737143),
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
    let { analyticsData: t, initialPlanId: n, breadcrumbSteps: r, handleStepChange: m, referralTrialOfferId: E, onReturn: y, continueSessionToInitialStep: v } = e,
        { contextMetadata: O, step: I, paymentSources: S, paymentSourceId: T, setPaymentSourceId: N, purchaseError: A, setPurchaseError: C, purchaseErrorBlockRef: R, paymentAuthenticationState: P, selectedSkuId: w, activeSubscription: D, previousStepRef: L, setPurchaseState: x } = (0, u.JL)(),
        { isGift: M } = (0, c.wD)(),
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
        j = (0, a.N)(E),
        U = !M && null != j && null != w && h.nG[j.trial_id].skus.includes(w),
        G = () => {
            m(Object.values(S).length < 1 && null == n ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
        },
        B = null != y ? y : G;
    i()(I, 'Step should be set here');
    let F = (0, o.Z)(() => Date.now(), [I]),
        V = null != v && null == L.current ? v : d.h8.PAYMENT_TYPE;
    return (0, s.vP)({
        paymentModalArgs: k,
        initialStep: V,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: I,
        usePaymentModalStep: !0,
        onReturn: B,
        onComplete: (e) => {
            d.Nj.has(e) ? (x(f.A.COMPLETED), m(d.h8.CONFIRM, { trackedFromStep: e })) : m(d.h8.REVIEW, { trackedFromStep: e });
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
        allowDesktopRedirectPurchase: (0, _.tr)(w, M, D)
    });
}
