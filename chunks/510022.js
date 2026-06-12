n.d(t, { n: () => o });
var l = n(627968),
    r = n(192308),
    i = n(174459),
    a = n(188275),
    s = n(652215);
let o = (e) => {
    let { sku: t, application: o, analyticsLocations: u, orbsReward: c } = e;
    (0, r.openModalLazy)(
        async () => {
            let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await Promise.all([
                n.e("90860"),
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
