"use strict";
n.d(t, { R: () => o, j: () => l });
var r = n(627968),
    i = n(397927),
    a = n(733391);
let s = "social-layer-storefront-product-details-modal",
    o = (e) => {
        let {
            skuId: t,
            applicationId: o,
            guildId: l,
            isStorefront: u,
            analyticsLocations: c,
            analyticsContext: d,
            onClose: _,
        } = e;
        (0, a.iR)(l, t, "openSocialLayerStorefrontProductDetailsModal"),
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
                            analyticsLocations: c,
                            analyticsContext: d,
                        });
                },
                {
                    modalKey: s,
                    allowsNavigation: u,
                    onCloseCallback: () => {
                        _?.();
                    },
                },
            );
    };
function l() {
    (0, i.kBI)(s) && (0, i.OoC)(s);
}
