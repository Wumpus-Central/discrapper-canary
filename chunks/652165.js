"use strict";
n.d(t, { B4: () => f, o6: () => d });
var r = n(835245);
n(192308);
var i = n(397927),
    a = n(73153),
    s = n(589078),
    o = n(301518),
    l = n(373856),
    u = n(652215);
n(231723);
let c = "orb-checkout-payment-modal-key",
    d = () => (0, i.Ry6)(c);
function _() {
    a.h.wait(() => {
        a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    });
}
let f = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: a = [],
                analyticsSourceLocation: s,
                onCloseCallback: d,
            } = e,
            _ = (0, r.A)(),
            f = !1,
            p = () => {
                f ||
                    (0, l.g)(u.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: _,
                        skuId: t,
                        analyticsLocations: a,
                        analyticsSourceLocation: s,
                    }),
                    (0, i.OoC)(c);
            },
            g = {
                loadId: _,
                skuId: t,
                onCheckoutSuccess: (e) => {
                    f || n(e), (f = !0);
                },
                analyticsLocations: a,
                analyticsSourceLocation: s,
                onCloseCallback: () => {
                    (0, o.S)({ checkoutSucceeded: f }), d?.();
                },
                onCloseRequest: p,
            };
        return h(g);
    },
    h = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
            analyticsLocations: i = [],
            analyticsSourceLocation: a,
            onCloseCallback: o,
            onCloseRequest: l,
        } = e;
        return (
            _(),
            (0, s.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: i,
                analyticsSourceLocation: a,
                flowSpecificOptions: { onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: o, modalKey: c, onCloseRequest: l },
            })
        );
    };
