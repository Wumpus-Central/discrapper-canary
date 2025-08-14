n.d(t, {
    Z: () => G,
    v: () => U,
});
var r = n(255367),
    i = n(73800),
    o = n(758713),
    a = n(442837),
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
    N = n(31074),
    C = n(206295),
    R = n(91140),
    P = n(297781),
    w = n(591853),
    D = n(410441),
    L = n(797342),
    x = n(981631),
    M = n(388032);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
let U = {
        [o.z.DESKTOP]: null,
        [o.z.LINUX]: null,
        [o.z.MACOS]: null,
        [o.z.NINTENDO]: null,
        [o.z.IOS]: null,
        [o.z.ANDROID]: null,
        [o.z.XBOX]: b.Z,
        [o.z.PLAYSTATION]: E.Z,
    },
    G = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: E,
                onReaction: b,
                onVoiceChannelPreview: j,
                onUserPopoutClosed: G,
                trackRankingItemInteraction: B,
            } = e,
            { largeImage: Z } = (0, O.rv)({ entry: n }),
            { user: F, details: V, appName: H, activity: Y, embeddedActivity: W } = (0, L.n)(n),
            { primaryColor: K, secondaryColor: z } = (0, C.Z)(null == Z ? void 0 : Z.src),
            q = (0, a.e7)([g.default], () => g.default.locale),
            { streamPreviewUrl: X, stream: Q } = (0, I.Z)(n),
            { displayParticipants: J, participant1: $, participant2: ee, numOtherParticipants: et } = (0, v.Z)(n, 3),
            en = n.extra.platform,
            er = null != en ? U[en] : null,
            ei = en === o.z.XBOX ? x.ABu.XBOX : en === o.z.PLAYSTATION ? x.ABu.PLAYSTATION : void 0,
            eo = (0, N.Z)(ei),
            { data: ea } = (0, h.IX)(n.extra.application_id),
            es = (0, d.q)(ea, "MemberListGamingContentPopout"),
            el = (0, m.L)(Y, W),
            ec = i.useCallback(
                (e) => {
                    if ((null == Z ? void 0 : Z.src) == null || null == t || null == F) return;
                    let r =
                        et > 0
                            ? (0, A.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [$, ee],
                                  countOthers: et,
                              })
                            : (0, A.HV)(n, t, F);
                    return (0, S.SO)({
                        entry: n,
                        applicationImageSrc: null == Z ? void 0 : Z.src,
                        avatarSrcs: J.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, T.yh)(n, q),
                        colors: [K, z],
                        channelId: e,
                    });
                },
                [null == Z ? void 0 : Z.src, t, J, n, q, et, $, ee, K, z, F],
            );
        if (null == F) return null;
        let eu = (0, r.jsx)(P.Gk, {
                location: null == X ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
                children: R.W.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            ed =
                null == Q
                    ? (0, r.jsx)(w.wG, {
                          channel: t,
                          headerIcons:
                              null == er
                                  ? null
                                  : (0, r.jsx)(D.Z, {
                                        onClick: eo,
                                        Icon: er,
                                        "aria-label": M.intl.string(M.t.YR4cHB),
                                    }),
                          userDescription: (0, T.kr)(n) ? M.t.vPg1JS : M.t.rPqqtr,
                          title: H,
                          subtitle: V,
                          badges: eu,
                          entry: n,
                          disableGameProfileLinks: E,
                          onUserPopoutClosed: G,
                          trackRankingItemInteraction: B,
                      })
                    : (0, r.jsx)(w.jL, {
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
                    ? (0, r.jsx)(f.Z, {
                          application: ea,
                          ButtonComponent: (e) => (0, r.jsx)(w.Ll, k({ IconComponent: s.v3n }, e)),
                          location: "MemberListGamingContentPopout",
                      })
                    : null,
            e_ = [
                null == ef && ((0, l.Z)(Y, x.xjy.JOIN) || (0, c.Z)(Y))
                    ? (0, r.jsx)(_.Z, {
                          activity: Y,
                          user: F,
                          ButtonComponent: (e) => (0, r.jsx)(w.Ll, k({ IconComponent: s.iWm }, e)),
                      })
                    : null,
                (0, u.Z)(Y)
                    ? (0, r.jsx)(p.Z, {
                          activity: Y,
                          ButtonComponent: (e) => (0, r.jsx)(w.Ll, k({ IconComponent: s.tEF }, e)),
                      })
                    : null,
                ef,
            ].filter(y.lm);
        return (0, r.jsxs)(w.yR, {
            children: [
                ed,
                (0, r.jsx)(w.St, {
                    children: (0, r.jsx)(w.WT, {
                        onReaction: b,
                        onVoiceChannelPreview: j,
                        user: F,
                        channel: t,
                        generateReactionImage: ec,
                        reactionImageAltText: (0, A.IS)(n, F),
                        entry: n,
                        buttons: e_,
                    }),
                }),
            ],
        });
    };
