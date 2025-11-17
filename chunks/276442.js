n.d(t, { J: () => O });
var r = n(512722),
    i = n.n(r),
    a = n(35387),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function y(e, t, n) {
    return (0, c.isDesktop)() && null != e && [h.Si.TIER_0, h.Si.TIER_2].includes(e) && !t && null == n;
}
function O(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: c,
            referralTrialOfferId: m,
            onReturn: E,
            continueSessionToInitialStep: O,
        } = e,
        {
            contextMetadata: v,
            step: I,
            paymentSources: T,
            paymentSourceId: S,
            setPaymentSourceId: A,
            purchaseError: C,
            setPurchaseError: N,
            purchaseErrorBlockRef: R,
            paymentAuthenticationState: P,
            selectedSkuId: D,
            activeSubscription: w,
            previousStepRef: x,
            setPurchaseState: L,
            paymentElementsEnabled: M,
        } = (0, d.JL)(),
        { isGift: k } = (0, u.wD)(),
        j = b(g({}, (0, s.fL)()), {
            paymentSources: T,
            paymentSourceId: S,
            setPaymentSourceId: A,
            purchaseError: C,
            setPurchaseError: N,
            purchaseErrorBlockRef: R,
            paymentAuthenticationState: P,
            selectedSkuId: D,
            isGift: k,
        }),
        U = (0, o.N)(m),
        G = !k && null != U && null != D && h.nG[U.trial_id].skus.includes(D),
        B = () => {
            c(Object.values(T).length < 1 && null == n ? f.h8.PLAN_SELECT : f.h8.REVIEW, {
                trackedFromStep: M ? f.h8.PAYMENT_ELEMENT : f.h8.PAYMENT_TYPE,
            });
        },
        Z = null != E ? E : B;
    i()(I, "Step should be set here");
    let F = (0, a.Z)(() => Date.now(), [I]),
        V = (0, a.Z)(
            () =>
                null != O && null == x.current
                    ? M && O === f.h8.CREDIT_CARD_INFORMATION
                        ? f.h8.PAYMENT_ELEMENT
                        : O
                    : M
                      ? f.h8.PAYMENT_ELEMENT
                      : f.h8.PAYMENT_TYPE,
            [O, x.current, M],
        );
    return (0, s.vP)({
        paymentModalArgs: j,
        initialStep: V,
        prependSteps: [f.h8.PROMOTION_INFO],
        appendSteps: [f.h8.REVIEW, f.h8.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: I,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: Z,
        onComplete: (e) => {
            f.Nj.has(e)
                ? (L(_.A.COMPLETED), c(f.h8.CONFIRM, { trackedFromStep: e }))
                : c(f.h8.REVIEW, { trackedFromStep: e });
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
                    flow_duration_ms: i - v.startTime,
                }),
            );
        },
        isEligibleForTrial: G,
        allowDesktopRedirectPurchase: y(D, k, w),
        continueSessionToInitialStep: O,
    });
}
