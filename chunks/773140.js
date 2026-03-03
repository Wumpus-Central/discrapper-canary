i.d(e, { q: () => _ });
var n = i(934551),
    l = i(419954),
    s = i(430452),
    r = i(780964),
    a = i(235661),
    u = i(573858),
    o = i(490107),
    d = i(945928),
    A = i(108804),
    T = i(198987),
    S = i(315943),
    E = i(475061),
    g = i(985018);
let c = (0, l.t_)(r.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [E.p, d.Q, u.i, S.H, T.t, A.U, o.r],
    }),
    _ = (0, l.i4)(r.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => s.Ay.isSupported(),
        icon: n.MicrophoneIcon,
        useMenu: a.A,
        buildLayout: () => [c],
    });
