n.d(e, { z: () => S });
var i = n(657707),
    r = n(725727),
    l = n(509613),
    s = n(28682),
    u = n(313789),
    a = n(387747),
    o = n(726985),
    c = n(388032);
let d = (0, l.x1)(u.n.GIFT_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    E = (0, l.wf)(u.n.GIFT_PANEL, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        buildLayout: () => [d],
    }),
    S = (0, l.m7)(u.n.GIFT_SIDEBAR_ITEM, {
        icon: i.OgN,
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        getLegacySearchKey: () => o.s6.GIFT_INVENTORY,
        buildLayout: () => [E],
        trailing: {
            type: s.PU.BADGE_COUNT,
            useCount: () => (0, r.YO)().length,
        },
    });
