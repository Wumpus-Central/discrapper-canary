n.d(e, { z: () => S });
var i = n(657707),
    l = n(725727),
    r = n(509613),
    u = n(28682),
    s = n(313789),
    a = n(387747),
    o = n(726985),
    c = n(388032);
let E = (0, r.x1)(s.n.GIFT_PANE, {
        buildLayout: () => [],
        render: a.Z,
    }),
    d = (0, r.wf)(s.n.GIFT_PANEL, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        buildLayout: () => [E],
    }),
    S = (0, r.m7)(s.n.GIFT_SIDEBAR_ITEM, {
        icon: i.OgN,
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        getLegacySearchKey: () => o.s6.GIFT_INVENTORY,
        buildLayout: () => [d],
        trailing: {
            type: u.PU.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
    });
