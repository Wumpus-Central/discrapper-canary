var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(706454),
    c = n(78839),
    d = n(985754),
    u = n(222727),
    g = n(318747),
    m = n(409100),
    f = n(474936),
    p = n(981631),
    _ = n(802273);
t.Z = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        r = t.countryCode,
        h = (0, s.e7)([o.default], () => o.default.locale);
    (0, u.U)(p.jXE.SETTINGS_PREMIUM_BANNER, r);
    let x = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: E, localizedPricingBannerBody: b } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: x,
            userLocale: h
        }),
        C = r.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: a()(_.bannerContainer, {
            [_.smallGap]: n,
            [_.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: a()(_[C], _.bannerImageContainer) }),
            (0, i.jsx)(l.Heading, {
                className: _.bannerHeading,
                variant: 'heading-xl/semibold',
                children: E
            }),
            (0, i.jsx)('div', {
                className: _.textContainer,
                children: (0, i.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: _.bannerBody,
                    children: b
                })
            }),
            (0, i.jsxs)('div', {
                className: _.ctaButtonContainer,
                children: [
                    (0, i.jsx)(m.Z, {
                        forceInverted: !0,
                        className: _.ctaButton,
                        subscriptionTier: f.Si.TIER_2
                    }),
                    (0, i.jsx)(g.Z, {
                        forceWhite: !0,
                        subscriptionTier: f.Si.TIER_2,
                        className: _.ctaButton
                    })
                ]
            })
        ]
    });
};
