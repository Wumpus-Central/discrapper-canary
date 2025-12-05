n.d(e, { z: () => S });
var i = n(657707),
    l = n(725727),
    s = n(509613),
    r = n(28682),
    u = n(313789),
    a = n(387747),
    o = n(726985),
    c = n(388032);
let d = (0, s.x1)(u.n.GIFT_PANE, {
        render: a.Z,
        buildLayout: () => [],
    }),
    E = (0, s.wf)(u.n.GIFT_PANEL, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        buildLayout: () => [d],
    }),
    S = (0, s.m7)(u.n.GIFT_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        getLegacySearchKey: () => o.s6.GIFT_INVENTORY,
        icon: i.OgN,
        trailing: {
            type: r.PU.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
        buildLayout: () => [E],
    });
