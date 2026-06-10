i.d(t, { R: () => a, j: () => r });
var n = i(627968),
    l = i(192308);
let s = "social-layer-storefront-product-details-modal",
    a = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: a,
            applicationId: r,
            isStorefront: u,
            giftRecipient: o,
            giftingOrigin: c,
            analyticsLocations: d,
            analyticsContext: f,
            onClose: A,
        } = e;
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    i.e("97073"),
                    i.e("66731"),
                    i.e("61872"),
                    i.e("43535"),
                    i.e("9233"),
                    i.e("72963"),
                    i.e("86814"),
                    i.e("37021"),
                    i.e("20287"),
                    i.e("18024"),
                    i.e("47177"),
                    i.e("3131"),
                    i.e("69747"),
                    i.e("27272"),
                    i.e("36149"),
                    i.e("51778"),
                    i.e("24914"),
                    i.e("70789"),
                    i.e("21930"),
                    i.e("20382"),
                    i.e("52511"),
                    i.e("63333"),
                    i.e("73165"),
                    i.e("66017"),
                    i.e("93766"),
                    i.e("90711"),
                    i.e("9935"),
                    i.e("39305"),
                ]).then(i.bind(i, 659696));
                return (i) =>
                    (0, n.jsx)(e, {
                        ...i,
                        skuId: a,
                        applicationId: r,
                        isStorefront: u,
                        analyticsLocations: d,
                        analyticsContext: f,
                        giftRecipient: o,
                        giftingOrigin: c,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: s,
                allowsNavigation: u,
                onCloseCallback: () => {
                    A?.();
                },
            },
        );
    };
function r() {
    (0, l.hasModalOpen)(s) && (0, l.closeModal)(s);
}
