n.d(t, {
    Z: () => k,
    v: () => _
});
var r = n(200651),
    a = n(192379),
    l = n(758713),
    i = n(442837),
    o = n(481060),
    s = n(620662),
    c = n(841784),
    u = n(420660),
    d = n(429589),
    m = n(757182),
    p = n(706454),
    h = n(374129),
    f = n(639351),
    g = n(823379),
    x = n(379357),
    v = n(192918),
    y = n(22211),
    j = n(561308),
    P = n(919394),
    O = n(438226),
    b = n(31074),
    C = n(206295),
    N = n(91140),
    I = n(297781),
    E = n(591853),
    w = n(410441),
    Z = n(797342),
    S = n(981631),
    T = n(388032);
function A(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let _ = {
        [l.z.DESKTOP]: null,
        [l.z.LINUX]: null,
        [l.z.MACOS]: null,
        [l.z.NINTENDO]: null,
        [l.z.IOS]: null,
        [l.z.ANDROID]: null,
        [l.z.XBOX]: f.Z,
        [l.z.PLAYSTATION]: h.Z
    },
    k = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: h, onReaction: f, onVoiceChannelPreview: k, onUserPopoutClosed: R, trackRankingItemInteraction: M } = e,
            { largeImage: D } = (0, x.rv)({ entry: n }),
            { user: L, details: W, appName: U, activity: z } = (0, Z.n)(n),
            { primaryColor: B, secondaryColor: H } = (0, C.Z)(null == D ? void 0 : D.src),
            G = (0, i.e7)([p.default], () => p.default.locale),
            { streamPreviewUrl: F, stream: V } = (0, y.Z)(n),
            { displayParticipants: Y, participant1: q, participant2: J, numOtherParticipants: X } = (0, v.Z)(n, 3),
            K = n.extra.platform,
            $ = null != K ? _[K] : null,
            Q = K === l.z.XBOX ? S.ABu.XBOX : K === l.z.PLAYSTATION ? S.ABu.PLAYSTATION : void 0,
            ee = (0, b.Z)(Q),
            et = a.useCallback(
                (e) => {
                    if ((null == D ? void 0 : D.src) == null || null == t || null == L) return;
                    let r =
                        X > 0
                            ? (0, O.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [q, J],
                                  countOthers: X
                              })
                            : (0, O.HV)(n, t, L);
                    return (0, P.SO)({
                        entry: n,
                        applicationImageSrc: null == D ? void 0 : D.src,
                        avatarSrcs: Y.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, j.yh)(n, G),
                        colors: [B, H],
                        channelId: e
                    });
                },
                [null == D ? void 0 : D.src, t, Y, n, G, X, q, J, B, H, L]
            );
        if (null == L) return null;
        let en = (0, r.jsx)(I.Gk, {
                location: null == F ? I.Gt.POPOUT : I.Gt.STREAMING_POPOUT,
                children: N.W.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
            }),
            er =
                null == V
                    ? (0, r.jsx)(E.wG, {
                          channel: t,
                          headerIcons:
                              null == $
                                  ? null
                                  : (0, r.jsx)(w.Z, {
                                        onClick: ee,
                                        Icon: $,
                                        'aria-label': T.NW.string(T.t.YR4cHB)
                                    }),
                          userDescription: (0, j.kr)(n) ? T.t.vPg1JS : T.t.rPqqtr,
                          title: U,
                          subtitle: W,
                          badges: en,
                          entry: n,
                          disableGameProfileLinks: h,
                          onUserPopoutClosed: R,
                          trackRankingItemInteraction: M
                      })
                    : (0, r.jsx)(E.jL, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: W,
                          badges: en,
                          userDescription: T.t['6oWFUF'],
                          entry: n,
                          stream: V,
                          onUserPopoutClosed: R,
                          trackRankingItemInteraction: M
                      }),
            ea = [
                (0, s.Z)(z, S.xjy.JOIN) || (0, c.Z)(z)
                    ? (0, r.jsx)(d.Z, {
                          activity: z,
                          user: L,
                          ButtonComponent: (e) => (0, r.jsx)(E.Ll, A({ IconComponent: o.iWm }, e))
                      })
                    : null,
                (0, u.Z)(z)
                    ? (0, r.jsx)(m.Z, {
                          activity: z,
                          ButtonComponent: (e) => (0, r.jsx)(E.Ll, A({ IconComponent: o.tEF }, e))
                      })
                    : null
            ].filter(g.lm);
        return (0, r.jsxs)(E.yR, {
            children: [
                er,
                (0, r.jsx)(E.St, {
                    children: (0, r.jsx)(E.WT, {
                        onReaction: f,
                        onVoiceChannelPreview: k,
                        user: L,
                        channel: t,
                        generateReactionImage: et,
                        reactionImageAltText: (0, O.IS)(n, L),
                        entry: n,
                        buttons: ea
                    })
                })
            ]
        });
    };
