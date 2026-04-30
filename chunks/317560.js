n.d(t, { R: () => i, j: () => u });
var l = n(627968),
    r = n(192308);
let a = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            skuId: t,
            applicationId: i,
            isStorefront: u,
            giftRecipient: o,
            giftingOrigin: s,
            analyticsLocations: d,
            analyticsContext: c,
            onClose: A,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("1195"),
                    n.e("68495"),
                    n.e("90261"),
                    n.e("89553"),
                    n.e("73873"),
                    n.e("7170"),
                    n.e("86814"),
                    n.e("52617"),
                    n.e("37021"),
                    n.e("18024"),
                    n.e("20131"),
                    n.e("72963"),
                    n.e("21930"),
                    n.e("36149"),
                    n.e("32326"),
                    n.e("16916"),
                    n.e("49205"),
                    n.e("45830"),
                    n.e("20382"),
                    n.e("63333"),
                    n.e("93766"),
                    n.e("73165"),
                    n.e("52511"),
                    n.e("34268"),
                    n.e("52212"),
                    n.e("76361"),
                    n.e("36768"),
                    n.e("63335"),
                ]).then(n.bind(n, 138266));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: t,
                        applicationId: i,
                        isStorefront: u,
                        analyticsLocations: d,
                        analyticsContext: c,
                        giftRecipient: o,
                        giftingOrigin: s,
                    });
            },
            {
                modalKey: a,
                allowsNavigation: u,
                onCloseCallback: () => {
                    A?.();
                },
            },
        );
    };
function u() {
    (0, r.hasModalOpen)(a) && (0, r.closeModal)(a);
}
