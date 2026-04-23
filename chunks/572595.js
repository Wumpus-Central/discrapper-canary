n.d(t, { M: () => c, t: () => d });
var i = n(627968);
n(64700);
var l = n(192308),
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
            giftingOrigin: g,
            cardId: p,
            sessionId: f,
            tilePosition: E,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, r.o)(a.A, t);
            if (!e) return;
        }
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("25412"),
                    n.e("374"),
                    n.e("8555"),
                    n.e("40396"),
                    n.e("28936"),
                    n.e("64243"),
                    n.e("97386"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("16419"),
                    n.e("82561"),
                    n.e("45253"),
                    n.e("47742"),
                    n.e("37372"),
                    n.e("95752"),
                    n.e("9648"),
                    n.e("26730"),
                    n.e("89"),
                    n.e("440"),
                ]).then(n.bind(n, 929400));
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
                            giftRecipient: m,
                            giftingOrigin: g,
                        }),
                    });
            },
            { modalKey: o },
        );
    },
    c = () => {
        (0, l.closeModal)(o);
    };
