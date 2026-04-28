t.d(o, { B4: () => i, o6: () => h });
var c = t(132500),
    s = t(192308),
    a = t(228366),
    p = t(226991),
    l = t(301518),
    d = t(373856),
    u = t(652215);
let n = "orb-checkout-payment-modal-key",
    h = () => (0, s.useHasModalOpen)(n),
    i = (e) => {
        let {
                skuId: o,
                onCheckoutSuccess: t,
                analyticsLocations: a = [],
                analyticsSourceLocation: p,
                discoverySessionId: h,
                applicationId: i,
                onCloseCallback: r,
            } = e,
            C = (0, c.A)(),
            M = !1;
        return k({
            loadId: C,
            discoverySessionId: h,
            skuId: o,
            onCheckoutSuccess: (e) => {
                M || t(e), (M = !0);
            },
            applicationId: i,
            analyticsLocations: a,
            analyticsSourceLocation: p,
            onCloseCallback: () => {
                (0, l.S)({ checkoutSucceeded: M }), r?.();
            },
            onCloseRequest: () => {
                M ||
                    (0, d.g)(u.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: C,
                        discoverySessionId: h,
                        skuId: o,
                        analyticsLocations: a,
                        analyticsSourceLocation: p,
                    }),
                    (0, s.closeModal)(n);
            },
        });
    },
    k = (e) => {
        let {
            loadId: o,
            discoverySessionId: t,
            skuId: c,
            onCheckoutSuccess: s,
            analyticsLocations: l = [],
            analyticsSourceLocation: d,
            applicationId: u,
            onCloseCallback: h,
            onCloseRequest: i,
        } = e;
        return (
            a.h.wait(() => {
                a.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, p.Tt)().openCheckoutModal({
                loadId: o,
                discoverySessionId: t,
                skuId: c,
                applicationId: u,
                analyticsLocations: l,
                analyticsSourceLocation: d,
                flowSpecificOptions: { onCheckoutSuccess: s },
                openModalOptions: { onCloseCallback: h, modalKey: n, onCloseRequest: i },
            })
        );
    };
