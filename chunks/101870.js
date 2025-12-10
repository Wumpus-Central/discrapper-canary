n.d(e, { o: () => d });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    r = n(313789),
    u = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.wf)(r.n.LINUX_PANEL, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        StronglyDiscouragedCustomComponent: u.Z,
        buildLayout: () => [],
    }),
    d = (0, l.m7)(r.n.LINUX_SIDEBAR_ITEM, {
        useTitle: () => o.intl.string(o.t["7pPjTW"]),
        getLegacySearchKey: () => a.s6.LINUX_SETTINGS,
        icon: i.pzj,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [c],
    });
