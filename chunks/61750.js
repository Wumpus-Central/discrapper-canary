"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(758836);
let a = (e) => {
    let {
        product: t,
        analyticsLocations: a,
        overrideTitle: o,
        overrideDescription: l,
        shouldShowPromotionalExperience: u,
        onCloseCallback: d,
        itemConsumed: c,
        purchaseType: _ = s.gs.FIAT,
        overrideGraphic: f,
        overrideGradientColor: E,
        rentalDuration: h,
        rentalExpiresAt: p,
    } = e;
    (0, i.openModalLazy)(
        async () => {
            if (t.skuId === s.Dp.FRACTIONAL_PREMIUM || t.skuId === s.Dp.ORB_PROFILE_BADGE) {
                let { default: e } = await Promise.all([n.e("5554"), n.e("6827")]).then(n.bind(n, 328064));
                return (n) =>
                    (0, r.jsx)(e, {
                        product: t,
                        analyticsLocations: a,
                        overrideTitle: o,
                        overrideDescription: l,
                        itemConsumed: c,
                        purchaseType: s.gs.ORB,
                        ...n,
                    });
            }
            let { default: e } = await Promise.all([n.e("5554"), n.e("80845")]).then(n.bind(n, 393870));
            return (n) =>
                (0, r.jsx)(e, {
                    product: t,
                    analyticsLocations: a,
                    overrideTitle: o,
                    overrideDescription: l,
                    shouldShowPromotionalExperience: u,
                    purchaseType: _,
                    overrideGraphic: f,
                    overrideGradientColor: E,
                    rentalDuration: h,
                    rentalExpiresAt: p,
                    ...n,
                });
        },
        { onCloseCallback: d },
    );
};
