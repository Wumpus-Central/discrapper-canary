n.d(t, { M: () => c, t: () => d });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(440938),
    r = n(4227),
    a = n(466459);
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
            giftRecipient: g,
            giftingOrigin: m,
            cardId: p,
            sessionId: f,
            tilePosition: E,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, a.o)(r.A, t);
            if (!e) return;
        }
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("44575"),
                    n.e("8555"),
                    n.e("49328"),
                    n.e("34268"),
                    n.e("69295"),
                    n.e("98765"),
                    n.e("44236"),
                    n.e("97386"),
                    n.e("92414"),
                    n.e("65437"),
                    n.e("84812"),
                    n.e("92803"),
                    n.e("17637"),
                    n.e("43765"),
                    n.e("25979"),
                    n.e("33297"),
                    n.e("23297"),
                    n.e("95752"),
                    n.e("92754"),
                    n.e("51440"),
                    n.e("49319"),
                    n.e("35614"),
                    n.e("61763"),
                    n.e("92630"),
                    n.e("82504"),
                ]).then(n.bind(n, 81146));
                return (n) =>
                    (0, i.jsx)(s.R9, {
                        newValue: { cardId: p, sessionId: f, tilePosition: E },
                        children: (0, i.jsx)(e, {
                            ...n,
                            product: t,
                            category: d,
                            shouldCheckoutWithOrbs: c,
                            analyticsSource: u,
                            analyticsLocations: h,
                            returnRef: A,
                            tab: _,
                            giftRecipient: g,
                            giftingOrigin: m,
                        }),
                    });
            },
            { modalKey: o },
        );
    },
    c = () => {
        (0, l.closeModal)(o);
    };
