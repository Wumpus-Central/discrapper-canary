n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(706454),
    c = n(78839),
    d = n(985754),
    u = n(222727),
    m = n(318747),
    g = n(409100),
    p = n(474936),
    h = n(981631),
    f = n(614075);
let b = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        i = t.countryCode,
        b = (0, a.e7)([o.default], () => o.default.locale);
    (0, u.U)(h.jXE.SETTINGS_PREMIUM_BANNER, i);
    let N = (0, a.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: x, localizedPricingBannerBody: _ } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: N,
            userLocale: b
        }),
        E = i.toLowerCase() + 'Banner';
    return (0, r.jsxs)('div', {
        className: s()(f.bannerContainer, {
            [f.smallGap]: n,
            [f.bigGap]: !n
        }),
        children: [
            (0, r.jsx)('div', { className: s()(f[E], f.bannerImageContainer) }),
            (0, r.jsx)(l.X6q, {
                className: f.bannerHeading,
                variant: 'heading-xl/semibold',
                children: x
            }),
            (0, r.jsx)('div', {
                className: f.textContainer,
                children: (0, r.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: f.bannerBody,
                    children: _
                })
            }),
            (0, r.jsxs)('div', {
                className: f.ctaButtonContainer,
                children: [
                    (0, r.jsx)(g.Z, {
                        forceInverted: !0,
                        className: f.ctaButton,
                        subscriptionTier: p.Si.TIER_2
                    }),
                    (0, r.jsx)(m.Z, {
                        forceWhite: !0,
                        subscriptionTier: p.Si.TIER_2,
                        className: f.ctaButton
                    })
                ]
            })
        ]
    });
};
