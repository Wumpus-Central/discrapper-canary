n.d(e, { e_: () => S });
var i = n(657707),
    l = n(509613),
    r = n(313789),
    u = n(526665),
    s = n(61512),
    a = n(441302),
    o = n(736608),
    c = n(802),
    d = n(348911),
    E = n(388032);
let O = (0, l.x1)(r.n.NOTIFICATIONS_PANE, {
        buildLayout: () => [c.Z, d.Z, a.Z, o.Z, s.Z],
    }),
    T = (0, l.wf)(r.n.NOTIFICATIONS_PANEL, {
        useTitle: () => E.intl.string(E.t.HcoRu0),
        buildLayout: () => [O],
    }),
    S = (0, l.m7)(r.n.NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => E.intl.string(E.t.HcoRu0),
        usePredicate: () => (0, u.gj)("NotificationsPanel"),
        buildLayout: () => [T],
    });
