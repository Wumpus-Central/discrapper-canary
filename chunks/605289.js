n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(706454),
    c = n(78839),
    d = n(985754),
    u = n(222727),
    m = n(318747),
    p = n(409100),
    g = n(474936),
    h = n(981631),
    f = n(614075);
let b = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        r = t.countryCode,
        b = (0, l.e7)([o.default], () => o.default.locale);
    (0, u.U)(h.jXE.SETTINGS_PREMIUM_BANNER, r);
    let _ = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: x, localizedPricingBannerBody: E } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: _,
            userLocale: b
        }),
        j = r.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: s()(f.bannerContainer, {
            [f.smallGap]: n,
            [f.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: s()(f[j], f.bannerImageContainer) }),
            (0, i.jsx)(a.X6q, {
                className: f.bannerHeading,
                variant: 'heading-xl/semibold',
                children: x
            }),
            (0, i.jsx)('div', {
                className: f.textContainer,
                children: (0, i.jsx)(a.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: f.bannerBody,
                    children: E
                })
            }),
            (0, i.jsxs)('div', {
                className: f.ctaButtonContainer,
                children: [
                    (0, i.jsx)(p.Z, {
                        forceInverted: !0,
                        className: f.ctaButton,
                        subscriptionTier: g.Si.TIER_2
                    }),
                    (0, i.jsx)(m.Z, {
                        forceWhite: !0,
                        subscriptionTier: g.Si.TIER_2,
                        className: f.ctaButton
                    })
                ]
            })
        ]
    });
};
