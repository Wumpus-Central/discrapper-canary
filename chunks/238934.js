n.d(t, { g: () => C });
var i = n(934551),
    s = n(554146),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(358776),
    d = n(850060),
    c = n(19462),
    u = n(895965),
    m = n(326585),
    g = n(105244),
    _ = n(95454),
    x = n(340962),
    A = n(268305),
    h = n(205310),
    p = n(55899),
    T = n(169783),
    f = n(153088),
    S = n(985018);
let E = (0, l.t_)(r.X.CHAT_PANEL, {
        useTitle: () => S.intl.string(S.t["/VQax8"]),
        buildLayout: () => [_.M, u.f, m.z, p.J, A.n, T.p, f.U, x.W, h.o, g.c],
    }),
    b = [
        {
            badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: s.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: c.L,
        },
    ],
    C = (0, l.i4)(r.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["/VQax8"]),
        icon: i.ChatIcon,
        usePredicate: () => !(0, o.Ci)("ChatSidebarItem"),
        useMenu: d.A,
        getDismissibleBadges: () => b,
        buildLayout: () => [E],
    });
