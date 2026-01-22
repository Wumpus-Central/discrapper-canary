i.d(e, { TC: () => O });
var n = i(934551),
    l = i(824552),
    s = i(419954),
    r = i(780964),
    u = i(358776),
    a = i(130066),
    o = i(601954),
    T = i(978431),
    A = i(731542),
    S = i(674082),
    E = i(570874),
    d = i(531525),
    _ = i(985018);
let I = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        StronglyDiscouragedCustomComponent: a.A,
        usePredicate: () => !(0, u.dk)("ContentAndSocialPanel"),
        buildLayout: () => [],
    }),
    g = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => _.intl.string(_.t["/7xJCF"]),
        buildLayout: () => [T.e, E.q, A.N, S.Y],
    }),
    c = (0, s.dT)(r.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            l.A.fetch();
        },
        getTitle: () => _.intl.string(_.t.YpCiMt),
        buildLayout: () => [o.j],
    }),
    N = (0, s.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        usePredicate: () => (0, u.dk)("ContentAndSocialPanel"),
        buildLayout: () => [g, c],
    }),
    O = (0, s.i4)(r.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        getLegacySearchKey: () => ((0, u.WJ)("ContentAndSocialPanel") ? void 0 : d.H.CONTENT_SOCIAL),
        icon: n.ShieldUserIcon,
        buildLayout: () => ((0, u.WJ)("ContentAndSocialPanel") ? [N] : [I]),
    });
