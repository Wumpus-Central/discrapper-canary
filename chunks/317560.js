n.d(t, { R: () => s, j: () => a });
var l = n(627968),
    i = n(192308);
let r = "social-layer-storefront-product-details-modal",
    s = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: s,
            applicationId: a,
            isStorefront: u,
            giftRecipient: o,
            giftingOrigin: c,
            analyticsLocations: d,
            analyticsContext: S,
            onClose: E,
        } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("71664"),
                    n.e("94925"),
                    n.e("2677"),
                    n.e("40942"),
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
                    n.e("70789"),
                    n.e("20382"),
                    n.e("52511"),
                    n.e("63333"),
                    n.e("93766"),
                    n.e("73165"),
                    n.e("66017"),
                    n.e("90711"),
                    n.e("9935"),
                    n.e("39305"),
                ]).then(n.bind(n, 659696));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: s,
                        applicationId: a,
                        isStorefront: u,
                        analyticsLocations: d,
                        analyticsContext: S,
                        giftRecipient: o,
                        giftingOrigin: c,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: r,
                allowsNavigation: u,
                onCloseCallback: () => {
                    E?.();
                },
            },
        );
    };
function a() {
    (0, i.hasModalOpen)(r) && (0, i.closeModal)(r);
}
