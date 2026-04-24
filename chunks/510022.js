n.d(t, { n: () => o });
var l = n(627968),
    r = n(192308),
    i = n(954571),
    a = n(188275),
    s = n(652215);
let o = (e) => {
    let { sku: t, application: o, analyticsLocations: u, orbsReward: d } = e;
    (0, r.openModalLazy)(
        async () => {
            let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await n.e("80307").then(n.bind(n, 472734));
            return (n) => (0, l.jsx)(e, { ...n, sku: t, application: o, analyticsLocations: u, orbsReward: d });
        },
        {
            modalKey: "social-layer-storefront-item-claimed-successfully-modal",
            onCloseCallback: () => {
                i.default.track(s.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                    type: a.e2,
                    sku_id: t.id,
                    application_id: o.id,
                    location_stack: u ?? [],
                });
            },
        },
    );
};
