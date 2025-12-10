n.d(e, { o: () => S });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    u = n(313789),
    r = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(u.n.LINUX_PANE, {
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    d = (0, l.wf)(u.n.LINUX_PANEL, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        buildLayout: () => [c],
    }),
    S = (0, l.m7)(u.n.LINUX_SIDEBAR_ITEM, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        getLegacySearchKey: () => a.s6.LINUX_SETTINGS,
        icon: i.pzj,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [d],
    });
