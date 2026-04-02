"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(397927),
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
        overrideGradientColor: p,
        rentalDuration: h,
        rentalExpiresAt: m,
    } = e;
    (0, i.mMO)(
        async () => {
            if (t.skuId === s.Dp.FRACTIONAL_PREMIUM || t.skuId === s.Dp.ORB_PROFILE_BADGE) {
                let { default: e } = await Promise.all([n.e("21957"), n.e("95481")]).then(n.bind(n, 328064));
                return (n) =>
                    (0, r.jsx)(e, {
                        product: t,
                        analyticsLocations: a,
                        overrideTitle: o,
                        overrideDescription: l,
                        itemConsumed: d,
                        purchaseType: s.gs.ORB,
                        ...n,
                    });
            }
            let { default: e } = await Promise.all([n.e("21957"), n.e("92643")]).then(n.bind(n, 393870));
            return (n) =>
                (0, r.jsx)(e, {
                    product: t,
                    analyticsLocations: a,
                    overrideTitle: o,
                    overrideDescription: l,
                    shouldShowPromotionalExperience: u,
                    purchaseType: _,
                    overrideGraphic: f,
                    overrideGradientColor: p,
                    rentalDuration: h,
                    rentalExpiresAt: m,
                    ...n,
                });
        },
        { onCloseCallback: c },
    );
};
