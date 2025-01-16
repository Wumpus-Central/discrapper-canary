var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(98278),
    a = n(823188),
    o = n(594174),
    c = n(74538),
    d = n(474936),
    u = n(388032),
    m = n(952218);
let h = (e) => {
    let { onOpenPremiumClick: t } = e,
        n = (0, i.jsx)(l.Button, {
            className: m.tier0Button,
            color: l.Button.Colors.BRAND_INVERTED,
            onClick: () => {
                (0, s.z)(), null != t && t();
            },
            children: u.intl.string(u.t.hvVgAQ)
        });
    return (0, i.jsxs)('div', {
        className: m.tier0Container,
        children: [
            (0, i.jsx)(l.Heading, {
                className: m.tier0Heading,
                variant: 'heading-xxl/extrabold',
                children: u.intl.string(u.t['qUl+Ky'])
            }),
            (0, i.jsx)(a.wp, {
                className: m.tier0Card,
                ctaButton: n,
                featureSet: a.uZ.BOOSTING,
                showWumpus: !0,
                showYearlyPrice: !0
            })
        ]
    });
};
t.Z = (e) => {
    let { onOpenPremiumClick: t } = e,
        n = (0, r.e7)([o.default], () => o.default.getCurrentUser());
    return c.ZP.isPremium(n, d.p9.TIER_2) ? null : (0, i.jsx)(h, { onOpenPremiumClick: t });
};
