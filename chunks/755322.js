n.d(e, { m: () => E });
var i = n(657707),
    r = n(509613),
    l = n(313789),
    s = n(526665),
    u = n(593648),
    a = n(726985),
    o = n(388032);
let c = (0, r.x1)(l.n.LEGACY_NOTIFICATIONS_PANE, {
        buildLayout: () => [],
        render: u.Z,
    }),
    d = (0, r.wf)(l.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
        useTitle: () => o.intl.string(o.t.HcoRu0),
        buildLayout: () => [c],
    }),
    E = (0, r.m7)(l.n.LEGACY_NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => o.intl.string(o.t.HcoRu0),
        getLegacySearchKey: () => a.s6.NOTIFICATIONS,
        usePredicate: () => !(0, s.gj)("LegacyNotificationsPanel"),
        buildLayout: () => [d],
    });
