n.d(t, { n: () => o });
var l = n(627968),
    i = n(192308),
    r = n(954571),
    s = n(188275),
    a = n(652215);
let o = (e) => {
    let { sku: t, application: o, analyticsLocations: u, orbsReward: d } = e;
    (0, i.openModalLazy)(
        async () => {
            let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await Promise.all([
                n.e("90860"),
                n.e("72877"),
                n.e("72963"),
                n.e("61052"),
                n.e("80307"),
            ]).then(n.bind(n, 472734));
            return (n) => (0, l.jsx)(e, { ...n, sku: t, application: o, analyticsLocations: u, orbsReward: d });
        },
        {
            modalKey: "social-layer-storefront-item-claimed-successfully-modal",
            onCloseCallback: () => {
                r.default.track(a.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                    type: s.e2,
                    sku_id: t.id,
                    application_id: o.id,
                    location_stack: u ?? [],
                });
            },
        },
    );
};
