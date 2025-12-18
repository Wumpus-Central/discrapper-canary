n.d(e, { rV: () => A });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(949493),
    a = n(568246),
    o = n(318092),
    T = n(563092),
    S = n(735901),
    c = n(883626),
    E = n(726985),
    d = n(388032);
let _ = (0, l.wf)(s.n.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => d.intl.string(d.t["+o1pDZ"]),
        StronglyDiscouragedCustomComponent: r.Z,
        usePredicate: () => !(0, u.gN)("ContentAndSocialPanel"),
        buildLayout: () => [],
    }),
    g = (0, l.ZH)(s.n.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => d.intl.string(d.t["/7xJCF"]),
        buildLayout: () => [o.v, c.M, T._, S.f],
    }),
    I = (0, l.ZH)(s.n.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        getTitle: () => d.intl.string(d.t.YpCiMt),
        buildLayout: () => [a.k],
    }),
    N = (0, l.wf)(s.n.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => d.intl.string(d.t["+o1pDZ"]),
        usePredicate: () => (0, u.gN)("ContentAndSocialPanel"),
        buildLayout: () => [g, I],
    }),
    A = (0, l.m7)(s.n.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["+o1pDZ"]),
        getLegacySearchKey: () => ((0, u.Gl)("ContentAndSocialPanel") ? void 0 : E.s6.CONTENT_SOCIAL),
        icon: i.lZ8,
        buildLayout: () => ((0, u.Gl)("ContentAndSocialPanel") ? [N] : [_]),
    });
