n.d(t, { R: () => i, j: () => u });
var l = n(627968),
    r = n(192308);
let a = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            getSocialLayerStorefrontLink: t,
            skuId: i,
            applicationId: u,
            isStorefront: o,
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
                    n.e("56386"),
                    n.e("94925"),
                    n.e("41816"),
                    n.e("89553"),
                    n.e("25812"),
                    n.e("29020"),
                    n.e("94573"),
                    n.e("9233"),
                    n.e("86814"),
                    n.e("52617"),
                    n.e("37021"),
                    n.e("18024"),
                    n.e("69747"),
                    n.e("16916"),
                    n.e("44326"),
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
                    n.e("71000"),
                ]).then(n.bind(n, 283627));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        skuId: i,
                        applicationId: u,
                        isStorefront: o,
                        analyticsLocations: c,
                        analyticsContext: A,
                        giftRecipient: s,
                        giftingOrigin: d,
                        getSocialLayerStorefrontLink: t,
                    });
            },
            {
                modalKey: a,
                allowsNavigation: o,
                onCloseCallback: () => {
                    E?.();
                },
            },
        );
    };
function u() {
    (0, r.hasModalOpen)(a) && (0, r.closeModal)(a);
}
