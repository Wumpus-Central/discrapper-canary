n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(621248),
    a = n(64983),
    s = n(997509),
    o = n(652215),
    c = n(985018),
    u = n(628287);
let d = (e) => {
    let { guild: t } = e,
        n = i.useCallback(() => {
            (0, l.J)(t.id);
        }, [t.id]);
    return (0, r.jsx)(a.A, {
        guild: t,
        onDismissed: n,
        onClick: () => s.A.open(t.id, o.BEX.COMMUNITY),
        message: c.intl.string(c.t["2klD0Z"]),
        trackingSource: o.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: o.n5X.PUBLIC_UPSELL,
        image: u,
        cta: c.intl.string(c.t.hvVgAZ),
    });
};
