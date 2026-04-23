n.d(t, { l: () => c });
var i = n(627968),
    l = n(64700),
    s = n(270003),
    r = n(243721),
    a = n(997509),
    o = n(652215),
    d = n(985018);
function c(e) {
    let { isInventoryFeedEnabled: t, canManageGuild: n, features: c } = e,
        u = l.useCallback(
            (e) => {
                let t = new Set(c);
                e
                    ? (t.add(o.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
                      t.delete(o.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER))
                    : (t.add(o.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
                      t.delete(o.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER)),
                    a.A.updateGuild({ features: t });
            },
            [c],
        );
    return (0, i.jsx)(s.n, {
        label: d.intl.string(d.t["oQ/7Bc"]),
        description: d.intl.string(d.t.fZ0qZU),
        children: (0, i.jsx)(r.d, { label: d.intl.string(d.t.WompT5), checked: t, onChange: u, disabled: !n }),
    });
}
