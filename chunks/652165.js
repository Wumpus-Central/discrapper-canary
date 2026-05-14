o.d(t, { B4: () => n, o6: () => h });
var p = o(192308),
    a = o(228366),
    d = o(622207);
let s = "orb-checkout-payment-modal-key",
    h = () => (0, p.useHasModalOpen)(s),
    n = (e) => {
        let {
                skuId: t,
                onComplete: o,
                analyticsLocations: p = [],
                analyticsSourceLocation: a,
                discoverySessionId: d,
                applicationId: s,
                onCloseCallback: h,
            } = e,
            n = !1;
        return c({
            discoverySessionId: d,
            skuId: t,
            onComplete: (e) => {
                n || o(e), (n = !0);
            },
            applicationId: s,
            analyticsLocations: p,
            analyticsSourceLocation: a,
            onCloseCallback: h,
        });
    },
    c = (e) => {
        let {
            discoverySessionId: t,
            skuId: o,
            onComplete: p,
            analyticsLocations: h = [],
            analyticsSourceLocation: n,
            applicationId: c,
            onCloseCallback: l,
        } = e;
        return (
            a.h.wait(() => {
                a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, d.Tt)().openCheckoutModal({
                discoverySessionId: t,
                skuId: o,
                applicationId: c,
                analyticsLocations: h,
                analyticsSourceLocation: n,
                onComplete: p,
                openModalOptions: { onCloseCallback: l, modalKey: s },
            })
        );
    };
