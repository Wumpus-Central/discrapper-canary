n.d(e, { o: () => E });
var i = n(657707),
    l = n(509613),
    r = n(358085),
    u = n(313789),
    s = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(u.n.LINUX_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    d = (0, l.wf)(u.n.LINUX_PANEL, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        buildLayout: () => [c],
    }),
    E = (0, l.m7)(u.n.LINUX_SIDEBAR_ITEM, {
        icon: i.pzj,
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        legacySearchKey: a.s6.LINUX_SETTINGS,
        usePredicate: () => r.isPlatformEmbedded && (0, r.isLinux)(),
        buildLayout: () => [d],
    });
