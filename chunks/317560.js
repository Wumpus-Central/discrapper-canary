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
            contextKey: p,
            onClose: C,
        } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("903733"),
                    n.e("84993"),
                    n.e("634225"),
                    n.e("198496"),
                    n.e("77413"),
                    n.e("166171"),
                    n.e("267526"),
                    n.e("669174"),
                    n.e("967062"),
                    n.e("507140"),
                    n.e("653383"),
                    n.e("501277"),
                    n.e("343298"),
                    n.e("705358"),
                    n.e("60955"),
                    n.e("692990"),
                    n.e("27355"),
                    n.e("704434"),
                    n.e("393766"),
                    n.e("27773"),
                    n.e("497516"),
                    n.e("572963"),
                    n.e("521930"),
                    n.e("153251"),
                    n.e("538887"),
                    n.e("737021"),
                    n.e("250478"),
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
                    n.e("437254"),
                    n.e("963333"),
                    n.e("231193"),
                    n.e("621122"),
                    n.e("493301"),
                ]).then(n.bind(n, 979988));
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
                contextKey: p,
                allowsNavigation: o,
                onCloseCallback: () => {
                    C?.();
                },
            },
        );
    };
function s(e) {
    (0, i.hasModalOpen)(r, e) && (0, i.closeModal)(r, e);
}
