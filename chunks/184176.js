var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(100527),
    l = n(906732),
    o = n(963249),
    c = n(78839),
    d = n(74538),
    u = n(823188),
    m = n(474936),
    g = n(981631),
    h = n(388032),
    p = n(395583);
t.Z = () => {
    let e = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        t = (0, d.u0)(null == e ? void 0 : e.trialId),
        n = (0, l.ZP)([a.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
    return (0, i.jsxs)('div', {
        className: p.banner,
        children: [
            (0, i.jsx)(u.Cy, {
                text: h.intl.string(h.t.qYKftb),
                className: p.trialPill,
                colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, i.jsx)('div', {
                className: p.body,
                children: (0, i.jsx)(s.Text, {
                    color: 'always-white',
                    variant: 'text-md/medium',
                    children: h.intl.format(h.t.uu1WAQ, { weeks: t })
                })
            }),
            (0, i.jsx)(s.Button, {
                onClick: () => {
                    (0, o.Z)({
                        initialPlanId: m.Xh.PREMIUM_MONTH_TIER_2,
                        analyticsLocations: n.analyticsLocations,
                        analyticsObject: { object: g.qAy.BUTTON_CTA }
                    });
                },
                look: s.ButtonLooks.OUTLINED,
                color: s.ButtonColors.WHITE,
                children: h.intl.string(h.t['vSfq9/'])
            })
        ]
    });
};
