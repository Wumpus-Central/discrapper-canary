"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(758836);
let s = (e) => {
    let {
        product: t,
        analyticsLocations: s,
        overrideTitle: o,
        overrideDescription: l,
        shouldShowPromotionalExperience: u,
        onCloseCallback: c,
        itemConsumed: d,
        purchaseType: _ = a.gs.FIAT,
        overrideGraphic: f,
        rentalDuration: p,
        rentalExpiresAt: h,
    } = e;
    (0, i.mMO)(
        async () => {
            if (t.skuId === a.Dp.FRACTIONAL_PREMIUM || t.skuId === a.Dp.ORB_PROFILE_BADGE) {
                let { default: e } = await n.e("95481").then(n.bind(n, 328064));
                return (n) =>
                    (0, r.jsx)(e, {
                        product: t,
                        analyticsLocations: s,
                        overrideTitle: o,
                        overrideDescription: l,
                        itemConsumed: d,
                        purchaseType: a.gs.ORB,
                        ...n,
                    });
            }
            let { default: e } = await n.e("92643").then(n.bind(n, 393870));
            return (n) =>
                (0, r.jsx)(e, {
                    product: t,
                    analyticsLocations: s,
                    overrideTitle: o,
                    overrideDescription: l,
                    shouldShowPromotionalExperience: u,
                    purchaseType: _,
                    overrideGraphic: f,
                    rentalDuration: p,
                    rentalExpiresAt: h,
                    ...n,
                });
        },
        { onCloseCallback: c },
    );
};
