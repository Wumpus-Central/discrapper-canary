n.d(t, {
    Z: () => w,
    v: () => k
});
var l = n(200651),
    a = n(192379),
    i = n(758713),
    r = n(442837),
    o = n(481060),
    s = n(620662),
    c = n(841784),
    d = n(420660),
    u = n(429589),
    m = n(757182),
    x = n(706454),
    h = n(374129),
    p = n(639351),
    g = n(823379),
    v = n(379357),
    C = n(192918),
    j = n(22211),
    I = n(561308),
    f = n(919394),
    P = n(438226),
    y = n(31074),
    N = n(206295),
    Z = n(91140),
    T = n(297781),
    E = n(591853),
    A = n(410441),
    _ = n(797342),
    S = n(981631),
    R = n(388032);
let k = {
        [i.z.DESKTOP]: null,
        [i.z.LINUX]: null,
        [i.z.MACOS]: null,
        [i.z.NINTENDO]: null,
        [i.z.IOS]: null,
        [i.z.ANDROID]: null,
        [i.z.XBOX]: p.Z,
        [i.z.PLAYSTATION]: h.Z
    },
    w = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: h, onReaction: p, onVoiceChannelPreview: w, onUserPopoutClosed: O, trackRankingItemInteraction: b } = e,
            { largeImage: M } = (0, v.rv)({ entry: n }),
            { user: L, details: z, appName: B, activity: H } = (0, _.n)(n),
            { primaryColor: U, secondaryColor: D } = (0, N.Z)(null == M ? void 0 : M.src),
            G = (0, r.e7)([x.default], () => x.default.locale),
            { streamPreviewUrl: F, stream: V } = (0, j.Z)(n),
            { displayParticipants: Y, participant1: q, participant2: W, numOtherParticipants: J } = (0, C.Z)(n, 3),
            X = n.extra.platform,
            K = null != X ? k[X] : null,
            $ = X === i.z.XBOX ? S.ABu.XBOX : X === i.z.PLAYSTATION ? S.ABu.PLAYSTATION : void 0,
            Q = (0, y.Z)($),
            ee = a.useCallback(
                (e) => {
                    if ((null == M ? void 0 : M.src) == null || null == t || null == L) return;
                    let l =
                        J > 0
                            ? (0, P.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [q, W],
                                  countOthers: J
                              })
                            : (0, P.HV)(n, t, L);
                    return (0, f.SO)({
                        entry: n,
                        applicationImageSrc: null == M ? void 0 : M.src,
                        avatarSrcs: Y.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: l,
                        timestamp: (0, I.yh)(n, G),
                        colors: [U, D],
                        channelId: e
                    });
                },
                [null == M ? void 0 : M.src, t, Y, n, G, J, q, W, U, D, L]
            );
        if (null == L) return null;
        let et = (0, l.jsx)(T.Gk, {
                location: null == F ? T.Gt.POPOUT : T.Gt.STREAMING_POPOUT,
                children: Z.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
            }),
            en =
                null == V
                    ? (0, l.jsx)(E.wG, {
                          channel: t,
                          headerIcons:
                              null == K
                                  ? null
                                  : (0, l.jsx)(A.Z, {
                                        onClick: Q,
                                        Icon: K,
                                        'aria-label': R.intl.string(R.t.YR4cHB)
                                    }),
                          userDescription: (0, I.kr)(n) ? R.t.vPg1JS : R.t.rPqqtr,
                          title: B,
                          subtitle: z,
                          badges: et,
                          entry: n,
                          disableGameProfileLinks: h,
                          onUserPopoutClosed: O,
                          trackRankingItemInteraction: b
                      })
                    : (0, l.jsx)(E.jL, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: z,
                          badges: et,
                          userDescription: R.t['6oWFUF'],
                          entry: n,
                          stream: V,
                          onUserPopoutClosed: O,
                          trackRankingItemInteraction: b
                      }),
            el = [
                (0, s.Z)(H, S.xjy.JOIN) || (0, c.Z)(H)
                    ? (0, l.jsx)(u.Z, {
                          activity: H,
                          user: L,
                          ButtonComponent: (e) =>
                              (0, l.jsx)(E.Ll, {
                                  IconComponent: o.iWm,
                                  ...e
                              })
                      })
                    : null,
                (0, d.Z)(H)
                    ? (0, l.jsx)(m.Z, {
                          activity: H,
                          ButtonComponent: (e) =>
                              (0, l.jsx)(E.Ll, {
                                  IconComponent: o.tEF,
                                  ...e
                              })
                      })
                    : null
            ].filter(g.lm);
        return (0, l.jsxs)(E.yR, {
            children: [
                en,
                (0, l.jsx)(E.St, {
                    children: (0, l.jsx)(E.WT, {
                        onReaction: p,
                        onVoiceChannelPreview: w,
                        user: L,
                        channel: t,
                        generateReactionImage: ee,
                        reactionImageAltText: (0, P.IS)(n, L),
                        entry: n,
                        buttons: el
                    })
                })
            ]
        });
    };
