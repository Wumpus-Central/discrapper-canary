n.d(e, { J: () => O });
var i = n(657707),
    l = n(704215),
    s = n(509613),
    r = n(970013),
    u = n(313789),
    a = n(526665),
    o = n(327192),
    c = n(984975),
    d = n(105429),
    T = n(726985),
    g = n(388032);
let S = (0, s.k4)(u.n.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [c.u] }),
    E = (0, s.k4)(u.n.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [d.T] }),
    I = (0, s.wf)(u.n.CONNECTIONS_PANEL, {
        usePredicate: () => !(0, a.gN)("LegacyConnectionsPanel"),
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        StronglyDiscouragedCustomComponent: o.ZP,
        buildLayout: () => [],
    }),
    _ = (0, s.wf)(u.n.CONNECTIONS_PANEL, {
        usePredicate: () => (0, a.gN)("ConnectionsPanel"),
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        buildLayout: () => [S, E],
    }),
    O = (0, s.m7)(u.n.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        getLegacySearchKey: () => ((0, a.Gl)("ConnectionsPanel") ? void 0 : T.s6.CONNECTIONS),
        icon: i.xPt,
        trailing: {
            type: r.W.BADGE_NEW,
            getDismissibleContentTypes: () => [l.z.NEW_CRUNCHYROLL_CONNECTION],
        },
        buildLayout: () => ((0, a.Gl)("ConnectionsPanel") ? [_] : [I]),
    });
