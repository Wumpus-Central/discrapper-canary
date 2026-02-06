"use strict";
n.d(t, { n: () => u });
var r = n(627968),
    i = n(397927),
    a = n(954571),
    s = n(188275),
    o = n(652215);
let l = "social-layer-storefront-item-claimed-successfully-modal",
    u = (e) => {
        let { sku: t, application: u, analyticsLocations: c, orbsReward: d } = e;
        (0, i.mMO)(
            async () => {
                let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await n
                    .e("80307")
                    .then(n.bind(n, 472734));
                return (n) => (0, r.jsx)(e, { ...n, sku: t, application: u, analyticsLocations: c, orbsReward: d });
            },
            {
                modalKey: l,
                onCloseCallback: () => {
                    a.default.track(o.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                        type: s.e2,
                        sku_id: t.id,
                        application_id: u.id,
                        location_stack: c ?? [],
                    });
                },
            },
        );
    };
