n.d(e, { B: () => E });
var i = n(657707),
    l = n(509613),
    r = n(906467),
    u = n(313789),
    s = n(956699),
    a = n(726985);
let o = (0, l.x1)(u.n.DEVELOPER_OPTIONS_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    c = (0, l.wf)(u.n.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [o],
    }),
    E = (0, l.m7)(u.n.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        icon: i.Che,
        useTitle: () => "Developer Options",
        getLegacySearchKey: () => a.s6.DEVELOPER_OPTIONS,
        usePredicate: () => r.Z.isDeveloper,
        buildLayout: () => [c],
    });
