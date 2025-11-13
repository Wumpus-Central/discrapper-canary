n.d(e, { o: () => S });
var i = n(657707),
    l = n(509613),
    u = n(358085),
    r = n(313789),
    s = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(r.n.LINUX_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    E = (0, l.wf)(r.n.LINUX_PANEL, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        buildLayout: () => [c],
    }),
    S = (0, l.m7)(r.n.LINUX_SIDEBAR_ITEM, {
        icon: i.pzj,
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        getLegacySearchKey: () => a.s6.LINUX_SETTINGS,
        usePredicate: () => u.isPlatformEmbedded && (0, u.isLinux)(),
        buildLayout: () => [E],
    });
