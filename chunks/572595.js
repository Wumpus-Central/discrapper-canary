n.d(t, { M: () => c, t: () => d });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(440938),
    s = n(4227),
    r = n(466459);
let o = "collectibles shop product details modal",
    d = (e) => {
        let {
            product: t,
            category: d,
            shouldCheckoutWithOrbs: c,
            analyticsSource: u,
            analyticsLocations: h,
            returnRef: _,
            tab: m,
            giftRecipient: g,
            giftingOrigin: p,
            cardId: A,
            sessionId: x,
            tilePosition: f,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, r.o)(s.A, t);
            if (!e) return;
        }
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("8555"),
                    n.e("40142"),
                    n.e("60161"),
                    n.e("98765"),
                    n.e("65437"),
                    n.e("34983"),
                    n.e("92414"),
                    n.e("95208"),
                    n.e("72401"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("76390"),
                    n.e("93312"),
                    n.e("95752"),
                    n.e("67339"),
                    n.e("31538"),
                    n.e("73930"),
                    n.e("98954"),
                    n.e("227"),
                    n.e("20382"),
                    n.e("34268"),
                    n.e("96963"),
                    n.e("72474"),
                    n.e("26663"),
                    n.e("29491"),
                    n.e("62597"),
                    n.e("54350"),
                    n.e("17216"),
                ]).then(n.bind(n, 81146));
                return (n) =>
                    (0, i.jsx)(a.R9, {
                        newValue: { cardId: A, sessionId: x, tilePosition: f },
                        children: (0, i.jsx)(e, {
                            ...n,
                            product: t,
                            category: d,
                            shouldCheckoutWithOrbs: c,
                            analyticsSource: u,
                            analyticsLocations: h,
                            returnRef: _,
                            tab: m,
                            giftRecipient: g,
                            giftingOrigin: p,
                        }),
                    });
            },
            { modalKey: o },
        );
    },
    c = () => {
        (0, l.closeModal)(o);
    };
