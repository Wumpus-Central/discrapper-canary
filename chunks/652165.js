t.d(o, { B4: () => i, o6: () => h });
var a = t(132500),
    c = t(192308),
    s = t(228366),
    d = t(226991),
    l = t(301518),
    p = t(373856),
    n = t(652215);
let u = "orb-checkout-payment-modal-key",
    h = () => (0, c.useHasModalOpen)(u),
    i = (e) => {
        let {
                skuId: o,
                onCheckoutSuccess: t,
                analyticsLocations: s = [],
                analyticsSourceLocation: d,
                discoverySessionId: h,
                applicationId: i,
                onCloseCallback: r,
            } = e,
            C = (0, a.A)(),
            M = !1;
        return k({
            loadId: C,
            discoverySessionId: h,
            skuId: o,
            onCheckoutSuccess: (e) => {
                M || t(e), (M = !0);
            },
            applicationId: i,
            analyticsLocations: s,
            analyticsSourceLocation: d,
            onCloseCallback: () => {
                (0, l.S)({ checkoutSucceeded: M }), r?.();
            },
            onCloseRequest: () => {
                M ||
                    (0, p.g)(n.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: C,
                        discoverySessionId: h,
                        skuId: o,
                        analyticsLocations: s,
                        analyticsSourceLocation: d,
                    }),
                    (0, c.closeModal)(u);
            },
        });
    },
    k = (e) => {
        let {
            loadId: o,
            discoverySessionId: t,
            skuId: a,
            onCheckoutSuccess: c,
            analyticsLocations: l = [],
            analyticsSourceLocation: p,
            applicationId: n,
            onCloseCallback: h,
            onCloseRequest: i,
        } = e;
        return (
            s.h.wait(() => {
                s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
            }),
            (0, d.Tt)().openCheckoutModal({
                loadId: o,
                discoverySessionId: t,
                skuId: a,
                applicationId: n,
                analyticsLocations: l,
                analyticsSourceLocation: p,
                additionalOptions: { onCheckoutSuccess: c },
                openModalOptions: { onCloseCallback: h, modalKey: u, onCloseRequest: i },
            })
        );
    };
