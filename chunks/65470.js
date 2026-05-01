"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(821609),
    s = n(597770),
    a = n(194509),
    o = n(783420);
let l = (e) => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: l,
        onClick: u,
        buttonTextOverride: c,
        ...d
    } = e;
    return (0, i.jsx)(o.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: l,
        onClick: u,
        children: (e) => {
            let { onClick: n } = e,
                o = c ?? (0, a.U)(t);
            return (0, i.jsx)(r.$, { onClick: n, icon: s.o, ...d, text: o });
        },
    });
};
