t.d(o, { B4: () => r, o6: () => c });
var n = t(192308),
    i = t(228366),
    u = t(529427);
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
            onCloseCallback: p,
        } = e,
        h = !1;
    return (function (e) {
        let {
            discoverySessionId: o,
            skuId: t,
            onComplete: n,
            analyticsLocations: c = [],
            analyticsSourceLocation: r,
            applicationId: d,
            onCloseCallback: p,
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
                    modalAPIOptions: { onCloseCallback: p, modalKey: a },
                })
        );
    })({
        discoverySessionId: r,
        skuId: o,
        onComplete: (e) => {
            h || t(e), (h = !0);
        },
        applicationId: d,
        analyticsLocations: n,
        analyticsSourceLocation: c,
        onCloseCallback: p,
    });
}
