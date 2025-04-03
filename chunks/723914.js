n.d(t, { q: () => d }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(434404),
    l = n(981631),
    o = n(388032),
    c = n(837188);
function d(e) {
    let { isInventoryFeedEnabled: t, canManageGuild: n, features: d } = e,
        u = i.useCallback(
            (e) => {
                let t = new Set(d);
                e ? (t.add(l.oNc.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(l.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (t.add(l.oNc.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(l.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), a.Z.updateGuild({ features: t });
            },
            [d]
        );
    return (0, r.jsxs)(s.hjN, {
        title: o.NW.string(o.t['oQ/7BQ']),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: c.description,
                children: o.NW.string(o.t.fZ0qZW)
            }),
            (0, r.jsx)(s.j7V, {
                value: t,
                className: c.switch,
                hideBorder: !0,
                disabled: !n,
                onChange: u,
                children: o.NW.string(o.t.WompT0)
            })
        ]
    });
}
