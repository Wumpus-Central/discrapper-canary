"use strict";
a.d(t, { R: () => i, j: () => s });
var r = a(627968),
    l = a(192308);
let n = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            skuId: t,
            applicationId: i,
            isStorefront: s,
            giftRecipient: o,
            giftingOrigin: d,
            analyticsLocations: c,
            analyticsContext: u,
            onClose: h,
        } = e;
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("37457"), a.e("40396"), a.e("19390")]).then(
                    a.bind(a, 108105),
                );
                return (a) =>
                    (0, r.jsx)(e, {
                        ...a,
                        skuId: t,
                        applicationId: i,
                        isStorefront: s,
                        analyticsLocations: c,
                        analyticsContext: u,
                        giftRecipient: o,
                        giftingOrigin: d,
                    });
            },
            {
                modalKey: n,
                allowsNavigation: s,
                onCloseCallback: () => {
                    h?.();
                },
            },
        );
    };
function s() {
    (0, l.hasModalOpen)(n) && (0, l.closeModal)(n);
}
