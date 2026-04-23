"use strict";
n.d(t, { A: () => H, n: () => B });
var r = n(627968),
    i = n(64700),
    s = n(808380),
    a = n(311907),
    o = n(687966),
    l = n(39623),
    u = n(833349),
    c = n(765379),
    d = n(960076),
    _ = n(709309),
    f = n(359549),
    p = n(566021),
    h = n(284525),
    E = n(913948),
    m = n(648246),
    g = n(793574),
    A = n(627363),
    I = n(308335),
    T = n(773669),
    S = n(790381),
    y = n(266080),
    N = n(403362),
    v = n(939341),
    C = n(576757),
    O = n(202195),
    R = n(583846),
    b = n(821988),
    D = n(329575),
    L = n(434200),
    w = n(176563),
    M = n(322789),
    P = n(506326),
    x = n(910692),
    k = n(18282),
    U = n(299846),
    G = n(652215),
    F = n(985018);
let V = [...M.n, P.Yq],
    B = {
        [s.Y.DESKTOP]: null,
        [s.Y.LINUX]: null,
        [s.Y.MACOS]: null,
        [s.Y.NINTENDO]: null,
        [s.Y.IOS]: null,
        [s.Y.ANDROID]: null,
        [s.Y.XBOX]: y.A,
        [s.Y.PLAYSTATION]: S.A,
    },
    H = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: S,
                onReaction: y,
                onVoiceChannelPreview: M,
                onUserPopoutClosed: H,
                trackRankingItemInteraction: j,
            } = e,
            { largeImage: Y } = (0, v.nO)({ entry: n }),
            { user: W, details: K, appName: $, activity: z, embeddedActivity: q } = (0, U.u)(n),
            { primaryColor: X, secondaryColor: Q } = (0, w.A)(Y?.src),
            Z = (0, a.bG)([T.default], () => T.default.locale),
            { streamPreviewUrl: J, stream: ee } = (0, O.A)(n),
            { displayParticipants: et, participant1: en, participant2: er, numOtherParticipants: ei } = (0, C.A)(n, 3),
            es = n.extra.platform,
            ea = null != es ? B[es] : null,
            eo = es === s.Y.XBOX ? G.fg2.XBOX : es === s.Y.PLAYSTATION ? G.fg2.PLAYSTATION : void 0,
            el = (0, L.A)(eo),
            { data: eu } = (0, A.YY)(n.extra.application_id),
            ec = (0, _.A)("member_list_gaming_content_popout", n.extra.application_id),
            ed = (0, f.J)(eu),
            e_ = (0, I.o)(z?.application_id ?? q?.applicationId ?? eu?.id),
            ef = i.useCallback(
                (e) => {
                    if (Y?.src == null || null == t || null == W) return;
                    let r =
                        ei > 0
                            ? (0, D.v$)({ entry: n, channel: t, users: [en, er], countOthers: ei })
                            : (0, D.op)(n, t, W);
                    return (0, b.p6)({
                        entry: n,
                        applicationImageSrc: Y?.src,
                        avatarSrcs: et.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, R.As)(n, Z),
                        colors: [X, Q],
                        channelId: e,
                    });
                },
                [Y?.src, t, et, n, Z, ei, en, er, X, Q, W],
            );
        if (null == W) return null;
        let ep = (0, r.jsx)(P.mG, {
                location: null == J ? P.N5.POPOUT : P.N5.STREAMING_POPOUT,
                children: V.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            eh =
                null == ee
                    ? (0, r.jsx)(x.BC, {
                          channel: t,
                          headerIcons:
                              null == ea
                                  ? null
                                  : (0, r.jsx)(k.A, { onClick: el, Icon: ea, "aria-label": F.intl.string(F.t.YR4cHH) }),
                          userDescription: (0, R.JM)(n) ? F.t.vPg1JT : F.t.rPqqts,
                          title: $,
                          subtitle: K,
                          badges: ep,
                          entry: n,
                          disableGameProfileLinks: S,
                          onUserPopoutClosed: H,
                          trackRankingItemInteraction: j,
                          children:
                              ec.length > 0
                                  ? (0, r.jsx)(E.A, { distributorCTAConfigs: ec, buttonVariant: "overlay-primary" })
                                  : null,
                      })
                    : (0, r.jsx)(x.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: K,
                          badges: ep,
                          userDescription: F.t["6oWFUN"],
                          entry: n,
                          stream: ee,
                          onUserPopoutClosed: H,
                          trackRankingItemInteraction: j,
                          children:
                              ec.length > 0
                                  ? (0, r.jsx)(E.A, { distributorCTAConfigs: ec, buttonVariant: "overlay-primary" })
                                  : null,
                      }),
            eE =
                !e_ && ed
                    ? (0, r.jsx)(
                          p.A,
                          { application: eu, analyticsLocation: g.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            em = [
                null == eE && ((0, u.A)(z, G.jUm.JOIN) || (0, c.A)(z))
                    ? (0, r.jsx)(h.A, { activity: z, user: W, variant: "primary", size: "md", icon: o._ }, "join")
                    : null,
                (0, d.A)(z)
                    ? (0, r.jsx)(m.A, { activity: z, size: "md", variant: "primary", icon: l.b }, "watch")
                    : null,
                eE,
            ].filter(N.Vq);
        return (0, r.jsxs)(x.YN, {
            children: [
                eh,
                (0, r.jsx)(x.Eh, {
                    children: (0, r.jsx)(x.fD, {
                        onReaction: y,
                        onVoiceChannelPreview: M,
                        user: W,
                        channel: t,
                        generateReactionImage: ef,
                        reactionImageAltText: (0, D.uG)(n, W),
                        entry: n,
                        buttons: em,
                    }),
                }),
            ],
        });
    };
