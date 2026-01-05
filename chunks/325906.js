n.d(t, { WrappedUnifiedPaymentModal: () => y });
var r = n(54381),
    o = n(473749),
    i = n(987209),
    l = n(563132),
    a = n(791785),
    c = n(733579),
    s = n(467368);
function p(e) {
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
function u(e, t) {
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
let d = (e) => {
        let {
                skuId: t,
                applicationId: n,
                analyticsLocations: i,
                returnRef: l,
                onComplete: c,
                onClose: u,
                renderHeader: d,
                transitionState: b,
                modalOnClose: y,
                paymentModalVersion: f = "v2",
            } = e,
            { paymentModalProps: O } = (0, s.Li)(),
            j = o.useCallback(
                (e, t) => {
                    y(), null != u && u(e, t);
                },
                [y, u],
            );
        return (0, r.jsx)(
            a.PaymentModal,
            p(
                {
                    transitionState: b,
                    returnRef: l,
                    applicationId: n,
                    onComplete: c,
                    onClose: j,
                    hideShadow: !0,
                    skuId: t,
                    renderHeader: d,
                    initialPlanId: null,
                    analyticsLocations: i,
                    paymentModalVersion: f,
                },
                O,
            ),
        );
    },
    b = (e) => {
        let { skuId: t } = e;
        return (0, r.jsx)(
            l.PaymentContextProvider,
            u(p({}, e), {
                skuIDs: null != t ? [t] : [],
                children: e.children,
            }),
        );
    },
    y = (e) => {
        let {
                loadId: t,
                skuId: n,
                applicationId: o,
                analyticsLocations: l,
                analyticsSourceLocation: a,
                giftContextProps: s,
                flowSpecificOptions: y,
                onComplete: f,
                onClose: O,
                renderModalProps: j,
                checkoutFlow: P,
                checkoutFlowConfiguration: h,
                tenantCheckoutFlowConfig: C,
                renderHeader: m,
                stepConfigs: w,
            } = e,
            { purchaseType: S } = h,
            { CustomPaymentContextProvider: k = b, UnifiedCheckoutContextProvider: v } = C,
            I = null != s ? i.KB : i.b6;
        return (0, r.jsx)(k, {
            applicationId: o,
            skuId: n,
            activeSubscription: null,
            loadId: t,
            stepConfigs: w,
            purchaseType: S,
            isGift: null == s ? void 0 : s.isGift,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: P === c.G.ORB_CHECKOUT,
            children: (0, r.jsx)(
                I,
                u(p({}, s), {
                    children: (0, r.jsx)(v, {
                        applicationId: o,
                        skuId: n,
                        loadId: t,
                        analyticsLocations: l,
                        analyticsSourceLocation: a,
                        onComplete: f,
                        onClose: O,
                        renderModalProps: j,
                        flowSpecificOptions: y,
                        children: (0, r.jsx)(d, {
                            applicationId: o,
                            skuId: n,
                            renderHeader: m,
                            analyticsLocations: l,
                            onComplete: f,
                            onClose: O,
                            modalOnClose: j.onClose,
                            transitionState: j.transitionState,
                            returnRef: j.returnRef,
                        }),
                    }),
                }),
            ),
        });
    };
