o.d(t, { B4: () => c, o6: () => h });
var a = o(192308),
    p = o(228366),
    d = o(95250);
let s = "orb-checkout-payment-modal-key",
    h = () => (0, a.useHasModalOpen)(s),
    c = (e) => {
        let {
                skuId: t,
                onComplete: o,
                analyticsLocations: a = [],
                analyticsSourceLocation: p,
                discoverySessionId: d,
                applicationId: s,
                onCloseCallback: h,
            } = e,
            c = !1;
        return l({
            discoverySessionId: d,
            skuId: t,
            onComplete: (e) => {
                c || o(e), (c = !0);
            },
            applicationId: s,
            analyticsLocations: a,
            analyticsSourceLocation: p,
            onCloseCallback: h,
        });
    },
    l = (e) => {
        let {
            discoverySessionId: t,
            skuId: o,
            onComplete: a,
            analyticsLocations: h = [],
            analyticsSourceLocation: c,
            applicationId: l,
            onCloseCallback: n,
        } = e;
        return (
            p.h.wait(() => {
                p.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            d.oE[d.CL.ORB_CHECKOUT]
                .get()
                .openCheckoutModal({
                    discoverySessionId: t,
                    skuId: o,
                    applicationId: l,
                    analyticsLocations: h,
                    analyticsSourceLocation: c,
                    onComplete: a,
                    modalAPIOptions: { onCloseCallback: n, modalKey: s },
                })
        );
    };
