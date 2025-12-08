n.d(e, { J: () => E });
var i = n(657707),
    l = n(509613),
    s = n(970013),
    r = n(313789),
    u = n(748717),
    a = n(126848),
    o = n(726985),
    c = n(388032);
let d = (0, l.x1)(r.n.NITRO_PANE, {
        render: u.Z,
        buildLayout: () => [],
    }),
    T = (0, l.wf)(r.n.NITRO_PANEL, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        buildLayout: () => [d],
    }),
    E = (0, l.m7)(r.n.NITRO_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        getLegacySearchKey: () => o.s6.PREMIUM,
        icon: i.SrA,
        trailing: {
            type: s.W.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: (t, e) => (0, a.x)(e),
        },
        buildLayout: () => [T],
    });
