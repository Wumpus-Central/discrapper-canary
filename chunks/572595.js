n.d(t, { M: () => s, t: () => o });
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(4227),
    i = n(466459);
let u = "collectibles shop product details modal",
    o = (e) => {
        let {
            product: t,
            category: o,
            shouldCheckoutWithOrbs: s,
            analyticsSource: c,
            analyticsLocations: d,
            returnRef: p,
            tab: C,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, i.o)(a.A, t);
            if (!e) return;
        }
        (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("8555"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("40396"),
                    n.e("13088"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("37372"),
                    n.e("99970"),
                    n.e("95095"),
                    n.e("41595"),
                    n.e("93612"),
                    n.e("16289"),
                ]).then(n.bind(n, 929400));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        product: t,
                        category: o,
                        shouldCheckoutWithOrbs: s,
                        analyticsSource: c,
                        analyticsLocations: d,
                        returnRef: p,
                        tab: C,
                    });
            },
            { modalKey: u },
        );
    },
    s = () => {
        (0, l.OoC)(u);
    };
