n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    r = n(949389),
    a = n(324262),
    s = n(434404),
    o = n(981631),
    c = n(388032),
    d = n(438825);
let u = (e) => {
    let { guild: t } = e,
        n = l.useCallback(() => {
            (0, r.K7)(t.id);
        }, [t.id]);
    return (0, i.jsx)(a.Z, {
        guild: t,
        onDismissed: n,
        onClick: () => s.Z.open(t.id, o.pNK.COMMUNITY),
        message: c.intl.string(c.t['2klD0d']),
        trackingSource: o.PsQ.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: o.vID.PUBLIC_UPSELL,
        image: d,
        cta: c.intl.string(c.t.hvVgAQ)
    });
};
