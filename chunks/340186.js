n.d(t, { g: () => b });
var i = n(934551),
    s = n(554146),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(358776),
    d = n(850060),
    c = n(729770),
    u = n(176817),
    _ = n(297354),
    m = n(256464),
    g = n(982770),
    A = n(461158),
    x = n(81453),
    h = n(289882),
    p = n(427887),
    T = n(222323),
    E = n(411476),
    S = n(985018);
let f = (0, l.t_)(r.X.CHAT_PANEL, {
        useTitle: () => S.intl.string(S.t["/VQax8"]),
        buildLayout: () => [g.M, u.f, _.z, p.J, x.n, T.p, E.U, A.W, h.o, m.c],
    }),
    C = [
        {
            badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: s.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: c.L,
        },
    ],
    b = (0, l.i4)(r.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["/VQax8"]),
        icon: i.ChatIcon,
        usePredicate: () => !(0, o.Ci)("ChatSidebarItem"),
        useMenu: d.A,
        getDismissibleBadges: () => C,
        buildLayout: () => [f],
    });
