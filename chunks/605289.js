n.d(t, { Z: () => h });
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
    m = n(318747),
    g = n(409100),
    _ = n(474936),
    p = n(981631),
    f = n(24275);
let h = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        r = t.countryCode,
        h = (0, s.e7)([o.default], () => o.default.locale);
    (0, u.U)(p.jXE.SETTINGS_PREMIUM_BANNER, r);
    let x = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: E, localizedPricingBannerBody: C } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: x,
            userLocale: h
        }),
        b = r.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: a()(f.bannerContainer, {
            [f.smallGap]: n,
            [f.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: a()(f[b], f.bannerImageContainer) }),
            (0, i.jsx)(l.X6q, {
                className: f.bannerHeading,
                variant: 'heading-xl/semibold',
                children: E
            }),
            (0, i.jsx)('div', {
                className: f.textContainer,
                children: (0, i.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: f.bannerBody,
                    children: C
                })
            }),
            (0, i.jsxs)('div', {
                className: f.ctaButtonContainer,
                children: [
                    (0, i.jsx)(g.Z, {
                        forceInverted: !0,
                        className: f.ctaButton,
                        subscriptionTier: _.Si.TIER_2
                    }),
                    (0, i.jsx)(m.Z, {
                        forceWhite: !0,
                        subscriptionTier: _.Si.TIER_2,
                        className: f.ctaButton
                    })
                ]
            })
        ]
    });
};
