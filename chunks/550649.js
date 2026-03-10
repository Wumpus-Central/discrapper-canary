n.d(t, { z: () => A });
var i = n(934551),
    s = n(554146),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(831562),
    d = n(927631),
    c = n(985018);
let u = [{ badgeType: a.Xi.NEW, dismissibleContent: s.M.NEW_CRUNCHYROLL_CONNECTION }],
    _ = (0, l.zZ)(r.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [o.l] }),
    g = (0, l.zZ)(r.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [d.W] }),
    m = (0, l.t_)(r.X.CONNECTIONS_PANEL, {
        useTitle: () => c.intl.string(c.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [_, g],
    }),
    A = (0, l.i4)(r.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["3fe7U5"]),
        icon: i.LinkIcon,
        getDismissibleBadges: () => u,
        buildLayout: () => [m],
    });
