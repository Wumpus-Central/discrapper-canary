"use strict";
n.d(t, { A: () => F, n: () => G });
var r = n(627968),
    i = n(64700),
    s = n(808380),
    a = n(311907),
    o = n(397927),
    l = n(833349),
    u = n(765379),
    c = n(960076),
    d = n(359549),
    _ = n(566021),
    f = n(284525),
    p = n(648246),
    h = n(793574),
    m = n(627363),
    E = n(308335),
    g = n(773669),
    A = n(790381),
    I = n(266080),
    T = n(403362),
    S = n(939341),
    y = n(576757),
    v = n(202195),
    N = n(583846),
    C = n(821988),
    b = n(329575),
    R = n(434200),
    O = n(176563),
    D = n(322789),
    L = n(506326),
    w = n(910692),
    x = n(18282),
    M = n(299846),
    P = n(652215),
    k = n(985018);
let U = [...D.n, L.Yq],
    G = {
        [s.Y.DESKTOP]: null,
        [s.Y.LINUX]: null,
        [s.Y.MACOS]: null,
        [s.Y.NINTENDO]: null,
        [s.Y.IOS]: null,
        [s.Y.ANDROID]: null,
        [s.Y.XBOX]: I.A,
        [s.Y.PLAYSTATION]: A.A,
    },
    F = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: A,
                onReaction: I,
                onVoiceChannelPreview: D,
                onUserPopoutClosed: F,
                trackRankingItemInteraction: V,
            } = e,
            { largeImage: B } = (0, S.nO)({ entry: n }),
            { user: H, details: j, appName: Y, activity: W, embeddedActivity: K } = (0, M.u)(n),
            { primaryColor: z, secondaryColor: $ } = (0, O.A)(B?.src),
            q = (0, a.bG)([g.default], () => g.default.locale),
            { streamPreviewUrl: Z, stream: X } = (0, v.A)(n),
            { displayParticipants: Q, participant1: J, participant2: ee, numOtherParticipants: et } = (0, y.A)(n, 3),
            en = n.extra.platform,
            er = null != en ? G[en] : null,
            ei = en === s.Y.XBOX ? P.fg2.XBOX : en === s.Y.PLAYSTATION ? P.fg2.PLAYSTATION : void 0,
            es = (0, R.A)(ei),
            { data: ea } = (0, m.YY)(n.extra.application_id),
            eo = (0, d.J)(ea),
            el = (0, E.o)(W?.application_id ?? K?.applicationId ?? ea?.id),
            eu = i.useCallback(
                (e) => {
                    if (B?.src == null || null == t || null == H) return;
                    let r =
                        et > 0
                            ? (0, b.v$)({ entry: n, channel: t, users: [J, ee], countOthers: et })
                            : (0, b.op)(n, t, H);
                    return (0, C.p6)({
                        entry: n,
                        applicationImageSrc: B?.src,
                        avatarSrcs: Q.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, N.As)(n, q),
                        colors: [z, $],
                        channelId: e,
                    });
                },
                [B?.src, t, Q, n, q, et, J, ee, z, $, H],
            );
        if (null == H) return null;
        let ec = (0, r.jsx)(L.mG, {
                location: null == Z ? L.N5.POPOUT : L.N5.STREAMING_POPOUT,
                children: U.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            ed =
                null == X
                    ? (0, r.jsx)(w.BC, {
                          channel: t,
                          headerIcons:
                              null == er
                                  ? null
                                  : (0, r.jsx)(x.A, { onClick: es, Icon: er, "aria-label": k.intl.string(k.t.YR4cHH) }),
                          userDescription: (0, N.JM)(n) ? k.t.vPg1JT : k.t.rPqqts,
                          title: Y,
                          subtitle: j,
                          badges: ec,
                          entry: n,
                          disableGameProfileLinks: A,
                          onUserPopoutClosed: F,
                          trackRankingItemInteraction: V,
                      })
                    : (0, r.jsx)(w.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: j,
                          badges: ec,
                          userDescription: k.t["6oWFUN"],
                          entry: n,
                          stream: X,
                          onUserPopoutClosed: F,
                          trackRankingItemInteraction: V,
                      }),
            e_ =
                !el && eo
                    ? (0, r.jsx)(
                          _.A,
                          { application: ea, analyticsLocation: h.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            ef = [
                null == e_ && ((0, l.A)(W, P.jUm.JOIN) || (0, u.A)(W))
                    ? (0, r.jsx)(f.A, { activity: W, user: H, variant: "primary", size: "md", icon: o._xR }, "join")
                    : null,
                (0, c.A)(W)
                    ? (0, r.jsx)(p.A, { activity: W, size: "md", variant: "primary", icon: o.bMW }, "watch")
                    : null,
                e_,
            ].filter(T.Vq);
        return (0, r.jsxs)(w.YN, {
            children: [
                ed,
                (0, r.jsx)(w.Eh, {
                    children: (0, r.jsx)(w.fD, {
                        onReaction: I,
                        onVoiceChannelPreview: D,
                        user: H,
                        channel: t,
                        generateReactionImage: eu,
                        reactionImageAltText: (0, b.uG)(n, H),
                        entry: n,
                        buttons: ef,
                    }),
                }),
            ],
        });
    };
