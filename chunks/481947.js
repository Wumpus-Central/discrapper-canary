i.d(t, { Ay: () => w, Kc: () => M, Wr: () => U }), i(321073), i(938796);
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(172218),
    o = i(665260),
    d = i(934551),
    c = i(311907),
    u = i(990078),
    m = i(397927),
    _ = i(440594),
    A = i(58149),
    g = i(659974),
    h = i(863089),
    f = i(402216),
    p = i(609425),
    S = i(73392),
    I = i(769015),
    x = i(217356),
    v = i(559405),
    C = i(430363),
    E = i(823854),
    y = i(261056),
    T = i(790381),
    N = i(266080),
    b = i(427262),
    j = i(652215),
    L = i(806931),
    P = i(544105),
    O = i(985018),
    R = i(77615);
let D = (e) => {
        let { hangStatusActivity: t, iconClassName: i, isSelf: a, onAddHangStatusClicked: l, userId: s } = e,
            o = (e) => {
                e.stopPropagation(), l?.();
            };
        return a && null == t
            ? (0, n.jsx)(m.DUT, {
                  onClick: o,
                  className: R.Pt,
                  children: (0, n.jsx)(m.nm2, { color: "currentColor", className: r()(R.Kk, R.G8, i) }),
              })
            : (0, n.jsx)(m.DUT, {
                  onClick: o,
                  className: R.Pt,
                  children: (0, n.jsx)(v.A, { userId: s, size: 16, hangStatusActivity: t, className: r()(R.Kk, i) }),
              });
    },
    U = (e) => {
        let { children: t, collapsed: i = !1, className: a } = e;
        return (0, n.jsx)("div", { className: r()(a, R.p_, i ? R.GT : R.m3), role: "group", children: t });
    };
