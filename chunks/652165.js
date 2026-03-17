n.d(t, { B4: () => u, o6: () => c });
var r = n(835245);
n(192308);
var a = n(397927),
    o = n(73153),
    i = n(589078),
    _ = n(301518),
    l = n(373856),
    d = n(652215);
n(231723);
let s = "orb-checkout-payment-modal-key",
    c = () => (0, a.Ry6)(s),
    u = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: o = [],
                analyticsSourceLocation: i,
                onCloseCallback: c,
            } = e,
            u = (0, r.A)(),
            p = !1;
        return f({
            loadId: u,
            skuId: t,
            onCheckoutSuccess: (e) => {
                p || n(e), (p = !0);
            },
            analyticsLocations: o,
            analyticsSourceLocation: i,
            onCloseCallback: () => {
                (0, _.S)({ checkoutSucceeded: p }), c?.();
            },
            onCloseRequest: () => {
                p ||
                    (0, l.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: u,
                        skuId: t,
                        analyticsLocations: o,
                        analyticsSourceLocation: i,
                    }),
                    (0, a.OoC)(s);
            },
        });
    },
    f = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
            analyticsLocations: a = [],
            analyticsSourceLocation: _,
            onCloseCallback: l,
            onCloseRequest: d,
        } = e;
        return (
            o.h.wait(() => {
                o.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, i.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: a,
                analyticsSourceLocation: _,
                flowSpecificOptions: { onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: l, modalKey: s, onCloseRequest: d },
            })
        );
    };
