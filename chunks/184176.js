n.d(t, { Z: () => _ });
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
    g = n(981631),
    h = n(388032),
    x = n(536720);
let _ = () => {
    let e = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        t = (0, d.u0)(null == e ? void 0 : e.trialId),
        n = (0, a.ZP)([l.Z.PREMIUM_MARKETING_REVERSE_TRIAL_BANNER]);
    return (0, i.jsxs)('div', {
        className: x.banner,
        children: [
            (0, i.jsx)(u.Cy, {
                text: h.intl.string(h.t.qYKftb),
                className: x.trialPill,
                colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, i.jsx)('div', {
                className: x.body,
                children: (0, i.jsx)(r.Text, {
                    color: 'always-white',
                    variant: 'text-md/medium',
                    children: h.intl.format(h.t.uu1WAQ, { weeks: t })
                })
            }),
            (0, i.jsx)(r.zxk, {
                onClick: () => {
                    (0, o.Z)({
                        initialPlanId: m.Xh.PREMIUM_MONTH_TIER_2,
                        analyticsLocations: n.analyticsLocations,
                        analyticsObject: { object: g.qAy.BUTTON_CTA }
                    });
                },
                look: r.iLD.OUTLINED,
                color: r.Ttl.WHITE,
                children: h.intl.string(h.t['vSfq9/'])
            })
        ]
    });
};