function M(e) {
    let {
        className: t,
        mute: i,
        localMute: a,
        localVideoDisabled: l,
        serverMute: s,
        deaf: c,
        serverDeaf: A,
        collapsed: g,
        video: h,
        isStreaming: p,
        disabled: S,
        isWatching: I,
        iconClassName: x,
        embeddedApplication: v,
        otherClientSessionType: C,
        voicePlatform: E,
        application: y,
        guildId: b,
        channelId: U,
        user: M,
        disconnected: w,
        hangStatusActivity: G,
        showHangStatus: k,
        isSelf: F,
        handleHoverHangStatus: H,
        handleHoverIcons: W,
        onAddHangStatusClicked: B,
    } = e;
    if (g || S) return null;
    let z = [],
        Y = (function (e) {
            let { iconClassName: t, mute: i, localMute: a, serverMute: l, deaf: s, serverDeaf: o } = e,
                d = [];
            if (i) {
                let e;
                e = l || a ? m.O1p : m.z0P;
                let i = (0, n.jsx)(e, { className: r()(R.Kk, t, { [R.DU]: l }), color: "currentColor" });
                d.push(
                    (0, n.jsx)(
                        u.m,
                        {
                            text: a
                                ? O.intl.string(O.t.Q8Uzof)
                                : l
                                  ? O.intl.string(O.t.uLddbQ)
                                  : O.intl.string(O.t.tjtv3P),
                            children: i,
                        },
                        "mute",
                    ),
                );
            }
            if (o || s) {
                let e = o ? m.TJE : m.cQT,
                    i = (0, n.jsx)(e, { className: r()(R.Kk, t, { [R.DU]: o }), color: "currentColor" });
                d.push(
                    (0, n.jsx)(
                        u.m,
                        { text: o ? O.intl.string(O.t.btxSdB) : O.intl.string(O.t.NjmiOL), children: i },
                        "deaf",
                    ),
                );
            }
            return d;
        })({ iconClassName: x, mute: i, localMute: a, serverMute: s, deaf: c, serverDeaf: A });
    h &&
        (l
            ? z.push(
                  (0, n.jsx)(
                      u.m,
                      {
                          text: O.intl.string(O.t["PXMZ/+"]),
                          children: (0, n.jsx)(m.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: r()(R.Kk, x),
                              colorClass: R.of,
                          }),
                      },
                      "video",
                  ),
              )
            : z.push(
                  (0, n.jsx)(
                      u.m,
                      {
                          text: O.intl.string(O.t.FlNoSV),
                          children: (0, n.jsx)(m.npA, { size: "md", color: "currentColor", className: r()(R.Kk, x) }),
                      },
                      "video",
                  ),
              )),
        w &&
            z.push(
                (0, n.jsx)(
                    u.m,
                    {
                        text: O.intl.string(O.t.HFwRpk),
                        children: (0, n.jsx)(m.EpV, {
                            className: r()(R.Kk, x),
                            color: m.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != v &&
            z.push(
                (0, n.jsx)(
                    u.m,
                    {
                        text: (0, _.A)(v.name),
                        children: (0, n.jsx)(m.k9F, { size: "md", color: "currentColor", className: r()(R.Kk, x) }),
                    },
                    "activity",
                ),
            ),
        C === P.f$.XBOX || E === L.J7.XBOX
            ? z.push((0, n.jsx)(N.A, { className: r()(R.Kk, x) }, "xbox"))
            : C === P.f$.PLAYSTATION || E === L.J7.PLAYSTATION
              ? z.push((0, n.jsx)(T.A, { className: r()(R.Kk, x) }, "playstation"))
              : E === L.J7.QUEST &&
                z.push(
                    (0, n.jsx)(
                        d.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: r()(R.Kk, x) },
                        "quest",
                    ),
                ),
        I &&
            z.push(
                (0, n.jsx)(
                    u.m,
                    {
                        text: O.intl.string(O.t["JH1SJ+"]),
                        children: (0, n.jsx)(m.bMW, { size: "xs", color: "currentColor", className: r()(R.Kk, x) }),
                    },
                    "watch",
                ),
            ),
        p && z.push((0, n.jsx)(f.Ay, { size: f.Ay.Sizes.SMALL }, "stream"));
    let K = null != y && !(0, o.Lt)(y.flags, j.gfo.EMBEDDED),
        J = null == G && K;
    return 0 !== z.length || 0 !== Y.length || k || J
        ? (0, n.jsxs)("div", {
              className: r()(R.Pt, t),
              children: [
                  (0, n.jsxs)("div", {
                      className: R.RL,
                      onMouseEnter: () => W?.(!0),
                      onMouseLeave: () => W?.(!1),
                      children: [Y, z],
                  }),
                  k || J
                      ? (0, n.jsx)("div", {
                            className: R.RL,
                            onMouseEnter: () => H?.(!0),
                            onMouseLeave: () => H?.(!1),
                            children: J
                                ? (0, n.jsx)(
                                      V,
                                      { application: y, iconClassName: x, guildId: b, channelId: U, userId: M.id },
                                      `${M.id}-game`,
                                  )
                                : (0, n.jsx)(D, {
                                      userId: M.id,
                                      hangStatusActivity: G,
                                      iconClassName: x,
                                      isSelf: F,
                                      onAddHangStatusClicked: B,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let w = /^(14256|21552)$/.test(i.j)
    ? function (e) {
          let t,
              i,
              a,
              l,
              {
                  avatarContainerClass: s = R.H,
                  userNameClassName: o = R.gr,
                  size: d = j.OSZ.SMALL,
                  selected: _ = !1,
                  disabled: A = !1,
                  isOverlay: f = !1,
                  ref: I,
                  ...v
              } = e,
              {
                  onClick: T,
                  onKeyDown: N,
                  onDoubleClick: L,
                  onContextMenu: P,
                  onMouseLeave: D,
                  onMouseDown: U,
                  priority: w,
                  speaking: V = !1,
                  latched: G,
                  collapsed: k,
                  mute: F,
                  serverMute: H,
                  guildId: W,
                  nick: B,
                  isGuest: z,
                  flipped: Y,
                  className: K,
                  overlap: J,
                  "aria-label": Z,
                  ringing: q,
                  user: $,
              } = v,
              X = (0, p.A)({ userId: $.id, guildId: W }),
              Q = (0, S.a)({ displayNameStyles: X }),
              ee = (0, h.A)($.id),
              et = (0, g.v)({ isSpeaking: V, isLatched: G && !F && !H, voiceDb: ee }),
              ei = (0, c.bG)([E.A], () => E.A.getProgressForUserId($.id), [$.id]),
              en = (0, C.Uk)("VoiceUser") && null != ei;
          return (0, n.jsx)(m.sqX, {
              ref: I,
              className: r()(K, {
                  [R.q7]: !0,
                  [R.EF]: J,
                  [R.wH]: _,
                  [R.vk]: null != T,
                  [R.L9]: d === j.OSZ.SMALL,
                  [R.p8]: d === j.OSZ.LARGE,
                  [R.r9]: !_ && A,
                  [R.DF]: q,
              }),
              onClick: (e) => {
                  T?.(e, $);
              },
              onDoubleClick: (e) => {
                  L?.(e, $);
              },
              onContextMenu: (e) => {
                  P?.(e, $);
              },
              onMouseLeave: (e) => {
                  D?.(e, $);
              },
              onMouseDown: (e) => {
                  U?.(e, $);
              },
              onKeyDown: N,
              "aria-label": Z ?? B ?? $.username,
              focusProps: { offset: { right: 4 } },
              children: (0, n.jsxs)("div", {
                  className: r()(R.Qs, { [R.zq]: Y }),
                  children: [
                      w && !k
                          ? (0, n.jsx)(u.m, {
                                text: O.intl.string(O.t.BVK71i),
                                children: (0, n.jsx)("div", { className: r()(R.G, { [R.g4]: !F && !H && V }) }),
                            })
                          : null,
                      ((t = r()(R.my, { [R.Jb]: d === j.OSZ.LARGE, [R.dT]: d === j.OSZ.SMALL })),
                      (i = { backgroundImage: `url(${$.getAvatarURL(W, d === j.OSZ.LARGE ? 38 : 24)})`, ...et }),
                      en
                          ? (0, n.jsx)(y.A, {
                                userId: $.id,
                                wrapperClassName: s,
                                children: (0, n.jsx)("div", { className: t, style: i }),
                            })
                          : (0, n.jsx)("div", { className: r()(s, t), style: i })),
                      ((a = (0, n.jsxs)("div", {
                          className: r()(o, R.Xh, Q, { [R.Pi]: !F && !H && V }),
                          children: [
                              B ?? b.Ay.getName($),
                              z
                                  ? (0, n.jsxs)("span", {
                                        className: R.IW,
                                        children: ["\xa0", O.intl.string(O.t["pFO/Ph"])],
                                    })
                                  : "",
                          ],
                      })),
                      (l = {
                          primaryGuild: $.primaryGuild,
                          userId: $.id,
                          contextGuildId: W,
                          isOverlay: f,
                          disableTooltip: !0,
                          className: r()(R.fc, f && R.zW),
                          profileViewedAnalytics: { source: f ? j.JJy.OVERLAY : j.ThZ.VOICE_PANEL },
                      }),
                      !k || f ? (0, n.jsx)(x.A, { ...l, children: a }) : null),
                      (0, n.jsx)(M, { disabled: A, ...v }),
                  ],
              }),
          });
      }
    : null;
function V(e) {
    let { application: t, iconClassName: i, guildId: l, channelId: o, userId: d } = e,
        [c, m] = a.useState(!1),
        _ = (0, s.K)((e) => m(e));
    return (
        a.useEffect(() => {
            c &&
                A.Ay.trackWithMetadata(j.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: d,
                });
        }, [t.id, o, l, d, c]),
        (0, n.jsx)(u.m, {
            text: O.intl.formatToPlainString(O.t.Sq9xJ7, { game: t.name }),
            "aria-label": O.intl.formatToPlainString(O.t.Sq9xJ7, { game: t.name }),
            children: (0, n.jsx)(I.A, {
                ref: _,
                className: r()(R.Kk, R.Gt, i),
                game: t,
                size: I.M.XSMALL,
                onMouseEnter: () => {
                    A.Ay.trackWithMetadata(j.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: l,
                        game_name: t.name,
                        user_id: d,
                    });
                },
            }),
        })
    );
}
