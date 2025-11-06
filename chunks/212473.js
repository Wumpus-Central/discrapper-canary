n.d(e, { KL: () => T });
var i = n(951288),
    l = n(657707),
    r = n(703288),
    u = n(574755),
    s = n(509613),
    a = n(313789),
    o = n(526665),
    c = n(726985),
    E = n(388032);
let d = (0, s.x1)(a.n.CLIPS_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(u.Z, {}),
    }),
    S = (0, s.wf)(a.n.CLIPS_PANEL, {
        useTitle: () => E.intl.string(E.t.z2jK6X),
        useBadge: () => (0, i.jsx)(r.Z, {}),
        buildLayout: () => [d],
    }),
    T = (0, s.m7)(a.n.CLIPS_SIDEBAR_ITEM, {
        icon: l.AlX,
        useTitle: () => E.intl.string(E.t.z2jK6X),
        getLegacySearchKey: () => c.s6.CLIPS,
        buildLayout: () => [S],
        usePredicate: () => !(0, o.BK)("ClipsPanel"),
    });
