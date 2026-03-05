n.d(t, { z: () => m });
var i = n(934551),
    s = n(554146),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(831562),
    d = n(927631),
    c = n(985018);
let u = (0, l.zZ)(r.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [o.l] }),
    _ = (0, l.zZ)(r.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [d.W] }),
    g = (0, l.t_)(r.X.CONNECTIONS_PANEL, {
        useTitle: () => c.intl.string(c.t["3fe7U5"]),
        hideInStreamerMode: !0,
        buildLayout: () => [u, _],
    }),
    m = (0, l.i4)(r.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["3fe7U5"]),
        icon: i.LinkIcon,
        trailing: { type: a.Si.BADGE_NEW, getDismissibleContentTypes: () => [s.M.NEW_CRUNCHYROLL_CONNECTION] },
        buildLayout: () => [g],
    });
