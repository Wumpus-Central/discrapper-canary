n.d(e, { J: () => g });
var i = n(657707),
    l = n(509613),
    s = n(970013),
    u = n(313789),
    r = n(526665),
    a = n(748717),
    o = n(126848),
    S = n(112121),
    T = n(726985),
    c = n(388032);
let E = (0, l.wf)(u.n.NITRO_PANEL, {
        usePredicate: () => !(0, r.gN)("LegacyNitroPanel"),
        useTitle: () => c.intl.string(c.t.Ipxkog),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    d = (0, l.wf)(u.n.NITRO_PANEL, {
        usePredicate: () => (0, r.gN)("NitroPanel"),
        useTitle: () => c.intl.string(c.t.Ipxkog),
        buildLayout: () => [S.I],
    }),
    g = (0, l.m7)(u.n.NITRO_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        getLegacySearchKey: () => ((0, r.Gl)("NitroPanel") ? void 0 : T.s6.PREMIUM),
        icon: i.SrA,
        trailing: {
            type: s.W.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: (t, e) => (0, o.x)(e),
        },
        buildLayout: () => ((0, r.Gl)("NitroPanel") ? [d] : [E]),
    });
