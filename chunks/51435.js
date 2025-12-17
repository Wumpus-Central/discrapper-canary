n.d(e, { J: () => N });
var i = n(657707),
    l = n(704215),
    s = n(509613),
    u = n(970013),
    r = n(313789),
    a = n(526665),
    o = n(327192),
    S = n(984975),
    T = n(105429),
    c = n(726985),
    E = n(388032);
let d = (0, s.k4)(r.n.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [S.u] }),
    g = (0, s.k4)(r.n.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [T.T] }),
    _ = (0, s.wf)(r.n.CONNECTIONS_PANEL, {
        usePredicate: () => !(0, a.gN)("LegacyConnectionsPanel"),
        useTitle: () => E.intl.string(E.t["3fe7U5"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: o.ZP,
        buildLayout: () => [],
    }),
    I = (0, s.wf)(r.n.CONNECTIONS_PANEL, {
        usePredicate: () => (0, a.gN)("ConnectionsPanel"),
        useTitle: () => E.intl.string(E.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [d, g],
    }),
    N = (0, s.m7)(r.n.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["3fe7U5"]),
        getLegacySearchKey: () => ((0, a.Gl)("ConnectionsPanel") ? void 0 : c.s6.CONNECTIONS),
        icon: i.xPt,
        trailing: {
            type: u.W.BADGE_NEW,
            getDismissibleContentTypes: () => [l.z.NEW_CRUNCHYROLL_CONNECTION],
        },
        buildLayout: () => ((0, a.Gl)("ConnectionsPanel") ? [I] : [_]),
    });
