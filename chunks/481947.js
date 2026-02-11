i.d(t, { Ay: () => w, Kc: () => M, Wr: () => D }), i(321073);
var n = i(627968),
    a = i(64700),
    r = i(503698),
    l = i.n(r),
    s = i(172218),
    o = i(934551),
    c = i(311907),
    d = i(990078),
    u = i(397927),
    m = i(440594),
    _ = i(58149),
    p = i(20015),
    A = i(659974),
    h = i(863089),
    f = i(402216),
    g = i(609425),
    S = i(73392),
    v = i(769015),
    C = i(217356),
    I = i(559405),
    x = i(430363),
    E = i(823854),
    T = i(261056),
    y = i(790381),
    N = i(266080),
    P = i(427262),
    L = i(652215),
    j = i(806931),
    b = i(544105),
    U = i(985018),
    R = i(77615);
let O = (e) => {
        let { hangStatusActivity: t, iconClassName: i, isSelf: a, onAddHangStatusClicked: r, userId: s } = e,
            o = (e) => {
                e.stopPropagation(), r?.();
            };
        return a && null == t
            ? (0, n.jsx)(u.DUT, {
                  onClick: o,
                  className: R.Pt,
                  children: (0, n.jsx)(u.nm2, { color: "currentColor", className: l()(R.Kk, R.G8, i) }),
              })
            : (0, n.jsx)(u.DUT, {
                  onClick: o,
                  className: R.Pt,
                  children: (0, n.jsx)(I.A, { userId: s, size: 16, hangStatusActivity: t, className: l()(R.Kk, i) }),
              });
    },
    D = (e) => {
        let { children: t, collapsed: i = !1, className: a } = e;
        return (0, n.jsx)("div", { className: l()(a, R.p_, i ? R.GT : R.m3), role: "group", children: t });
    };
