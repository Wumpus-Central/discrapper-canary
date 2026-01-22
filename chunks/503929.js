n.d(t, { l: () => o }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(997509),
    a = n(652215),
    c = n(985018);
function o(e) {
    let { isInventoryFeedEnabled: t, canManageGuild: n, features: o } = e,
        d = i.useCallback(
            (e) => {
                let t = new Set(o);
                e
                    ? (t.add(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
                      t.delete(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER))
                    : (t.add(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
                      t.delete(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER)),
                    s.A.updateGuild({ features: t });
            },
            [o],
        );
    return (0, r.jsx)(l.nVY, {
        label: c.intl.string(c.t["oQ/7Bc"]),
        description: c.intl.string(c.t.fZ0qZU),
        children: (0, r.jsx)(l.dOG, {
            label: c.intl.string(c.t.WompT5),
            checked: t,
            onChange: d,
            disabled: !n,
        }),
    });
}
