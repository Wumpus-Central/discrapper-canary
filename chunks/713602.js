n.d(e, { B: () => d });
var i = n(657707),
    l = n(509613),
    s = n(906467),
    u = n(313789),
    r = n(956699),
    a = n(726985);
let o = (0, l.x1)(u.n.DEVELOPER_OPTIONS_PANE, {
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    c = (0, l.wf)(u.n.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [o],
    }),
    d = (0, l.m7)(u.n.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        getLegacySearchKey: () => a.s6.DEVELOPER_OPTIONS,
        icon: i.Che,
        usePredicate: () => s.Z.isDeveloper,
        buildLayout: () => [c],
    });
