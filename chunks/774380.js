n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    s = n(98278),
    a = n(823188),
    o = n(594174),
    c = n(74538),
    d = n(474936),
    u = n(388032),
    g = n(430666);
let m = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: g.tier0Button,
                children: (0, r.jsx)(l.zxk, {
                    variant: "overlay-primary",
                    size: "md",
                    fullWidth: !0,
                    text: u.intl.string(u.t.hvVgAQ),
                    onClick: () => {
                        (0, s.z)(), null != t && t();
                    },
                }),
            });
        return (0, r.jsxs)("div", {
            className: g.tier0Container,
            children: [
                (0, r.jsx)(l.X6q, {
                    className: g.tier0Heading,
                    variant: "heading-xxl/extrabold",
                    children: u.intl.string(u.t["qUl+Ky"]),
                }),
                (0, r.jsx)(a.wp, {
                    className: g.tier0Card,
                    ctaButton: n,
                    featureSet: a.uZ.BOOSTING,
                    showWumpus: !0,
                    showYearlyPrice: !0,
                }),
            ],
        });
    },
    p = (e) => {
        let { onOpenPremiumClick: t } = e,
            n = (0, i.e7)([o.default], () => o.default.getCurrentUser());
        return c.ZP.isPremium(n, d.PremiumTypes.TIER_2) ? null : (0, r.jsx)(m, { onOpenPremiumClick: t });
    };
