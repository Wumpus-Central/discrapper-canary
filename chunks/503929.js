"use strict";
n.d(t, { l: () => d });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(997509),
    a = n(652215),
    o = n(985018);
function d(e) {
    let { isInventoryFeedEnabled: t, canManageGuild: n, features: d } = e,
        c = s.useCallback(
            (e) => {
                let t = new Set(d);
                e
                    ? (t.add(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
                      t.delete(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER))
                    : (t.add(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
                      t.delete(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER)),
                    r.A.updateGuild({ features: t });
            },
            [d],
        );
    return (0, i.jsx)(l.nVY, {
        label: o.intl.string(o.t["oQ/7Bc"]),
        description: o.intl.string(o.t.fZ0qZU),
        children: (0, i.jsx)(l.dOG, { label: o.intl.string(o.t.WompT5), checked: t, onChange: c, disabled: !n }),
    });
}
