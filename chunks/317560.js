n.d(t, { R: () => i, j: () => o });
var l = n(627968),
    r = n(192308);
let a = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: i,
            applicationId: o,
            isStorefront: u,
            giftRecipient: s,
            giftingOrigin: d,
            analyticsLocations: c,
            analyticsContext: A,
            onClose: E,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("58682"),
                    n.e("53859"),
                    n.e("21913"),
                    n.e("30103"),
                    n.e("89553"),
                    n.e("16874"),
                    n.e("9233"),
                    n.e("86814"),
                    n.e("52617"),
                    n.e("37021"),
                    n.e("18024"),
                    n.e("69747"),
                    n.e("16916"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("32326"),
                    n.e("21930"),
                    n.e("2732"),
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
                        applicationId: o,
                        isStorefront: u,
                        analyticsLocations: c,
                        analyticsContext: A,
                        giftRecipient: s,
                        giftingOrigin: d,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: a,
                allowsNavigation: u,
                onCloseCallback: () => {
                    E?.();
                },
            },
        );
    };
function o() {
    (0, r.hasModalOpen)(a) && (0, r.closeModal)(a);
}
