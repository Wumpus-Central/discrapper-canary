"use strict";
n.d(t, { A: () => B, n: () => F });
var i = n(627968),
    l = n(64700),
    s = n(808380),
    r = n(311907),
    a = n(687966),
    o = n(39623),
    c = n(833349),
    u = n(765379),
    d = n(960076),
    h = n(709309),
    m = n(359549),
    p = n(566021),
    f = n(284525),
    g = n(913948),
    _ = n(648246),
    x = n(793574),
    A = n(627363),
    C = n(308335),
    E = n(773669),
    I = n(790381),
    v = n(266080),
    y = n(403362),
    S = n(939341),
    b = n(576757),
    N = n(202195),
    T = n(583846),
    j = n(821988),
    R = n(329575),
    w = n(434200),
    L = n(176563),
    M = n(322789),
    k = n(506326),
    O = n(910692),
    P = n(18282),
    D = n(299846),
    U = n(652215),
    V = n(985018);
let G = [...M.n, k.Yq],
    F = {
        [s.Y.DESKTOP]: null,
        [s.Y.LINUX]: null,
        [s.Y.MACOS]: null,
        [s.Y.NINTENDO]: null,
        [s.Y.IOS]: null,
        [s.Y.ANDROID]: null,
        [s.Y.XBOX]: v.A,
        [s.Y.PLAYSTATION]: I.A,
    },
    B = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: I,
                onReaction: v,
                onVoiceChannelPreview: M,
                onUserPopoutClosed: B,
                trackRankingItemInteraction: H,
            } = e,
            { largeImage: W } = (0, S.nO)({ entry: n }),
            { user: K, details: z, appName: Z, activity: q, embeddedActivity: Y } = (0, D.u)(n),
            { primaryColor: J, secondaryColor: $ } = (0, L.A)(W?.src),
            X = (0, r.bG)([E.default], () => E.default.locale),
            { streamPreviewUrl: Q, stream: ee } = (0, N.A)(n),
            { displayParticipants: et, participant1: en, participant2: ei, numOtherParticipants: el } = (0, b.A)(n, 3),
            es = n.extra.platform,
            er = null != es ? F[es] : null,
            ea = es === s.Y.XBOX ? U.fg2.XBOX : es === s.Y.PLAYSTATION ? U.fg2.PLAYSTATION : void 0,
            eo = (0, w.A)(ea),
            { data: ec } = (0, A.YY)(n.extra.application_id),
            eu = (0, h.A)("member_list_gaming_content_popout", n.extra.application_id),
            ed = (0, m.J)(ec),
            eh = (0, C.o)(q?.application_id ?? Y?.applicationId ?? ec?.id),
            em = l.useCallback(
                (e) => {
                    if (W?.src == null || null == t || null == K) return;
                    let i =
                        el > 0
                            ? (0, R.v$)({ entry: n, channel: t, users: [en, ei], countOthers: el })
                            : (0, R.op)(n, t, K);
                    return (0, j.p6)({
                        entry: n,
                        applicationImageSrc: W?.src,
                        avatarSrcs: et.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: i,
                        timestamp: (0, T.As)(n, X),
                        colors: [J, $],
                        channelId: e,
                    });
                },
                [W?.src, t, et, n, X, el, en, ei, J, $, K],
            );
        if (null == K) return null;
        let ep = (0, i.jsx)(k.mG, {
                location: null == Q ? k.N5.POPOUT : k.N5.STREAMING_POPOUT,
                children: G.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
            }),
            ef =
                null == ee
                    ? (0, i.jsx)(O.BC, {
                          channel: t,
                          headerIcons:
                              null == er
                                  ? null
                                  : (0, i.jsx)(P.A, { onClick: eo, Icon: er, "aria-label": V.intl.string(V.t.YR4cHH) }),
                          userDescription: (0, T.JM)(n) ? V.t.vPg1JT : V.t.rPqqts,
                          title: Z,
                          subtitle: z,
                          badges: ep,
                          entry: n,
                          disableGameProfileLinks: I,
                          onUserPopoutClosed: B,
                          trackRankingItemInteraction: H,
                          children:
                              eu.length > 0
                                  ? (0, i.jsx)(g.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      })
                    : (0, i.jsx)(O.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: z,
                          badges: ep,
                          userDescription: V.t["6oWFUN"],
                          entry: n,
                          stream: ee,
                          onUserPopoutClosed: B,
                          trackRankingItemInteraction: H,
                          children:
                              eu.length > 0
                                  ? (0, i.jsx)(g.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      }),
            eg =
                !eh && ed
                    ? (0, i.jsx)(
                          p.A,
                          { application: ec, analyticsLocation: x.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            e_ = [
                null == eg && ((0, c.A)(q, U.jUm.JOIN) || (0, u.A)(q))
                    ? (0, i.jsx)(f.A, { activity: q, user: K, variant: "primary", size: "md", icon: a._ }, "join")
                    : null,
                (0, d.A)(q)
                    ? (0, i.jsx)(_.A, { activity: q, size: "md", variant: "primary", icon: o.b }, "watch")
                    : null,
                eg,
            ].filter(y.Vq);
        return (0, i.jsxs)(O.YN, {
            children: [
                ef,
                (0, i.jsx)(O.Eh, {
                    children: (0, i.jsx)(O.fD, {
                        onReaction: v,
                        onVoiceChannelPreview: M,
                        user: K,
                        channel: t,
                        generateReactionImage: em,
                        reactionImageAltText: (0, R.uG)(n, K),
                        entry: n,
                        buttons: e_,
                    }),
                }),
            ],
        });
    };
