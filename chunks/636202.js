"use strict";
n.d(t, { A: () => B, n: () => V });
var r = n(627968),
    i = n(64700),
    s = n(808380),
    a = n(311907),
    o = n(397927),
    l = n(833349),
    u = n(765379),
    c = n(960076),
    d = n(709309),
    _ = n(359549),
    f = n(566021),
    p = n(284525),
    h = n(913948),
    m = n(648246),
    E = n(793574),
    g = n(627363),
    A = n(308335),
    I = n(773669),
    T = n(790381),
    S = n(266080),
    y = n(403362),
    v = n(939341),
    N = n(576757),
    C = n(202195),
    R = n(583846),
    O = n(821988),
    b = n(329575),
    D = n(434200),
    L = n(176563),
    w = n(322789),
    M = n(506326),
    x = n(910692),
    P = n(18282),
    k = n(299846),
    U = n(652215),
    G = n(985018);
let F = [...w.n, M.Yq],
    V = {
        [s.Y.DESKTOP]: null,
        [s.Y.LINUX]: null,
        [s.Y.MACOS]: null,
        [s.Y.NINTENDO]: null,
        [s.Y.IOS]: null,
        [s.Y.ANDROID]: null,
        [s.Y.XBOX]: S.A,
        [s.Y.PLAYSTATION]: T.A,
    },
    B = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: T,
                onReaction: S,
                onVoiceChannelPreview: w,
                onUserPopoutClosed: B,
                trackRankingItemInteraction: H,
            } = e,
            { largeImage: j } = (0, v.nO)({ entry: n }),
            { user: Y, details: W, appName: K, activity: $, embeddedActivity: z } = (0, k.u)(n),
            { primaryColor: q, secondaryColor: Z } = (0, L.A)(j?.src),
            X = (0, a.bG)([I.default], () => I.default.locale),
            { streamPreviewUrl: Q, stream: J } = (0, C.A)(n),
            { displayParticipants: ee, participant1: et, participant2: en, numOtherParticipants: er } = (0, N.A)(n, 3),
            ei = n.extra.platform,
            es = null != ei ? V[ei] : null,
            ea = ei === s.Y.XBOX ? U.fg2.XBOX : ei === s.Y.PLAYSTATION ? U.fg2.PLAYSTATION : void 0,
            eo = (0, D.A)(ea),
            { data: el } = (0, g.YY)(n.extra.application_id),
            eu = (0, d.A)("member_list_gaming_content_popout", n.extra.application_id),
            ec = (0, _.J)(el),
            ed = (0, A.o)($?.application_id ?? z?.applicationId ?? el?.id),
            e_ = i.useCallback(
                (e) => {
                    if (j?.src == null || null == t || null == Y) return;
                    let r =
                        er > 0
                            ? (0, b.v$)({ entry: n, channel: t, users: [et, en], countOthers: er })
                            : (0, b.op)(n, t, Y);
                    return (0, O.p6)({
                        entry: n,
                        applicationImageSrc: j?.src,
                        avatarSrcs: ee.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, R.As)(n, X),
                        colors: [q, Z],
                        channelId: e,
                    });
                },
                [j?.src, t, ee, n, X, er, et, en, q, Z, Y],
            );
        if (null == Y) return null;
        let ef = (0, r.jsx)(M.mG, {
                location: null == Q ? M.N5.POPOUT : M.N5.STREAMING_POPOUT,
                children: F.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            ep =
                null == J
                    ? (0, r.jsx)(x.BC, {
                          channel: t,
                          headerIcons:
                              null == es
                                  ? null
                                  : (0, r.jsx)(P.A, { onClick: eo, Icon: es, "aria-label": G.intl.string(G.t.YR4cHH) }),
                          userDescription: (0, R.JM)(n) ? G.t.vPg1JT : G.t.rPqqts,
                          title: K,
                          subtitle: W,
                          badges: ef,
                          entry: n,
                          disableGameProfileLinks: T,
                          onUserPopoutClosed: B,
                          trackRankingItemInteraction: H,
                          children:
                              eu.length > 0
                                  ? (0, r.jsx)(h.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      })
                    : (0, r.jsx)(x.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: W,
                          badges: ef,
                          userDescription: G.t["6oWFUN"],
                          entry: n,
                          stream: J,
                          onUserPopoutClosed: B,
                          trackRankingItemInteraction: H,
                          children:
                              eu.length > 0
                                  ? (0, r.jsx)(h.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      }),
            eh =
                !ed && ec
                    ? (0, r.jsx)(
                          f.A,
                          { application: el, analyticsLocation: E.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            em = [
                null == eh && ((0, l.A)($, U.jUm.JOIN) || (0, u.A)($))
                    ? (0, r.jsx)(p.A, { activity: $, user: Y, variant: "primary", size: "md", icon: o._xR }, "join")
                    : null,
                (0, c.A)($)
                    ? (0, r.jsx)(m.A, { activity: $, size: "md", variant: "primary", icon: o.bMW }, "watch")
                    : null,
                eh,
            ].filter(y.Vq);
        return (0, r.jsxs)(x.YN, {
            children: [
                ep,
                (0, r.jsx)(x.Eh, {
                    children: (0, r.jsx)(x.fD, {
                        onReaction: S,
                        onVoiceChannelPreview: w,
                        user: Y,
                        channel: t,
                        generateReactionImage: e_,
                        reactionImageAltText: (0, b.uG)(n, Y),
                        entry: n,
                        buttons: em,
                    }),
                }),
            ],
        });
    };
