"use strict";
n.d(t, { M: () => u, t: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(4227),
    s = n(466459);
let o = "collectibles shop product details modal",
    l = (e) => {
        let {
            product: t,
            category: l,
            shouldCheckoutWithOrbs: u,
            analyticsSource: c,
            analyticsLocations: d,
            returnRef: _,
            tab: f,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, s.o)(a.A, t);
            if (!e) return;
        }
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("77313").then(n.bind(n, 929400));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        product: t,
                        category: l,
                        shouldCheckoutWithOrbs: u,
                        analyticsSource: c,
                        analyticsLocations: d,
                        returnRef: _,
                        tab: f,
                    });
            },
            { modalKey: o },
        );
    },
    u = () => {
        (0, i.OoC)(o);
    };
