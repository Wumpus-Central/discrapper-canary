"use strict";
n.d(t, { A: () => V, n: () => G });
var r = n(627968),
    i = n(64700),
    a = n(808380),
    s = n(311907),
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
    g = n(308335),
    E = n(773669),
    A = n(790381),
    I = n(266080),
    T = n(403362),
    y = n(939341),
    S = n(576757),
    v = n(202195),
    C = n(583846),
    b = n(821988),
    N = n(329575),
    R = n(434200),
    O = n(176563),
    D = n(322789),
    L = n(506326),
    w = n(910692),
    x = n(18282),
    P = n(299846),
    M = n(652215),
    k = n(985018);
let U = [...D.n, L.Yq],
    G = {
        [a.Y.DESKTOP]: null,
        [a.Y.LINUX]: null,
        [a.Y.MACOS]: null,
        [a.Y.NINTENDO]: null,
        [a.Y.IOS]: null,
        [a.Y.ANDROID]: null,
        [a.Y.XBOX]: I.A,
        [a.Y.PLAYSTATION]: A.A,
    },
    V = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: A,
                onReaction: I,
                onVoiceChannelPreview: D,
                onUserPopoutClosed: V,
                trackRankingItemInteraction: F,
            } = e,
            { largeImage: B } = (0, y.nO)({ entry: n }),
            { user: j, details: H, appName: Y, activity: W, embeddedActivity: K } = (0, P.u)(n),
            { primaryColor: z, secondaryColor: $ } = (0, O.A)(B?.src),
            q = (0, s.bG)([E.default], () => E.default.locale),
            { streamPreviewUrl: Z, stream: Q } = (0, v.A)(n),
            { displayParticipants: X, participant1: J, participant2: ee, numOtherParticipants: et } = (0, S.A)(n, 3),
            en = n.extra.platform,
            er = null != en ? G[en] : null,
            ei = en === a.Y.XBOX ? M.fg2.XBOX : en === a.Y.PLAYSTATION ? M.fg2.PLAYSTATION : void 0,
            ea = (0, R.A)(ei),
            { data: es } = (0, m.YY)(n.extra.application_id),
            eo = (0, d.J)(es),
            el = (0, g.o)(W?.application_id ?? K?.applicationId ?? es?.id),
            eu = i.useCallback(
                (e) => {
                    if (B?.src == null || null == t || null == j) return;
                    let r =
                        et > 0
                            ? (0, N.v$)({ entry: n, channel: t, users: [J, ee], countOthers: et })
                            : (0, N.op)(n, t, j);
                    return (0, b.p6)({
                        entry: n,
                        applicationImageSrc: B?.src,
                        avatarSrcs: X.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, C.As)(n, q),
                        colors: [z, $],
                        channelId: e,
                    });
                },
                [B?.src, t, X, n, q, et, J, ee, z, $, j],
            );
        if (null == j) return null;
        let ec = (0, r.jsx)(L.mG, {
                location: null == Z ? L.N5.POPOUT : L.N5.STREAMING_POPOUT,
                children: U.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            ed =
                null == Q
                    ? (0, r.jsx)(w.BC, {
                          channel: t,
                          headerIcons:
                              null == er
                                  ? null
                                  : (0, r.jsx)(x.A, { onClick: ea, Icon: er, "aria-label": k.intl.string(k.t.YR4cHH) }),
                          userDescription: (0, C.JM)(n) ? k.t.vPg1JT : k.t.rPqqts,
                          title: Y,
                          subtitle: H,
                          badges: ec,
                          entry: n,
                          disableGameProfileLinks: A,
                          onUserPopoutClosed: V,
                          trackRankingItemInteraction: F,
                      })
                    : (0, r.jsx)(w.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: H,
                          badges: ec,
                          userDescription: k.t["6oWFUN"],
                          entry: n,
                          stream: Q,
                          onUserPopoutClosed: V,
                          trackRankingItemInteraction: F,
                      }),
            e_ =
                !el && eo
                    ? (0, r.jsx)(
                          _.A,
                          { application: es, analyticsLocation: h.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            ef = [
                null == e_ && ((0, l.A)(W, M.jUm.JOIN) || (0, u.A)(W))
                    ? (0, r.jsx)(f.A, { activity: W, user: j, variant: "primary", size: "md", icon: o._xR }, "join")
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
                        user: j,
                        channel: t,
                        generateReactionImage: eu,
                        reactionImageAltText: (0, N.uG)(n, j),
                        entry: n,
                        buttons: ef,
                    }),
                }),
            ],
        });
    };
