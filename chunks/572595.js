n.d(t, { M: () => d, t: () => o });
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(440938),
    r = n(4227),
    s = n(466459);
let c = "collectibles shop product details modal",
    o = (e) => {
        let {
            product: t,
            category: o,
            shouldCheckoutWithOrbs: d,
            analyticsSource: u,
            analyticsLocations: m,
            returnRef: x,
            tab: h,
            giftRecipient: g,
            giftingOrigin: f,
            cardId: _,
            sessionId: p,
            tilePosition: v,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, s.o)(r.A, t);
            if (!e) return;
        }
        (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("57174"),
                    n.e("91757"),
                    n.e("49924"),
                    n.e("8555"),
                    n.e("91652"),
                    n.e("40396"),
                    n.e("90365"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("18976"),
                    n.e("35139"),
                    n.e("37372"),
                    n.e("59135"),
                    n.e("53662"),
                    n.e("21957"),
                    n.e("85018"),
                ]).then(n.bind(n, 929400));
                return (n) =>
                    (0, a.jsx)(i.R9, {
                        newValue: { cardId: _, sessionId: p, tilePosition: v },
                        children: (0, a.jsx)(e, {
                            ...n,
                            product: t,
                            category: o,
                            shouldCheckoutWithOrbs: d,
                            analyticsSource: u,
                            analyticsLocations: m,
                            returnRef: x,
                            tab: h,
                            giftRecipient: g,
                            giftingOrigin: f,
                        }),
                    });
            },
            { modalKey: c },
        );
    },
    d = () => {
        (0, l.OoC)(c);
    };
