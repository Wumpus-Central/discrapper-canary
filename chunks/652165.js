t.d(o, { B4: () => p, o6: () => d });
var a = t(192308),
    n = t(228366),
    i = t(529427);
let c = "orb-checkout-payment-modal-key",
    d = () => (0, a.useHasModalOpen)(c),
    p = (e) => {
        let {
                skuId: o,
                onComplete: t,
                analyticsLocations: a = [],
                analyticsSourceLocation: n,
                discoverySessionId: i,
                applicationId: c,
                onCloseCallback: d,
            } = e,
            p = !1;
        return r({
            discoverySessionId: i,
            skuId: o,
            onComplete: (e) => {
                p || t(e), (p = !0);
            },
            applicationId: c,
            analyticsLocations: a,
            analyticsSourceLocation: n,
            onCloseCallback: d,
        });
    },
    r = (e) => {
        let {
            discoverySessionId: o,
            skuId: t,
            onComplete: a,
            analyticsLocations: d = [],
            analyticsSourceLocation: p,
            applicationId: r,
            onCloseCallback: u,
        } = e;
        return (
            n.h.wait(() => {
                n.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            i.UnifiedCheckoutFlowManagerSingletons[i.CL.ORB_CHECKOUT]
                .get()
                .openCheckoutModal({
                    checkoutConfiguration: { discoverySessionId: o, skuId: t, applicationId: r },
                    unifiedCheckoutProviderProps: { analyticsLocations: d, analyticsSourceLocation: p },
                    checkoutHandlers: { onComplete: a },
                    modalAPIOptions: { onCloseCallback: u, modalKey: c },
                })
        );
    };
