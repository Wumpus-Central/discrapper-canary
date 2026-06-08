s.d(a, { R: () => n, j: () => o });
var t = s(627968),
    l = s(192308);
let i = "social-layer-storefront-product-details-modal",
    n = (e) => {
        let {
            customNavigateToSocialLayerStorefront: a,
            skuId: n,
            applicationId: o,
            isStorefront: c,
            giftRecipient: r,
            giftingOrigin: d,
            analyticsLocations: p,
            analyticsContext: u,
            onClose: m,
        } = e;
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    s.e("46438"),
                    s.e("1702"),
                    s.e("94925"),
                    s.e("52408"),
                    s.e("61872"),
                    s.e("43535"),
                    s.e("9233"),
                    s.e("72963"),
                    s.e("86814"),
                    s.e("37021"),
                    s.e("18997"),
                    s.e("18024"),
                    s.e("3131"),
                    s.e("47177"),
                    s.e("69747"),
                    s.e("27272"),
                    s.e("36149"),
                    s.e("51778"),
                    s.e("24914"),
                    s.e("97563"),
                    s.e("21930"),
                    s.e("20382"),
                    s.e("52511"),
                    s.e("63333"),
                    s.e("93766"),
                    s.e("73165"),
                    s.e("66017"),
                    s.e("90711"),
                    s.e("9935"),
                    s.e("39305"),
                ]).then(s.bind(s, 659696));
                return (s) =>
                    (0, t.jsx)(e, {
                        ...s,
                        skuId: n,
                        applicationId: o,
                        isStorefront: c,
                        analyticsLocations: p,
                        analyticsContext: u,
                        giftRecipient: r,
                        giftingOrigin: d,
                        customNavigateToSocialLayerStorefront: a,
                    });
            },
            {
                modalKey: i,
                allowsNavigation: c,
                onCloseCallback: () => {
                    m?.();
                },
            },
        );
    };
function o() {
    (0, l.hasModalOpen)(i) && (0, l.closeModal)(i);
}
