i.d(t, { R: () => r, j: () => a });
var n = i(627968),
    l = i(192308);
let s = "social-layer-storefront-product-details-modal",
    r = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: r,
            applicationId: a,
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
                    i.e("46438"),
                    i.e("6922"),
                    i.e("94925"),
                    i.e("2677"),
                    i.e("91279"),
                    i.e("43535"),
                    i.e("9233"),
                    i.e("72963"),
                    i.e("86814"),
                    i.e("37021"),
                    i.e("20287"),
                    i.e("18997"),
                    i.e("18024"),
                    i.e("3131"),
                    i.e("69747"),
                    i.e("47177"),
                    i.e("27272"),
                    i.e("36149"),
                    i.e("51778"),
                    i.e("21930"),
                    i.e("24914"),
                    i.e("66880"),
                    i.e("20382"),
                    i.e("52511"),
                    i.e("63333"),
                    i.e("93766"),
                    i.e("73165"),
                    i.e("66017"),
                    i.e("90711"),
                    i.e("9935"),
                    i.e("39305"),
                ]).then(i.bind(i, 659696));
                return (i) =>
                    (0, n.jsx)(e, {
                        ...i,
                        skuId: r,
                        applicationId: a,
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
function a() {
    (0, l.hasModalOpen)(s) && (0, l.closeModal)(s);
}
