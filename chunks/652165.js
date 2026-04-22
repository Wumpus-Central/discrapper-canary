"use strict";
a.d(t, { B4: () => _, o6: () => u });
var r = a(835245),
    i = a(192308),
    n = a(73153),
    l = a(589078),
    s = a(301518),
    o = a(373856),
    c = a(652215);
let d = "orb-checkout-payment-modal-key",
    u = () => (0, i.useHasModalOpen)(d),
    _ = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: a,
                analyticsLocations: n = [],
                analyticsSourceLocation: l,
                discoverySessionId: u,
                applicationId: _,
                onCloseCallback: f,
            } = e,
            h = (0, r.A)(),
            m = !1;
        return p({
            loadId: h,
            discoverySessionId: u,
            skuId: t,
            onCheckoutSuccess: (e) => {
                m || a(e), (m = !0);
            },
            applicationId: _,
            analyticsLocations: n,
            analyticsSourceLocation: l,
            onCloseCallback: () => {
                (0, s.S)({ checkoutSucceeded: m }), f?.();
            },
            onCloseRequest: () => {
                m ||
                    (0, o.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: h,
                        discoverySessionId: u,
                        skuId: t,
                        analyticsLocations: n,
                        analyticsSourceLocation: l,
                    }),
                    (0, i.closeModal)(d);
            },
        });
    },
    p = (e) => {
        let {
            loadId: t,
            discoverySessionId: a,
            skuId: r,
            onCheckoutSuccess: i,
            analyticsLocations: s = [],
            analyticsSourceLocation: o,
            applicationId: c,
            onCloseCallback: u,
            onCloseRequest: _,
        } = e;
        return (
            n.h.wait(() => {
                n.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, l.Tt)().openCheckoutModal({
                loadId: t,
                discoverySessionId: a,
                skuId: r,
                applicationId: c,
                analyticsLocations: s,
                analyticsSourceLocation: o,
                flowSpecificOptions: { onCheckoutSuccess: i },
                openModalOptions: { onCloseCallback: u, modalKey: d, onCloseRequest: _ },
            })
        );
    };
