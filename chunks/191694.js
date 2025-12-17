n.d(e, { qn: () => g });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(293389),
    a = n(168308),
    o = n(586929),
    S = n(916936),
    T = n(726985),
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
        buildLayout: () => [S.A, o._],
    }),
    g = (0, l.m7)(s.n.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.AVDyEj),
        getLegacySearchKey: () => ((0, u.Gl)("RegisteredGamesPanel") ? void 0 : T.s6.REGISTERED_GAMES),
        icon: i.iWm,
        usePredicate: a.Jw,
        buildLayout: () => ((0, u.Gl)("RegisteredGamesPanel") ? [d] : [E]),
    });
