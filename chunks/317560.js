"use strict";
n.d(t, { R: () => a, j: () => o });
var r = n(627968),
    i = n(192308);
let s = "social-layer-storefront-product-details-modal",
    a = (e) => {
        let {
            skuId: t,
            applicationId: a,
            isStorefront: o,
            giftRecipient: l,
            giftingOrigin: u,
            analyticsLocations: c,
            analyticsContext: d,
            onClose: _,
        } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("25412"), n.e("40396"), n.e("21044")]).then(
                    n.bind(n, 108105),
                );
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        skuId: t,
                        applicationId: a,
                        isStorefront: o,
                        analyticsLocations: c,
                        analyticsContext: d,
                        giftRecipient: l,
                        giftingOrigin: u,
                    });
            },
            {
                modalKey: s,
                allowsNavigation: o,
                onCloseCallback: () => {
                    _?.();
                },
            },
        );
    };
function o() {
    (0, i.hasModalOpen)(s) && (0, i.closeModal)(s);
}
