n.d(t, { g: () => f });
var i = n(934551),
    s = n(554146),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(358776),
    d = n(850060),
    c = n(729770),
    u = n(176817),
    _ = n(74973),
    g = n(256464),
    A = n(982770),
    m = n(461158),
    h = n(81453),
    p = n(289882),
    x = n(427887),
    E = n(222323),
    T = n(411476),
    S = n(985018);
let C = (0, l.t_)(r.X.CHAT_PANEL, {
        useTitle: () => S.intl.string(S.t["/VQax8"]),
        buildLayout: () => [A.M, u.f, _.z, x.J, h.n, E.p, T.U, m.W, p.o, g.c],
    }),
    I = [
        {
            badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: s.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: c.L,
        },
    ],
    f = (0, l.i4)(r.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["/VQax8"]),
        icon: i.ChatIcon,
        usePredicate: () => !(0, o.Ci)("ChatSidebarItem"),
        useMenu: d.A,
        getDismissibleBadges: () => I,
        buildLayout: () => [C],
    });
