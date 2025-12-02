n.d(e, { R: () => E });
var i = n(657707),
    r = n(509613),
    l = n(358085),
    s = n(313789),
    u = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, r.x1)(s.n.WINDOWS_PANE, {
        buildLayout: () => [],
        render: u.Z,
    }),
    d = (0, r.wf)(s.n.WINDOWS_PANEL, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        buildLayout: () => [c],
    }),
    E = (0, r.m7)(s.n.WINDOWS_SIDEBAR_ITEM, {
        icon: i.pzj,
        useTitle: () => o.intl.string(o.t.ZkDZov),
        getLegacySearchKey: () => a.s6.WINDOW_SETTINGS,
        usePredicate: () => l.isPlatformEmbedded && (0, l.isWindows)(),
        buildLayout: () => [d],
    });
