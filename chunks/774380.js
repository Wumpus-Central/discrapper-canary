n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(98278),
    l = n(823188),
    o = n(594174),
    c = n(74538),
    d = n(474936),
    u = n(388032),
    m = n(561012);
let g = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, r.jsx)(s.zxk, {
                className: m.tier0Button,
                color: s.zxk.Colors.BRAND_INVERTED,
                onClick: () => {
                    (0, a.z)(), null != t && t();
                },
                children: u.NW.string(u.t.hvVgAQ)
            });
        return (0, r.jsxs)('div', {
            className: m.tier0Container,
            children: [
                (0, r.jsx)(s.X6q, {
                    className: m.tier0Heading,
                    variant: 'heading-xxl/extrabold',
                    children: u.NW.string(u.t['qUl+Ky'])
                }),
                (0, r.jsx)(l.wp, {
                    className: m.tier0Card,
                    ctaButton: n,
                    featureSet: l.uZ.BOOSTING,
                    showWumpus: !0,
                    showYearlyPrice: !0
                })
            ]
        });
    },
    p = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, i.e7)([o.default], () => o.default.getCurrentUser());
        return c.ZP.isPremium(n, d.p9.TIER_2) ? null : (0, r.jsx)(g, { onOpenPremiumClick: t });
    };
