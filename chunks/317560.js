n.d(t, { R: () => i, j: () => s });
var l = n(627968),
    a = n(192308);
let r = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: i,
            applicationId: s,
            isStorefront: u,
            giftRecipient: o,
            giftingOrigin: d,
            analyticsLocations: c,
            analyticsContext: A,
            onClose: m,
        } = e;
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("57519"),
                    n.e("94925"),
                    n.e("29761"),
                    n.e("85497"),
                    n.e("31477"),
                    n.e("89553"),
                    n.e("63153"),
                    n.e("29020"),
                    n.e("94573"),
                    n.e("9233"),
                    n.e("86814"),
                    n.e("52617"),
                    n.e("37021"),
                    n.e("18024"),
                    n.e("69747"),
                    n.e("3131"),
                    n.e("47177"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("32326"),
                    n.e("21930"),
                    n.e("97563"),
                    n.e("45830"),
                    n.e("20382"),
                    n.e("93766"),
                    n.e("52511"),
                    n.e("72963"),
                    n.e("73165"),
                    n.e("34268"),
                    n.e("63333"),
                    n.e("52212"),
                    n.e("76361"),
                    n.e("36768"),
                    n.e("9935"),
                    n.e("19454"),
                ]).then(n.bind(n, 583821));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: i,
                        applicationId: s,
                        isStorefront: u,
                        analyticsLocations: c,
                        analyticsContext: A,
                        giftRecipient: o,
                        giftingOrigin: d,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: r,
                allowsNavigation: u,
                onCloseCallback: () => {
                    m?.();
                },
            },
        );
    };
function s() {
    (0, a.hasModalOpen)(r) && (0, a.closeModal)(r);
}
