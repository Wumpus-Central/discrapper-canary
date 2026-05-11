n.d(t, { n: () => o });
var l = n(627968),
    i = n(192308),
    r = n(174459),
    s = n(188275),
    a = n(652215);
let o = (e) => {
    let { sku: t, application: o, analyticsLocations: u, orbsReward: c } = e;
    (0, i.openModalLazy)(
        async () => {
            let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await Promise.all([
                n.e("27870"),
                n.e("72963"),
                n.e("72877"),
                n.e("20310"),
                n.e("80307"),
            ]).then(n.bind(n, 472734));
            return (n) => (0, l.jsx)(e, { ...n, sku: t, application: o, analyticsLocations: u, orbsReward: c });
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
