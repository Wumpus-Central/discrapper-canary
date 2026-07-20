n.d(t, { R: () => a, j: () => s });
var l = n(627968),
    i = n(192308);
let r = "social-layer-storefront-product-details-modal",
    a = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: a,
            applicationId: s,
            isStorefront: o,
            giftRecipient: u,
            giftingOrigin: c,
            analyticsLocations: d,
            analyticsContext: p,
            onClose: m,
        } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("47494"),
                    n.e("14399"),
                    n.e("28708"),
                    n.e("15455"),
                    n.e("9862"),
                    n.e("10054"),
                    n.e("60073"),
                    n.e("38519"),
                    n.e("60856"),
                    n.e("36178"),
                    n.e("31524"),
                    n.e("4517"),
                    n.e("81306"),
                    n.e("60955"),
                    n.e("7170"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("93766"),
                    n.e("21930"),
                    n.e("30233"),
                    n.e("21200"),
                    n.e("37021"),
                    n.e("79630"),
                    n.e("20287"),
                    n.e("18024"),
                    n.e("3131"),
                    n.e("47177"),
                    n.e("69201"),
                    n.e("8563"),
                    n.e("36149"),
                    n.e("69985"),
                    n.e("51778"),
                    n.e("24265"),
                    n.e("40492"),
                    n.e("27272"),
                    n.e("24914"),
                    n.e("68532"),
                    n.e("88200"),
                    n.e("20382"),
                    n.e("73165"),
                    n.e("34268"),
                    n.e("63333"),
                    n.e("55598"),
                ]).then(n.bind(n, 439325));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: a,
                        applicationId: s,
                        isStorefront: o,
                        analyticsLocations: d,
                        analyticsContext: p,
                        giftRecipient: u,
                        giftingOrigin: c,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: r,
                allowsNavigation: o,
                onCloseCallback: () => {
                    m?.();
                },
            },
        );
    };
function s() {
    (0, i.hasModalOpen)(r) && (0, i.closeModal)(r);
}
