n.d(e, { R: () => d });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    u = n(313789),
    r = n(526665),
    a = n(200645),
    o = n(775793),
    S = n(726985),
    T = n(388032);
let c = (0, l.wf)(u.n.WINDOWS_PANEL, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        buildLayout: () => [o.R],
    }),
    E = (0, l.wf)(u.n.WINDOWS_PANEL, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    d = (0, l.m7)(u.n.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.ZkDZov),
        getLegacySearchKey: () => ((0, r.Gl)("WindowsPanel") ? void 0 : S.s6.WINDOW_SETTINGS),
        icon: i.pzj,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
        buildLayout: () => [(0, r.Gl)("WindowsPanel") ? c : E],
    });
