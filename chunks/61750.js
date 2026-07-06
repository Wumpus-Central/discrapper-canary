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
        rentalExpiresAt: E,
    } = e;
    (0, r.openModalLazy)(
        async () => {
            if ((0, s.EZ)(t.skuId) || t.skuId === s.Dp.ORB_PROFILE_BADGE) {
                let { default: e } = await Promise.all([
                    n.e("62461"),
                    n.e("97189"),
                    n.e("58846"),
                    n.e("41060"),
                    n.e("4430"),
                    n.e("71763"),
                    n.e("64827"),
                    n.e("7167"),
                    n.e("84569"),
                    n.e("92789"),
                    n.e("18573"),
                    n.e("93159"),
                    n.e("36877"),
                    n.e("21957"),
                    n.e("32191"),
                    n.e("71234"),
                    n.e("1462"),
                    n.e("27323"),
                    n.e("8563"),
                    n.e("24265"),
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
                n.e("62461"),
                n.e("58846"),
                n.e("41060"),
                n.e("4430"),
                n.e("71763"),
                n.e("64827"),
                n.e("84569"),
                n.e("18573"),
                n.e("93159"),
                n.e("62931"),
                n.e("36877"),
                n.e("21957"),
                n.e("32191"),
                n.e("28152"),
                n.e("1462"),
                n.e("27323"),
                n.e("65826"),
                n.e("49520"),
                n.e("8563"),
                n.e("24265"),
                n.e("32737"),
                n.e("54103"),
                n.e("86546"),
                n.e("43256"),
                n.e("14122"),
                n.e("25265"),
                n.e("95632"),
            ]).then(n.bind(n, 879059));
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
                    rentalExpiresAt: E,
                    ...n,
                });
        },
        { onCloseCallback: c },
    );
};
