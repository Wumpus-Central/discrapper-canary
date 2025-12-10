n.d(e, { e_: () => g });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(61512),
    a = n(441302),
    o = n(736608),
    c = n(802),
    d = n(348911),
    S = n(388032);
let T = (0, l.x1)(s.n.NOTIFICATIONS_PANE, {
        buildLayout: () => [c.o, d.p, a.s, o.r, r.G],
    }),
    E = (0, l.wf)(s.n.NOTIFICATIONS_PANEL, {
        useTitle: () => S.intl.string(S.t.HcoRu0),
        buildLayout: () => [T],
    }),
    g = (0, l.m7)(s.n.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.HcoRu0),
        icon: i.Dkj,
        usePredicate: () => (0, u.gj)("NotificationsPanel"),
        buildLayout: () => [E],
    });
