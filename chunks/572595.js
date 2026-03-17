"use strict";
n.d(t, { M: () => u, t: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(4227),
    a = n(466459);
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
            let { isPurchased: e } = (0, a.o)(s.A, t);
            if (!e) return;
        }
        (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("14138"),
                    n.e("8555"),
                    n.e("49924"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("40396"),
                    n.e("13088"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("42006"),
                    n.e("37372"),
                    n.e("28644"),
                    n.e("62452"),
                    n.e("93612"),
                    n.e("34219"),
                ]).then(n.bind(n, 929400));
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
