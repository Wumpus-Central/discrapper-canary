n.d(e, { G: () => d });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(389650),
    r = n(726985),
    a = n(388032);
let o = (0, l.x1)(s.n.KEYBINDS_PANE, {
        StronglyDiscouragedCustomComponent: u.Z,
        buildLayout: () => [],
    }),
    c = (0, l.wf)(s.n.KEYBINDS_PANEL, {
        useTitle: () => a.intl.string(a.t.T9DA2K),
        buildLayout: () => [o],
    }),
    d = (0, l.m7)(s.n.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => a.intl.string(a.t.T9DA2K),
        getLegacySearchKey: () => r.s6.KEYBINDS,
        icon: i.YiA,
        buildLayout: () => [c],
    });
