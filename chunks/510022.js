"use strict";
n.d(t, { n: () => l });
var i = n(627968),
    r = n(192308),
    s = n(174459),
    a = n(188275),
    o = n(652215);
let l = (e) => {
    let { sku: t, application: l, analyticsLocations: u, entitlement: c } = e;
    (0, r.openModalLazy)(
        async () => {
            let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await Promise.all([
                n.e("90860"),
                n.e("72963"),
                n.e("72877"),
                n.e("20310"),
                n.e("80307"),
            ]).then(n.bind(n, 472734));
            return (n) => (0, i.jsx)(e, { ...n, sku: t, application: l, analyticsLocations: u, entitlement: c });
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
