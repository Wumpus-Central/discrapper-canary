n.d(e, { g: () => E });
var i = n(54381),
    l = n(442837),
    s = n(351780),
    u = n(231765),
    r = n(509613),
    a = n(313789),
    o = n(726985),
    c = n(388032),
    d = n(781652);
let S = (0, r.x1)(a.n.POGGERMODE_PANE, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        StronglyDiscouragedCustomComponent: u.Z,
        buildLayout: () => [],
    }),
    T = (0, r.wf)(a.n.POGGERMODE_PANEL, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [S],
    }),
    E = (0, r.m7)(a.n.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        getLegacySearchKey: () => o.s6.POGGERMODE,
        icon: () =>
            (0, i.jsx)("img", {
                alt: "",
                src: n(348621),
                className: d.poggermodeIcon,
            }),
        usePredicate: () => (0, l.e7)([s.Z], () => s.Z.settingsVisible),
        buildLayout: () => [T],
    });
