"use strict";
n.d(t, { R: () => a, j: () => o });
var i = n(627968),
    r = n(192308);
let s = "social-layer-storefront-product-details-modal",
    a = (e) => {
        let {
            customNavigateToSocialLayerStorefront: t,
            skuId: a,
            applicationId: o,
            isStorefront: l,
            giftRecipient: u,
            giftingOrigin: c,
            analyticsLocations: d,
            analyticsContext: _,
            onClose: h,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("46438"),
                    n.e("77569"),
                    n.e("55532"),
                    n.e("34454"),
                    n.e("79154"),
                    n.e("97782"),
                    n.e("45588"),
                    n.e("20056"),
                    n.e("12672"),
                    n.e("43535"),
                    n.e("9233"),
                    n.e("52511"),
                    n.e("72963"),
                    n.e("93766"),
                    n.e("28095"),
                    n.e("37021"),
                    n.e("20287"),
                    n.e("18997"),
                    n.e("18024"),
                    n.e("69747"),
                    n.e("3131"),
                    n.e("47177"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("21930"),
                    n.e("24914"),
                    n.e("42714"),
                    n.e("20382"),
                    n.e("63333"),
                    n.e("73165"),
                    n.e("34268"),
                    n.e("9935"),
                    n.e("53282"),
                ]).then(n.bind(n, 213113));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        skuId: a,
                        applicationId: o,
                        isStorefront: l,
                        analyticsLocations: d,
                        analyticsContext: _,
                        giftRecipient: u,
                        giftingOrigin: c,
                        customNavigateToSocialLayerStorefront: t,
                    });
            },
            {
                modalKey: s,
                allowsNavigation: l,
                onCloseCallback: () => {
                    h?.();
                },
            },
        );
    };
function o() {
    (0, r.hasModalOpen)(s) && (0, r.closeModal)(s);
}
