n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(100527),
    a = n(906732),
    o = n(963249),
    c = n(78839),
    d = n(74538),
    u = n(823188),
    m = n(474936),
    h = n(981631),
    g = n(388032),
    _ = n(536720);
let x = () => {
    let e = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        t = (0, d.u0)(null == e ? void 0 : e.trialId),
        n = (0, a.ZP)([l.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
    return (0, i.jsxs)('div', {
        className: _.banner,
        children: [
            (0, i.jsx)(u.Cy, {
                text: g.intl.string(g.t.qYKftb),
                className: _.trialPill,
                colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, i.jsx)('div', {
                className: _.body,
                children: (0, i.jsx)(r.Text, {
                    color: 'always-white',
                    variant: 'text-md/medium',
                    children: g.intl.format(g.t.uu1WAQ, { weeks: t })
                })
            }),
            (0, i.jsx)(r.zxk, {
                onClick: () => {
                    (0, o.Z)({
                        initialPlanId: m.Xh.PREMIUM_MONTH_TIER_2,
                        analyticsLocations: n.analyticsLocations,
                        analyticsObject: { object: h.qAy.BUTTON_CTA }
                    });
                },
                look: r.iLD.OUTLINED,
                color: r.Ttl.WHITE,
                children: g.intl.string(g.t['vSfq9/'])
            })
        ]
    });
};
