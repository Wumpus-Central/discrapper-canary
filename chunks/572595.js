"use strict";
l.d(t, { M: () => d, t: () => o });
var r = l(627968);
l(64700);
var a = l(397927),
    n = l(4227),
    i = l(466459);
let s = "collectibles shop product details modal",
    o = (e) => {
        let {
            product: t,
            category: o,
            shouldCheckoutWithOrbs: d,
            analyticsSource: c,
            analyticsLocations: u,
            returnRef: h,
            tab: m,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, i.o)(n.A, t);
            if (!e) return;
        }
        (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    l.e("8555"),
                    l.e("28936"),
                    l.e("68859"),
                    l.e("40396"),
                    l.e("13088"),
                    l.e("48330"),
                    l.e("92414"),
                    l.e("94857"),
                    l.e("48840"),
                    l.e("49559"),
                    l.e("37372"),
                    l.e("99970"),
                    l.e("95095"),
                    l.e("41595"),
                    l.e("93612"),
                    l.e("16289"),
                ]).then(l.bind(l, 929400));
                return (l) =>
                    (0, r.jsx)(e, {
                        ...l,
                        product: t,
                        category: o,
                        shouldCheckoutWithOrbs: d,
                        analyticsSource: c,
                        analyticsLocations: u,
                        returnRef: h,
                        tab: m,
                    });
            },
            { modalKey: s },
        );
    },
    d = () => {
        (0, a.OoC)(s);
    };
