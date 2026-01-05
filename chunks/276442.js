n.d(t, { J: () => y });
var r = n(512722),
    i = n.n(r),
    a = n(35387),
    o = n(3409),
    s = n(626135),
    l = n(358085),
    c = n(987209),
    u = n(563132),
    d = n(409813),
    f = n(45572),
    p = n(981631),
    _ = n(474936);
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
function h(e) {
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
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t, n) {
    return (0, l.isDesktop)() && null != e && [_.Si.TIER_0, _.Si.TIER_2].includes(e) && !t && null == n;
}
function y(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: l,
            onReturn: _,
            continueSessionToInitialStep: m,
        } = e,
        {
            contextMetadata: g,
            step: y,
            paymentSources: O,
            paymentSourceId: v,
            setPaymentSourceId: S,
            purchaseError: I,
            setPurchaseError: T,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: A,
            selectedSkuId: N,
            activeSubscription: P,
            previousStepRef: R,
            setPurchaseState: w,
            paymentElementsEnabled: D,
            isPremiumGroupPurchase: x,
            isEligibleForTrial: L,
        } = (0, u.JL)(),
        { isGift: j } = (0, c.wD)(),
        M = E(h({}, (0, o.fL)()), {
            paymentSources: O,
            paymentSourceId: v,
            setPaymentSourceId: S,
            purchaseError: I,
            setPurchaseError: T,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: A,
            selectedSkuId: N,
            isGift: j,
        }),
        k = () => {
            l(Object.values(O).length < 1 && null == n ? d.h8.PLAN_SELECT : d.h8.REVIEW, {
                trackedFromStep: D ? d.h8.PAYMENT_ELEMENT : d.h8.PAYMENT_TYPE,
            });
        },
        U = null != _ ? _ : k;
    i()(y, "Step should be set here");
    let G = (0, a.Z)(() => Date.now(), [y]),
        Z = (0, a.Z)(
            () =>
                null != m && null == R.current
                    ? D
                        ? d.h8.PAYMENT_ELEMENT
                        : m
                    : D
                      ? d.h8.PAYMENT_ELEMENT
                      : d.h8.PAYMENT_TYPE,
            [m, R.current, D],
        );
    return (0, o.vP)({
        paymentModalArgs: M,
        initialStep: Z,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: y,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: x ? void 0 : U,
        onComplete: (e) => {
            d.Nj.has(e)
                ? (w(f.A.COMPLETED), l(d.h8.CONFIRM, { trackedFromStep: e }))
                : l(d.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            s.default.track(
                p.rMx.PAYMENT_FLOW_STEP,
                E(h({}, t), {
                    from_step: n,
                    to_step: r,
                    step_duration_ms: i - G,
                    flow_duration_ms: i - g.startTime,
                }),
            );
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase: b(N, j, P),
        continueSessionToInitialStep: m,
    });
}
