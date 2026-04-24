"use strict";
n.d(t, { B4: () => _, o6: () => d });
var r = n(132500),
    i = n(192308),
    a = n(228366),
    l = n(226991),
    s = n(301518),
    o = n(373856),
    c = n(652215);
let u = "orb-checkout-payment-modal-key",
    d = () => (0, i.useHasModalOpen)(u),
    _ = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: a = [],
                analyticsSourceLocation: l,
                discoverySessionId: d,
                applicationId: _,
                onCloseCallback: f,
            } = e,
            h = (0, r.A)(),
            m = !1;
        return p({
            loadId: h,
            discoverySessionId: d,
            skuId: t,
            onCheckoutSuccess: (e) => {
                m || n(e), (m = !0);
            },
            applicationId: _,
            analyticsLocations: a,
            analyticsSourceLocation: l,
            onCloseCallback: () => {
                (0, s.S)({ checkoutSucceeded: m }), f?.();
            },
            onCloseRequest: () => {
                m ||
                    (0, o.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: h,
                        discoverySessionId: d,
                        skuId: t,
                        analyticsLocations: a,
                        analyticsSourceLocation: l,
                    }),
                    (0, i.closeModal)(u);
            },
        });
    },
    p = (e) => {
        let {
            loadId: t,
            discoverySessionId: n,
            skuId: r,
            onCheckoutSuccess: i,
            analyticsLocations: s = [],
            analyticsSourceLocation: o,
            applicationId: c,
            onCloseCallback: d,
            onCloseRequest: _,
        } = e;
        return (
            a.h.wait(() => {
                a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, l.Tt)().openCheckoutModal({
                loadId: t,
                discoverySessionId: n,
                skuId: r,
                applicationId: c,
                analyticsLocations: s,
                analyticsSourceLocation: o,
                flowSpecificOptions: { onCheckoutSuccess: i },
                openModalOptions: { onCloseCallback: d, modalKey: u, onCloseRequest: _ },
            })
        );
    };
