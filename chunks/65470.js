n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(821609),
    r = n(597770),
    s = n(194509),
    a = n(783420);
let c = (e) => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, i.jsx)(a.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
        children: (e) => {
            let { onClick: n } = e,
                a = d ?? (0, s.U)(t);
            return (0, i.jsx)(l.$, { onClick: n, icon: r.o, ...u, text: a });
        },
    });
};
