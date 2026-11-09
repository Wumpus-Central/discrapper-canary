var n = t(192308),
    i = t(73153),
    r = t(589078);
let c = "orb-checkout-payment-modal-key";
t.d(
    o,
    {},
    {
        B4: function (e) {
            let {
                    skuId: o,
                    onComplete: t,
                    analyticsLocations: n = [],
                    analyticsSourceLocation: u,
                    discoverySessionId: a,
                    applicationId: d,
                    contextKey: h,
                    onCloseCallback: p,
                } = e,
                s = !1;
            return (function (e) {
                let {
                    discoverySessionId: o,
                    skuId: t,
                    onComplete: n,
                    analyticsLocations: u = [],
                    analyticsSourceLocation: a,
                    applicationId: d,
                    contextKey: h,
                    onCloseCallback: p,
                } = e;
                return (
                    i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" }),
                    r.UnifiedCheckoutFlowManagerSingletons[r.CL.ORB_CHECKOUT]
                        .get()
                        .openCheckoutModal({
                            checkoutConfiguration: { discoverySessionId: o, skuId: t, applicationId: d },
                            sharedCheckoutParams: { skipConfirm: !0 },
                            unifiedCheckoutProviderProps: { analyticsLocations: u, analyticsSourceLocation: a },
                            checkoutHandlers: { onComplete: n },
                            modalAPIOptions: { contextKey: h, onCloseCallback: p, modalKey: c },
                        })
                );
            })({
                discoverySessionId: a,
                skuId: o,
                onComplete: (e) => {
                    (s || t(e), (s = !0));
                },
                applicationId: d,
                contextKey: h,
                analyticsLocations: n,
                analyticsSourceLocation: u,
                onCloseCallback: p,
            });
        },
        o6: function () {
            return (0, n.Ry)(c);
        },
    },
);
