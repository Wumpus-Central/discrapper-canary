i.d(t, { A: () => c });
var s = i(627968);
i(64700);
var a = i(821609),
    n = i(597770),
    r = i(194509),
    l = i(783420);
let c = (e) => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: i,
        giftMessage: c,
        onClick: d,
        buttonTextOverride: o,
        ...u
    } = e;
    return (0, s.jsx)(l.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: i,
        giftMessage: c,
        onClick: d,
        children: (e) => {
            let { onClick: i } = e,
                l = o ?? (0, r.U)(t);
            return (0, s.jsx)(a.$, { onClick: i, icon: n.o, ...u, text: l });
        },
    });
};
