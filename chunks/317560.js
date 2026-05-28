l.d(a, { R: () => i, j: () => r });
var t = l(627968),
    n = l(192308);
let s = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let {
            customNavigateToSocialLayerStorefront: a,
            skuId: i,
            applicationId: r,
            isStorefront: o,
            giftRecipient: c,
            giftingOrigin: d,
            analyticsLocations: u,
            analyticsContext: x,
            onClose: j,
        } = e;
        (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    l.e("46438"),
                    l.e("48357"),
                    l.e("94925"),
                    l.e("56377"),
                    l.e("70339"),
                    l.e("90665"),
                    l.e("43535"),
                    l.e("9233"),
                    l.e("86814"),
                    l.e("37021"),
                    l.e("18024"),
                    l.e("69747"),
                    l.e("3131"),
                    l.e("47177"),
                    l.e("27272"),
                    l.e("36149"),
                    l.e("51778"),
                    l.e("21930"),
                    l.e("24914"),
                    l.e("97563"),
                    l.e("20382"),
                    l.e("93766"),
                    l.e("52511"),
                    l.e("72963"),
                    l.e("73165"),
                    l.e("66017"),
                    l.e("63333"),
                    l.e("36768"),
                    l.e("9935"),
                    l.e("23157"),
                ]).then(l.bind(l, 546804));
                return (l) =>
                    (0, t.jsx)(e, {
                        ...l,
                        skuId: i,
                        applicationId: r,
                        isStorefront: o,
                        analyticsLocations: u,
                        analyticsContext: x,
                        giftRecipient: c,
                        giftingOrigin: d,
                        customNavigateToSocialLayerStorefront: a,
                    });
            },
            {
                modalKey: s,
                allowsNavigation: o,
                onCloseCallback: () => {
                    j?.();
                },
            },
        );
    };
function r() {
    (0, n.hasModalOpen)(s) && (0, n.closeModal)(s);
}
