a.d(t, { R: () => l, j: () => d });
var i = a(627968),
    n = a(192308);
let r = "social-layer-storefront-product-details-modal",
    l = (e) => {
        let {
            skuId: t,
            applicationId: l,
            isStorefront: d,
            giftRecipient: s,
            giftingOrigin: o,
            analyticsLocations: _,
            analyticsContext: c,
            onClose: b,
        } = e;
        (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("20382"), a.e("34268"), a.e("83590")]).then(
                    a.bind(a, 138266),
                );
                return (a) =>
                    (0, i.jsx)(e, {
                        ...a,
                        skuId: t,
                        applicationId: l,
                        isStorefront: d,
                        analyticsLocations: _,
                        analyticsContext: c,
                        giftRecipient: s,
                        giftingOrigin: o,
                    });
            },
            {
                modalKey: r,
                allowsNavigation: d,
                onCloseCallback: () => {
                    b?.();
                },
            },
        );
    };
function d() {
    (0, n.hasModalOpen)(r) && (0, n.closeModal)(r);
}
