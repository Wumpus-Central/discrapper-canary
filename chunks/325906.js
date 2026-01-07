n.d(t, { WrappedUnifiedPaymentModal: () => O });
var r = n(54381),
    o = n(473749),
    i = n(987209),
    a = n(563132),
    l = n(791785),
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
        let {
                skuId: t,
                applicationId: n,
                analyticsLocations: i,
                returnRef: a,
                onComplete: c,
                onClose: p,
                renderHeader: d,
                transitionState: y,
                modalOnClose: b,
                paymentModalVersion: O = "v2",
            } = e,
            { paymentModalProps: f } = (0, s.Li)(),
            C = o.useCallback(
                (e, t) => {
                    b(), null != p && p(e, t);
                },
                [b, p],
            );
        return (0, r.jsx)(
            l.PaymentModal,
            u(
                {
                    transitionState: y,
                    returnRef: a,
                    applicationId: n,
                    onComplete: c,
                    onClose: C,
                    hideShadow: !0,
                    skuId: t,
                    renderHeader: d,
                    initialPlanId: null,
                    analyticsLocations: i,
                    paymentModalVersion: O,
                },
                f,
            ),
        );
    },
    b = (e) => {
        let { skuId: t } = e;
        return (0, r.jsx)(
            a.PaymentContextProvider,
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
                analyticsLocations: a,
                analyticsSourceLocation: l,
                giftContextProps: s,
                flowSpecificOptions: O,
                onComplete: f,
                onClose: C,
                renderModalProps: j,
                checkoutFlow: P,
                checkoutFlowConfiguration: h,
                tenantCheckoutFlowConfig: m,
                renderHeader: w,
                stepConfigs: S,
            } = e,
            { purchaseType: g } = h,
            { CustomPaymentContextProvider: v = b, UnifiedCheckoutContextProvider: I } = m,
            k = null != s ? i.KB : i.b6;
        return (0, r.jsx)(v, {
            applicationId: o,
            skuId: n,
            activeSubscription: null,
            loadId: t,
            stepConfigs: S,
            purchaseType: g,
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
                        analyticsLocations: a,
                        analyticsSourceLocation: l,
                        onComplete: f,
                        onClose: C,
                        renderModalProps: j,
                        flowSpecificOptions: O,
                        children: (0, r.jsx)(y, {
                            applicationId: o,
                            skuId: n,
                            renderHeader: w,
                            analyticsLocations: a,
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
