n.d(e, { g: () => g });
var i = n(54381),
    l = n(442837),
    s = n(351780),
    u = n(231765),
    r = n(509613),
    a = n(313789),
    o = n(526665),
    T = n(246383),
    S = n(726985),
    c = n(388032),
    E = n(242379);
let d = (0, r.wf)(a.n.POGGERMODE_PANEL, {
        usePredicate: () => !(0, o.gN)("LegacyPoggermodePanel"),
        useTitle: () => c.intl.string(c.t.AtCukI),
        StronglyDiscouragedCustomComponent: u.Z,
        buildLayout: () => [],
    }),
    _ = (0, r.wf)(a.n.POGGERMODE_PANEL, {
        usePredicate: () => (0, o.gN)("PoggermodePanel"),
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [T.v],
    }),
    g = (0, r.m7)(a.n.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        getLegacySearchKey: () => ((0, o.Gl)("PoggermodePanel") ? void 0 : S.s6.POGGERMODE),
        icon: () =>
            (0, i.jsx)("img", {
                alt: "",
                src: n(348621),
                className: E.poggermodeIcon,
            }),
        usePredicate: () => (0, l.e7)([s.Z], () => s.Z.settingsVisible),
        buildLayout: () => ((0, o.Gl)("PoggermodePanel") ? [_] : [d]),
    });
