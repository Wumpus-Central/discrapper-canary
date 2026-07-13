n.d(t, { R: () => o, j: () => s });
var l = n(627968),
    r = n(192308);
let i = "social-layer-storefront-product-details-modal",
    o = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: o,
            applicationId: s,
            isStorefront: a,
            giftRecipient: u,
            giftingOrigin: c,
            analyticsLocations: d,
            analyticsContext: E,
            onClose: C,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("39680"),
                    n.e("41060"),
                    n.e("55532"),
                    n.e("34454"),
                    n.e("79154"),
                    n.e("97782"),
                    n.e("45588"),
                    n.e("20056"),
                    n.e("64622"),
                    n.e("33941"),
                    n.e("71763"),
                    n.e("9233"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("93766"),
                    n.e("28095"),
                    n.e("21200"),
                    n.e("37021"),
                    n.e("18997"),
                    n.e("20287"),
                    n.e("18024"),
                    n.e("69747"),
                    n.e("3131"),
                    n.e("47177"),
                    n.e("8563"),
                    n.e("36149"),
                    n.e("69985"),
                    n.e("51778"),
                    n.e("21930"),
                    n.e("24265"),
                    n.e("97198"),
                    n.e("27272"),
                    n.e("24914"),
                    n.e("68532"),
                    n.e("20382"),
                    n.e("19736"),
                    n.e("73165"),
                    n.e("34268"),
                    n.e("63333"),
                    n.e("12703"),
                    n.e("55598"),
                ]).then(n.bind(n, 439325));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: o,
                        applicationId: s,
                        isStorefront: a,
                        analyticsLocations: d,
                        analyticsContext: E,
                        giftRecipient: u,
                        giftingOrigin: c,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: i,
                allowsNavigation: a,
                onCloseCallback: () => {
                    C?.();
                },
            },
        );
    };
function s() {
    (0, r.hasModalOpen)(i) && (0, r.closeModal)(i);
}
