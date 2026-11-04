var n = t(192308),
    c = t(73153),
    i = t(589078);
let u = "orb-checkout-payment-modal-key";
t.d(
    o,
    {},
    {
        B4: function (e) {
            let {
                    skuId: o,
                    onComplete: t,
                    analyticsLocations: n = [],
                    analyticsSourceLocation: r,
                    discoverySessionId: a,
                    applicationId: d,
                    contextKey: p,
                    onCloseCallback: h,
                } = e,
                s = !1;
            return (function (e) {
                let {
                    discoverySessionId: o,
                    skuId: t,
                    onComplete: n,
                    analyticsLocations: r = [],
                    analyticsSourceLocation: a,
                    applicationId: d,
                    contextKey: p,
                    onCloseCallback: h,
                } = e;
                return (
                    c.h.dispatch({ type: "PAYMENT_MODAL_OPEN" }),
                    i.UnifiedCheckoutFlowManagerSingletons[i.CL.ORB_CHECKOUT]
                        .get()
                        .openCheckoutModal({
                            checkoutConfiguration: { discoverySessionId: o, skuId: t, applicationId: d },
                            unifiedCheckoutProviderProps: { analyticsLocations: r, analyticsSourceLocation: a },
                            checkoutHandlers: { onComplete: n },
                            modalAPIOptions: { contextKey: p, onCloseCallback: h, modalKey: u },
                        })
                );
            })({
                discoverySessionId: a,
                skuId: o,
                onComplete: (e) => {
                    (s || t(e), (s = !0));
                },
                applicationId: d,
                contextKey: p,
                analyticsLocations: n,
                analyticsSourceLocation: r,
                onCloseCallback: h,
            });
        },
        o6: function () {
            return (0, n.Ry)(u);
        },
    },
);
