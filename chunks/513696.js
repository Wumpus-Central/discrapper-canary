n.d(e, { g: () => I });
var i = n(54381),
    l = n(442837),
    s = n(351780),
    r = n(231765),
    u = n(509613),
    a = n(313789),
    o = n(726985),
    c = n(388032),
    d = n(781652);
let E = (0, u.x1)(a.n.POGGERMODE_PANE, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [],
        render: r.Z,
    }),
    S = (0, u.wf)(a.n.POGGERMODE_PANEL, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [E],
    }),
    I = (0, u.m7)(a.n.POGGERMODE_SIDEBAR_ITEM, {
        icon: () =>
            (0, i.jsx)("img", {
                alt: "",
                src: n(348621),
                className: d.poggermodeIcon,
            }),
        useTitle: () => c.intl.string(c.t.AtCukI),
        getLegacySearchKey: () => o.s6.POGGERMODE,
        usePredicate: () => (0, l.e7)([s.Z], () => s.Z.settingsVisible),
        buildLayout: () => [S],
    });
