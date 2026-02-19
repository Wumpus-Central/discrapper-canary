"use strict";
a.d(t, { B4: () => u, o6: () => d });
var r = a(835245);
a(192308);
var n = a(397927),
    i = a(73153),
    o = a(589078),
    s = a(301518),
    _ = a(373856),
    c = a(652215);
a(231723);
let l = "orb-checkout-payment-modal-key",
    d = () => (0, n.Ry6)(l),
    u = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: a,
                analyticsLocations: i = [],
                analyticsSourceLocation: o,
                onCloseCallback: d,
            } = e,
            u = (0, r.A)(),
            f = !1;
        return p({
            loadId: u,
            skuId: t,
            onCheckoutSuccess: (e) => {
                f || a(e), (f = !0);
            },
            analyticsLocations: i,
            analyticsSourceLocation: o,
            onCloseCallback: () => {
                (0, s.S)({ checkoutSucceeded: f }), d?.();
            },
            onCloseRequest: () => {
                f ||
                    (0, _.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: u,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: o,
                    }),
                    (0, n.OoC)(l);
            },
        });
    },
    p = (e) => {
        let {
            loadId: t,
            skuId: a,
            onCheckoutSuccess: r,
            analyticsLocations: n = [],
            analyticsSourceLocation: s,
            onCloseCallback: _,
            onCloseRequest: c,
        } = e;
        return (
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, o.Tt)().openCheckoutModal({
                loadId: t,
                skuId: a,
                analyticsLocations: n,
                analyticsSourceLocation: s,
                flowSpecificOptions: { onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: _, modalKey: l, onCloseRequest: c },
            })
        );
    };
