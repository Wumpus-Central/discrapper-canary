n.d(e, { rV: () => O });
var i = n(657707),
    l = n(384275),
    s = n(509613),
    u = n(313789),
    r = n(526665),
    a = n(949493),
    o = n(568246),
    T = n(318092),
    S = n(563092),
    c = n(735901),
    E = n(883626),
    d = n(726985),
    _ = n(388032);
let g = (0, s.wf)(u.n.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        StronglyDiscouragedCustomComponent: a.Z,
        usePredicate: () => !(0, r.gN)("ContentAndSocialPanel"),
        buildLayout: () => [],
    }),
    I = (0, s.ZH)(u.n.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => _.intl.string(_.t["/7xJCF"]),
        buildLayout: () => [T.v, E.M, S._, c.f],
    }),
    N = (0, s.ZH)(u.n.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            l.Z.fetch();
        },
        getTitle: () => _.intl.string(_.t.YpCiMt),
        buildLayout: () => [o.k],
    }),
    A = (0, s.wf)(u.n.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        usePredicate: () => (0, r.gN)("ContentAndSocialPanel"),
        buildLayout: () => [I, N],
    }),
    O = (0, s.m7)(u.n.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        getLegacySearchKey: () => ((0, r.Gl)("ContentAndSocialPanel") ? void 0 : d.s6.CONTENT_SOCIAL),
        icon: i.lZ8,
        buildLayout: () => ((0, r.Gl)("ContentAndSocialPanel") ? [A] : [g]),
    });
