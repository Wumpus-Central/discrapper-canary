n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(98278),
    s = n(823188),
    o = n(594174),
    c = n(74538),
    d = n(474936),
    u = n(388032),
    m = n(561012);
let g = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, r.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: m.tier0Button,
                children: (0, r.jsx)(l.zxk, {
                    variant: 'overlay-primary',
                    size: 'md',
                    fullWidth: !0,
                    text: u.intl.string(u.t.hvVgAQ),
                    onClick: () => {
                        ((0, a.z)(), null != t && t());
                    }
                })
            });
        return (0, r.jsxs)('div', {
            className: m.tier0Container,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: m.tier0Heading,
                    variant: 'heading-xxl/extrabold',
                    children: u.intl.string(u.t['qUl+Ky'])
                }),
                (0, r.jsx)(s.wp, {
                    className: m.tier0Card,
                    ctaButton: n,
                    featureSet: s.uZ.BOOSTING,
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
