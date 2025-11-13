n.d(e, { m: () => S });
var i = n(657707),
    l = n(509613),
    u = n(313789),
    r = n(526665),
    s = n(593648),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(u.n.LEGACY_NOTIFICATIONS_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    E = (0, l.wf)(u.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
        useTitle: () => o.intl.string(o.t.HcoRu0),
        buildLayout: () => [c],
    }),
    S = (0, l.m7)(u.n.LEGACY_NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => o.intl.string(o.t.HcoRu0),
        getLegacySearchKey: () => a.s6.NOTIFICATIONS,
        usePredicate: () => !(0, r.gj)("LegacyNotificationsPanel"),
        buildLayout: () => [E],
    });
