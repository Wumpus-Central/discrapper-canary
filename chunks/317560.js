n.d(t, { R: () => a, j: () => o });
var l = n(627968),
    r = n(192308);
let i = "social-layer-storefront-product-details-modal",
    a = (e) => {
        let {
            skuId: t,
            applicationId: a,
            isStorefront: o,
            giftRecipient: u,
            giftingOrigin: s,
            analyticsLocations: d,
            analyticsContext: c,
            onClose: A,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("60060"),
                    n.e("94925"),
                    n.e("46719"),
                    n.e("80797"),
                    n.e("89553"),
                    n.e("94573"),
                    n.e("9233"),
                    n.e("86814"),
                    n.e("52617"),
                    n.e("37021"),
                    n.e("18024"),
                    n.e("20131"),
                    n.e("69747"),
                    n.e("21930"),
                    n.e("72963"),
                    n.e("36149"),
                    n.e("32326"),
                    n.e("16916"),
                    n.e("44326"),
                    n.e("51778"),
                    n.e("45830"),
                    n.e("20382"),
                    n.e("93766"),
                    n.e("73165"),
                    n.e("52511"),
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
                        skuId: t,
                        applicationId: a,
                        isStorefront: o,
                        analyticsLocations: d,
                        analyticsContext: c,
                        giftRecipient: u,
                        giftingOrigin: s,
                    });
            },
            {
                modalKey: i,
                allowsNavigation: o,
                onCloseCallback: () => {
                    A?.();
                },
            },
        );
    };
function o() {
    (0, r.hasModalOpen)(i) && (0, r.closeModal)(i);
}
