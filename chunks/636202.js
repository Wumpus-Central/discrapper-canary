"use strict";
n.d(t, { A: () => V, n: () => F });
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
    h = n(648246),
    p = n(793574),
    g = n(627363),
    E = n(308335),
    A = n(773669),
    I = n(790381),
    T = n(266080),
    y = n(403362),
    S = n(939341),
    v = n(576757),
    C = n(202195),
    b = n(583846),
    N = n(821988),
    R = n(329575),
    O = n(434200),
    D = n(176563),
    L = n(322789),
    w = n(506326),
    x = n(910692),
    P = n(18282),
    M = n(299846),
    k = n(652215),
    U = n(985018);
let G = [...L.n, w.Yq],
    F = {
        [a.Y.DESKTOP]: null,
        [a.Y.LINUX]: null,
        [a.Y.MACOS]: null,
        [a.Y.NINTENDO]: null,
        [a.Y.IOS]: null,
        [a.Y.ANDROID]: null,
        [a.Y.XBOX]: T.A,
        [a.Y.PLAYSTATION]: I.A,
    },
    V = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: I,
                onReaction: T,
                onVoiceChannelPreview: L,
                onUserPopoutClosed: V,
                trackRankingItemInteraction: B,
            } = e,
            { largeImage: j } = (0, S.nO)({ entry: n }),
            { user: H, details: Y, appName: W, activity: K, embeddedActivity: $ } = (0, M.u)(n),
            { primaryColor: z, secondaryColor: q } = (0, D.A)(j?.src),
            X = (0, s.bG)([A.default], () => A.default.locale),
            { streamPreviewUrl: Z, stream: Q } = (0, C.A)(n),
            { displayParticipants: J, participant1: ee, participant2: et, numOtherParticipants: en } = (0, v.A)(n, 3),
            er = n.extra.platform,
            ei = null != er ? F[er] : null,
            ea = er === a.Y.XBOX ? k.fg2.XBOX : er === a.Y.PLAYSTATION ? k.fg2.PLAYSTATION : void 0,
            es = (0, O.A)(ea),
            { data: eo } = (0, g.YY)(n.extra.application_id),
            el = (0, d.J)(eo),
            eu = (0, E.o)(K?.application_id ?? $?.applicationId ?? eo?.id),
            ec = i.useCallback(
                (e) => {
                    if (j?.src == null || null == t || null == H) return;
                    let r =
                        en > 0
                            ? (0, R.v$)({ entry: n, channel: t, users: [ee, et], countOthers: en })
                            : (0, R.op)(n, t, H);
                    return (0, N.p6)({
                        entry: n,
                        applicationImageSrc: j?.src,
                        avatarSrcs: J.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, b.As)(n, X),
                        colors: [z, q],
                        channelId: e,
                    });
                },
                [j?.src, t, J, n, X, en, ee, et, z, q, H],
            );
        if (null == H) return null;
        let ed = (0, r.jsx)(w.mG, {
                location: null == Z ? w.N5.POPOUT : w.N5.STREAMING_POPOUT,
                children: G.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            e_ =
                null == Q
                    ? (0, r.jsx)(x.BC, {
                          channel: t,
                          headerIcons:
                              null == ei
                                  ? null
                                  : (0, r.jsx)(P.A, { onClick: es, Icon: ei, "aria-label": U.intl.string(U.t.YR4cHH) }),
                          userDescription: (0, b.JM)(n) ? U.t.vPg1JT : U.t.rPqqts,
                          title: W,
                          subtitle: Y,
                          badges: ed,
                          entry: n,
                          disableGameProfileLinks: I,
                          onUserPopoutClosed: V,
                          trackRankingItemInteraction: B,
                      })
                    : (0, r.jsx)(x.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: Y,
                          badges: ed,
                          userDescription: U.t["6oWFUN"],
                          entry: n,
                          stream: Q,
                          onUserPopoutClosed: V,
                          trackRankingItemInteraction: B,
                      }),
            ef =
                !eu && el
                    ? (0, r.jsx)(
                          _.A,
                          { application: eo, analyticsLocation: p.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            eh = [
                null == ef && ((0, l.A)(K, k.jUm.JOIN) || (0, u.A)(K))
                    ? (0, r.jsx)(f.A, { activity: K, user: H, variant: "primary", size: "md", icon: o._xR }, "join")
                    : null,
                (0, c.A)(K)
                    ? (0, r.jsx)(h.A, { activity: K, size: "md", variant: "primary", icon: o.bMW }, "watch")
                    : null,
                ef,
            ].filter(y.Vq);
        return (0, r.jsxs)(x.YN, {
            children: [
                e_,
                (0, r.jsx)(x.Eh, {
                    children: (0, r.jsx)(x.fD, {
                        onReaction: T,
                        onVoiceChannelPreview: L,
                        user: H,
                        channel: t,
                        generateReactionImage: ec,
                        reactionImageAltText: (0, R.uG)(n, H),
                        entry: n,
                        buttons: eh,
                    }),
                }),
            ],
        });
    };
