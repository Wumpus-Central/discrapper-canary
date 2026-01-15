n.d(e, { G: () => d });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(389650),
    a = n(408283),
    o = n(726985),
    T = n(388032);
let S = (0, l.k4)(s.n.KEYBINDS_CATEGORY, { buildLayout: () => [a.A] }),
    c = (0, l.wf)(s.n.KEYBINDS_PANEL, {
        usePredicate: () => !(0, u.gN)("LegacyKeybindsPanel"),
        useTitle: () => T.intl.string(T.t.T9DA2K),
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    E = (0, l.wf)(s.n.KEYBINDS_PANEL, {
        usePredicate: () => (0, u.gN)("KeybindsPanel"),
        useTitle: () => T.intl.string(T.t.T9DA2K),
        buildLayout: () => [S],
    }),
    d = (0, l.m7)(s.n.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.T9DA2K),
        getLegacySearchKey: () => ((0, u.Gl)("KeybindsPanel") ? void 0 : o.s6.KEYBINDS),
        icon: i.KeyboardIcon,
        buildLayout: () => ((0, u.Gl)("KeybindsPanel") ? [E] : [c]),
    });
