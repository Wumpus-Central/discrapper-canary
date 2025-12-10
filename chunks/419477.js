n.d(e, { z: () => g });
var i = n(657707),
    l = n(725727),
    s = n(509613),
    r = n(970013),
    u = n(313789),
    a = n(387747),
    o = n(726985),
    c = n(388032);
let d = (0, s.wf)(u.n.GIFT_PANEL, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    g = (0, s.m7)(u.n.GIFT_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["jcSP+g"]),
        getLegacySearchKey: () => o.s6.GIFT_INVENTORY,
        icon: i.OgN,
        trailing: {
            type: r.W.BADGE_COUNT,
            useCount: () => (0, l.YO)().length,
        },
        buildLayout: () => [d],
    });
