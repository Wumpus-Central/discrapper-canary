n.d(e, { z: () => T });
var i = n(657707),
    l = n(725727),
    u = n(509613),
    r = n(28682),
    s = n(313789),
    a = n(387747),
    o = n(726985),
    c = n(388032);
let E = (0, u.x1)(s.n.GIFT_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    S = (0, u.wf)(s.n.GIFT_PANEL, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        buildLayout: () => [E],
    }),
    T = (0, u.m7)(s.n.GIFT_SIDEBAR_ITEM, {
        icon: i.OgN,
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        getLegacySearchKey: () => o.s6.GIFT_INVENTORY,
        buildLayout: () => [S],
        trailing: {
            type: r.PU.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
    });
