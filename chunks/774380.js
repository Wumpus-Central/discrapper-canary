n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(98278),
    s = n(823188),
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
                children: (0, r.jsx)(l.Button, {
                    variant: "overlay-primary",
                    size: "md",
                    fullWidth: !0,
                    text: u.intl.string(u.t.hvVgAZ),
                    onClick: () => {
                        (0, a.z)(), null != t && t();
                    },
                }),
            });
        return (0, r.jsxs)("div", {
            className: g.tier0Container,
            children: [
                (0, r.jsx)(l.Heading, {
                    className: g.tier0Heading,
                    variant: "heading-xxl/extrabold",
                    children: u.intl.string(u.t["qUl+K4"]),
                }),
                (0, r.jsx)(s.wp, {
                    className: g.tier0Card,
                    ctaButton: n,
                    featureSet: s.uZ.BOOSTING,
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
