t(321073);
var n = t(477900),
    i = t(582128),
    l = t(503698),
    r = t.n(l),
    a = t(172218),
    o = t(738678),
    c = t(960027),
    d = t(855986),
    u = t(866665),
    m = t(943812),
    x = t(428689),
    h = t(695366),
    A = t(646514),
    g = t(323384),
    j = t(39623),
    p = t(939249),
    N = t(778712);
if (/^(221552|614256)$/.test(t.j)) var I = t(890856);
var S = t(546861),
    f = t(666654),
    L = t(83107),
    E = t(615675),
    C = t(990836),
    _ = t(387755),
    k = t(440594),
    O = t(149468),
    b = t(863089),
    v = t(85448),
    y = t(556525),
    T = t(402216),
    R = t(268218),
    K = t(609425),
    M = t(73392),
    P = t(769015),
    D = t(430363),
    G = t(823854),
    V = t(906963),
    z = t(790381),
    H = t(266080),
    w = t(427262),
    U = t(652215),
    J = t(806931),
    Z = t(544105),
    F = t(792996),
    W = t(254849);
let B = (0, R.Fe)({
    createPromise: () => Promise.all([t.e(910349), t.e(528966)]).then(t.bind(t, 217356)),
    webpackId: 217356,
});
function Y(e) {
    let {
        className: s,
        mute: t,
        localMute: i,
        localVideoDisabled: l,
        serverMute: a,
        deaf: d,
        serverDeaf: N,
        collapsed: I,
        video: O,
        isStreaming: b,
        disabled: v,
        isWatching: y,
        ringing: R,
        iconClassName: K,
        embeddedApplication: M,
        otherClientSessionType: P,
        voicePlatform: D,
        application: G,
        game: V,
        guildId: w,
        channelId: U,
        user: B,
        disconnected: Y,
        isHovered: X,
        soundboardMuted: q,
    } = e;
    if (I || v) return null;
    let Q = [],
        ee = (function (e) {
            let {
                    iconClassName: s,
                    mute: t,
                    localMute: i,
                    serverMute: l,
                    deaf: a,
                    serverDeaf: o,
                    soundboardMuted: c,
                } = e,
                d = [];
            if (
                (c &&
                    d.push(
                        (0, n.jsx)(
                            u.m,
                            {
                                text: F.intl.string(F.t["9bJYWN"]),
                                children: (0, n.jsx)(S.SoundboardDenyIcon, {
                                    className: r()(W.Kk, s),
                                    color: "currentColor",
                                }),
                            },
                            "soundboard-mute",
                        ),
                    ),
                t)
            ) {
                let e;
                e = l || i ? f.MicrophoneDenyIcon : L.MicrophoneSlashIcon;
                let t = (0, n.jsx)(e, { className: r()(W.Kk, s, { [W.DU]: l }), color: "currentColor" });
                d.push(
                    (0, n.jsx)(
                        u.m,
                        {
                            text: i
                                ? F.intl.string(F.t.Q8Uzof)
                                : l
                                  ? F.intl.string(F.t.uLddbQ)
                                  : F.intl.string(F.t.tjtv3P),
                            children: t,
                        },
                        "mute",
                    ),
                );
            }
            if (o || a) {
                let e = o ? E.HeadphonesDenyIcon : C.HeadphonesSlashIcon,
                    t = (0, n.jsx)(e, { className: r()(W.Kk, s, { [W.DU]: o }), color: "currentColor" });
                d.push(
                    (0, n.jsx)(
                        u.m,
                        { text: o ? F.intl.string(F.t.btxSdB) : F.intl.string(F.t.NjmiOL), children: t },
                        "deaf",
                    ),
                );
            }
            return d;
        })({ iconClassName: K, mute: t, localMute: i, serverMute: a, deaf: d, serverDeaf: N, soundboardMuted: q });
    (O &&
        (l
            ? Q.push(
                  (0, n.jsx)(
                      u.m,
                      {
                          text: F.intl.string(F.t["PXMZ/+"]),
                          children: (0, n.jsx)(m.VideoSlashIcon, {
                              size: "md",
                              color: "currentColor",
                              className: r()(W.Kk, K),
                          }),
                      },
                      "video",
                  ),
              )
            : Q.push(
                  (0, n.jsx)(
                      u.m,
                      {
                          text: F.intl.string(F.t.FlNoSV),
                          children: (0, n.jsx)(x.VideoIcon, {
                              size: "md",
                              color: "currentColor",
                              className: r()(W.Kk, K),
                          }),
                      },
                      "video",
                  ),
              )),
        Y &&
            Q.push(
                (0, n.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t.HFwRpk),
                        children: (0, n.jsx)(h.CircleErrorIcon, {
                            className: r()(W.Kk, K),
                            color: A.A.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != M &&
            Q.push(
                (0, n.jsx)(
                    u.m,
                    {
                        text: (0, k.A)(M.name),
                        children: (0, n.jsx)(g.AppsIcon, {
                            size: "md",
                            color: "currentColor",
                            className: r()(W.Kk, K),
                        }),
                    },
                    "activity",
                ),
            ),
        P === Z.f$.XBOX || D === J.J7.XBOX
            ? Q.push((0, n.jsx)(H.A, { className: r()(W.Kk, K) }, "xbox"))
            : P === Z.f$.PLAYSTATION || D === J.J7.PLAYSTATION
              ? Q.push((0, n.jsx)(z.A, { className: r()(W.Kk, K) }, "playstation"))
              : D === J.J7.QUEST &&
                Q.push(
                    (0, n.jsx)(
                        o.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: r()(W.Kk, K) },
                        "quest",
                    ),
                ),
        y &&
            Q.push(
                (0, n.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t["JH1SJ+"]),
                        children: (0, n.jsx)(j.EyeIcon, { size: "xs", color: "currentColor", className: r()(W.Kk, K) }),
                    },
                    "watch",
                ),
            ),
        b && Q.push((0, n.jsx)(T.Ay, { size: T.Ay.Sizes.SMALL }, "stream")),
        R &&
            null != U &&
            X &&
            Q.push(
                (0, n.jsx)(
                    u.m,
                    {
                        text: F.intl.string(F.t.ygslb0),
                        children: (0, n.jsx)(p.D, {
                            onClick: (e) => {
                                (e.stopPropagation(), _.A.stopRinging(U, [B.id]));
                            },
                            children: (0, n.jsx)(c.PhoneHangUpIcon, {
                                size: "sm",
                                color: A.A.colors.ICON_FEEDBACK_CRITICAL,
                                className: r()(W.Kk, K),
                            }),
                        }),
                    },
                    "ring",
                ),
            ));
    let es = null != G && !G.isEmbedded;
    return 0 !== Q.length || 0 !== ee.length || es || R
        ? (0, n.jsxs)("div", {
              className: r()(W.Pt, s),
              children: [
                  (0, n.jsxs)("div", { className: W.RL, children: [ee, Q] }),
                  es && !R
                      ? (0, n.jsx)("div", {
                            className: W.RL,
                            children: (0, n.jsx)(
                                $,
                                { application: G, game: V, iconClassName: K, guildId: w, channelId: U, userId: B.id },
                                `${B.id}-game`,
                            ),
                        })
                      : null,
              ],
          })
        : null;
}
let X = /^(221552|614256)$/.test(t.j)
    ? function (e) {
          let s,
              t,
              l,
              a,
              {
                  avatarContainerClass: o = W.H,
                  userNameClassName: c = W.gr,
                  size: m = U.OSZ.SMALL,
                  selected: x = !1,
                  disabled: h = !1,
                  isOverlay: A = !1,
                  ref: g,
                  ...j
              } = e,
              {
                  onClick: p,
                  onKeyDown: S,
                  onDoubleClick: f,
                  onContextMenu: L,
                  onMouseLeave: E,
                  onMouseDown: C,
                  priority: _,
                  speaking: k = !1,
                  playingSoundboard: O = !1,
                  collapsed: T,
                  mute: R,
                  localMute: P,
                  serverMute: z,
                  deaf: H,
                  serverDeaf: J,
                  guildId: Z,
                  nick: X,
                  isGuest: $,
                  flipped: q,
                  className: Q,
                  overlap: ee,
                  "aria-label": es,
                  ringing: et,
                  connecting: en = !1,
                  user: ei,
                  soundboardMuted: el,
              } = j,
              er = (0, K.A)({ userId: ei.id, guildId: Z }),
              ea = (0, M.a)({ displayNameStyles: er }),
              eo = (0, b.A)(ei.id),
              ec = (0, y.v)({
                  voiceStatus: (0, N.n$)(k, O),
                  voiceDb: eo,
                  ...(ee ? { spreadDirection: y.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
              }),
              [ed, eu] = i.useState(!1),
              em = (() => {
                  if (null != es) return es;
                  let e = X ?? ei.username,
                      s = null;
                  return (en
                      ? (s = F.intl.string(F.t["7LkwqE"]))
                      : J
                        ? (s = F.intl.string(F.t.btxSdB))
                        : H
                          ? (s = F.intl.string(F.t.NjmiOL))
                          : P
                            ? (s = F.intl.string(F.t.Q8Uzof))
                            : z
                              ? (s = F.intl.string(F.t.uLddbQ))
                              : R
                                ? (s = F.intl.string(F.t.tjtv3P))
                                : el && (s = F.intl.string(F.t["9bJYWN"])),
                  null != s)
                      ? F.intl.formatToPlainString(F.t["1+MVBP"], { userName: e, status: s })
                      : e;
              })(),
              ex = (0, d.bG)([G.A], () => G.A.getProgressForUserId(ei.id), [ei.id]),
              eh = (0, D.Uk)("VoiceUser") && null != ex;
          return (0, n.jsx)(I.s, {
              ref: g,
              className: r()(Q, {
                  [W.q7]: !0,
                  [W.EF]: ee,
                  [W.wH]: x,
                  [W.vk]: null != p,
                  [W.L9]: m === U.OSZ.SMALL,
                  [W.p8]: m === U.OSZ.LARGE,
                  [W.r9]: !x && h,
                  [W.jI]: en,
              }),
              onClick: function (e) {
                  p?.(e, ei);
              },
              onDoubleClick: function (e) {
                  f?.(e, ei);
              },
              onContextMenu: function (e) {
                  L?.(e, ei);
              },
              onMouseLeave: function (e) {
                  (E?.(e, ei), eu(!1));
              },
              onMouseDown: function (e) {
                  C?.(e, ei);
              },
              onMouseEnter: function () {
                  eu(!0);
              },
              onKeyDown: S,
              "aria-label": em,
              focusProps: { offset: { right: 4 } },
              children: (0, n.jsxs)("div", {
                  className: r()(W.Qs, { [W.zq]: q, [W.hR]: T }),
                  children: [
                      _ && !T
                          ? (0, n.jsx)(u.m, {
                                text: F.intl.string(F.t.BVK71i),
                                children: (0, n.jsx)("div", { className: r()(W.G, { [W.g4]: !R && !z && k }) }),
                            })
                          : null,
                      ((s = r()(W.my, { [W.Jb]: m === U.OSZ.LARGE, [W.dT]: m === U.OSZ.SMALL, [W.DF]: et })),
                      (t = { backgroundImage: `url(${ei.getAvatarURL(Z, m === U.OSZ.LARGE ? 38 : 24)})`, ...ec }),
                      et
                          ? (0, n.jsx)(v.Ay, {
                                size: m === U.OSZ.LARGE ? N._3.SIZE_40 : N._3.SIZE_24,
                                ringing: !0,
                                src: ei.getAvatarURL(Z, m === U.OSZ.LARGE ? 40 : 24),
                                className: r()(o, s),
                            })
                          : eh
                            ? (0, n.jsx)(V.A, {
                                  userId: ei.id,
                                  wrapperClassName: o,
                                  children: (0, n.jsx)("div", { className: s, style: t }),
                              })
                            : (0, n.jsx)("div", { className: r()(o, s), style: t })),
                      ((l = (0, n.jsxs)("div", {
                          className: r()(c, W.Xh, ea, { [W.Pi]: !R && !z && k, [W.DF]: et }),
                          children: [
                              X ?? w.Ay.getName(ei),
                              $
                                  ? (0, n.jsxs)("span", {
                                        className: W.IW,
                                        children: ["\xa0", F.intl.string(F.t["pFO/Ph"])],
                                    })
                                  : "",
                          ],
                      })),
                      (a = {
                          primaryGuild: ei.primaryGuild,
                          userId: ei.id,
                          contextGuildId: Z,
                          isOverlay: A,
                          disableTooltip: !0,
                          className: r()(W.fc, A && W.zW),
                          profileViewedAnalytics: { source: A ? U.JJy.OVERLAY : U.ThZ.VOICE_PANEL },
                      }),
                      !T || A ? (0, n.jsx)(B, { ...a, children: l }) : null),
                      (0, n.jsx)(Y, { disabled: h, ...j, isHovered: ed }),
                  ],
              }),
          });
      }
    : null;
function $(e) {
    let { application: s, game: t, iconClassName: l, guildId: o, channelId: c, userId: d } = e,
        [m, x] = i.useState(!1),
        h = (0, a.K)((e) => x(e));
    return (
        i.useEffect(() => {
            m &&
                O.Ay.trackWithMetadata(U.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: c,
                    guild_id: o,
                    user_id: d,
                });
        }, [s.id, c, o, d, m]),
        (0, n.jsx)(u.m, {
            text: F.intl.formatToPlainString(F.t.Sq9xJ7, { game: s.name }),
            "aria-label": F.intl.formatToPlainString(F.t.Sq9xJ7, { game: s.name }),
            children: (0, n.jsx)(P.A, {
                ref: h,
                className: r()(W.Kk, W.Gt, l),
                game: t ?? s,
                size: P.M.XSMALL,
                onMouseEnter: function () {
                    O.Ay.trackWithMetadata(U.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: c,
                        guild_id: o,
                        game_name: s.name,
                        user_id: d,
                    });
                },
            }),
        })
    );
}
t.d(
    s,
    {},
    {
        Ay: X,
        Kc: Y,
        Wr: function (e) {
            let { children: s, collapsed: t = !1, className: i } = e;
            return (0, n.jsx)("div", { className: r()(i, W.p_, t ? W.GT : W.m3), role: "group", children: s });
        },
    },
);
