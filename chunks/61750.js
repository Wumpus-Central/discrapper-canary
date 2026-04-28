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
                let { default: e } = await Promise.all([n.e("30356"), n.e("6827")]).then(n.bind(n, 328064));
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
            let { default: e } = await Promise.all([n.e("30356"), n.e("80845")]).then(n.bind(n, 393870));
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
