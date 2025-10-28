n.d(e, { R: () => d });
var i = n(657707),
    l = n(509613),
    u = n(358085),
    r = n(313789),
    s = n(200645),
    o = n(726985),
    a = n(388032);
let c = (0, l.x1)(r.n.WINDOWS_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    E = (0, l.wf)(r.n.WINDOWS_PANEL, {
        useTitle: () => a.intl.string(a.t.ZkDZov),
        buildLayout: () => [c],
    }),
    d = (0, l.m7)(r.n.WINDOWS_SIDEBAR_ITEM, {
        icon: i.pzj,
        useTitle: () => a.intl.string(a.t.ZkDZov),
        legacySearchKey: o.s6.WINDOW_SETTINGS,
        usePredicate: () => u.isPlatformEmbedded && (0, u.isWindows)(),
        buildLayout: () => [E],
    });
