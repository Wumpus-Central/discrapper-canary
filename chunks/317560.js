n.d(t, { R: () => a, j: () => s });
var i = n(627968),
    l = n(192308);
let r = "social-layer-storefront-product-details-modal",
    a = (e) => {
        let {
            skuId: t,
            applicationId: a,
            isStorefront: s,
            giftRecipient: u,
            giftingOrigin: o,
            analyticsLocations: c,
            analyticsContext: d,
            onClose: E,
        } = e;
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("44575"), n.e("34268"), n.e("25641")]).then(
                    n.bind(n, 138266),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        skuId: t,
                        applicationId: a,
                        isStorefront: s,
                        analyticsLocations: c,
                        analyticsContext: d,
                        giftRecipient: u,
                        giftingOrigin: o,
                    });
            },
            {
                modalKey: r,
                allowsNavigation: s,
                onCloseCallback: () => {
                    E?.();
                },
            },
        );
    };
function s() {
    (0, l.hasModalOpen)(r) && (0, l.closeModal)(r);
}
