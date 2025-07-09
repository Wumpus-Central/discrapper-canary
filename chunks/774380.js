n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
    s = n(481060),
    a = n(98278),
    o = n(823188),
    c = n(594174),
    d = n(74538),
    u = n(474936),
    m = n(388032),
    g = n(561012);
let p = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, r.jsx)(l.zx, {
                className: g.tier0Button,
                color: l.zx.Colors.BRAND_INVERTED,
                onClick: () => {
                    ((0, a.z)(), null != t && t());
                },
                children: m.intl.string(m.t.hvVgAQ)
            });
        return (0, r.jsxs)('div', {
            className: g.tier0Container,
            children: [
                (0, r.jsx)(s.X6q, {
                    className: g.tier0Heading,
                    variant: 'heading-xxl/extrabold',
                    children: m.intl.string(m.t['qUl+Ky'])
                }),
                (0, r.jsx)(o.wp, {
                    className: g.tier0Card,
                    ctaButton: n,
                    featureSet: o.uZ.BOOSTING,
                    showWumpus: !0,
                    showYearlyPrice: !0
                })
            ]
        });
    },
    f = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, i.e7)([c.default], () => c.default.getCurrentUser());
        return d.ZP.isPremium(n, u.p9.TIER_2) ? null : (0, r.jsx)(p, { onOpenPremiumClick: t });
    };
