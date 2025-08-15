n.d(t, {
    Z: () => V,
    v: () => B,
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
function k(e, t, n) {
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
function j(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let B = {
        [a.z.DESKTOP]: null,
        [a.z.LINUX]: null,
        [a.z.MACOS]: null,
        [a.z.NINTENDO]: null,
        [a.z.IOS]: null,
        [a.z.ANDROID]: null,
        [a.z.XBOX]: b.Z,
        [a.z.PLAYSTATION]: E.Z,
    },
    V = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: E,
                onReaction: b,
                onVoiceChannelPreview: k,
                onUserPopoutClosed: G,
                trackRankingItemInteraction: V,
            } = e,
            { largeImage: F } = (0, O.rv)({ entry: n }),
            { user: Z, details: H, appName: Y, activity: W, embeddedActivity: K } = (0, L.n)(n),
            { primaryColor: z, secondaryColor: q } = (0, C.Z)(null == F ? void 0 : F.src),
            X = (0, o.e7)([g.default], () => g.default.locale),
            { streamPreviewUrl: Q, stream: J } = (0, I.Z)(n),
            { displayParticipants: $, participant1: ee, participant2: et, numOtherParticipants: en } = (0, v.Z)(n, 3),
            er = n.extra.platform,
            ei = null != er ? B[er] : null,
            ea = er === a.z.XBOX ? x.ABu.XBOX : er === a.z.PLAYSTATION ? x.ABu.PLAYSTATION : void 0,
            eo = (0, N.Z)(ea),
            { data: es } = (0, h.IX)(n.extra.application_id),
            el = (0, d.q)(es, "MemberListGamingContentPopout"),
            ec = (0, m.L)(W, K),
            eu = i.useCallback(
                (e) => {
                    if ((null == F ? void 0 : F.src) == null || null == t || null == Z) return;
                    let r =
                        en > 0
                            ? (0, A.VY)({
                                  entry: n,
                                  channel: t,
                                  users: [ee, et],
                                  countOthers: en,
                              })
                            : (0, A.HV)(n, t, Z);
                    return (0, S.SO)({
                        entry: n,
                        applicationImageSrc: null == F ? void 0 : F.src,
                        avatarSrcs: $.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, T.yh)(n, X),
                        colors: [z, q],
                        channelId: e,
                    });
                },
                [null == F ? void 0 : F.src, t, $, n, X, en, ee, et, z, q, Z],
            );
        if (null == Z) return null;
        let ed = (0, r.jsx)(P.Gk, {
                location: null == Q ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
                children: R.W.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
            }),
            ef =
                null == J
                    ? (0, r.jsx)(w.wG, {
                          channel: t,
                          headerIcons:
                              null == ei
                                  ? null
                                  : (0, r.jsx)(D.Z, {
                                        onClick: eo,
                                        Icon: ei,
                                        "aria-label": M.intl.string(M.t.YR4cHB),
                                    }),
                          userDescription: (0, T.kr)(n) ? M.t.vPg1JS : M.t.rPqqtr,
                          title: Y,
                          subtitle: H,
                          badges: ed,
                          entry: n,
                          disableGameProfileLinks: E,
                          onUserPopoutClosed: G,
                          trackRankingItemInteraction: V,
                      })
                    : (0, r.jsx)(w.jL, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: H,
                          badges: ed,
                          userDescription: M.t["6oWFUF"],
                          entry: n,
                          stream: J,
                          onUserPopoutClosed: G,
                          trackRankingItemInteraction: V,
                      }),
            e_ =
                !ec && el
                    ? (0, r.jsx)(f.Z, {
                          application: es,
                          ButtonComponent: (e) => {
                              let { children: t, size: n } = e,
                                  i = U(e, ["children", "size"]);
                              return (0, r.jsx)(
                                  w.Ll,
                                  j(
                                      {
                                          icon: s.v3n,
                                          text: t,
                                      },
                                      i,
                                  ),
                              );
                          },
                          location: "MemberListGamingContentPopout",
                      })
                    : null,
            ep = [
                null == e_ && ((0, l.Z)(W, x.xjy.JOIN) || (0, c.Z)(W))
                    ? (0, r.jsx)(_.Z, {
                          activity: W,
                          user: Z,
                          ButtonComponent: (e) => {
                              let { children: t, size: n } = e,
                                  i = U(e, ["children", "size"]);
                              return (0, r.jsx)(
                                  w.Ll,
                                  j(
                                      {
                                          icon: s.iWm,
                                          text: t,
                                      },
                                      i,
                                  ),
                              );
                          },
                      })
                    : null,
                (0, u.Z)(W)
                    ? (0, r.jsx)(p.Z, {
                          activity: W,
                          ButtonComponent: (e) => {
                              let { children: t, size: n } = e,
                                  i = U(e, ["children", "size"]);
                              return (0, r.jsx)(
                                  w.Ll,
                                  j(
                                      {
                                          icon: s.tEF,
                                          text: t,
                                      },
                                      i,
                                  ),
                              );
                          },
                      })
                    : null,
                e_,
            ].filter(y.lm);
        return (0, r.jsxs)(w.yR, {
            children: [
                ef,
                (0, r.jsx)(w.St, {
                    children: (0, r.jsx)(w.WT, {
                        onReaction: b,
                        onVoiceChannelPreview: k,
                        user: Z,
                        channel: t,
                        generateReactionImage: eu,
                        reactionImageAltText: (0, A.IS)(n, Z),
                        entry: n,
                        buttons: ep,
                    }),
                }),
            ],
        });
    };
