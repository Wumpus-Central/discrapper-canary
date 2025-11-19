n.d(t, {
    Z: () => U,
    v: () => j,
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
    _ = n(429589),
    p = n(757182),
    h = n(100527),
    m = n(728345),
    g = n(584057),
    E = n(706454),
    b = n(374129),
    y = n(639351),
    O = n(823379),
    v = n(379357),
    I = n(192918),
    T = n(22211),
    S = n(561308),
    A = n(919394),
    C = n(438226),
    N = n(31074),
    R = n(206295),
    P = n(91140),
    D = n(297781),
    w = n(591853),
    L = n(410441),
    x = n(797342),
    M = n(981631),
    k = n(388032);
let j = {
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
                onVoiceChannelPreview: B,
                onUserPopoutClosed: Z,
                trackRankingItemInteraction: F,
            } = e,
            { largeImage: V } = (0, v.rv)({ entry: y }),
            { user: H, details: Y, appName: W, activity: K, embeddedActivity: z } = (0, x.n)(y),
            { primaryColor: q, secondaryColor: X } = (0, R.Z)(null == V ? void 0 : V.src),
            Q = (0, o.e7)([E.default], () => E.default.locale),
            { streamPreviewUrl: J, stream: $ } = (0, T.Z)(y),
            { displayParticipants: ee, participant1: et, participant2: en, numOtherParticipants: er } = (0, I.Z)(y, 3),
            ei = y.extra.platform,
            ea = null != ei ? j[ei] : null,
            eo = ei === a.z.XBOX ? M.ABu.XBOX : ei === a.z.PLAYSTATION ? M.ABu.PLAYSTATION : void 0,
            es = (0, N.Z)(eo),
            { data: el } = (0, m.IX)(y.extra.application_id),
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
                        timestamp: (0, S.yh)(y, Q),
                        colors: [q, X],
                        channelId: e,
                    });
                },
                [null == V ? void 0 : V.src, b, ee, y, Q, er, et, en, q, X, H],
            );
        if (null == H) return null;
        let ef = (0, r.jsx)(D.Gk, {
                location: null == J ? D.Gt.POPOUT : D.Gt.STREAMING_POPOUT,
                children: P.W.map((e, t) => (0, r.jsx)(e, { entry: y }, t)),
            }),
            e_ =
                null == $
                    ? (0, r.jsx)(w.wG, {
                          channel: b,
                          headerIcons:
                              null == ea
                                  ? null
                                  : (0, r.jsx)(L.Z, {
                                        onClick: es,
                                        Icon: ea,
                                        "aria-label": k.intl.string(k.t.YR4cHH),
                                    }),
                          userDescription: (0, S.kr)(y) ? k.t.vPg1JT : k.t.rPqqts,
                          title: W,
                          subtitle: Y,
                          badges: ef,
                          entry: y,
                          disableGameProfileLinks: U,
                          onUserPopoutClosed: Z,
                          trackRankingItemInteraction: F,
                      })
                    : (0, r.jsx)(w.jL, {
                          channel: b,
                          title: y.extra.game_name,
                          subtitle: Y,
                          badges: ef,
                          userDescription: k.t["6oWFUN"],
                          entry: y,
                          stream: $,
                          onUserPopoutClosed: Z,
                          trackRankingItemInteraction: F,
                      }),
            ep =
                !eu && ec
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              application: el,
                              analyticsLocation: h.Z.MEMBER_LIST_GAMING_CONTENT_POPOUT,
                          },
                          "cloud-play",
                      )
                    : null,
            eh = [
                null == ep && ((0, l.Z)(K, M.xjy.JOIN) || (0, c.Z)(K))
                    ? (0, r.jsx)(
                          _.Z,
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
                          p.Z,
                          {
                              activity: K,
                              size: "md",
                              variant: "primary",
                              icon: s.tEF,
                          },
                          "watch",
                      )
                    : null,
                ep,
            ].filter(O.lm);
        return (0, r.jsxs)(w.yR, {
            children: [
                e_,
                (0, r.jsx)(w.St, {
                    children: (0, r.jsx)(w.WT, {
                        onReaction: G,
                        onVoiceChannelPreview: B,
                        user: H,
                        channel: b,
                        generateReactionImage: ed,
                        reactionImageAltText: (0, C.IS)(y, H),
                        entry: y,
                        buttons: eh,
                    }),
                }),
            ],
        });
    };
