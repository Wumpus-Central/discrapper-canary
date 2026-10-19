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
            analyticsContext: p,
            contextKey: m,
            onClose: h,
        } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("903733"),
                    n.e("84993"),
                    n.e("634225"),
                    n.e("198496"),
                    n.e("551572"),
                    n.e("324520"),
                    n.e("326559"),
                    n.e("77413"),
                    n.e("169727"),
                    n.e("267526"),
                    n.e("669174"),
                    n.e("967062"),
                    n.e("501277"),
                    n.e("343298"),
                    n.e("849560"),
                    n.e("60955"),
                    n.e("692990"),
                    n.e("27355"),
                    n.e("704434"),
                    n.e("407170"),
                    n.e("572963"),
                    n.e("393766"),
                    n.e("521930"),
                    n.e("110327"),
                    n.e("538887"),
                    n.e("737021"),
                    n.e("250478"),
                    n.e("260218"),
                    n.e("3131"),
                    n.e("97210"),
                    n.e("356296"),
                    n.e("603808"),
                    n.e("118917"),
                    n.e("562168"),
                    n.e("424265"),
                    n.e("698547"),
                    n.e("24889"),
                    n.e("951893"),
                    n.e("702813"),
                    n.e("68532"),
                    n.e("431714"),
                    n.e("273165"),
                    n.e("365074"),
                    n.e("734268"),
                    n.e("963333"),
                    n.e("302564"),
                    n.e("653282"),
                ]).then(n.bind(n, 213113));
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
                contextKey: m,
                allowsNavigation: o,
                onCloseCallback: () => {
                    h?.();
                },
            },
        );
    };
function s(e) {
    (0, i.hasModalOpen)(r, e) && (0, i.closeModal)(r, e);
}
