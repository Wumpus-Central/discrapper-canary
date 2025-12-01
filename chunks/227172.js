n.d(t, {
    Z: () => U,
    v: () => k,
});
var r = n(54381),
    i = n(473749),
    a = n(758713),
    o = n(442837),
    s = n(481060),
    l = n(620662),
    c = n(841784),
    u = n(420660),
    d = n(206074),
    f = n(145843),
    p = n(429589),
    _ = n(757182),
    m = n(100527),
    h = n(728345),
    g = n(584057),
    E = n(706454),
    b = n(374129),
    y = n(639351),
    O = n(823379),
    v = n(379357),
    S = n(192918),
    I = n(22211),
    T = n(561308),
    A = n(919394),
    C = n(438226),
    N = n(31074),
    P = n(206295),
    R = n(159862),
    w = n(297781),
    D = n(591853),
    x = n(410441),
    L = n(797342),
    j = n(981631),
    M = n(388032);
let k = {
        [a.z.DESKTOP]: null,
        [a.z.LINUX]: null,
        [a.z.MACOS]: null,
        [a.z.NINTENDO]: null,
        [a.z.IOS]: null,
        [a.z.ANDROID]: null,
        [a.z.XBOX]: y.Z,
        [a.z.PLAYSTATION]: b.Z,
    },
    U = (e) => {
        var t, n;
        let {
                channel: b,
                entry: y,
                disableGameProfileLinks: U,
                onReaction: G,
                onVoiceChannelPreview: Z,
                onUserPopoutClosed: B,
                trackRankingItemInteraction: F,
            } = e,
            { largeImage: V } = (0, v.rv)({ entry: y }),
            { user: H, details: Y, appName: W, activity: K, embeddedActivity: z } = (0, L.n)(y),
            { primaryColor: q, secondaryColor: Q } = (0, P.Z)(null == V ? void 0 : V.src),
            X = (0, o.e7)([E.default], () => E.default.locale),
            { streamPreviewUrl: J, stream: $ } = (0, I.Z)(y),
            { displayParticipants: ee, participant1: et, participant2: en, numOtherParticipants: er } = (0, S.Z)(y, 3),
            ei = y.extra.platform,
            ea = null != ei ? k[ei] : null,
            eo = ei === a.z.XBOX ? j.ABu.XBOX : ei === a.z.PLAYSTATION ? j.ABu.PLAYSTATION : void 0,
            es = (0, N.Z)(eo),
            { data: el } = (0, h.IX)(y.extra.application_id),
            ec = (0, d.q)(el),
            eu = (0, g.L)(
                null !=
                    (n = null != (t = null == K ? void 0 : K.application_id) ? t : null == z ? void 0 : z.applicationId)
                    ? n
                    : null == el
                      ? void 0
                      : el.id,
            ),
            ed = i.useCallback(
                (e) => {
                    if ((null == V ? void 0 : V.src) == null || null == b || null == H) return;
                    let t =
                        er > 0
                            ? (0, C.VY)({
                                  entry: y,
                                  channel: b,
                                  users: [et, en],
                                  countOthers: er,
                              })
                            : (0, C.HV)(y, b, H);
                    return (0, A.SO)({
                        entry: y,
                        applicationImageSrc: null == V ? void 0 : V.src,
                        avatarSrcs: ee.map((e) => e.getAvatarURL(b.guild_id, 128)),
                        description: t,
                        timestamp: (0, T.yh)(y, X),
                        colors: [q, Q],
                        channelId: e,
                    });
                },
                [null == V ? void 0 : V.src, b, ee, y, X, er, et, en, q, Q, H],
            );
        if (null == H) return null;
        let ef = (0, r.jsx)(w.Gk, {
                location: null == J ? w.Gt.POPOUT : w.Gt.STREAMING_POPOUT,
                children: R.W.map((e, t) => (0, r.jsx)(e, { entry: y }, t)),
            }),
            ep =
                null == $
                    ? (0, r.jsx)(D.wG, {
                          channel: b,
                          headerIcons:
                              null == ea
                                  ? null
                                  : (0, r.jsx)(x.Z, {
                                        onClick: es,
                                        Icon: ea,
                                        "aria-label": M.intl.string(M.t.YR4cHH),
                                    }),
                          userDescription: (0, T.kr)(y) ? M.t.vPg1JT : M.t.rPqqts,
                          title: W,
                          subtitle: Y,
                          badges: ef,
                          entry: y,
                          disableGameProfileLinks: U,
                          onUserPopoutClosed: B,
                          trackRankingItemInteraction: F,
                      })
                    : (0, r.jsx)(D.jL, {
                          channel: b,
                          title: y.extra.game_name,
                          subtitle: Y,
                          badges: ef,
                          userDescription: M.t["6oWFUN"],
                          entry: y,
                          stream: $,
                          onUserPopoutClosed: B,
                          trackRankingItemInteraction: F,
                      }),
            e_ =
                !eu && ec
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              application: el,
                              analyticsLocation: m.Z.MEMBER_LIST_GAMING_CONTENT_POPOUT,
                          },
                          "cloud-play",
                      )
                    : null,
            em = [
                null == e_ && ((0, l.Z)(K, j.xjy.JOIN) || (0, c.Z)(K))
                    ? (0, r.jsx)(
                          p.Z,
                          {
                              activity: K,
                              user: H,
                              variant: "primary",
                              size: "md",
                              icon: s.iWm,
                          },
                          "join",
                      )
                    : null,
                (0, u.Z)(K)
                    ? (0, r.jsx)(
                          _.Z,
                          {
                              activity: K,
                              size: "md",
                              variant: "primary",
                              icon: s.tEF,
                          },
                          "watch",
                      )
                    : null,
                e_,
            ].filter(O.lm);
        return (0, r.jsxs)(D.yR, {
            children: [
                ep,
                (0, r.jsx)(D.St, {
                    children: (0, r.jsx)(D.WT, {
                        onReaction: G,
                        onVoiceChannelPreview: Z,
                        user: H,
                        channel: b,
                        generateReactionImage: ed,
                        reactionImageAltText: (0, C.IS)(y, H),
                        entry: y,
                        buttons: em,
                    }),
                }),
            ],
        });
    };
