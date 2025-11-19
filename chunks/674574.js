n.d(e, { e_: () => I });
var i = n(657707),
    l = n(509613),
    u = n(313789),
    r = n(526665),
    s = n(61512),
    a = n(441302),
    o = n(736608),
    c = n(802),
    E = n(348911),
    S = n(388032);
let T = (0, l.x1)(u.n.NOTIFICATIONS_PANE, {
        buildLayout: () => [c.Z, E.Z, a.Z, o.Z, s.Z],
    }),
    d = (0, l.wf)(u.n.NOTIFICATIONS_PANEL, {
        useTitle: () => S.intl.string(S.t.HcoRu0),
        buildLayout: () => [T],
    }),
    I = (0, l.m7)(u.n.NOTIFICATIONS_SIDEBAR_ITEM, {
        icon: i.Dkj,
        useTitle: () => S.intl.string(S.t.HcoRu0),
        usePredicate: () => (0, r.gj)("NotificationsPanel"),
        buildLayout: () => [d],
    });
