n.d(e, { o: () => E });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    r = n(313789),
    u = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(r.n.LINUX_PANE, {
        buildLayout: () => [],
        render: u.Z,
    }),
    d = (0, l.wf)(r.n.LINUX_PANEL, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        buildLayout: () => [c],
    }),
    E = (0, l.m7)(r.n.LINUX_SIDEBAR_ITEM, {
        icon: i.pzj,
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        getLegacySearchKey: () => a.s6.LINUX_SETTINGS,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [d],
    });
