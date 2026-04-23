"use strict";
a.d(t, { M: () => c, t: () => d });
var r = a(627968);
a(64700);
var l = a(192308),
    n = a(440938),
    i = a(4227),
    s = a(466459);
let o = "collectibles shop product details modal",
    d = (e) => {
        let {
            product: t,
            category: d,
            shouldCheckoutWithOrbs: c,
            analyticsSource: u,
            analyticsLocations: h,
            returnRef: p,
            tab: _,
            giftRecipient: m,
            giftingOrigin: b,
            cardId: g,
            sessionId: f,
            tilePosition: x,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, s.o)(i.A, t);
            if (!e) return;
        }
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("25412"),
                    a.e("374"),
                    a.e("8555"),
                    a.e("40396"),
                    a.e("28936"),
                    a.e("64243"),
                    a.e("97386"),
                    a.e("47742"),
                    a.e("48330"),
                    a.e("92414"),
                    a.e("94857"),
                    a.e("16419"),
                    a.e("82561"),
                    a.e("37201"),
                    a.e("37372"),
                    a.e("95752"),
                    a.e("55360"),
                    a.e("89"),
                    a.e("26730"),
                    a.e("3347"),
                ]).then(a.bind(a, 929400));
                return (a) =>
                    (0, r.jsx)(n.R9, {
                        newValue: { cardId: g, sessionId: f, tilePosition: x },
                        children: (0, r.jsx)(e, {
                            ...a,
                            product: t,
                            category: d,
                            shouldCheckoutWithOrbs: c,
                            analyticsSource: u,
                            analyticsLocations: h,
                            returnRef: p,
                            tab: _,
                            giftRecipient: m,
                            giftingOrigin: b,
                        }),
                    });
            },
            { modalKey: o },
        );
    },
    c = () => {
        (0, l.closeModal)(o);
    };
