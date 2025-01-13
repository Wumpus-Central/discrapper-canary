n.d(t, {
    v: function () {
        return R;
    }
});
var l = n(200651),
    a = n(192379),
    i = n(758713),
    r = n(442837),
    o = n(481060),
    s = n(620662),
    u = n(841784),
    c = n(420660),
    d = n(429589),
    m = n(757182),
    x = n(706454),
    h = n(374129),
    p = n(639351),
    C = n(823379),
    v = n(379357),
    g = n(192918),
    f = n(22211),
    I = n(561308),
    j = n(919394),
    Z = n(438226),
    P = n(31074),
    L = n(206295),
    N = n(91140),
    T = n(297781),
    y = n(591853),
    _ = n(410441),
    A = n(797342),
    E = n(981631),
    S = n(388032);
let R = {
    [i.z.DESKTOP]: null,
    [i.z.LINUX]: null,
    [i.z.MACOS]: null,
    [i.z.NINTENDO]: null,
    [i.z.IOS]: null,
    [i.z.ANDROID]: null,
    [i.z.XBOX]: p.Z,
    [i.z.PLAYSTATION]: h.Z
};
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: h, onReaction: p, onVoiceChannelPreview: M, onUserPopoutClosed: k, trackRankingItemInteraction: w } = e,
        { largeImage: O } = (0, v.rv)({ entry: n }),
        { user: b, details: H, appName: V, activity: B } = (0, A.n)(n),
        { primaryColor: D, secondaryColor: U } = (0, L.Z)(null == O ? void 0 : O.src),
        G = (0, r.e7)([x.default], () => x.default.locale),
        { streamPreviewUrl: z, stream: Y } = (0, f.Z)(n),
        { displayParticipants: W, participant1: q, participant2: F, numOtherParticipants: J } = (0, g.Z)(n, 3),
        X = n.extra.platform,
        K = null != X ? R[X] : null,
        $ = X === i.z.XBOX ? E.ABu.XBOX : X === i.z.PLAYSTATION ? E.ABu.PLAYSTATION : void 0,
        Q = (0, P.Z)($),
        ee = a.useCallback(
            (e) => {
                if ((null == O ? void 0 : O.src) == null || null == t || null == b) return;
                let l =
                    J > 0
                        ? (0, Z.VY)({
                              entry: n,
                              channel: t,
                              users: [q, F],
                              countOthers: J
                          })
                        : (0, Z.HV)(n, t, b);
                return (0, j.SO)({
                    entry: n,
                    applicationImageSrc: null == O ? void 0 : O.src,
                    avatarSrcs: W.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, I.yh)(n, G),
                    colors: [D, U],
                    channelId: e
                });
            },
            [null == O ? void 0 : O.src, t, W, n, G, J, q, F, D, U, b]
        );
    if (null == b) return null;
    let et = (0, l.jsx)(T.Gk, {
            location: null == z ? T.Gt.POPOUT : T.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
        }),
        en =
            null == z
                ? (0, l.jsx)(y.wG, {
                      channel: t,
                      headerIcons:
                          null == K
                              ? null
                              : (0, l.jsx)(_.Z, {
                                    onClick: Q,
                                    Icon: K,
                                    'aria-label': S.intl.string(S.t.YR4cHB)
                                }),
                      userDescription: (0, I.kr)(n) ? S.t.vPg1JS : S.t.rPqqtr,
                      title: V,
                      subtitle: H,
                      badges: et,
                      entry: n,
                      disableGameProfileLinks: h,
                      onUserPopoutClosed: k,
                      trackRankingItemInteraction: w
                  })
                : (0, l.jsx)(y.jL, {
                      channel: t,
                      streamPreviewSrc: z,
                      title: n.extra.game_name,
                      subtitle: H,
                      badges: et,
                      userDescription: S.t['6oWFUF'],
                      entry: n,
                      stream: Y,
                      onUserPopoutClosed: k,
                      trackRankingItemInteraction: w
                  }),
        el =
            (0, s.Z)(B, E.xjy.JOIN) || (0, u.Z)(B)
                ? (0, l.jsx)(d.Z, {
                      activity: B,
                      user: b,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(y.Ll, {
                              IconComponent: o.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        ea = [
            el,
            (0, c.Z)(B)
                ? (0, l.jsx)(m.Z, {
                      activity: B,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(y.Ll, {
                              IconComponent: o.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(C.lm);
    return (0, l.jsxs)(y.yR, {
        children: [
            en,
            (0, l.jsx)(y.St, {
                children: (0, l.jsx)(y.WT, {
                    onReaction: p,
                    onVoiceChannelPreview: M,
                    user: b,
                    channel: t,
                    generateReactionImage: ee,
                    reactionImageAltText: (0, Z.IS)(n, b),
                    entry: n,
                    buttons: ea
                })
            })
        ]
    });
};
