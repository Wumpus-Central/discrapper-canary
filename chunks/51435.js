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
    S = n(388032);
let g = (0, s.k4)(u.n.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [c.u] }),
    I = (0, s.k4)(u.n.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [d.T] }),
    E = (0, s.wf)(u.n.CONNECTIONS_PANEL, {
        usePredicate: () => !(0, a.gN)("LegacyConnectionsPanel"),
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: o.ZP,
        buildLayout: () => [],
    }),
    _ = (0, s.wf)(u.n.CONNECTIONS_PANEL, {
        usePredicate: () => (0, a.gN)("ConnectionsPanel"),
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [g, I],
    }),
    O = (0, s.m7)(u.n.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["3fe7U5"]),
        getLegacySearchKey: () => ((0, a.Gl)("ConnectionsPanel") ? void 0 : T.s6.CONNECTIONS),
        icon: i.xPt,
        trailing: {
            type: r.W.BADGE_NEW,
            getDismissibleContentTypes: () => [l.z.NEW_CRUNCHYROLL_CONNECTION],
        },
        buildLayout: () => ((0, a.Gl)("ConnectionsPanel") ? [_] : [E]),
    });
