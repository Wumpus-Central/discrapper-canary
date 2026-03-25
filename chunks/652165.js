"use strict";
r.d(t, { B4: () => f, o6: () => d });
var n = r(835245);
r(192308);
var a = r(397927),
    s = r(73153),
    i = r(589078),
    l = r(301518),
    o = r(373856),
    c = r(652215);
r(231723);
let u = "orb-checkout-payment-modal-key",
    d = () => (0, a.Ry6)(u),
    f = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: r,
                analyticsLocations: s = [],
                analyticsSourceLocation: i,
                onCloseCallback: d,
            } = e,
            f = (0, n.A)(),
            m = !1;
        return h({
            loadId: f,
            skuId: t,
            onCheckoutSuccess: (e) => {
                m || r(e), (m = !0);
            },
            analyticsLocations: s,
            analyticsSourceLocation: i,
            onCloseCallback: () => {
                (0, l.S)({ checkoutSucceeded: m }), d?.();
            },
            onCloseRequest: () => {
                m ||
                    (0, o.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: f,
                        skuId: t,
                        analyticsLocations: s,
                        analyticsSourceLocation: i,
                    }),
                    (0, a.OoC)(u);
            },
        });
    },
    h = (e) => {
        let {
            loadId: t,
            skuId: r,
            onCheckoutSuccess: n,
            analyticsLocations: a = [],
            analyticsSourceLocation: l,
            onCloseCallback: o,
            onCloseRequest: c,
        } = e;
        return (
            s.h.wait(() => {
                s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, i.Tt)().openCheckoutModal({
                loadId: t,
                skuId: r,
                analyticsLocations: a,
                analyticsSourceLocation: l,
                flowSpecificOptions: { onCheckoutSuccess: n },
                openModalOptions: { onCloseCallback: o, modalKey: u, onCloseRequest: c },
            })
        );
    };
