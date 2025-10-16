n.d(t, { q: () => c }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(434404),
    s = n(981631),
    o = n(388032);
function c(e) {
    let { isInventoryFeedEnabled: t, canManageGuild: n, features: c } = e,
        d = i.useCallback(
            (e) => {
                let t = new Set(c);
                e
                    ? (t.add(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
                      t.delete(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER))
                    : (t.add(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
                      t.delete(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER)),
                    a.Z.updateGuild({ features: t });
            },
            [c],
        );
    return (0, r.jsx)(l.C3N, {
        label: o.intl.string(o.t["oQ/7BQ"]),
        description: o.intl.string(o.t.fZ0qZW),
        children: (0, r.jsx)(l.rsf, {
            label: o.intl.string(o.t.WompT0),
            checked: t,
            onChange: d,
            disabled: !n,
        }),
    });
}
