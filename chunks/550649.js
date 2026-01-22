i.d(e, {
    z: () => c,
});
var n = i(934551),
    l = i(554146),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(358776),
    o = i(75698),
    T = i(831562),
    A = i(927631),
    S = i(531525),
    E = i(985018);
let d = (0, s.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [T.l],
    }),
    _ = (0, s.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
        buildLayout: () => [A.W],
    }),
    I = (0, s.t_)(u.X.CONNECTIONS_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyConnectionsPanel"),
        useTitle: () => E.intl.string(E.t["3fe7U5"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: o.Ay,
        buildLayout: () => [],
    }),
    g = (0, s.t_)(u.X.CONNECTIONS_PANEL, {
        usePredicate: () => (0, a.dk)("ConnectionsPanel"),
        useTitle: () => E.intl.string(E.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [d, _],
    }),
    c = (0, s.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["3fe7U5"]),
        getLegacySearchKey: () => ((0, a.WJ)("ConnectionsPanel") ? void 0 : S.H.CONNECTIONS),
        icon: n.LinkIcon,
        trailing: {
            type: r.S.BADGE_NEW,
            getDismissibleContentTypes: () => [l.M.NEW_CRUNCHYROLL_CONNECTION],
        },
        buildLayout: () => ((0, a.WJ)("ConnectionsPanel") ? [g] : [I]),
    });
