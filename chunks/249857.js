n.d(e, { R: () => S });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    u = n(313789),
    r = n(200645),
    a = n(726985),
    o = n(388032);
let c = (0, l.x1)(u.n.WINDOWS_PANE, {
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    d = (0, l.wf)(u.n.WINDOWS_PANEL, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        buildLayout: () => [c],
    }),
    S = (0, l.m7)(u.n.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => o.intl.string(o.t.ZkDZov),
        getLegacySearchKey: () => a.s6.WINDOW_SETTINGS,
        icon: i.pzj,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [d],
    });
