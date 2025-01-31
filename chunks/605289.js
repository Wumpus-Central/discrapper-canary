n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(706454),
    c = n(78839),
    d = n(985754),
    u = n(222727),
    m = n(318747),
    h = n(409100),
    g = n(474936),
    _ = n(981631),
    x = n(802273);
let p = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        s = t.countryCode,
        p = (0, l.e7)([o.default], () => o.default.locale);
    (0, u.U)(_.jXE.SETTINGS_PREMIUM_BANNER, s);
    let E = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: C, localizedPricingBannerBody: f } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: E,
            userLocale: p
        }),
        T = s.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: r()(x.bannerContainer, {
            [x.smallGap]: n,
            [x.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: r()(x[T], x.bannerImageContainer) }),
            (0, i.jsx)(a.X6q, {
                className: x.bannerHeading,
                variant: 'heading-xl/semibold',
                children: C
            }),
            (0, i.jsx)('div', {
                className: x.textContainer,
                children: (0, i.jsx)(a.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: x.bannerBody,
                    children: f
                })
            }),
            (0, i.jsxs)('div', {
                className: x.ctaButtonContainer,
                children: [
                    (0, i.jsx)(h.Z, {
                        forceInverted: !0,
                        className: x.ctaButton,
                        subscriptionTier: g.Si.TIER_2
                    }),
                    (0, i.jsx)(m.Z, {
                        forceWhite: !0,
                        subscriptionTier: g.Si.TIER_2,
                        className: x.ctaButton
                    })
                ]
            })
        ]
    });
};
