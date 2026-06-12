n.d(t, { R: () => i, j: () => s });
var r = n(627968),
    l = n(192308);
let a = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: i,
            applicationId: s,
            isStorefront: o,
            giftRecipient: c,
            giftingOrigin: d,
            analyticsLocations: u,
            analyticsContext: E,
            onClose: m,
        } = e;
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("7089"),
                    n.e("11171"),
                    n.e("2677"),
                    n.e("54926"),
                    n.e("43535"),
                    n.e("9233"),
                    n.e("72963"),
                    n.e("86814"),
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
                    n.e("52511"),
                    n.e("63333"),
                    n.e("93766"),
                    n.e("73165"),
                    n.e("34268"),
                    n.e("90711"),
                    n.e("9935"),
                    n.e("39305"),
                ]).then(n.bind(n, 659696));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        skuId: i,
                        applicationId: s,
                        isStorefront: o,
                        analyticsLocations: u,
                        analyticsContext: E,
                        giftRecipient: c,
                        giftingOrigin: d,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: a,
                allowsNavigation: o,
                onCloseCallback: () => {
                    m?.();
                },
            },
        );
    };
function s() {
    (0, l.hasModalOpen)(a) && (0, l.closeModal)(a);
}
