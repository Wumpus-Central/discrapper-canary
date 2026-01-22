n.d(t, {
    x: () => y,
});
var r = n(284009),
    i = n.n(r),
    a = n(330140),
    s = n(998678),
    o = n(954571),
    l = n(723702),
    c = n(937008),
    u = n(156312),
    d = n(166532),
    f = n(566980),
    p = n(652215),
    _ = n(788868);

function h(e, t, n) {
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

function m(e) {
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
                h(e, t, n[t]);
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
    return (0, l.isDesktop)() && null != e && [_.pe.TIER_0, _.pe.TIER_2].includes(e) && !t && null == n;
}

function y(e) {
    let {
            analyticsData: t,
            initialPlanId: n,
            breadcrumbSteps: r,
            handleStepChange: l,
            onReturn: _,
            continueSessionToInitialStep: h,
        } = e,
        {
            contextMetadata: g,
            step: y,
            paymentSources: O,
            paymentSourceId: A,
            setPaymentSourceId: v,
            purchaseError: S,
            setPurchaseError: I,
            purchaseErrorBlockRef: T,
            paymentAuthenticationState: C,
            selectedSkuId: N,
            activeSubscription: R,
            previousStepRef: w,
            setPurchaseState: P,
            paymentElementsEnabled: D,
            isPremiumGroupPurchase: x,
            isEligibleForTrial: L,
        } = (0, u.P5)(),
        { isGift: j } = (0, c.Pv)(),
        M = E(m({}, (0, s.KP)()), {
            paymentSources: O,
            paymentSourceId: A,
            setPaymentSourceId: v,
            purchaseError: S,
            setPurchaseError: I,
            purchaseErrorBlockRef: T,
            paymentAuthenticationState: C,
            selectedSkuId: N,
            isGift: j,
        }),
        k = () => {
            l(Object.values(O).length < 1 && null == n ? d.pn.PLAN_SELECT : d.pn.REVIEW, {
                trackedFromStep: D ? d.pn.PAYMENT_ELEMENT : d.pn.PAYMENT_TYPE,
            });
        },
        U = null != _ ? _ : k;
    i()(y, "Step should be set here");
    let G = (0, a.A)(() => Date.now(), [y]),
        V = (0, a.A)(
            () =>
                null != h && null == w.current
                    ? D
                        ? d.pn.PAYMENT_ELEMENT
                        : h
                    : D
                      ? d.pn.PAYMENT_ELEMENT
                      : d.pn.PAYMENT_TYPE,
            [h, w.current, D],
        );
    return (0, s.Y)({
        paymentModalArgs: M,
        initialStep: V,
        prependSteps: [d.pn.PROMOTION_INFO],
        appendSteps: [d.pn.REVIEW, d.pn.CONFIRM],
        breadcrumpSteps: r,
        currentBreadcrumpStep: y,
        usePaymentModalStep: !0,
        analyticsData: t,
        onReturn: x ? void 0 : U,
        onComplete: (e) => {
            d.l_.has(e)
                ? (P(f.h.COMPLETED),
                  l(d.pn.CONFIRM, {
                      trackedFromStep: e,
                  }))
                : l(d.pn.REVIEW, {
                      trackedFromStep: e,
                  });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: r } = e,
                i = Date.now();
            o.default.track(
                p.HAw.PAYMENT_FLOW_STEP,
                E(m({}, t), {
                    from_step: n,
                    to_step: r,
                    step_duration_ms: i - G,
                    flow_duration_ms: i - g.startTime,
                }),
            );
        },
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase: b(N, j, R),
        continueSessionToInitialStep: h,
    });
}
