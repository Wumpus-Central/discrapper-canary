n.d(e, { w: () => S });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(593648),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(s.n.LEGACY_NOTIFICATIONS_PANE, {
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    d = (0, l.wf)(s.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
        useTitle: () => o.intl.string(o.t.HcoRu0),
        buildLayout: () => [c],
    }),
    S = (0, l.m7)(s.n.LEGACY_NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => o.intl.string(o.t.HcoRu0),
        getLegacySearchKey: () => a.s6.NOTIFICATIONS,
        icon: i.Dkj,
        usePredicate: () => !(0, u.gj)("LegacyNotificationsPanel"),
        buildLayout: () => [d],
    });
