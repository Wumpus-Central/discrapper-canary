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
    g = n(409100),
    h = n(474936),
    x = n(981631),
    _ = n(237719);
let p = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        s = t.countryCode,
        p = (0, l.e7)([o.default], () => o.default.locale);
    (0, u.U)(x.jXE.SETTINGS_PREMIUM_BANNER, s);
    let E = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: C, localizedPricingBannerBody: f } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: E,
            userLocale: p
        }),
        T = s.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: r()(_.bannerContainer, {
            [_.smallGap]: n,
            [_.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: r()(_[T], _.bannerImageContainer) }),
            (0, i.jsx)(a.X6q, {
                className: _.bannerHeading,
                variant: 'heading-xl/semibold',
                children: C
            }),
            (0, i.jsx)('div', {
                className: _.textContainer,
                children: (0, i.jsx)(a.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: _.bannerBody,
                    children: f
                })
            }),
            (0, i.jsxs)('div', {
                className: _.ctaButtonContainer,
                children: [
                    (0, i.jsx)(g.Z, {
                        forceInverted: !0,
                        className: _.ctaButton,
                        subscriptionTier: h.Si.TIER_2
                    }),
                    (0, i.jsx)(m.Z, {
                        forceWhite: !0,
                        subscriptionTier: h.Si.TIER_2,
                        className: _.ctaButton
                    })
                ]
            })
        ]
    });
};
