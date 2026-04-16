n.d(t, { M: () => c, t: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(440938),
    a = n(4227),
    r = n(466459);
let o = "collectibles shop product details modal",
    d = (e) => {
        let {
            product: t,
            category: d,
            shouldCheckoutWithOrbs: c,
            analyticsSource: u,
            analyticsLocations: h,
            returnRef: A,
            tab: _,
            giftRecipient: m,
            giftingOrigin: p,
            cardId: g,
            sessionId: f,
            tilePosition: E,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, r.o)(a.A, t);
            if (!e) return;
        }
        (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("57174"),
                    n.e("91652"),
                    n.e("37457"),
                    n.e("8555"),
                    n.e("57875"),
                    n.e("90365"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("18976"),
                    n.e("37372"),
                    n.e("98141"),
                    n.e("41595"),
                    n.e("21957"),
                    n.e("56024"),
                ]).then(n.bind(n, 929400));
                return (n) =>
                    (0, i.jsx)(s.R9, {
                        newValue: { cardId: g, sessionId: f, tilePosition: E },
                        children: (0, i.jsx)(e, {
                            ...n,
                            product: t,
                            category: d,
                            shouldCheckoutWithOrbs: c,
                            analyticsSource: u,
                            analyticsLocations: h,
                            returnRef: A,
                            tab: _,
                            giftRecipient: m,
                            giftingOrigin: p,
                        }),
                    });
            },
            { modalKey: o },
        );
    },
    c = () => {
        (0, l.OoC)(o);
    };
