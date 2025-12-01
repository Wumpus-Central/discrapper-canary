n.d(e, { B: () => d });
var i = n(657707),
    r = n(509613),
    l = n(906467),
    u = n(313789),
    s = n(956699),
    a = n(726985);
let o = (0, r.x1)(u.n.DEVELOPER_OPTIONS_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    c = (0, r.wf)(u.n.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [o],
    }),
    d = (0, r.m7)(u.n.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        icon: i.Che,
        useTitle: () => "Developer Options",
        getLegacySearchKey: () => a.s6.DEVELOPER_OPTIONS,
        usePredicate: () => l.Z.isDeveloper,
        buildLayout: () => [c],
    });
