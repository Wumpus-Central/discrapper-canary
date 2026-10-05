t.d(o, { B4: () => r, o6: () => c });
var n = t(192308),
    i = t(73153),
    u = t(589078);
let a = "orb-checkout-payment-modal-key";
function c() {
    return (0, n.useHasModalOpen)(a);
}
function r(e) {
    let {
            skuId: o,
            onComplete: t,
            analyticsLocations: n = [],
            analyticsSourceLocation: c,
            discoverySessionId: r,
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
            analyticsLocations: c = [],
            analyticsSourceLocation: r,
            applicationId: d,
            contextKey: p,
            onCloseCallback: h,
        } = e;
        return (
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            u.UnifiedCheckoutFlowManagerSingletons[u.CL.ORB_CHECKOUT]
                .get()
                .openCheckoutModal({
                    checkoutConfiguration: { discoverySessionId: o, skuId: t, applicationId: d },
                    unifiedCheckoutProviderProps: { analyticsLocations: c, analyticsSourceLocation: r },
                    checkoutHandlers: { onComplete: n },
                    modalAPIOptions: { contextKey: p, onCloseCallback: h, modalKey: a },
                })
        );
    })({
        discoverySessionId: r,
        skuId: o,
        onComplete: (e) => {
            (s || t(e), (s = !0));
        },
        applicationId: d,
        contextKey: p,
        analyticsLocations: n,
        analyticsSourceLocation: c,
        onCloseCallback: h,
    });
}
