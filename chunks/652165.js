n.d(t, { B4: () => m, o6: () => u });
var a = n(835245);
n(192308);
var r = n(397927),
    i = n(73153),
    s = n(589078),
    l = n(301518),
    c = n(373856),
    o = n(652215);
n(231723);
let d = "orb-checkout-payment-modal-key",
    u = () => (0, r.Ry6)(d),
    m = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: i = [],
                analyticsSourceLocation: s,
                discoverySessionId: u,
                applicationId: m,
                onCloseCallback: _,
            } = e,
            h = (0, a.A)(),
            x = !1;
        return p({
            loadId: h,
            discoverySessionId: u,
            skuId: t,
            onCheckoutSuccess: (e) => {
                x || n(e), (x = !0);
            },
            applicationId: m,
            analyticsLocations: i,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, l.S)({ checkoutSucceeded: x }), _?.();
            },
            onCloseRequest: () => {
                x ||
                    (0, c.g)(o.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: h,
                        discoverySessionId: u,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: s,
                    }),
                    (0, r.OoC)(d);
            },
        });
    },
    p = (e) => {
        let {
            loadId: t,
            discoverySessionId: n,
            skuId: a,
            onCheckoutSuccess: r,
            analyticsLocations: l = [],
            analyticsSourceLocation: c,
            applicationId: o,
            onCloseCallback: u,
            onCloseRequest: m,
        } = e;
        return (
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, s.Tt)().openCheckoutModal({
                loadId: t,
                discoverySessionId: n,
                skuId: a,
                applicationId: o,
                analyticsLocations: l,
                analyticsSourceLocation: c,
                flowSpecificOptions: { onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: u, modalKey: d, onCloseRequest: m },
            })
        );
    };
