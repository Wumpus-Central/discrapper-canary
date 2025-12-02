n.d(e, { e_: () => T });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    r = n(526665),
    u = n(61512),
    a = n(441302),
    o = n(736608),
    c = n(802),
    d = n(348911),
    E = n(388032);
let S = (0, l.x1)(s.n.NOTIFICATIONS_PANE, {
        buildLayout: () => [c.Z, d.Z, a.Z, o.Z, u.Z],
    }),
    I = (0, l.wf)(s.n.NOTIFICATIONS_PANEL, {
        useTitle: () => E.intl.string(E.t.HcoRu0),
        buildLayout: () => [S],
    }),
    T = (0, l.m7)(s.n.NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => E.intl.string(E.t.HcoRu0),
        usePredicate: () => (0, r.gj)("NotificationsPanel"),
        buildLayout: () => [I],
    });
