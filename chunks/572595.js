a.d(t, { M: () => i, t: () => d });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(4227),
    s = a(466459);
let o = "collectibles shop product details modal",
    d = (e) => {
        let {
            product: t,
            category: d,
            shouldCheckoutWithOrbs: i,
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
                let { default: e } = await Promise.all([
                    a.e("14138"),
                    a.e("8555"),
                    a.e("49924"),
                    a.e("28936"),
                    a.e("68859"),
                    a.e("40396"),
                    a.e("13088"),
                    a.e("48330"),
                    a.e("92414"),
                    a.e("94857"),
                    a.e("48840"),
                    a.e("49559"),
                    a.e("42006"),
                    a.e("37372"),
                    a.e("28644"),
                    a.e("62452"),
                    a.e("93612"),
                    a.e("34219"),
                ]).then(a.bind(a, 929400));
                return (a) =>
                    (0, l.jsx)(e, {
                        ...a,
                        product: t,
                        category: d,
                        shouldCheckoutWithOrbs: i,
                        analyticsSource: c,
                        analyticsLocations: u,
                        returnRef: x,
                        tab: h,
                    });
            },
            { modalKey: o },
        );
    },
    i = () => {
        (0, r.OoC)(o);
    };
