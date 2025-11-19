n.d(e, { z: () => T });
var i = n(657707),
    l = n(509613),
    u = n(28682),
    r = n(313789),
    s = n(620163),
    a = n(501348),
    o = n(726985),
    c = n(388032);
let E = (0, l.x1)(r.n.APPEARANCE_PANE, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        buildLayout: () => [],
        render: a.Z,
    }),
    S = (0, l.wf)(r.n.APPEARANCE_PANEL, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        buildLayout: () => [E],
    }),
    T = (0, l.m7)(r.n.APPEARANCE_SIDEBAR_ITEM, {
        icon: i.V3v,
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        getLegacySearchKey: () => o.s6.APPEARANCE,
        buildLayout: () => [S],
        trailing: {
            type: u.PU.BADGE_NEW,
            getDismissibleContentTypes: s.$Z,
            badgeComponent: s.c$,
        },
    });
