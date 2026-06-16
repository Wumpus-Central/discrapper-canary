n.d(t, { R: () => s, j: () => r });
var i = n(627968),
    a = n(192308);
let l = "social-layer-storefront-product-details-modal",
    s = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: s,
            applicationId: r,
            isStorefront: o,
            giftRecipient: c,
            giftingOrigin: d,
            analyticsLocations: u,
            analyticsContext: m,
            onClose: A,
        } = e;
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("9662"),
                    n.e("2677"),
                    n.e("76631"),
                    n.e("43535"),
                    n.e("9233"),
                    n.e("52511"),
                    n.e("72963"),
                    n.e("93766"),
                    n.e("28095"),
                    n.e("37021"),
                    n.e("20287"),
                    n.e("18997"),
                    n.e("18024"),
                    n.e("3131"),
                    n.e("69747"),
                    n.e("47177"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("21930"),
                    n.e("24914"),
                    n.e("66880"),
                    n.e("20382"),
                    n.e("63333"),
                    n.e("73165"),
                    n.e("34268"),
                    n.e("36768"),
                    n.e("9935"),
                    n.e("6393"),
                ]).then(n.bind(n, 699968));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        skuId: s,
                        applicationId: r,
                        isStorefront: o,
                        analyticsLocations: u,
                        analyticsContext: m,
                        giftRecipient: c,
                        giftingOrigin: d,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: l,
                allowsNavigation: o,
                onCloseCallback: () => {
                    A?.();
                },
            },
        );
    };
function r() {
    (0, a.hasModalOpen)(l) && (0, a.closeModal)(l);
}
