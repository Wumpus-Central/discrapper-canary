"use strict";
n.d(t, { R: () => o, j: () => l });
var r = n(627968),
    i = n(397927),
    s = n(733391);
let a = "social-layer-storefront-product-details-modal",
    o = (e) => {
        let {
            skuId: t,
            applicationId: o,
            guildId: l,
            isStorefront: u,
            giftRecipient: c,
            giftingOrigin: d,
            analyticsLocations: _,
            analyticsContext: f,
            onClose: p,
        } = e;
        (0, s.iR)(l, t, "openSocialLayerStorefrontProductDetailsModal"),
            (0, i.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("40396"), n.e("67851")]).then(n.bind(n, 108105));
                    return (n) =>
                        (0, r.jsx)(e, {
                            ...n,
                            skuId: t,
                            applicationId: o,
                            guildId: l,
                            isStorefront: u,
                            analyticsLocations: _,
                            analyticsContext: f,
                            giftRecipient: c,
                            giftingOrigin: d,
                        });
                },
                {
                    modalKey: a,
                    allowsNavigation: u,
                    onCloseCallback: () => {
                        p?.();
                    },
                },
            );
    };
function l() {
    (0, i.kBI)(a) && (0, i.OoC)(a);
}
