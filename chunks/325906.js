n.d(t, { WrappedUnifiedPaymentModal: () => b });
var r = n(54381),
    o = n(473749),
    i = n(987209),
    l = n(563132),
    a = n(791785),
    c = n(467368);
function s(e) {
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
function p(e, t) {
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
let u = (e) => {
        let {
                skuId: t,
                applicationId: n,
                transitionState: i,
                returnRef: l,
                onComplete: p,
                onClose: u,
                modalOnClose: d,
                analyticsLocations: b,
                renderHeader: y,
                paymentModalVersion: f = "v2",
            } = e,
            { paymentModalProps: O } = (0, c.Li)(),
            j = o.useCallback(
                (e, t) => {
                    d(), null != u && u(e, t);
                },
                [d, u],
            );
        return (0, r.jsx)(
            a.PaymentModal,
            s(
                {
                    transitionState: i,
                    returnRef: l,
                    applicationId: n,
                    onComplete: p,
                    onClose: j,
                    hideShadow: !0,
                    skuId: t,
                    renderHeader: y,
                    initialPlanId: null,
                    analyticsLocations: b,
                    paymentModalVersion: f,
                },
                O,
            ),
        );
    },
    d = (e) => {
        let { skuId: t } = e;
        return (0, r.jsx)(
            l.PaymentContextProvider,
            p(s({}, e), {
                skuIDs: null != t ? [t] : [],
                children: e.children,
            }),
        );
    },
    b = (e) => {
        let {
                loadId: t,
                skuId: n,
                applicationId: o,
                analyticsLocations: l,
                analyticsSourceLocation: a,
                giftContextProps: c,
                flowSpecificOptions: b,
                onComplete: y,
                onClose: f,
                renderModalProps: O,
                checkoutFlowConfiguration: j,
                tenantCheckoutFlowConfig: P,
                renderHeader: h,
                stepConfigs: m,
            } = e,
            { purchaseType: C } = j,
            { CustomPaymentContextProvider: w = d, UnifiedCheckoutContextProvider: S } = P,
            k = null != c ? i.KB : i.b6;
        return (0, r.jsx)(w, {
            skuId: n,
            applicationId: o,
            activeSubscription: null,
            loadId: t,
            stepConfigs: m,
            purchaseType: C,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, r.jsx)(
                k,
                p(s({}, c), {
                    children: (0, r.jsx)(S, {
                        skuId: n,
                        loadId: t,
                        analyticsLocations: l,
                        analyticsSourceLocation: a,
                        onComplete: y,
                        onClose: f,
                        renderModalProps: O,
                        flowSpecificOptions: b,
                        children: (0, r.jsx)(u, {
                            applicationId: o,
                            skuId: n,
                            renderHeader: h,
                            analyticsLocations: l,
                            onComplete: y,
                            onClose: f,
                            modalOnClose: O.onClose,
                            transitionState: O.transitionState,
                            returnRef: O.returnRef,
                        }),
                    }),
                }),
            ),
        });
    };
