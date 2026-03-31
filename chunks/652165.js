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
                onCloseCallback: u,
            } = e,
            m = (0, r.A)(),
            h = !1;
        return p({
            loadId: m,
            skuId: t,
            onCheckoutSuccess: (e) => {
                h || n(e), (h = !0);
            },
            analyticsLocations: i,
            analyticsSourceLocation: s,
            onCloseCallback: () => {
                (0, l.S)({ checkoutSucceeded: h }), u?.();
            },
            onCloseRequest: () => {
                h ||
                    (0, o.g)(c.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: m,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: s,
                    }),
                    (0, a.OoC)(d);
            },
        });
    },
    p = (e) => {
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
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, s.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: a,
                analyticsSourceLocation: l,
                flowSpecificOptions: { onCheckoutSuccess: r },
                openModalOptions: { onCloseCallback: o, modalKey: d, onCloseRequest: c },
            })
        );
    };
