n.d(e, { o: () => d });
var i = n(657707),
    l = n(509613),
    s = n(358085),
    u = n(313789),
    r = n(526665),
    a = n(200645),
    o = n(788869),
    T = n(726985),
    S = n(388032);
let c = (0, l.wf)(u.n.LINUX_PANEL, {
        useTitle: () => S.intl.string(S.t["7pPjTW"]),
        buildLayout: () => [o.P],
    }),
    E = (0, l.wf)(u.n.LINUX_PANEL, {
        useTitle: () => S.intl.string(S.t["7pPjTW"]),
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    d = (0, l.m7)(u.n.LINUX_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["7pPjTW"]),
        getLegacySearchKey: () => ((0, r.Gl)("LinuxPanel") ? void 0 : T.s6.LINUX_SETTINGS),
        icon: i.ScreenIcon,
        usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
        buildLayout: () => [(0, r.Gl)("LinuxPanel") ? c : E],
    });
