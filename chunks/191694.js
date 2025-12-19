n.d(e, { qn: () => _ });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(293389),
    a = n(168308),
    o = n(586929),
    T = n(916936),
    S = n(726985),
    c = n(388032);
let E = (0, l.wf)(s.n.REGISTERED_GAMES_PANEL, {
        useTitle: () => c.intl.string(c.t.AVDyEj),
        StronglyDiscouragedCustomComponent: r.ZP,
        buildLayout: () => [],
        usePredicate: () => !(0, u.gN)("RegisteredGamesPanel"),
    }),
    d = (0, l.wf)(s.n.REGISTERED_GAMES_PANEL, {
        useTitle: () => c.intl.string(c.t.AVDyEj),
        usePredicate: () => (0, u.gN)("RegisteredGamesPanel"),
        buildLayout: () => [T.A, o._],
    }),
    _ = (0, l.m7)(s.n.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.AVDyEj),
        getLegacySearchKey: () => ((0, u.Gl)("RegisteredGamesPanel") ? void 0 : S.s6.REGISTERED_GAMES),
        icon: i.iWm,
        usePredicate: a.Jw,
        buildLayout: () => ((0, u.Gl)("RegisteredGamesPanel") ? [d] : [E]),
    });
