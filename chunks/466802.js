n.d(e, { J: () => S });
var i = n(657707),
    l = n(509613),
    r = n(28682),
    u = n(313789),
    s = n(748717),
    a = n(126848),
    o = n(726985),
    c = n(388032);
let E = (0, l.x1)(u.n.NITRO_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    d = (0, l.wf)(u.n.NITRO_PANEL, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        buildLayout: () => [E],
    }),
    S = (0, l.m7)(u.n.NITRO_SIDEBAR_ITEM, {
        icon: i.SrA,
        useTitle: () => c.intl.string(c.t.Ipxkog),
        getLegacySearchKey: () => o.s6.PREMIUM,
        buildLayout: () => [d],
        trailing: {
            type: r.PU.STRONGLY_DISCOURAGED_CUSTOM,
            useDecoration: (t, e) => (0, a.x)(e),
        },
    });
