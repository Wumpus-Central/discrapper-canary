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
                rentalDuration: _,
            } = e,
            f = (0, r.A)(),
            h = !1,
            m = () => {
                h ||
                    (0, l.g)(u.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: f,
                        skuId: t,
                        analyticsLocations: a,
                        analyticsSourceLocation: s,
                    }),
                    (0, i.OoC)(c);
            },
            g = {
                loadId: f,
                skuId: t,
                onCheckoutSuccess: (e) => {
                    h || n(e), (h = !0);
                },
                analyticsLocations: a,
                analyticsSourceLocation: s,
                onCloseCallback: () => {
                    (0, o.S)({ checkoutSucceeded: h }), d?.();
                },
                rentalDuration: _,
                onCloseRequest: m,
            };
        return p(g);
    },
    p = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
            analyticsLocations: i = [],
            analyticsSourceLocation: a,
            onCloseCallback: o,
            rentalDuration: l,
            onCloseRequest: u,
        } = e;
        return (
            _(),
            (0, s.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: i,
                analyticsSourceLocation: a,
                flowSpecificOptions: { rentalDuration: l, onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: o, modalKey: c, onCloseRequest: u },
            })
        );
    };
