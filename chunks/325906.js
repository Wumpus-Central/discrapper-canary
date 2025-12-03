t.d(n, { WrappedUnifiedPaymentModal: () => s });
var a = t(54381),
    i = t(987209),
    o = t(563132),
    r = t(791785),
    c = t(467368);
let l = (e) => {
        let {
                skuId: n,
                applicationId: t,
                transitionState: i,
                analyticsLocations: o,
                renderHeader: l,
                paymentModalVersion: s = "v2",
            } = e,
            { paymentModalProps: d } = (0, c.Li)(),
            u = null != d && null != d.onClose ? d.onClose : () => {};
        return (0, a.jsx)(
            r.PaymentModal,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        a.forEach(function (n) {
                            var a;
                            (a = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = a);
                        });
                }
                return e;
            })(
                {
                    applicationId: t,
                    transitionState: i,
                    onClose: u,
                    hideShadow: !0,
                    skuId: n,
                    renderHeader: l,
                    initialPlanId: null,
                    analyticsLocations: o,
                    paymentModalVersion: s,
                },
                d,
            ),
        );
    },
    s = (e) => {
        let {
            loadId: n,
            skuId: t,
            applicationId: r,
            analyticsLocations: c,
            analyticsSourceLocation: s,
            onCheckoutSuccess: d,
            renderModalProps: u,
            renderHeader: p,
            UnifiedCheckoutContextProvider: y,
            purchaseType: b,
            stepConfigs: f,
            flowSpecificOptions: h,
        } = e;
        return (0, a.jsx)(o.PaymentContextProvider, {
            applicationId: r,
            activeSubscription: null,
            loadId: n,
            stepConfigs: f,
            purchaseType: b,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, a.jsx)(i.b6, {
                children: (0, a.jsx)(y, {
                    skuId: t,
                    loadId: n,
                    analyticsLocations: c,
                    analyticsSourceLocation: s,
                    onCheckoutSuccess: d,
                    renderModalProps: u,
                    flowSpecificOptions: h,
                    children: (0, a.jsx)(l, {
                        transitionState: u.transitionState,
                        applicationId: r,
                        skuId: t,
                        renderHeader: p,
                        analyticsLocations: c,
                    }),
                }),
            }),
        });
    };
