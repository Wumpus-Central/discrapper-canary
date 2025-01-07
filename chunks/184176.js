var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(100527),
    l = n(906732),
    o = n(963249),
    c = n(78839),
    d = n(74538),
    u = n(823188),
    g = n(474936),
    m = n(981631),
    f = n(388032),
    p = n(536720);
t.Z = () => {
    let e = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        t = (0, d.u0)(null == e ? void 0 : e.trialId),
        n = (0, l.ZP)([s.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
    return (0, i.jsxs)('div', {
        className: p.banner,
        children: [
            (0, i.jsx)(u.Cy, {
                text: f.intl.string(f.t.qYKftb),
                className: p.trialPill,
                colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, i.jsx)('div', {
                className: p.body,
                children: (0, i.jsx)(a.Text, {
                    color: 'always-white',
                    variant: 'text-md/medium',
                    children: f.intl.format(f.t.uu1WAQ, { weeks: t })
                })
            }),
            (0, i.jsx)(a.Button, {
                onClick: () => {
                    (0, o.Z)({
                        initialPlanId: g.Xh.PREMIUM_MONTH_TIER_2,
                        analyticsLocations: n.analyticsLocations,
                        analyticsObject: { object: m.qAy.BUTTON_CTA }
                    });
                },
                look: a.ButtonLooks.OUTLINED,
                color: a.ButtonColors.WHITE,
                children: f.intl.string(f.t['vSfq9/'])
            })
        ]
    });
};
