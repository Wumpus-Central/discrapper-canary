n.d(e, { z: () => T });
var i = n(657707),
    l = n(725727),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(387747),
    o = n(726985),
    c = n(388032);
let d = (0, s.x1)(r.n.GIFT_PANE, {
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    S = (0, s.wf)(r.n.GIFT_PANEL, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        buildLayout: () => [d],
    }),
    T = (0, s.m7)(r.n.GIFT_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        getLegacySearchKey: () => o.s6.GIFT_INVENTORY,
        icon: i.OgN,
        trailing: {
            type: u.W.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
        buildLayout: () => [S],
    });
