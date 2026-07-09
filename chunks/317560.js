n.d(t, { R: () => a, j: () => o });
var l = n(627968),
    r = n(192308);
let i = "social-layer-storefront-product-details-modal",
    a = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: a,
            applicationId: o,
            isStorefront: s,
            giftRecipient: u,
            giftingOrigin: c,
            analyticsLocations: d,
            analyticsContext: m,
            onClose: E,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("47494"),
                    n.e("65352"),
                    n.e("28708"),
                    n.e("15455"),
                    n.e("9862"),
                    n.e("10054"),
                    n.e("3586"),
                    n.e("38519"),
                    n.e("60856"),
                    n.e("36178"),
                    n.e("98373"),
                    n.e("71763"),
                    n.e("9233"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("93766"),
                    n.e("28095"),
                    n.e("21200"),
                    n.e("37021"),
                    n.e("18997"),
                    n.e("34691"),
                    n.e("20287"),
                    n.e("18024"),
                    n.e("69747"),
                    n.e("3131"),
                    n.e("47177"),
                    n.e("8563"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("21930"),
                    n.e("24914"),
                    n.e("20333"),
                    n.e("24265"),
                    n.e("68532"),
                    n.e("20382"),
                    n.e("73165"),
                    n.e("34268"),
                    n.e("63333"),
                    n.e("12703"),
                    n.e("55598"),
                ]).then(n.bind(n, 439325));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: a,
                        applicationId: o,
                        isStorefront: s,
                        analyticsLocations: d,
                        analyticsContext: m,
                        giftRecipient: u,
                        giftingOrigin: c,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: i,
                allowsNavigation: s,
                onCloseCallback: () => {
                    E?.();
                },
            },
        );
    };
function o() {
    (0, r.hasModalOpen)(i) && (0, r.closeModal)(i);
}
