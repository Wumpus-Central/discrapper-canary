n.d(t, { n: () => u });
var l = n(627968),
    i = n(192308),
    r = n(174459),
    a = n(188275),
    s = n(652215);
let o = "social-layer-storefront-item-claimed-successfully-modal",
    u = (e) => {
        let { sku: t, application: u, analyticsLocations: c, entitlement: d } = e,
            p = !1;
        function m(e) {
            p = e.shouldIgnoreCloseRequest;
        }
        (0, i.openModalLazy)(
            async () => {
                let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await Promise.all([
                    n.e("90860"),
                    n.e("72963"),
                    n.e("93014"),
                    n.e("72877"),
                    n.e("61684"),
                    n.e("80307"),
                ]).then(n.bind(n, 472734));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        sku: t,
                        application: u,
                        analyticsLocations: c,
                        entitlement: d,
                        onSetIgnoreCloseRequest: m,
                    });
            },
            {
                modalKey: o,
                onCloseRequest: () => {
                    p || (0, i.closeModal)(o);
                },
                onCloseCallback: () => {
                    r.default.track(s.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                        type: a.e2,
                        sku_id: t.id,
                        application_id: u.id,
                        location_stack: c ?? [],
                    });
                },
            },
        );
    };
