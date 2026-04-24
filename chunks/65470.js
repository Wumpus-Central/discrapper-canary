n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(821609),
    r = n(597770),
    s = n(194509),
    l = n(783420);
let c = (e) => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, a.jsx)(l.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
        children: (e) => {
            let { onClick: n } = e,
                l = d ?? (0, s.U)(t);
            return (0, a.jsx)(i.$, { onClick: n, icon: r.o, ...u, text: l });
        },
    });
};
