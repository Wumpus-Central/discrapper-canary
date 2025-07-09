n.d(t, { Z: () => x });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(755721),
    o = n(481060),
    c = n(706454),
    d = n(78839),
    u = n(985754),
    m = n(222727),
    p = n(736519),
    g = n(784238),
    h = n(474936),
    f = n(981631),
    b = n(614075);
let x = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        r = t.countryCode,
        x = (0, a.e7)([c.default], () => c.default.locale);
    (0, m.U)(f.jXE.SETTINGS_PREMIUM_BANNER, r);
    let _ = (0, a.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: j, localizedPricingBannerBody: E } = (0, u.vB)({
            localizedPricingPromo: t,
            subscription: _,
            userLocale: x
        }),
        O = r.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: s()(b.bannerContainer, {
            [b.smallGap]: n,
            [b.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: s()(b[O], b.bannerImageContainer) }),
            (0, i.jsx)(o.X6q, {
                className: b.bannerHeading,
                variant: 'heading-xl/semibold',
                children: j
            }),
            (0, i.jsx)('div', {
                className: b.textContainer,
                children: (0, i.jsx)(o.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: b.bannerBody,
                    children: E
                })
            }),
            (0, i.jsxs)('div', {
                className: b.ctaButtonContainer,
                children: [
                    (0, i.jsx)(g.Z, {
                        color: l.Tt.BRAND_INVERTED,
                        className: b.ctaButton,
                        subscriptionTier: h.Si.TIER_2
                    }),
                    (0, i.jsx)(p.Z, {
                        color: l.Tt.WHITE,
                        subscriptionTier: h.Si.TIER_2,
                        className: b.ctaButton
                    })
                ]
            })
        ]
    });
};
