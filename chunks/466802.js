n.d(e, { J: () => S });
var i = n(657707),
    r = n(509613),
    l = n(28682),
    s = n(313789),
    u = n(748717),
    a = n(126848),
    o = n(726985),
    c = n(388032);
let d = (0, r.x1)(s.n.NITRO_PANE, {
        buildLayout: () => [],
        render: u.Z,
    }),
    E = (0, r.wf)(s.n.NITRO_PANEL, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        buildLayout: () => [d],
    }),
    S = (0, r.m7)(s.n.NITRO_SIDEBAR_ITEM, {
        icon: i.SrA,
        useTitle: () => c.intl.string(c.t.Ipxkog),
        getLegacySearchKey: () => o.s6.PREMIUM,
        buildLayout: () => [E],
        trailing: {
            type: l.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: (t, e) => (0, a.x)(e),
        },
    });
