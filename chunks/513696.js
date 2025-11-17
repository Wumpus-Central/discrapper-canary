n.d(e, { g: () => d });
var i = n(54381),
    l = n(442837),
    u = n(351780),
    r = n(231765),
    s = n(509613),
    a = n(313789),
    o = n(726985),
    c = n(388032),
    E = n(781652);
let S = (0, s.x1)(a.n.POGGERMODE_PANE, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [],
        render: r.Z,
    }),
    T = (0, s.wf)(a.n.POGGERMODE_PANEL, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [S],
    }),
    d = (0, s.m7)(a.n.POGGERMODE_SIDEBAR_ITEM, {
        icon: () =>
            (0, i.jsx)("img", {
                alt: "",
                src: n(348621),
                className: E.poggermodeIcon,
            }),
        useTitle: () => c.intl.string(c.t.AtCukI),
        getLegacySearchKey: () => o.s6.POGGERMODE,
        usePredicate: () => (0, l.e7)([u.Z], () => u.Z.settingsVisible),
        buildLayout: () => [T],
    });
