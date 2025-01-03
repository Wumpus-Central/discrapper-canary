var i = n(200651),
    r = n(192379),
    l = n(949389),
    a = n(324262),
    s = n(434404),
    o = n(981631),
    c = n(388032),
    d = n(438825);
t.Z = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            (0, l.K7)(t.id);
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
