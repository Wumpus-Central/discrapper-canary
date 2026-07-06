s.d(t, { A: () => o });
var l = s(627968);
s(64700);
var n = s(821609),
    i = s(597770),
    r = s(194509),
    a = s(783420);
let o = function (e) {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: s,
        giftMessage: o,
        onClick: c,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, l.jsx)(a.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: s,
        giftMessage: o,
        onClick: c,
        children: (e) => {
            let { onClick: s } = e,
                a = d ?? (0, r.U)(t);
            return (0, l.jsx)(n.$, { onClick: s, icon: i.o, ...u, text: a });
        },
    });
};
