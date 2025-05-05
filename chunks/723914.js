n.d(t, { q: () => u }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(434404),
    a = n(981631),
    o = n(388032),
    c = n(837188);
function u(e) {
    let { isInventoryFeedEnabled: t, canManageGuild: n, features: u } = e,
        d = i.useCallback(
            (e) => {
                let t = new Set(u);
                e ? (t.add(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (t.add(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), s.Z.updateGuild({ features: t });
            },
            [u]
        );
    return (0, r.jsxs)(l.hjN, {
        title: o.intl.string(o.t['oQ/7BQ']),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: c.description,
                children: o.intl.string(o.t.fZ0qZW)
            }),
            (0, r.jsx)(l.j7V, {
                value: t,
                className: c.switch,
                hideBorder: !0,
                disabled: !n,
                onChange: d,
                children: o.intl.string(o.t.WompT0)
            })
        ]
    });
}
