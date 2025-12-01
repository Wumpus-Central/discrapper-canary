n.d(e, { e_: () => I });
var i = n(657707),
    r = n(509613),
    l = n(313789),
    u = n(526665),
    s = n(61512),
    a = n(441302),
    o = n(736608),
    c = n(802),
    d = n(348911),
    E = n(388032);
let S = (0, r.x1)(l.n.NOTIFICATIONS_PANE, {
        buildLayout: () => [c.Z, d.Z, a.Z, o.Z, s.Z],
    }),
    T = (0, r.wf)(l.n.NOTIFICATIONS_PANEL, {
        useTitle: () => E.intl.string(E.t.HcoRu0),
        buildLayout: () => [S],
    }),
    I = (0, r.m7)(l.n.NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => E.intl.string(E.t.HcoRu0),
        usePredicate: () => (0, u.gj)("NotificationsPanel"),
        buildLayout: () => [T],
    });
