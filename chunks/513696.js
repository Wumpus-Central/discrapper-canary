n.d(e, { g: () => I });
var i = n(951288),
    l = n(442837),
    u = n(351780),
    r = n(231765),
    s = n(509613),
    o = n(313789),
    a = n(726985),
    c = n(388032),
    E = n(781652);
let d = (0, s.x1)(o.n.POGGERMODE_PANE, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [],
        render: r.Z,
    }),
    T = (0, s.wf)(o.n.POGGERMODE_PANEL, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [d],
    }),
    I = (0, s.m7)(o.n.POGGERMODE_SIDEBAR_ITEM, {
        icon: () =>
            (0, i.jsx)("img", {
                alt: "",
                src: n(348621),
                className: E.poggermodeIcon,
            }),
        useTitle: () => c.intl.string(c.t.AtCukI),
        legacySearchKey: a.s6.POGGERMODE,
        usePredicate: () => (0, l.e7)([u.Z], () => u.Z.settingsVisible),
        buildLayout: () => [T],
    });
