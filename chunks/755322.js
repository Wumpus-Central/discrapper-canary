n.d(e, { m: () => d });
var i = n(657707),
    l = n(509613),
    r = n(313789),
    u = n(526665),
    s = n(593648),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(r.n.LEGACY_NOTIFICATIONS_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    E = (0, l.wf)(r.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
        useTitle: () => o.intl.string(o.t.HcoRu0),
        buildLayout: () => [c],
    }),
    d = (0, l.m7)(r.n.LEGACY_NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => o.intl.string(o.t.HcoRu0),
        getLegacySearchKey: () => a.s6.NOTIFICATIONS,
        usePredicate: () => !(0, u.gj)("LegacyNotificationsPanel"),
        buildLayout: () => [E],
    });
