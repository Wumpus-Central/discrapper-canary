n.d(t, { WrappedUnifiedPaymentModal: () => O });
var r = n(54381),
    o = n(473749),
    i = n(987209),
    l = n(563132),
    a = n(791785),
    c = n(733579),
    s = n(467368),
    p = n(231338);
function u(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = (e) => {
        var t;
        let {
                skuId: n,
                applicationId: i,
                analyticsLocations: l,
                returnRef: c,
                onComplete: p,
                onClose: y,
                renderHeader: b,
                transitionState: O,
                modalOnClose: f,
                paymentModalVersion: C = "v2",
            } = e,
            { paymentModalProps: j } = (0, s.Li)(),
            P = o.useCallback(
                (e, t) => {
                    f(), null != y && y(e, t);
                },
                [f, y],
            ),
            h = null != (t = null == j ? void 0 : j.onClose) ? t : P;
        return (0, r.jsx)(
            a.PaymentModal,
            d(
                u(
                    {
                        transitionState: O,
                        returnRef: c,
                        applicationId: i,
                        onComplete: p,
                        hideShadow: !0,
                        skuId: n,
                        renderHeader: b,
                        initialPlanId: null,
                        analyticsLocations: l,
                        paymentModalVersion: C,
                    },
                    j,
                ),
                { onClose: h },
            ),
        );
    },
    b = (e) => {
        let { skuId: t } = e;
        return (0, r.jsx)(
            l.PaymentContextProvider,
            d(u({}, e), {
                skuIDs: null != t ? [t] : [],
                children: e.children,
            }),
        );
    },
    O = (e) => {
        let {
                loadId: t,
                skuId: n,
                applicationId: o,
                analyticsLocations: l,
                analyticsSourceLocation: a,
                giftContextProps: s,
                flowSpecificOptions: O,
                onComplete: f,
                onClose: C,
                renderModalProps: j,
                checkoutFlow: P,
                checkoutFlowConfiguration: h,
                tenantCheckoutFlowConfig: m,
                renderHeader: v,
                stepConfigs: w,
            } = e,
            { purchaseType: S } = h,
            { CustomPaymentContextProvider: g = b, UnifiedCheckoutContextProvider: I } = m,
            k = null != s ? i.KB : i.b6;
        return (0, r.jsx)(g, {
            applicationId: o,
            skuId: n,
            activeSubscription: null,
            loadId: t,
            stepConfigs: w,
            purchaseType: S,
            paymentGateway: P === c.G.ORB_CHECKOUT ? p.gg.VIRTUAL_CURRENCY : void 0,
            isGift: null == s ? void 0 : s.isGift,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: P === c.G.ORB_CHECKOUT,
            children: (0, r.jsx)(
                k,
                d(u({}, s), {
                    children: (0, r.jsx)(I, {
                        applicationId: o,
                        skuId: n,
                        loadId: t,
                        analyticsLocations: l,
                        analyticsSourceLocation: a,
                        onComplete: f,
                        onClose: C,
                        renderModalProps: j,
                        flowSpecificOptions: O,
                        children: (0, r.jsx)(y, {
                            applicationId: o,
                            skuId: n,
                            renderHeader: v,
                            analyticsLocations: l,
                            onComplete: f,
                            onClose: C,
                            modalOnClose: j.onClose,
                            transitionState: j.transitionState,
                            returnRef: j.returnRef,
                        }),
                    }),
                }),
            ),
        });
    };
