n.d(t, { q: () => d }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(434404),
    a = n(981631),
    o = n(388032),
    c = n(39935);
function d(e) {
    let { isInventoryFeedEnabled: t, canManageGuild: n, features: d } = e,
        u = i.useCallback(
            (e) => {
                let t = new Set(d);
                e
                    ? (t.add(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER))
                    : (t.add(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER)),
                    s.Z.updateGuild({ features: t });
            },
            [d],
        );
    return (0, r.jsxs)(l.hjN, {
        title: o.intl.string(o.t["oQ/7BQ"]),
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: c.description,
                children: o.intl.string(o.t.fZ0qZW),
            }),
            (0, r.jsx)(l.rsf, {
                label: o.intl.string(o.t.WompT0),
                checked: t,
                onChange: u,
                disabled: !n,
            }),
        ],
    });
}
