n.d(e, { R: () => d });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    r = n(313789),
    u = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.wf)(r.n.WINDOWS_PANEL, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        StronglyDiscouragedCustomComponent: u.Z,
        buildLayout: () => [],
    }),
    d = (0, l.m7)(r.n.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        getLegacySearchKey: () => a.s6.WINDOW_SETTINGS,
        icon: i.pzj,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [c],
    });
