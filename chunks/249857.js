n.d(e, { R: () => E });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    r = n(313789),
    u = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(r.n.WINDOWS_PANE, {
        render: u.Z,
        buildLayout: () => [],
    }),
    d = (0, l.wf)(r.n.WINDOWS_PANEL, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        buildLayout: () => [c],
    }),
    E = (0, l.m7)(r.n.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        getLegacySearchKey: () => a.s6.WINDOW_SETTINGS,
        icon: i.pzj,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [d],
    });
