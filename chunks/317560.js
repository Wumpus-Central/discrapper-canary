n.d(t, { R: () => a, j: () => s });
var l = n(477900),
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
            analyticsContext: m,
            onClose: p,
        } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("903733"),
                    n.e("84993"),
                    n.e("634225"),
                    n.e("198496"),
                    n.e("307389"),
                    n.e("848826"),
                    n.e("251714"),
                    n.e("463276"),
                    n.e("507140"),
                    n.e("653383"),
                    n.e("501277"),
                    n.e("343298"),
                    n.e("307697"),
                    n.e("60955"),
                    n.e("407170"),
                    n.e("572963"),
                    n.e("752511"),
                    n.e("521930"),
                    n.e("393766"),
                    n.e("930233"),
                    n.e("221200"),
                    n.e("538887"),
                    n.e("737021"),
                    n.e("979630"),
                    n.e("3131"),
                    n.e("220287"),
                    n.e("918024"),
                    n.e("8563"),
                    n.e("647177"),
                    n.e("169201"),
                    n.e("111527"),
                    n.e("424265"),
                    n.e("127272"),
                    n.e("136149"),
                    n.e("451778"),
                    n.e("621573"),
                    n.e("783403"),
                    n.e("24914"),
                    n.e("68532"),
                    n.e("491190"),
                    n.e("20382"),
                    n.e("273165"),
                    n.e("734268"),
                    n.e("963333"),
                    n.e("302564"),
                    n.e("555598"),
                ]).then(n.bind(n, 439325));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: a,
                        applicationId: s,
                        isStorefront: o,
                        analyticsLocations: d,
                        analyticsContext: m,
                        giftRecipient: u,
                        giftingOrigin: c,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: r,
                allowsNavigation: o,
                onCloseCallback: () => {
                    p?.();
                },
            },
        );
    };
function s() {
    (0, i.hasModalOpen)(r) && (0, i.closeModal)(r);
}
