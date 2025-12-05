n.d(e, { z: () => S });
var i = n(657707),
    l = n(509613),
    s = n(28682),
    r = n(313789),
    u = n(620163),
    a = n(501348),
    o = n(726985),
    c = n(388032);
let d = (0, l.x1)(r.n.APPEARANCE_PANE, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        render: a.Z,
        buildLayout: () => [],
    }),
    E = (0, l.wf)(r.n.APPEARANCE_PANEL, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        buildLayout: () => [d],
    }),
    S = (0, l.m7)(r.n.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        getLegacySearchKey: () => o.s6.APPEARANCE,
        icon: i.V3v,
        trailing: {
            type: s.PU.BADGE_NEW,
            getDismissibleContentTypes: u.$Z,
            badgeComponent: u.c$,
        },
        buildLayout: () => [E],
    });
