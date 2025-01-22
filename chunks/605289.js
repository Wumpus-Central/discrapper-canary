var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(706454),
    c = n(78839),
    d = n(985754),
    u = n(222727),
    m = n(318747),
    g = n(409100),
    h = n(474936),
    p = n(981631),
    x = n(802273);
t.Z = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        r = t.countryCode,
        f = (0, a.e7)([o.default], () => o.default.locale);
    (0, u.U)(p.jXE.SETTINGS_PREMIUM_BANNER, r);
    let E = (0, a.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: _, localizedPricingBannerBody: C } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: E,
            userLocale: f
        }),
        T = r.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: s()(x.bannerContainer, {
            [x.smallGap]: n,
            [x.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: s()(x[T], x.bannerImageContainer) }),
            (0, i.jsx)(l.Heading, {
                className: x.bannerHeading,
                variant: 'heading-xl/semibold',
                children: _
            }),
            (0, i.jsx)('div', {
                className: x.textContainer,
                children: (0, i.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: x.bannerBody,
                    children: C
                })
            }),
            (0, i.jsxs)('div', {
                className: x.ctaButtonContainer,
                children: [
                    (0, i.jsx)(g.Z, {
                        forceInverted: !0,
                        className: x.ctaButton,
                        subscriptionTier: h.Si.TIER_2
                    }),
                    (0, i.jsx)(m.Z, {
                        forceWhite: !0,
                        subscriptionTier: h.Si.TIER_2,
                        className: x.ctaButton
                    })
                ]
            })
        ]
    });
};
