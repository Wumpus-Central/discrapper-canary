n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(621248),
    l = n(926466),
    s = n(997509),
    o = n(652215),
    d = n(985018),
    u = n(628287);
let c = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            (0, a.J)(t.id);
        }, [t.id]);
    return (0, i.jsx)(l.A, {
        guild: t,
        onDismissed: n,
        onClick: () => s.A.open(t.id, o.BEX.COMMUNITY),
        message: d.intl.string(d.t["2klD0Z"]),
        trackingSource: o.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: o.n5X.PUBLIC_UPSELL,
        image: u,
        cta: d.intl.string(d.t.hvVgAZ),
    });
};
