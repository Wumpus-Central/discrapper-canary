n.d(e, { m: () => E });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    r = n(526665),
    u = n(593648),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(s.n.LEGACY_NOTIFICATIONS_PANE, {
        buildLayout: () => [],
        render: u.Z,
    }),
    d = (0, l.wf)(s.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
        useTitle: () => o.intl.string(o.t.HcoRu0),
        buildLayout: () => [c],
    }),
    E = (0, l.m7)(s.n.LEGACY_NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => o.intl.string(o.t.HcoRu0),
        getLegacySearchKey: () => a.s6.NOTIFICATIONS,
        usePredicate: () => !(0, r.gj)("LegacyNotificationsPanel"),
        buildLayout: () => [d],
    });
