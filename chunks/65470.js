s.d(t, { A: () => c });
var a = s(627968);
s(64700);
var i = s(821609),
    n = s(597770),
    r = s(194509),
    l = s(783420);
let c = (e) => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: s,
        giftMessage: c,
        onClick: o,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, a.jsx)(l.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: s,
        giftMessage: c,
        onClick: o,
        children: (e) => {
            let { onClick: s } = e,
                l = d ?? (0, r.U)(t);
            return (0, a.jsx)(i.$, { onClick: s, icon: n.o, ...u, text: l });
        },
    });
};
