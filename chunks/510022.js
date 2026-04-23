"use strict";
n.d(t, { n: () => l });
var r = n(627968),
    i = n(192308),
    s = n(954571),
    a = n(188275),
    o = n(652215);
let l = (e) => {
    let { sku: t, application: l, analyticsLocations: u, orbsReward: c } = e;
    (0, i.openModalLazy)(
        async () => {
            let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await n.e("80307").then(n.bind(n, 472734));
            return (n) => (0, r.jsx)(e, { ...n, sku: t, application: l, analyticsLocations: u, orbsReward: c });
        },
        {
            modalKey: "social-layer-storefront-item-claimed-successfully-modal",
            onCloseCallback: () => {
                s.default.track(o.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                    type: a.e2,
                    sku_id: t.id,
                    application_id: l.id,
                    location_stack: u ?? [],
                });
            },
        },
    );
};
