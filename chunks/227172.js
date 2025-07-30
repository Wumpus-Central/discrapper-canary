n.d(t, {
    Z: () => U,
    v: () => j
});
var r = n(255367),
    i = n(73800),
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
    m = n(706454),
    g = n(374129),
    E = n(639351),
    b = n(823379),
    y = n(379357),
    O = n(192918),
    v = n(22211),
    I = n(561308),
    T = n(919394),
    S = n(438226),
    A = n(31074),
    N = n(206295),
    C = n(91140),
    R = n(297781),
    P = n(591853),
    w = n(410441),
    D = n(797342),
    L = n(981631),
    x = n(388032);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            }));
    }
    return e;
}
let j = {
        [a.z.DESKTOP]: null,
        [a.z.LINUX]: null,
        [a.z.MACOS]: null,
        [a.z.NINTENDO]: null,
        [a.z.IOS]: null,
        [a.z.ANDROID]: null,
        [a.z.XBOX]: E.Z,
        [a.z.PLAYSTATION]: g.Z
    },
    U = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: g, onReaction: E, onVoiceChannelPreview: M, onUserPopoutClosed: U, trackRankingItemInteraction: G } = e,
            { largeImage: B } = (0, y.rv)({ entry: n }),
            { user: V, details: F, appName: Z, activity: H } = (0, D.n)(n),
            { primaryColor: Y, secondaryColor: W } = (0, N.Z)(null == B ? void 0 : B.src),
            K = (0, o.e7)([m.default], () => m.default.locale),
            { streamPreviewUrl: z, stream: q } = (0, v.Z)(n),
            { displayParticipants: X, participant1: Q, participant2: J, numOtherParticipants: $ } = (0, O.Z)(n, 3),
            ee = n.extra.platform,
            et = null != ee ? j[ee] : null,
            en = ee === a.z.XBOX ? L.ABu.XBOX : ee === a.z.PLAYSTATION ? L.ABu.PLAYSTATION : void 0,
            er = (0, A.Z)(en),
            { data: ei } = (0, h.IX)(n.extra.application_id),
            ea = (0, d.q)(ei, 'MemberListGamingContentPopout'),
            eo = i.useCallback(
                (e) => {
                    if ((null == B ? void 0 : B.src) == null || null == t || null == V) return;
                    let r =
                        $ > 0
                            ? (0, S.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [Q, J],
                                  countOthers: $
                              })
                            : (0, S.HV)(n, t, V);
                    return (0, T.SO)({
                        entry: n,
                        applicationImageSrc: null == B ? void 0 : B.src,
                        avatarSrcs: X.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, I.yh)(n, K),
                        colors: [Y, W],
                        channelId: e
                    });
                },
                [null == B ? void 0 : B.src, t, X, n, K, $, Q, J, Y, W, V]
            );
        if (null == V) return null;
        let es = (0, r.jsx)(R.Gk, {
                location: null == z ? R.Gt.POPOUT : R.Gt.STREAMING_POPOUT,
                children: C.W.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
            }),
            el =
                null == q
                    ? (0, r.jsx)(P.wG, {
                          channel: t,
                          headerIcons:
                              null == et
                                  ? null
                                  : (0, r.jsx)(w.Z, {
                                        onClick: er,
                                        Icon: et,
                                        'aria-label': x.intl.string(x.t.YR4cHB)
                                    }),
                          userDescription: (0, I.kr)(n) ? x.t.vPg1JS : x.t.rPqqtr,
                          title: Z,
                          subtitle: F,
                          badges: es,
                          entry: n,
                          disableGameProfileLinks: g,
                          onUserPopoutClosed: U,
                          trackRankingItemInteraction: G
                      })
                    : (0, r.jsx)(P.jL, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: F,
                          badges: es,
                          userDescription: x.t['6oWFUF'],
                          entry: n,
                          stream: q,
                          onUserPopoutClosed: U,
                          trackRankingItemInteraction: G
                      }),
            ec =
                (0, l.Z)(H, L.xjy.JOIN) || (0, c.Z)(H)
                    ? (0, r.jsx)(_.Z, {
                          activity: H,
                          user: V,
                          ButtonComponent: (e) => (0, r.jsx)(P.Ll, k({ IconComponent: s.iWm }, e))
                      })
                    : null,
            eu = [
                ec,
                (0, u.Z)(H)
                    ? (0, r.jsx)(p.Z, {
                          activity: H,
                          ButtonComponent: (e) => (0, r.jsx)(P.Ll, k({ IconComponent: s.tEF }, e))
                      })
                    : null,
                ea
                    ? (0, r.jsx)(f.Z, {
                          application: ei,
                          ButtonComponent: (e) => (0, r.jsx)(P.Ll, k({ IconComponent: s.v3n }, e)),
                          location: 'MemberListGamingContentPopout'
                      })
                    : null
            ].filter(b.lm);
        return (0, r.jsxs)(P.yR, {
            children: [
                el,
                (0, r.jsx)(P.St, {
                    children: (0, r.jsx)(P.WT, {
                        onReaction: E,
                        onVoiceChannelPreview: M,
                        user: V,
                        channel: t,
                        generateReactionImage: eo,
                        reactionImageAltText: (0, S.IS)(n, V),
                        entry: n,
                        buttons: eu
                    })
                })
            ]
        });
    };
