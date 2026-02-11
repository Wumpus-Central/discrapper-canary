i.d(t, { g: () => O });
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(16986),
    u = i(176817),
    o = i(74973),
    d = i(982770),
    _ = i(461158),
    T = i(81453),
    A = i(289882),
    S = i(427887),
    E = i(222323),
    c = i(411476),
    g = i(531525),
    I = i(985018);
let C = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => I.intl.string(I.t["/VQax8"]),
        buildLayout: () => [d.M, u.f, o.z, S.J, T.n, E.p, c.U, _.W, A.o],
    }),
    N = (0, l.t_)(s.X.CHAT_PANEL, {
        useTitle: () => I.intl.string(I.t["/VQax8"]),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    O = (0, l.i4)(s.X.CHAT_SIDEBAR_ITEM, {
        useTitle: () => I.intl.string(I.t["/VQax8"]),
        getLegacySearchKey: () => ((0, r.WJ)("ChatPanel") ? void 0 : g.H.CHAT),
        icon: n.ChatIcon,
        usePredicate: () => !(0, r.Ci)("ChatSidebarItem"),
        buildLayout: () => [(0, r.WJ)("ChatPanel") ? C : N],
    });
