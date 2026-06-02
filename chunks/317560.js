n.d(t, { R: () => i, j: () => s });
var l = n(627968),
    a = n(192308);
let r = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: i,
            applicationId: s,
            isStorefront: E,
            giftRecipient: _,
            giftingOrigin: o,
            analyticsLocations: A,
            analyticsContext: I,
            onClose: c,
        } = e;
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("71192"),
                    n.e("94925"),
                    n.e("72811"),
                    n.e("79264"),
                    n.e("61872"),
                    n.e("90665"),
                    n.e("43535"),
                    n.e("9233"),
                    n.e("72963"),
                    n.e("86814"),
                    n.e("37021"),
                    n.e("18997"),
                    n.e("18024"),
                    n.e("3131"),
                    n.e("47177"),
                    n.e("69747"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("24914"),
                    n.e("97563"),
                    n.e("21930"),
                    n.e("20382"),
                    n.e("63333"),
                    n.e("93766"),
                    n.e("73165"),
                    n.e("52511"),
                    n.e("66017"),
                    n.e("36768"),
                    n.e("9935"),
                    n.e("23157"),
                ]).then(n.bind(n, 546804));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: i,
                        applicationId: s,
                        isStorefront: E,
                        analyticsLocations: A,
                        analyticsContext: I,
                        giftRecipient: _,
                        giftingOrigin: o,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: r,
                allowsNavigation: E,
                onCloseCallback: () => {
                    c?.();
                },
            },
        );
    };
function s() {
    (0, a.hasModalOpen)(r) && (0, a.closeModal)(r);
}
