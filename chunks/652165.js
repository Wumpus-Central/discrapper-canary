t.d(o, { B4: () => h, o6: () => s });
var a = t(192308),
    p = t(228366),
    c = t(110048),
    d = t(301518);
let l = "orb-checkout-payment-modal-key",
    s = () => (0, a.useHasModalOpen)(l),
    h = (e) => {
        let {
                skuId: o,
                onComplete: t,
                analyticsLocations: a = [],
                analyticsSourceLocation: p,
                discoverySessionId: c,
                applicationId: l,
                onCloseCallback: s,
            } = e,
            h = !1;
        return n({
            discoverySessionId: c,
            skuId: o,
            onComplete: (e) => {
                h || t(e), (h = !0);
            },
            applicationId: l,
            analyticsLocations: a,
            analyticsSourceLocation: p,
            onCloseCallback: () => {
                (0, d.S)({ checkoutSucceeded: h }), s?.();
            },
        });
    },
    n = (e) => {
        let {
            discoverySessionId: o,
            skuId: t,
            onComplete: a,
            analyticsLocations: d = [],
            analyticsSourceLocation: s,
            applicationId: h,
            onCloseCallback: n,
        } = e;
        return (
            p.h.wait(() => {
                p.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, c.Tt)().openCheckoutModal({
                discoverySessionId: o,
                skuId: t,
                applicationId: h,
                analyticsLocations: d,
                analyticsSourceLocation: s,
                onComplete: a,
                openModalOptions: { onCloseCallback: n, modalKey: l },
            })
        );
    };
