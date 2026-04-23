l.d(t, { B4: () => _, o6: () => u });
var n = l(835245),
    a = l(192308),
    i = l(73153),
    r = l(589078),
    s = l(301518),
    o = l(373856),
    d = l(652215);
let c = "orb-checkout-payment-modal-key",
    u = () => (0, a.useHasModalOpen)(c),
    _ = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: l,
                analyticsLocations: i = [],
                analyticsSourceLocation: r,
                discoverySessionId: u,
                applicationId: _,
                onCloseCallback: h,
            } = e,
            p = (0, n.A)(),
            b = !1;
        return m({
            loadId: p,
            discoverySessionId: u,
            skuId: t,
            onCheckoutSuccess: (e) => {
                b || l(e), (b = !0);
            },
            applicationId: _,
            analyticsLocations: i,
            analyticsSourceLocation: r,
            onCloseCallback: () => {
                (0, s.S)({ checkoutSucceeded: b }), h?.();
            },
            onCloseRequest: () => {
                b ||
                    (0, o.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: p,
                        discoverySessionId: u,
                        skuId: t,
                        analyticsLocations: i,
                        analyticsSourceLocation: r,
                    }),
                    (0, a.closeModal)(c);
            },
        });
    },
    m = (e) => {
        let {
            loadId: t,
            discoverySessionId: l,
            skuId: n,
            onCheckoutSuccess: a,
            analyticsLocations: s = [],
            analyticsSourceLocation: o,
            applicationId: d,
            onCloseCallback: u,
            onCloseRequest: _,
        } = e;
        return (
            i.h.wait(() => {
                i.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, r.Tt)().openCheckoutModal({
                loadId: t,
                discoverySessionId: l,
                skuId: n,
                applicationId: d,
                analyticsLocations: s,
                analyticsSourceLocation: o,
                flowSpecificOptions: { onCheckoutSuccess: a },
                openModalOptions: { onCloseCallback: u, modalKey: c, onCloseRequest: _ },
            })
        );
    };
