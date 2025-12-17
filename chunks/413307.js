n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(949389),
    a = n(82950),
    o = n(434404),
    s = n(981631),
    c = n(388032),
    u = n(438825);
let d = (e) => {
    let { guild: t } = e,
        n = i.useCallback(() => {
            (0, l.K)(t.id);
        }, [t.id]);
    return (0, r.jsx)(a.Z, {
        guild: t,
        onDismissed: n,
        onClick: () => o.Z.open(t.id, s.pNK.COMMUNITY),
        message: c.intl.string(c.t["2klD0Z"]),
        trackingSource: s.PsQ.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: s.vID.PUBLIC_UPSELL,
        image: u,
        cta: c.intl.string(c.t.hvVgAZ),
    });
};
