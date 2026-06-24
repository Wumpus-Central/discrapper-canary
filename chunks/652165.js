t.d(o, { B4: () => d, o6: () => u });
var n = t(192308),
    a = t(228366),
    i = t(529427);
let c = "orb-checkout-payment-modal-key",
    u = () => (0, n.useHasModalOpen)(c);
function d(e) {
    let {
            skuId: o,
            onComplete: t,
            analyticsLocations: n = [],
            analyticsSourceLocation: a,
            discoverySessionId: i,
            applicationId: c,
            onCloseCallback: u,
        } = e,
        d = !1;
    return p({
        discoverySessionId: i,
        skuId: o,
        onComplete: (e) => {
            d || t(e), (d = !0);
        },
        applicationId: c,
        analyticsLocations: n,
        analyticsSourceLocation: a,
        onCloseCallback: u,
    });
}
let p = (e) => {
    let {
        discoverySessionId: o,
        skuId: t,
        onComplete: n,
        analyticsLocations: u = [],
        analyticsSourceLocation: d,
        applicationId: p,
        onCloseCallback: r,
    } = e;
    return (
        a.h.wait(() => {
            a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
        }),
        i.UnifiedCheckoutFlowManagerSingletons[i.CL.ORB_CHECKOUT]
            .get()
            .openCheckoutModal({
                checkoutConfiguration: { discoverySessionId: o, skuId: t, applicationId: p },
                unifiedCheckoutProviderProps: { analyticsLocations: u, analyticsSourceLocation: d },
                checkoutHandlers: { onComplete: n },
                modalAPIOptions: { onCloseCallback: r, modalKey: c },
            })
    );
};
