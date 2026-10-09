t.d(o, { B4: () => r, o6: () => a });
var n = t(192308),
    u = t(73153),
    c = t(589078);
let i = "orb-checkout-payment-modal-key";
function a() {
    return (0, n.useHasModalOpen)(i);
}
function r(e) {
    let {
            skuId: o,
            onComplete: t,
            analyticsLocations: n = [],
            analyticsSourceLocation: a,
            discoverySessionId: r,
            applicationId: d,
            contextKey: p,
            onCloseCallback: s,
        } = e,
        h = !1;
    return (function (e) {
        let {
            discoverySessionId: o,
            skuId: t,
            onComplete: n,
            analyticsLocations: a = [],
            analyticsSourceLocation: r,
            applicationId: d,
            contextKey: p,
            onCloseCallback: s,
        } = e;
        return (
            u.h.dispatch({ type: "PAYMENT_MODAL_OPEN" }),
            c.UnifiedCheckoutFlowManagerSingletons[c.CL.ORB_CHECKOUT]
                .get()
                .openCheckoutModal({
                    checkoutConfiguration: { discoverySessionId: o, skuId: t, applicationId: d },
                    unifiedCheckoutProviderProps: { analyticsLocations: a, analyticsSourceLocation: r },
                    checkoutHandlers: { onComplete: n },
                    modalAPIOptions: { contextKey: p, onCloseCallback: s, modalKey: i },
                })
        );
    })({
        discoverySessionId: r,
        skuId: o,
        onComplete: (e) => {
            (h || t(e), (h = !0));
        },
        applicationId: d,
        contextKey: p,
        analyticsLocations: n,
        analyticsSourceLocation: a,
        onCloseCallback: s,
    });
}
