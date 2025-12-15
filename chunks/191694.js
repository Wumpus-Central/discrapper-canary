n.d(e, { qn: () => g });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(293389),
    a = n(168308),
    o = n(586929),
    c = n(916936),
    T = n(726985),
    S = n(388032);
let d = (0, l.wf)(s.n.REGISTERED_GAMES_PANEL, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        StronglyDiscouragedCustomComponent: r.ZP,
        buildLayout: () => [],
        usePredicate: () => !(0, u.gN)("RegisteredGamesPanel"),
    }),
    E = (0, l.wf)(s.n.REGISTERED_GAMES_PANEL, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        usePredicate: () => (0, u.gN)("RegisteredGamesPanel"),
        buildLayout: () => [c.A, o._],
    }),
    g = (0, l.m7)(s.n.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        getLegacySearchKey: () => ((0, u.Gl)("RegisteredGamesPanel") ? void 0 : T.s6.REGISTERED_GAMES),
        icon: i.iWm,
        usePredicate: a.Jw,
        buildLayout: () => ((0, u.Gl)("RegisteredGamesPanel") ? [E] : [d]),
    });
