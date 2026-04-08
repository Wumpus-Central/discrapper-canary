n.d(t, { M: () => d, t: () => c });
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(440938),
    r = n(4227),
    s = n(466459);
let o = "collectibles shop product details modal",
    c = (e) => {
        let {
            product: t,
            category: c,
            shouldCheckoutWithOrbs: d,
            analyticsSource: u,
            analyticsLocations: m,
            returnRef: x,
            tab: g,
            giftRecipient: h,
            giftingOrigin: f,
            cardId: p,
            sessionId: _,
            tilePosition: v,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, s.o)(r.A, t);
            if (!e) return;
        }
        (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("57174"),
                    n.e("81028"),
                    n.e("8555"),
                    n.e("91652"),
                    n.e("40396"),
                    n.e("90365"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("34779"),
                    n.e("49559"),
                    n.e("18976"),
                    n.e("10277"),
                    n.e("37372"),
                    n.e("35169"),
                    n.e("41595"),
                    n.e("21957"),
                    n.e("78405"),
                ]).then(n.bind(n, 929400));
                return (n) =>
                    (0, a.jsx)(l.R9, {
                        newValue: { cardId: p, sessionId: _, tilePosition: v },
                        children: (0, a.jsx)(e, {
                            ...n,
                            product: t,
                            category: c,
                            shouldCheckoutWithOrbs: d,
                            analyticsSource: u,
                            analyticsLocations: m,
                            returnRef: x,
                            tab: g,
                            giftRecipient: h,
                            giftingOrigin: f,
                        }),
                    });
            },
            { modalKey: o },
        );
    },
    d = () => {
        (0, i.OoC)(o);
    };
