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
        shouldShowPromotionalExperience: u,
        onCloseCallback: c,
        itemConsumed: d,
        purchaseType: _ = s.gs.FIAT,
        overrideGraphic: f,
        overrideGradientColor: h,
        rentalExpiresAt: p,
    } = e;
    (0, r.openModalLazy)(
        async () => {
            if ((0, s.EZ)(t.skuId) || t.skuId === s.Dp.ORB_PROFILE_BADGE) {
                let { default: e } = await Promise.all([
                    n.e("35769"),
                    n.e("55030"),
                    n.e("64827"),
                    n.e("92789"),
                    n.e("84569"),
                    n.e("18573"),
                    n.e("93159"),
                    n.e("62680"),
                    n.e("86949"),
                    n.e("71234"),
                    n.e("23276"),
                    n.e("75016"),
                    n.e("36877"),
                    n.e("27323"),
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
                        itemConsumed: d,
                        purchaseType: s.gs.ORB,
                        ...n,
                    });
            }
            let { default: e } = await Promise.all([
                n.e("35769"),
                n.e("64827"),
                n.e("84569"),
                n.e("18573"),
                n.e("93159"),
                n.e("62931"),
                n.e("62680"),
                n.e("86949"),
                n.e("23276"),
                n.e("75016"),
                n.e("95444"),
                n.e("36877"),
                n.e("28152"),
                n.e("27323"),
                n.e("65826"),
                n.e("49520"),
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
                    shouldShowPromotionalExperience: u,
                    purchaseType: _,
                    overrideGraphic: f,
                    overrideGradientColor: h,
                    rentalExpiresAt: p,
                    ...n,
                });
        },
        { onCloseCallback: c },
    );
};
