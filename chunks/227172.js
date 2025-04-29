n.d(t, {
    Z: () => M,
    v: () => x
});
var r = n(255367),
    i = n(73800),
    o = n(758713),
    a = n(442837),
    s = n(481060),
    l = n(620662),
    c = n(841784),
    u = n(420660),
    d = n(429589),
    f = n(757182),
    _ = n(706454),
    p = n(374129),
    h = n(639351),
    m = n(823379),
    g = n(379357),
    E = n(192918),
    b = n(22211),
    y = n(561308),
    O = n(919394),
    v = n(438226),
    I = n(31074),
    S = n(206295),
    T = n(91140),
    A = n(297781),
    N = n(591853),
    C = n(410441),
    R = n(797342),
    P = n(981631),
    w = n(388032);
function D(e, t, n) {
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
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}
let x = {
        [o.z.DESKTOP]: null,
        [o.z.LINUX]: null,
        [o.z.MACOS]: null,
        [o.z.NINTENDO]: null,
        [o.z.IOS]: null,
        [o.z.ANDROID]: null,
        [o.z.XBOX]: h.Z,
        [o.z.PLAYSTATION]: p.Z
    },
    M = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: p, onReaction: h, onVoiceChannelPreview: D, onUserPopoutClosed: M, trackRankingItemInteraction: k } = e,
            { largeImage: j } = (0, g.rv)({ entry: n }),
            { user: U, details: G, appName: B, activity: V } = (0, R.n)(n),
            { primaryColor: F, secondaryColor: Z } = (0, S.Z)(null == j ? void 0 : j.src),
            H = (0, a.e7)([_.default], () => _.default.locale),
            { streamPreviewUrl: Y, stream: W } = (0, b.Z)(n),
            { displayParticipants: K, participant1: z, participant2: q, numOtherParticipants: Q } = (0, E.Z)(n, 3),
            X = n.extra.platform,
            J = null != X ? x[X] : null,
            $ = X === o.z.XBOX ? P.ABu.XBOX : X === o.z.PLAYSTATION ? P.ABu.PLAYSTATION : void 0,
            ee = (0, I.Z)($),
            et = i.useCallback(
                (e) => {
                    if ((null == j ? void 0 : j.src) == null || null == t || null == U) return;
                    let r =
                        Q > 0
                            ? (0, v.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [z, q],
                                  countOthers: Q
                              })
                            : (0, v.HV)(n, t, U);
                    return (0, O.SO)({
                        entry: n,
                        applicationImageSrc: null == j ? void 0 : j.src,
                        avatarSrcs: K.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, y.yh)(n, H),
                        colors: [F, Z],
                        channelId: e
                    });
                },
                [null == j ? void 0 : j.src, t, K, n, H, Q, z, q, F, Z, U]
            );
        if (null == U) return null;
        let en = (0, r.jsx)(A.Gk, {
                location: null == Y ? A.Gt.POPOUT : A.Gt.STREAMING_POPOUT,
                children: T.W.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
            }),
            er =
                null == W
                    ? (0, r.jsx)(N.wG, {
                          channel: t,
                          headerIcons:
                              null == J
                                  ? null
                                  : (0, r.jsx)(C.Z, {
                                        onClick: ee,
                                        Icon: J,
                                        'aria-label': w.intl.string(w.t.YR4cHB)
                                    }),
                          userDescription: (0, y.kr)(n) ? w.t.vPg1JS : w.t.rPqqtr,
                          title: B,
                          subtitle: G,
                          badges: en,
                          entry: n,
                          disableGameProfileLinks: p,
                          onUserPopoutClosed: M,
                          trackRankingItemInteraction: k
                      })
                    : (0, r.jsx)(N.jL, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: G,
                          badges: en,
                          userDescription: w.t['6oWFUF'],
                          entry: n,
                          stream: W,
                          onUserPopoutClosed: M,
                          trackRankingItemInteraction: k
                      }),
            ei = [
                (0, l.Z)(V, P.xjy.JOIN) || (0, c.Z)(V)
                    ? (0, r.jsx)(d.Z, {
                          activity: V,
                          user: U,
                          ButtonComponent: (e) => (0, r.jsx)(N.Ll, L({ IconComponent: s.iWm }, e))
                      })
                    : null,
                (0, u.Z)(V)
                    ? (0, r.jsx)(f.Z, {
                          activity: V,
                          ButtonComponent: (e) => (0, r.jsx)(N.Ll, L({ IconComponent: s.tEF }, e))
                      })
                    : null
            ].filter(m.lm);
        return (0, r.jsxs)(N.yR, {
            children: [
                er,
                (0, r.jsx)(N.St, {
                    children: (0, r.jsx)(N.WT, {
                        onReaction: h,
                        onVoiceChannelPreview: D,
                        user: U,
                        channel: t,
                        generateReactionImage: et,
                        reactionImageAltText: (0, v.IS)(n, U),
                        entry: n,
                        buttons: ei
                    })
                })
            ]
        });
    };
