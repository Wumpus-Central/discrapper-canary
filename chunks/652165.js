"use strict";
r.d(t, { B4: () => u, o6: () => l });
var n = r(835245);
r(192308);
var a = r(397927),
    i = r(73153),
    o = r(589078),
    s = r(301518),
    c = r(373856),
    d = r(652215);
r(231723);
let _ = "orb-checkout-payment-modal-key",
    l = () => (0, a.Ry6)(_),
    u = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: r,
                analyticsLocations: i = [],
                analyticsSourceLocation: o,
                onCloseCallback: l,
            } = e,
            u = (0, n.A)(),
            m = !1;
        return f({
            loadId: u,
            skuId: t,
            onCheckoutSuccess: (e) => {
                m || r(e), (m = !0);
            },
            analyticsLocations: i,
            analyticsSourceLocation: o,
            onCloseCallback: () => {
                (0, s.S)({ checkoutSucceeded: m }), l?.();
            },
            onCloseRequest: () => {
                m ||
                    (0, c.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: u,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: o,
                    }),
                    (0, a.OoC)(_);
            },
        });
    },
    f = (e) => {
        let {
            loadId: t,
            skuId: r,
            onCheckoutSuccess: n,
            analyticsLocations: a = [],
            analyticsSourceLocation: s,
            onCloseCallback: c,
            onCloseRequest: d,
        } = e;
        return (
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, o.Tt)().openCheckoutModal({
                loadId: t,
                skuId: r,
                analyticsLocations: a,
                analyticsSourceLocation: s,
                flowSpecificOptions: { onCheckoutSuccess: n },
                openModalOptions: { onCloseCallback: c, modalKey: _, onCloseRequest: d },
            })
        );
    };
