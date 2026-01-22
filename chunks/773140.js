i.d(e, { q: () => O });
var n = i(934551),
    l = i(419954),
    s = i(430452),
    r = i(780964),
    u = i(358776),
    a = i(71995),
    o = i(573858),
    T = i(490107),
    A = i(945928),
    S = i(108804),
    E = i(198987),
    d = i(315943),
    _ = i(475061),
    I = i(531525),
    g = i(985018);
let c = (0, l.t_)(r.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    N = (0, l.t_)(r.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [_.p, A.Q, o.i, d.H, E.t, S.U, T.r],
    }),
    O = (0, l.i4)(r.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => s.A.isSupported(),
        icon: n.MicrophoneIcon,
        getLegacySearchKey: () => ((0, u.qz)("VoiceAndVideoPanel") ? void 0 : I.H.VOICE_AND_VIDEO),
        buildLayout: () => [(0, u.qz)("VoiceAndVideoPanel") ? N : c],
    });
