n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    s = n(98278),
    a = n(823188),
    o = n(594174),
    c = n(74538),
    u = n(474936),
    d = n(388032),
    m = n(561012);
let g = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, r.jsx)(l.zxk, {
                className: m.tier0Button,
                color: l.zxk.Colors.BRAND_INVERTED,
                onClick: () => {
                    (0, s.z)(), null != t && t();
                },
                children: d.intl.string(d.t.hvVgAQ)
            });
        return (0, r.jsxs)('div', {
            className: m.tier0Container,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: m.tier0Heading,
                    variant: 'heading-xxl/extrabold',
                    children: d.intl.string(d.t['qUl+Ky'])
                }),
                (0, r.jsx)(a.wp, {
                    className: m.tier0Card,
                    ctaButton: n,
                    featureSet: a.uZ.BOOSTING,
                    showWumpus: !0,
                    showYearlyPrice: !0
                })
            ]
        });
    },
    p = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, i.e7)([o.default], () => o.default.getCurrentUser());
        return c.ZP.isPremium(n, u.p9.TIER_2) ? null : (0, r.jsx)(g, { onOpenPremiumClick: t });
    };
