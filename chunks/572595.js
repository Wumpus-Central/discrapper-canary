"use strict";
a.d(t, { M: () => d, t: () => o });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(4227),
    s = a(466459);
let i = "collectibles shop product details modal",
    o = (e) => {
        let {
            product: t,
            category: o,
            shouldCheckoutWithOrbs: d,
            analyticsSource: c,
            analyticsLocations: u,
            returnRef: x,
            tab: h,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, s.o)(n.A, t);
            if (!e) return;
        }
        (0, r.mMO)(
            async () => {
                let { default: e } = await Promise.all([a.e("68859"), a.e("93612"), a.e("91290")]).then(
                    a.bind(a, 929400),
                );
                return (a) =>
                    (0, l.jsx)(e, {
                        ...a,
                        product: t,
                        category: o,
                        shouldCheckoutWithOrbs: d,
                        analyticsSource: c,
                        analyticsLocations: u,
                        returnRef: x,
                        tab: h,
                    });
            },
            { modalKey: i },
        );
    },
    d = () => {
        (0, r.OoC)(i);
    };
