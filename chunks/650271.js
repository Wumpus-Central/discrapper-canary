n.d(e, { z: () => O });
var i = n(657707),
    l = n(509613),
    r = n(28682),
    u = n(313789),
    s = n(620163),
    a = n(501348),
    o = n(726985),
    c = n(388032);
let d = (0, l.x1)(u.n.APPEARANCE_PANE, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        buildLayout: () => [],
        render: a.Z,
    }),
    E = (0, l.wf)(u.n.APPEARANCE_PANEL, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        buildLayout: () => [d],
    }),
    O = (0, l.m7)(u.n.APPEARANCE_SIDEBAR_ITEM, {
        icon: i.V3v,
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        legacySearchKey: o.s6.APPEARANCE,
        buildLayout: () => [E],
        trailing: {
            type: r.PU.BADGE_NEW,
            getDismissibleContentTypes: s.$Z,
            badgeComponent: s.c$,
        },
    });
