"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(758836);
let a = (e) => {
    let {
        product: t,
        analyticsLocations: a,
        overrideTitle: o,
        overrideDescription: l,
        shouldShowPromotionalExperience: _,
        onCloseCallback: d,
        itemConsumed: u,
        purchaseType: c = s.gs.FIAT,
        overrideGraphic: E,
        overrideGradientColor: h,
        rentalDuration: m,
        rentalExpiresAt: f,
    } = e;
    (0, r.openModalLazy)(
        async () => {
            if (t.skuId === s.Dp.FRACTIONAL_PREMIUM || t.skuId === s.Dp.ORB_PROFILE_BADGE) {
                let { default: e } = await Promise.all([
                    n.e("63232"),
                    n.e("97189"),
                    n.e("4430"),
                    n.e("64827"),
                    n.e("29963"),
                    n.e("84569"),
                    n.e("27084"),
                    n.e("48405"),
                    n.e("18573"),
                    n.e("54961"),
                    n.e("93159"),
                    n.e("62680"),
                    n.e("86949"),
                    n.e("62615"),
                    n.e("21976"),
                    n.e("23276"),
                    n.e("27323"),
                    n.e("36877"),
                    n.e("21957"),
                    n.e("54103"),
                    n.e("86546"),
                    n.e("32737"),
                    n.e("3590"),
                    n.e("98660"),
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
                        itemConsumed: u,
                        purchaseType: s.gs.ORB,
                        ...n,
                    });
            }
            let { default: e } = await Promise.all([
                n.e("63232"),
                n.e("4430"),
                n.e("64827"),
                n.e("84569"),
                n.e("27084"),
                n.e("18573"),
                n.e("54961"),
                n.e("93159"),
                n.e("62931"),
                n.e("62680"),
                n.e("86949"),
                n.e("23276"),
                n.e("95444"),
                n.e("28152"),
                n.e("49520"),
                n.e("65826"),
                n.e("27323"),
                n.e("36877"),
                n.e("21957"),
                n.e("54103"),
                n.e("86546"),
                n.e("32737"),
                n.e("3590"),
                n.e("98660"),
                n.e("14122"),
                n.e("2750"),
                n.e("25265"),
                n.e("92643"),
            ]).then(n.bind(n, 393870));
            return (n) =>
                (0, i.jsx)(e, {
                    product: t,
                    analyticsLocations: a,
                    overrideTitle: o,
                    overrideDescription: l,
                    shouldShowPromotionalExperience: _,
                    purchaseType: c,
                    overrideGraphic: E,
                    overrideGradientColor: h,
                    rentalDuration: m,
                    rentalExpiresAt: f,
                    ...n,
                });
        },
        { onCloseCallback: d },
    );
};
