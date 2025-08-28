n.d(t, {
    Z: () => U,
    v: () => k,
});
var r = n(951288),
    i = n(647438),
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
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: b,
                onReaction: y,
                onVoiceChannelPreview: U,
                onUserPopoutClosed: G,
                trackRankingItemInteraction: B,
            } = e,
            { largeImage: Z } = (0, v.rv)({ entry: n }),
            { user: F, details: V, appName: H, activity: Y, embeddedActivity: W } = (0, L.n)(n),
            { primaryColor: K, secondaryColor: z } = (0, R.Z)(null == Z ? void 0 : Z.src),
            q = (0, o.e7)([E.default], () => E.default.locale),
            { streamPreviewUrl: X, stream: Q } = (0, T.Z)(n),
            { displayParticipants: J, participant1: $, participant2: ee, numOtherParticipants: et } = (0, I.Z)(n, 3),
            en = n.extra.platform,
            er = null != en ? k[en] : null,
            ei = en === a.z.XBOX ? j.ABu.XBOX : en === a.z.PLAYSTATION ? j.ABu.PLAYSTATION : void 0,
            ea = (0, N.Z)(ei),
            { data: eo } = (0, m.IX)(n.extra.application_id),
            es = (0, d.q)(eo, "MemberListGamingContentPopout"),
            el = (0, g.L)(Y, W),
            ec = i.useCallback(
                (e) => {
                    if ((null == Z ? void 0 : Z.src) == null || null == t || null == F) return;
                    let r =
                        et > 0
                            ? (0, C.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [$, ee],
                                  countOthers: et,
                              })
                            : (0, C.HV)(n, t, F);
                    return (0, A.SO)({
                        entry: n,
                        applicationImageSrc: null == Z ? void 0 : Z.src,
                        avatarSrcs: J.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, S.yh)(n, q),
                        colors: [K, z],
                        channelId: e,
                    });
                },
                [null == Z ? void 0 : Z.src, t, J, n, q, et, $, ee, K, z, F],
            );
        if (null == F) return null;
        let eu = (0, r.jsx)(w.Gk, {
                location: null == X ? w.Gt.POPOUT : w.Gt.STREAMING_POPOUT,
                children: P.W.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            ed =
                null == Q
                    ? (0, r.jsx)(D.wG, {
                          channel: t,
                          headerIcons:
                              null == er
                                  ? null
                                  : (0, r.jsx)(x.Z, {
                                        onClick: ea,
                                        Icon: er,
                                        "aria-label": M.intl.string(M.t.YR4cHB),
                                    }),
                          userDescription: (0, S.kr)(n) ? M.t.vPg1JS : M.t.rPqqtr,
                          title: H,
                          subtitle: V,
                          badges: eu,
                          entry: n,
                          disableGameProfileLinks: b,
                          onUserPopoutClosed: G,
                          trackRankingItemInteraction: B,
                      })
                    : (0, r.jsx)(D.jL, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: V,
                          badges: eu,
                          userDescription: M.t["6oWFUF"],
                          entry: n,
                          stream: Q,
                          onUserPopoutClosed: G,
                          trackRankingItemInteraction: B,
                      }),
            ef =
                !el && es
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              application: eo,
                              analyticsLocation: h.Z.MEMBER_LIST_GAMING_CONTENT_POPOUT,
                          },
                          "cloud-play",
                      )
                    : null,
            e_ = [
                null == ef && ((0, l.Z)(Y, j.xjy.JOIN) || (0, c.Z)(Y))
                    ? (0, r.jsx)(
                          _.Z,
                          {
                              activity: Y,
                              user: F,
                              variant: "primary",
                              size: "md",
                              icon: s.iWm,
                          },
                          "join",
                      )
                    : null,
                (0, u.Z)(Y)
                    ? (0, r.jsx)(
                          p.Z,
                          {
                              activity: Y,
                              size: "md",
                              variant: "primary",
                              icon: s.tEF,
                          },
                          "watch",
                      )
                    : null,
                ef,
            ].filter(O.lm);
        return (0, r.jsxs)(D.yR, {
            children: [
                ed,
                (0, r.jsx)(D.St, {
                    children: (0, r.jsx)(D.WT, {
                        onReaction: y,
                        onVoiceChannelPreview: U,
                        user: F,
                        channel: t,
                        generateReactionImage: ec,
                        reactionImageAltText: (0, C.IS)(n, F),
                        entry: n,
                        buttons: e_,
                    }),
                }),
            ],
        });
    };
