n.d(e, { o: () => E });
var i = n(657707),
    r = n(509613),
    l = n(358085),
    u = n(313789),
    s = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, r.x1)(u.n.LINUX_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    d = (0, r.wf)(u.n.LINUX_PANEL, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        buildLayout: () => [c],
    }),
    E = (0, r.m7)(u.n.LINUX_SIDEBAR_ITEM, {
        icon: i.pzj,
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        getLegacySearchKey: () => a.s6.LINUX_SETTINGS,
        usePredicate: () => l.isPlatformEmbedded && (0, l.isLinux)(),
        buildLayout: () => [d],
    });
