n.d(t, { B4: () => c, o6: () => p });
var a = n(835245);
n(192308);
var i = n(397927),
    l = n(73153),
    r = n(589078),
    o = n(301518),
    s = n(373856),
    d = n(652215);
n(231723);
let u = "orb-checkout-payment-modal-key",
    p = () => (0, i.Ry6)(u),
    c = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: l = [],
                analyticsSourceLocation: r,
                onCloseCallback: p,
            } = e,
            c = (0, a.A)(),
            E = !1;
        return _({
            loadId: c,
            skuId: t,
            onCheckoutSuccess: (e) => {
                E || n(e), (E = !0);
            },
            analyticsLocations: l,
            analyticsSourceLocation: r,
            onCloseCallback: () => {
                (0, o.S)({ checkoutSucceeded: E }), p?.();
            },
            onCloseRequest: () => {
                E ||
                    (0, s.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: c,
                        skuId: t,
                        analyticsLocations: l,
                        analyticsSourceLocation: r,
                    }),
                    (0, i.OoC)(u);
            },
        });
    },
    _ = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: a,
            analyticsLocations: i = [],
            analyticsSourceLocation: o,
            onCloseCallback: s,
            onCloseRequest: d,
        } = e;
        return (
            l.h.wait(() => {
                l.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, r.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: i,
                analyticsSourceLocation: o,
                flowSpecificOptions: { onCheckoutSuccess: a },
                openModalOptions: { onCloseCallback: s, modalKey: u, onCloseRequest: d },
            })
        );
    };
