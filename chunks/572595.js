n.d(t, { M: () => c, t: () => o });
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(4227),
    r = n(466459);
let s = "collectibles shop product details modal",
    o = (e) => {
        let {
            product: t,
            category: o,
            shouldCheckoutWithOrbs: c,
            analyticsSource: d,
            analyticsLocations: u,
            returnRef: m,
            tab: x,
            giftRecipient: h,
            giftingOrigin: f,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, r.o)(i.A, t);
            if (!e) return;
        }
        (0, l.mMO)(
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
                    n.e("16783"),
                    n.e("62452"),
                    n.e("93612"),
                    n.e("76760"),
                ]).then(n.bind(n, 929400));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        product: t,
                        category: o,
                        shouldCheckoutWithOrbs: c,
                        analyticsSource: d,
                        analyticsLocations: u,
                        returnRef: m,
                        tab: x,
                        giftRecipient: h,
                        giftingOrigin: f,
                    });
            },
            { modalKey: s },
        );
    },
    c = () => {
        (0, l.OoC)(s);
    };
