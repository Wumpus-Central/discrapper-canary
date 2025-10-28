n.d(e, { e_: () => O });
var i = n(657707),
    l = n(509613),
    u = n(313789),
    r = n(526665),
    s = n(61512),
    o = n(441302),
    a = n(736608),
    c = n(802),
    E = n(348911),
    d = n(388032);
let T = (0, l.x1)(u.n.NOTIFICATIONS_PANE, {
        buildLayout: () => [c.Z, E.Z, o.Z, a.Z, s.Z],
    }),
    I = (0, l.wf)(u.n.NOTIFICATIONS_PANEL, {
        useTitle: () => d.intl.string(d.t.HcoRu0),
        buildLayout: () => [T],
    }),
    O = (0, l.m7)(u.n.NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => d.intl.string(d.t.HcoRu0),
        usePredicate: () => (0, r.gj)("NotificationsPanel"),
        buildLayout: () => [I],
    });
