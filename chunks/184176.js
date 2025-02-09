n.d(t, { Z: () => f });
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
    m = n(474936),
    g = n(981631),
    _ = n(388032),
    p = n(31814);
let f = () => {
    let e = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        t = (0, d.u0)(null == e ? void 0 : e.trialId),
        n = (0, l.ZP)([s.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
    return (0, i.jsxs)('div', {
        className: p.banner,
        children: [
            (0, i.jsx)(u.Cy, {
                text: _.intl.string(_.t.qYKftb),
                className: p.trialPill,
                colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, i.jsx)('div', {
                className: p.body,
                children: (0, i.jsx)(a.Text, {
                    color: 'always-white',
                    variant: 'text-md/medium',
                    children: _.intl.format(_.t.uu1WAQ, { weeks: t })
                })
            }),
            (0, i.jsx)(a.zxk, {
                onClick: () => {
                    (0, o.Z)({
                        initialPlanId: m.Xh.PREMIUM_MONTH_TIER_2,
                        analyticsLocations: n.analyticsLocations,
                        analyticsObject: { object: g.qAy.BUTTON_CTA }
                    });
                },
                look: a.iLD.OUTLINED,
                color: a.Ttl.WHITE,
                children: _.intl.string(_.t['vSfq9/'])
            })
        ]
    });
};
