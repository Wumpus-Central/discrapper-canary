n.d(e, { o: () => d });
var i = n(657707),
    l = n(509613),
    u = n(358085),
    r = n(313789),
    s = n(200645),
    o = n(726985),
    a = n(388032);
let c = (0, l.x1)(r.n.LINUX_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    E = (0, l.wf)(r.n.LINUX_PANEL, {
        useTitle: () => a.intl.string(a.t["7pPjTW"]),
        buildLayout: () => [c],
    }),
    d = (0, l.m7)(r.n.LINUX_SIDEBAR_ITEM, {
        icon: i.pzj,
        useTitle: () => a.intl.string(a.t["7pPjTW"]),
        legacySearchKey: o.s6.LINUX_SETTINGS,
        usePredicate: () => u.isPlatformEmbedded && (0, u.isLinux)(),
        buildLayout: () => [E],
    });
