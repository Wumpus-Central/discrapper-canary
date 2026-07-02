n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var a = n(821609),
    s = n(597770),
    r = n(194509),
    l = n(783420);
let c = function (e) {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, i.jsx)(l.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: c,
        onClick: o,
        children: (e) => {
            let { onClick: n } = e,
                l = d ?? (0, r.U)(t);
            return (0, i.jsx)(a.$, { onClick: n, icon: s.o, ...u, text: l });
        },
    });
};
