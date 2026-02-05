n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(732955),
    r = n(397927),
    a = n(194509),
    l = n(783420);
let o = (e) => {
    let {
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: c,
        buttonTextOverride: d,
        ...u
    } = e;
    return (0, i.jsx)(l.A, {
        isGift: !0,
        subscriptionTier: t,
        premiumModalAnalyticsLocation: n,
        giftMessage: o,
        onClick: c,
        children: (e) => {
            let { onClick: n } = e,
                l = d ?? (0, a.U)(t);
            return (0, i.jsx)(s.$nd, { onClick: n, icon: r.okO, ...u, text: l });
        },
    });
};
