n.d(t, {
    Z: () => k,
    v: () => M,
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
    h = n(728345),
    m = n(584057),
    g = n(706454),
    E = n(374129),
    b = n(639351),
    y = n(823379),
    O = n(379357),
    v = n(192918),
    I = n(22211),
    T = n(561308),
    S = n(919394),
    A = n(438226),
    C = n(31074),
    N = n(206295),
    R = n(91140),
    P = n(297781),
    w = n(591853),
    D = n(410441),
    x = n(797342),
    L = n(981631),
    j = n(388032);
let M = {
        [a.z.DESKTOP]: null,
        [a.z.LINUX]: null,
        [a.z.MACOS]: null,
        [a.z.NINTENDO]: null,
        [a.z.IOS]: null,
        [a.z.ANDROID]: null,
        [a.z.XBOX]: b.Z,
        [a.z.PLAYSTATION]: E.Z,
    },
    k = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: E,
                onReaction: b,
                onVoiceChannelPreview: k,
                onUserPopoutClosed: U,
                trackRankingItemInteraction: G,
            } = e,
            { largeImage: B } = (0, O.rv)({ entry: n }),
            { user: Z, details: V, appName: F, activity: H, embeddedActivity: Y } = (0, x.n)(n),
            { primaryColor: W, secondaryColor: K } = (0, N.Z)(null == B ? void 0 : B.src),
            z = (0, o.e7)([g.default], () => g.default.locale),
            { streamPreviewUrl: q, stream: X } = (0, I.Z)(n),
            { displayParticipants: Q, participant1: J, participant2: $, numOtherParticipants: ee } = (0, v.Z)(n, 3),
            et = n.extra.platform,
            en = null != et ? M[et] : null,
            er = et === a.z.XBOX ? L.ABu.XBOX : et === a.z.PLAYSTATION ? L.ABu.PLAYSTATION : void 0,
            ei = (0, C.Z)(er),
            { data: ea } = (0, h.IX)(n.extra.application_id),
            eo = (0, d.q)(ea, "MemberListGamingContentPopout"),
            es = (0, m.L)(H, Y),
            el = i.useCallback(
                (e) => {
                    if ((null == B ? void 0 : B.src) == null || null == t || null == Z) return;
                    let r =
                        ee > 0
                            ? (0, A.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [J, $],
                                  countOthers: ee,
                              })
                            : (0, A.HV)(n, t, Z);
                    return (0, S.SO)({
                        entry: n,
                        applicationImageSrc: null == B ? void 0 : B.src,
                        avatarSrcs: Q.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, T.yh)(n, z),
                        colors: [W, K],
                        channelId: e,
                    });
                },
                [null == B ? void 0 : B.src, t, Q, n, z, ee, J, $, W, K, Z],
            );
        if (null == Z) return null;
        let ec = (0, r.jsx)(P.Gk, {
                location: null == q ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
                children: R.W.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            eu =
                null == X
                    ? (0, r.jsx)(w.wG, {
                          channel: t,
                          headerIcons:
                              null == en
                                  ? null
                                  : (0, r.jsx)(D.Z, {
                                        onClick: ei,
                                        Icon: en,
                                        "aria-label": j.intl.string(j.t.YR4cHB),
                                    }),
                          userDescription: (0, T.kr)(n) ? j.t.vPg1JS : j.t.rPqqtr,
                          title: F,
                          subtitle: V,
                          badges: ec,
                          entry: n,
                          disableGameProfileLinks: E,
                          onUserPopoutClosed: U,
                          trackRankingItemInteraction: G,
                      })
                    : (0, r.jsx)(w.jL, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: V,
                          badges: ec,
                          userDescription: j.t["6oWFUF"],
                          entry: n,
                          stream: X,
                          onUserPopoutClosed: U,
                          trackRankingItemInteraction: G,
                      }),
            ed =
                !es && eo
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              application: ea,
                              location: "MemberListGamingContentPopout",
                          },
                          "cloud-play",
                      )
                    : null,
            ef = [
                null == ed && ((0, l.Z)(H, L.xjy.JOIN) || (0, c.Z)(H))
                    ? (0, r.jsx)(
                          _.Z,
                          {
                              activity: H,
                              user: Z,
                              variant: "primary",
                              size: "md",
                              icon: s.iWm,
                          },
                          "join",
                      )
                    : null,
                (0, u.Z)(H)
                    ? (0, r.jsx)(
                          p.Z,
                          {
                              activity: H,
                              size: "md",
                              variant: "primary",
                              icon: s.tEF,
                          },
                          "watch",
                      )
                    : null,
                ed,
            ].filter(y.lm);
        return (0, r.jsxs)(w.yR, {
            children: [
                eu,
                (0, r.jsx)(w.St, {
                    children: (0, r.jsx)(w.WT, {
                        onReaction: b,
                        onVoiceChannelPreview: k,
                        user: Z,
                        channel: t,
                        generateReactionImage: el,
                        reactionImageAltText: (0, A.IS)(n, Z),
                        entry: n,
                        buttons: ef,
                    }),
                }),
            ],
        });
    };