function M(e) {
    let {
        className: t,
        mute: i,
        localMute: a,
        localVideoDisabled: r,
        serverMute: s,
        deaf: c,
        serverDeaf: _,
        collapsed: A,
        video: h,
        isStreaming: g,
        disabled: S,
        isWatching: v,
        iconClassName: C,
        embeddedApplication: I,
        otherClientSessionType: x,
        voicePlatform: E,
        application: T,
        guildId: P,
        channelId: D,
        user: M,
        disconnected: w,
        hangStatusActivity: V,
        showHangStatus: H,
        isSelf: F,
        handleHoverHangStatus: k,
        handleHoverIcons: W,
        onAddHangStatusClicked: B,
    } = e;
    if (A || S) return null;
    let z = [],
        Y = (function (e) {
            let { iconClassName: t, mute: i, localMute: a, serverMute: r, deaf: s, serverDeaf: o } = e,
                c = [];
            if (i) {
                let e;
                e = r || a ? u.O1p : u.z0P;
                let i = (0, n.jsx)(e, { className: l()(R.Kk, t, { [R.DU]: r }), color: "currentColor" });
                c.push(
                    (0, n.jsx)(
                        d.m,
                        {
                            text: a
                                ? U.intl.string(U.t.Q8Uzof)
                                : r
                                  ? U.intl.string(U.t.uLddbQ)
                                  : U.intl.string(U.t.tjtv3P),
                            children: i,
                        },
                        "mute",
                    ),
                );
            }
            if (o || s) {
                let e = o ? u.TJE : u.cQT,
                    i = (0, n.jsx)(e, { className: l()(R.Kk, t, { [R.DU]: o }), color: "currentColor" });
                c.push(
                    (0, n.jsx)(
                        d.m,
                        { text: o ? U.intl.string(U.t.btxSdB) : U.intl.string(U.t.NjmiOL), children: i },
                        "deaf",
                    ),
                );
            }
            return c;
        })({ iconClassName: C, mute: i, localMute: a, serverMute: s, deaf: c, serverDeaf: _ });
    h &&
        (r
            ? z.push(
                  (0, n.jsx)(
                      d.m,
                      {
                          text: U.intl.string(U.t["PXMZ/+"]),
                          children: (0, n.jsx)(u.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: l()(R.Kk, C),
                              colorClass: R.of,
                          }),
                      },
                      "video",
                  ),
              )
            : z.push(
                  (0, n.jsx)(
                      d.m,
                      {
                          text: U.intl.string(U.t.FlNoSV),
                          children: (0, n.jsx)(u.npA, { size: "md", color: "currentColor", className: l()(R.Kk, C) }),
                      },
                      "video",
                  ),
              )),
        w &&
            z.push(
                (0, n.jsx)(
                    d.m,
                    {
                        text: U.intl.string(U.t.HFwRpk),
                        children: (0, n.jsx)(u.EpV, {
                            className: l()(R.Kk, C),
                            color: u.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != I &&
            z.push(
                (0, n.jsx)(
                    d.m,
                    {
                        text: (0, m.A)(I.name),
                        children: (0, n.jsx)(u.k9F, { size: "md", color: "currentColor", className: l()(R.Kk, C) }),
                    },
                    "activity",
                ),
            ),
        x === b.f$.XBOX || E === j.J7.XBOX
            ? z.push((0, n.jsx)(N.A, { className: l()(R.Kk, C) }, "xbox"))
            : x === b.f$.PLAYSTATION || E === j.J7.PLAYSTATION
              ? z.push((0, n.jsx)(y.A, { className: l()(R.Kk, C) }, "playstation"))
              : E === j.J7.QUEST &&
                z.push(
                    (0, n.jsx)(
                        o.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: l()(R.Kk, C) },
                        "quest",
                    ),
                ),
        v &&
            z.push(
                (0, n.jsx)(
                    d.m,
                    {
                        text: U.intl.string(U.t["JH1SJ+"]),
                        children: (0, n.jsx)(u.bMW, { size: "xs", color: "currentColor", className: l()(R.Kk, C) }),
                    },
                    "watch",
                ),
            ),
        g && z.push((0, n.jsx)(f.Ay, { size: f.Ay.Sizes.SMALL }, "stream"));
    let J = null != T && !(0, p.n)(T, L.gfo.EMBEDDED),
        $ = null == V && J;
    return 0 !== z.length || 0 !== Y.length || H || $
        ? (0, n.jsxs)("div", {
              className: l()(R.Pt, t),
              children: [
                  (0, n.jsxs)("div", {
                      className: R.RL,
                      onMouseEnter: () => W?.(!0),
                      onMouseLeave: () => W?.(!1),
                      children: [Y, z],
                  }),
                  H || $
                      ? (0, n.jsx)("div", {
                            className: R.RL,
                            onMouseEnter: () => k?.(!0),
                            onMouseLeave: () => k?.(!1),
                            children: $
                                ? (0, n.jsx)(
                                      G,
                                      { application: T, iconClassName: C, guildId: P, channelId: D, userId: M.id },
                                      `${M.id}-game`,
                                  )
                                : (0, n.jsx)(O, {
                                      userId: M.id,
                                      hangStatusActivity: V,
                                      iconClassName: C,
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
              r,
              {
                  avatarContainerClass: s = R.H,
                  userNameClassName: o = R.gr,
                  size: m = L.OSZ.SMALL,
                  selected: _ = !1,
                  disabled: p = !1,
                  isOverlay: f = !1,
                  ref: v,
                  ...I
              } = e,
              {
                  onClick: y,
                  onKeyDown: N,
                  onDoubleClick: j,
                  onContextMenu: b,
                  onMouseLeave: O,
                  onMouseDown: D,
                  priority: w,
                  speaking: G = !1,
                  latched: V,
                  collapsed: H,
                  mute: F,
                  serverMute: k,
                  guildId: W,
                  nick: B,
                  isGuest: z,
                  flipped: Y,
                  className: J,
                  overlap: $,
                  "aria-label": K,
                  ringing: q,
                  user: Z,
              } = I,
              X = (0, g.A)({ userId: Z.id, guildId: W }),
              Q = (0, S.a)({ displayNameStyles: X }),
              ee = (0, h.A)(Z.id),
              et = (0, A.v)({ isSpeaking: G, isLatched: V && !F && !k, voiceDb: ee }),
              ei = (0, c.bG)([E.A], () => E.A.getProgressForUserId(Z.id), [Z.id]),
              en = (0, x.Uk)("VoiceUser") && null != ei;
          return (0, n.jsx)(u.sqX, {
              ref: v,
              className: l()(J, {
                  [R.q7]: !0,
                  [R.EF]: $,
                  [R.wH]: _,
                  [R.vk]: null != y,
                  [R.L9]: m === L.OSZ.SMALL,
                  [R.p8]: m === L.OSZ.LARGE,
                  [R.r9]: !_ && p,
                  [R.DF]: q,
              }),
              onClick: (e) => {
                  y?.(e, Z);
              },
              onDoubleClick: (e) => {
                  j?.(e, Z);
              },
              onContextMenu: (e) => {
                  b?.(e, Z);
              },
              onMouseLeave: (e) => {
                  O?.(e, Z);
              },
              onMouseDown: (e) => {
                  D?.(e, Z);
              },
              onKeyDown: N,
              "aria-label": K ?? B ?? Z.username,
              focusProps: { offset: { right: 4 } },
              children: (0, n.jsxs)("div", {
                  className: l()(R.Qs, { [R.zq]: Y }),
                  children: [
                      w && !H
                          ? (0, n.jsx)(d.m, {
                                text: U.intl.string(U.t.BVK71i),
                                children: (0, n.jsx)("div", { className: l()(R.G, { [R.g4]: !F && !k && G }) }),
                            })
                          : null,
                      ((t = l()(R.my, { [R.Jb]: m === L.OSZ.LARGE, [R.dT]: m === L.OSZ.SMALL })),
                      (i = { backgroundImage: `url(${Z.getAvatarURL(W, m === L.OSZ.LARGE ? 38 : 24)})`, ...et }),
                      en
                          ? (0, n.jsx)(T.A, {
                                userId: Z.id,
                                wrapperClassName: s,
                                children: (0, n.jsx)("div", { className: t, style: i }),
                            })
                          : (0, n.jsx)("div", { className: l()(s, t), style: i })),
                      ((a = (0, n.jsxs)("div", {
                          className: l()(o, R.Xh, Q, { [R.Pi]: !F && !k && G }),
                          children: [
                              B ?? P.Ay.getName(Z),
                              z
                                  ? (0, n.jsxs)("span", {
                                        className: R.IW,
                                        children: ["\xa0", U.intl.string(U.t["pFO/Ph"])],
                                    })
                                  : "",
                          ],
                      })),
                      (r = {
                          primaryGuild: Z.primaryGuild,
                          userId: Z.id,
                          contextGuildId: W,
                          isOverlay: f,
                          disableTooltip: !0,
                          className: l()(R.fc, f && R.zW),
                          profileViewedAnalytics: { source: f ? L.JJy.OVERLAY : L.ThZ.VOICE_PANEL },
                      }),
                      !H || f ? (0, n.jsx)(C.A, { ...r, children: a }) : null),
                      (0, n.jsx)(M, { disabled: p, ...I }),
                  ],
              }),
          });
      }
    : null;
function G(e) {
    let { application: t, iconClassName: i, guildId: r, channelId: o, userId: c } = e,
        [u, m] = a.useState(!1),
        p = (0, s.K)((e) => m(e));
    return (
        a.useEffect(() => {
            u &&
                _.Ay.trackWithMetadata(L.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: r,
                    user_id: c,
                });
        }, [t.id, o, r, c, u]),
        (0, n.jsx)(d.m, {
            text: U.intl.formatToPlainString(U.t.Sq9xJ7, { game: t.name }),
            "aria-label": U.intl.formatToPlainString(U.t.Sq9xJ7, { game: t.name }),
            children: (0, n.jsx)(v.A, {
                ref: p,
                className: l()(R.Kk, R.Gt, i),
                game: t,
                size: v.M.XSMALL,
                onMouseEnter: () => {
                    _.Ay.trackWithMetadata(L.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: r,
                        game_name: t.name,
                        user_id: c,
                    });
                },
            }),
        })
    );
}
