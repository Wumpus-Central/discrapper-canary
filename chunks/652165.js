n.d(t, { B4: () => p, o6: () => d });
var a = n(835245);
n(192308);
var o = n(397927),
    i = n(73153),
    _ = n(589078),
    r = n(301518),
    c = n(373856),
    s = n(652215);
n(231723);
let l = "orb-checkout-payment-modal-key",
    d = () => (0, o.Ry6)(l),
    p = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: i = [],
                analyticsSourceLocation: _,
                onCloseCallback: d,
            } = e,
            p = (0, a.A)(),
            m = !1;
        return u({
            loadId: p,
            skuId: t,
            onCheckoutSuccess: (e) => {
                m || n(e), (m = !0);
            },
            analyticsLocations: i,
            analyticsSourceLocation: _,
            onCloseCallback: () => {
                (0, r.S)({ checkoutSucceeded: m }), d?.();
            },
            onCloseRequest: () => {
                m ||
                    (0, c.g)(s.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: p,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: _,
                    }),
                    (0, o.OoC)(l);
            },
        });
    },
    u = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: a,
            analyticsLocations: o = [],
            analyticsSourceLocation: r,
            onCloseCallback: c,
            onCloseRequest: s,
        } = e;
        return (
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, _.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: o,
                analyticsSourceLocation: r,
                flowSpecificOptions: { onCheckoutSuccess: a },
                openModalOptions: { onCloseCallback: c, modalKey: l, onCloseRequest: s },
            })
        );
    };
