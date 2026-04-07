n.d(t, { B4: () => m, o6: () => u });
var r = n(835245);
n(192308);
var a = n(397927),
    i = n(73153),
    s = n(589078),
    l = n(301518),
    o = n(373856),
    c = n(652215);
n(231723);
let d = "orb-checkout-payment-modal-key",
    u = () => (0, a.Ry6)(d),
    m = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: i = [],
                analyticsSourceLocation: s,
                applicationId: u,
                onCloseCallback: m,
            } = e,
            p = (0, r.A)(),
            x = !1;
        return h({
            loadId: p,
            skuId: t,
            onCheckoutSuccess: (e) => {
                x || n(e), (x = !0);
            },
            applicationId: u,
            analyticsLocations: i,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, l.S)({ checkoutSucceeded: x }), m?.();
            },
            onCloseRequest: () => {
                x ||
                    (0, o.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: p,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: s,
                    }),
                    (0, a.OoC)(d);
            },
        });
    },
    h = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
            analyticsLocations: a = [],
            analyticsSourceLocation: l,
            applicationId: o,
            onCloseCallback: c,
            onCloseRequest: u,
        } = e;
        return (
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, s.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                applicationId: o,
                analyticsLocations: a,
                analyticsSourceLocation: l,
                flowSpecificOptions: { onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: c, modalKey: d, onCloseRequest: u },
            })
        );
    };
