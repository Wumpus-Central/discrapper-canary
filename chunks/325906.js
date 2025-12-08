n.d(t, { WrappedUnifiedPaymentModal: () => d });
var r = n(54381),
    o = n(987209),
    i = n(563132),
    c = n(791785),
    a = n(467368);
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
function l(e, t) {
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
                transitionState: o,
                returnRef: i,
                onClose: l,
                analyticsLocations: u,
                renderHeader: p,
                paymentModalVersion: d = "v2",
            } = e,
            { paymentModalProps: y } = (0, a.Li)(),
            b = null != y && null != y.onClose ? y.onClose : l;
        return (0, r.jsx)(
            c.PaymentModal,
            s(
                {
                    transitionState: o,
                    returnRef: i,
                    applicationId: n,
                    onClose: b,
                    hideShadow: !0,
                    skuId: t,
                    renderHeader: p,
                    initialPlanId: null,
                    analyticsLocations: u,
                    paymentModalVersion: d,
                },
                y,
            ),
        );
    },
    p = (e) => {
        let { skuId: t } = e;
        return (0, r.jsx)(
            i.PaymentContextProvider,
            l(s({}, e), {
                skuIDs: [t],
                children: e.children,
            }),
        );
    },
    d = (e) => {
        let {
                loadId: t,
                skuId: n,
                applicationId: i,
                analyticsLocations: c,
                analyticsSourceLocation: a,
                onCheckoutSuccess: d,
                giftContextProps: y,
                flowSpecificOptions: b,
                renderModalProps: f,
                checkoutFlowConfiguration: O,
                tenantCheckoutFlowConfig: j,
                renderHeader: P,
                stepConfigs: h,
            } = e,
            { purchaseType: S } = O,
            { CustomPaymentContextProvider: w = p, UnifiedCheckoutContextProvider: k } = j,
            g = null != y ? o.KB : o.b6;
        return (0, r.jsx)(w, {
            skuId: n,
            applicationId: i,
            activeSubscription: null,
            loadId: t,
            stepConfigs: h,
            purchaseType: S,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, r.jsx)(
                g,
                l(s({}, y), {
                    children: (0, r.jsx)(k, {
                        skuId: n,
                        loadId: t,
                        analyticsLocations: c,
                        analyticsSourceLocation: a,
                        onCheckoutSuccess: d,
                        renderModalProps: f,
                        flowSpecificOptions: b,
                        children: (0, r.jsx)(u, {
                            transitionState: f.transitionState,
                            returnRef: f.returnRef,
                            onClose: f.onClose,
                            applicationId: i,
                            skuId: n,
                            renderHeader: P,
                            analyticsLocations: c,
                        }),
                    }),
                }),
            ),
        });
    };
