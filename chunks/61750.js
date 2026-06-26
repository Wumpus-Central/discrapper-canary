"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(758836);
let a = function (e) {
    let {
        product: t,
        analyticsLocations: a,
        overrideTitle: o,
        overrideDescription: l,
        shouldShowPromotionalExperience: u,
        onCloseCallback: c,
        itemConsumed: d,
        purchaseType: _ = s.gs.FIAT,
        overrideGraphic: h,
        overrideGradientColor: f,
        rentalExpiresAt: p,
    } = e;
    (0, r.openModalLazy)(
        async () => {
            if ((0, s.EZ)(t.skuId) || t.skuId === s.Dp.ORB_PROFILE_BADGE) {
                let { default: e } = await Promise.all([
                    n.e("14129"),
                    n.e("36877"),
                    n.e("21957"),
                    n.e("27323"),
                    n.e("32737"),
                    n.e("54103"),
                    n.e("86546"),
                    n.e("43256"),
                    n.e("14122"),
                    n.e("25265"),
                    n.e("95481"),
                ]).then(n.bind(n, 328064));
                return (n) =>
                    (0, i.jsx)(e, {
                        product: t,
                        analyticsLocations: a,
                        overrideTitle: o,
                        overrideDescription: l,
                        itemConsumed: d,
                        purchaseType: s.gs.ORB,
                        ...n,
                    });
            }
            let { default: e } = await Promise.all([
                n.e("14129"),
                n.e("36877"),
                n.e("21957"),
                n.e("27323"),
                n.e("65826"),
                n.e("49520"),
                n.e("32737"),
                n.e("54103"),
                n.e("86546"),
                n.e("43256"),
                n.e("14122"),
                n.e("2750"),
                n.e("25265"),
                n.e("40481"),
            ]).then(n.bind(n, 521720));
            return (n) =>
                (0, i.jsx)(e, {
                    product: t,
                    analyticsLocations: a,
                    overrideTitle: o,
                    overrideDescription: l,
                    shouldShowPromotionalExperience: u,
                    purchaseType: _,
                    overrideGraphic: h,
                    overrideGradientColor: f,
                    rentalExpiresAt: p,
                    ...n,
                });
        },
        { onCloseCallback: c },
    );
};
