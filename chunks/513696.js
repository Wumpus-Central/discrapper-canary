n.d(e, { g: () => T });
var i = n(951288),
    l = n(442837),
    r = n(351780),
    u = n(231765),
    s = n(509613),
    a = n(313789),
    o = n(726985),
    c = n(388032),
    d = n(781652);
let E = (0, s.x1)(a.n.POGGERMODE_PANE, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [],
        render: u.Z,
    }),
    O = (0, s.wf)(a.n.POGGERMODE_PANEL, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [E],
    }),
    T = (0, s.m7)(a.n.POGGERMODE_SIDEBAR_ITEM, {
        icon: () =>
            (0, i.jsx)("img", {
                alt: "",
                src: n(348621),
                className: d.poggermodeIcon,
            }),
        useTitle: () => c.intl.string(c.t.AtCukI),
        legacySearchKey: o.s6.POGGERMODE,
        usePredicate: () => (0, l.e7)([r.Z], () => r.Z.settingsVisible),
        buildLayout: () => [O],
    });
