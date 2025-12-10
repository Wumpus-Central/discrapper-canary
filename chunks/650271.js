n.d(e, { z: () => T });
var i = n(657707),
    l = n(509613),
    s = n(970013),
    u = n(313789),
    r = n(620163),
    a = n(501348),
    o = n(726985),
    c = n(388032);
let d = (0, l.x1)(u.n.APPEARANCE_PANE, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    S = (0, l.wf)(u.n.APPEARANCE_PANEL, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        buildLayout: () => [d],
    }),
    T = (0, l.m7)(u.n.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["iHH+ky"]),
        getLegacySearchKey: () => o.s6.APPEARANCE,
        icon: i.V3v,
        trailing: {
            type: s.W.BADGE_NEW,
            getDismissibleContentTypes: r.$Z,
            stronglyDiscouragedBadgeComponent: r.c$,
        },
        buildLayout: () => [S],
    });
