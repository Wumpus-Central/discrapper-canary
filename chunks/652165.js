"use strict";
n.d(t, { B4: () => f, o6: () => d });
var r = n(835245);
n(192308);
var a = n(397927),
    s = n(73153),
    i = n(589078),
    l = n(301518),
    o = n(373856),
    c = n(652215);
n(231723);
let u = "orb-checkout-payment-modal-key",
    d = () => (0, a.Ry6)(u),
    f = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: s = [],
                analyticsSourceLocation: i,
                onCloseCallback: d,
            } = e,
            f = (0, r.A)(),
            h = !1;
        return m({
            loadId: f,
            skuId: t,
            onCheckoutSuccess: (e) => {
                h || n(e), (h = !0);
            },
            analyticsLocations: s,
            analyticsSourceLocation: i,
            onCloseCallback: () => {
                (0, l.S)({ checkoutSucceeded: h }), d?.();
            },
            onCloseRequest: () => {
                h ||
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
    m = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
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
                skuId: n,
                analyticsLocations: a,
                analyticsSourceLocation: l,
                flowSpecificOptions: { onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: o, modalKey: u, onCloseRequest: c },
            })
        );
    };
