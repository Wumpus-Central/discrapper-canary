t.d(a, { R: () => n, j: () => s });
var i = t(627968),
    o = t(192308);
let l = "social-layer-storefront-product-details-modal",
    n = (e) => {
        let {
            skuId: a,
            applicationId: n,
            isStorefront: s,
            giftRecipient: c,
            giftingOrigin: d,
            analyticsLocations: r,
            analyticsContext: p,
            onClose: u,
        } = e;
        (0, o.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    t.e("61748"),
                    t.e("19586"),
                    t.e("94232"),
                    t.e("89553"),
                    t.e("29020"),
                    t.e("94573"),
                    t.e("9233"),
                    t.e("69747"),
                    t.e("86814"),
                    t.e("52617"),
                    t.e("37021"),
                    t.e("18024"),
                    t.e("32326"),
                    t.e("16916"),
                    t.e("36149"),
                    t.e("49205"),
                    t.e("72963"),
                    t.e("49181"),
                    t.e("20131"),
                    t.e("20382"),
                    t.e("52212"),
                    t.e("21930"),
                    t.e("20973"),
                    t.e("63333"),
                    t.e("78434"),
                    t.e("34268"),
                    t.e("45830"),
                    t.e("93766"),
                    t.e("52511"),
                    t.e("76361"),
                    t.e("36768"),
                    t.e("63335"),
                ]).then(t.bind(t, 138266));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        skuId: a,
                        applicationId: n,
                        isStorefront: s,
                        analyticsLocations: r,
                        analyticsContext: p,
                        giftRecipient: c,
                        giftingOrigin: d,
                    });
            },
            {
                modalKey: l,
                allowsNavigation: s,
                onCloseCallback: () => {
                    u?.();
                },
            },
        );
    };
function s() {
    (0, o.hasModalOpen)(l) && (0, o.closeModal)(l);
}
