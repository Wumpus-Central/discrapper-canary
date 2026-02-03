n.d(t, {
    Ay: () => U,
    Kc: () => M,
    Wr: () => k,
}),
    n(321073),
    n(938796),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(172218),
    o = n(665260),
    c = n(934551),
    u = n(311907),
    d = n(990078),
    p = n(397927),
    f = n(440594),
    m = n(58149),
    g = n(659974),
    y = n(863089),
    b = n(402216),
    _ = n(609425),
    h = n(73392),
    A = n(769015),
    v = n(217356),
    O = n(559405),
    S = n(430363),
    j = n(823854),
    x = n(261056),
    I = n(790381),
    E = n(266080),
    C = n(427262),
    P = n(652215),
    N = n(806931),
    T = n(544105),
    w = n(985018),
    L = n(77615);

function D(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let R = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: l, onAddHangStatusClicked: i, userId: s } = e,
            o = (e) => {
                e.stopPropagation(), null == i || i();
            };
        return l && null == t
            ? (0, r.jsx)(p.DUT, {
                  onClick: o,
                  className: L.Pt,
                  children: (0, r.jsx)(p.nm2, {
                      color: "currentColor",
                      className: a()(L.Kk, L.G8, n),
                  }),
              })
            : (0, r.jsx)(p.DUT, {
                  onClick: o,
                  className: L.Pt,
                  children: (0, r.jsx)(O.A, {
                      userId: s,
                      size: 16,
                      hangStatusActivity: t,
                      className: a()(L.Kk, n),
                  }),
              });
    },
    k = (e) => {
        let { children: t, collapsed: n = !1, className: l } = e;
        return (0, r.jsx)("div", {
            className: a()(l, L.p_, n ? L.GT : L.m3),
            role: "group",
            children: t,
        });
    };

function M(e) {
    let {
        className: t,
        mute: n,
        localMute: l,
        localVideoDisabled: i,
        serverMute: s,
        deaf: u,
        serverDeaf: m,
        collapsed: g,
        video: y,
        isStreaming: _,
        disabled: h,
        isWatching: A,
        iconClassName: v,
        embeddedApplication: O,
        otherClientSessionType: S,
        voicePlatform: j,
        application: x,
        guildId: C,
        channelId: D,
        user: k,
        disconnected: M,
        hangStatusActivity: U,
        showHangStatus: V,
        isSelf: F,
        handleHoverHangStatus: W,
        handleHoverIcons: H,
        onAddHangStatusClicked: z,
    } = e;
    if (g || h) return null;
    let K = [],
        B = (function (e) {
            let { iconClassName: t, mute: n, localMute: l, serverMute: i, deaf: s, serverDeaf: o } = e,
                c = [];
            if (n) {
                let e;
                e = i || l ? p.O1p : p.z0P;
                let n = (0, r.jsx)(e, {
                    className: a()(L.Kk, t, {
                        [L.DU]: i,
                    }),
                    color: "currentColor",
                });
                c.push(
                    (0, r.jsx)(
                        d.m,
                        {
                            text: l
                                ? w.intl.string(w.t.Q8Uzof)
                                : i
                                  ? w.intl.string(w.t.uLddbQ)
                                  : w.intl.string(w.t.tjtv3P),
                            children: n,
                        },
                        "mute",
                    ),
                );
            }
            if (o || s) {
                let e = o ? p.TJE : p.cQT,
                    n = (0, r.jsx)(e, {
                        className: a()(L.Kk, t, {
                            [L.DU]: o,
                        }),
                        color: "currentColor",
                    });
                c.push(
                    (0, r.jsx)(
                        d.m,
                        {
                            text: o ? w.intl.string(w.t.btxSdB) : w.intl.string(w.t.NjmiOL),
                            children: n,
                        },
                        "deaf",
                    ),
                );
            }
            return c;
        })({
            iconClassName: v,
            mute: n,
            localMute: l,
            serverMute: s,
            deaf: u,
            serverDeaf: m,
        });
    y &&
        (i
            ? K.push(
                  (0, r.jsx)(
                      d.m,
                      {
                          text: w.intl.string(w.t["PXMZ/+"]),
                          children: (0, r.jsx)(p.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: a()(L.Kk, v),
                              colorClass: L.of,
                          }),
                      },
                      "video",
                  ),
              )
            : K.push(
                  (0, r.jsx)(
                      d.m,
                      {
                          text: w.intl.string(w.t.FlNoSV),
                          children: (0, r.jsx)(p.npA, {
                              size: "md",
                              color: "currentColor",
                              className: a()(L.Kk, v),
                          }),
                      },
                      "video",
                  ),
              )),
        M &&
            K.push(
                (0, r.jsx)(
                    d.m,
                    {
                        text: w.intl.string(w.t.HFwRpk),
                        children: (0, r.jsx)(p.EpV, {
                            className: a()(L.Kk, v),
                            color: p.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != O &&
            K.push(
                (0, r.jsx)(
                    d.m,
                    {
                        text: (0, f.A)(O.name),
                        children: (0, r.jsx)(p.k9F, {
                            size: "md",
                            color: "currentColor",
                            className: a()(L.Kk, v),
                        }),
                    },
                    "activity",
                ),
            ),
        S === T.f$.XBOX || j === N.J7.XBOX
            ? K.push(
                  (0, r.jsx)(
                      E.A,
                      {
                          className: a()(L.Kk, v),
                      },
                      "xbox",
                  ),
              )
            : S === T.f$.PLAYSTATION || j === N.J7.PLAYSTATION
              ? K.push(
                    (0, r.jsx)(
                        I.A,
                        {
                            className: a()(L.Kk, v),
                        },
                        "playstation",
                    ),
                )
              : j === N.J7.QUEST &&
                K.push(
                    (0, r.jsx)(
                        c.VrHeadsetIcon,
                        {
                            size: "xs",
                            color: "currentColor",
                            className: a()(L.Kk, v),
                        },
                        "quest",
                    ),
                ),
        A &&
            K.push(
                (0, r.jsx)(
                    d.m,
                    {
                        text: w.intl.string(w.t["JH1SJ+"]),
                        children: (0, r.jsx)(p.bMW, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(L.Kk, v),
                        }),
                    },
                    "watch",
                ),
            ),
        _ &&
            K.push(
                (0, r.jsx)(
                    b.Ay,
                    {
                        size: b.Ay.Sizes.SMALL,
                    },
                    "stream",
                ),
            );
    let Y = null != x && !(0, o.Lt)(x.flags, P.gfo.EMBEDDED),
        J = null == U && Y;
    return 0 !== K.length || 0 !== B.length || V || J
        ? (0, r.jsxs)("div", {
              className: a()(L.Pt, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: L.RL,
                      onMouseEnter: () => (null == H ? void 0 : H(!0)),
                      onMouseLeave: () => (null == H ? void 0 : H(!1)),
                      children: [B, K],
                  }),
                  V || J
                      ? (0, r.jsx)("div", {
                            className: L.RL,
                            onMouseEnter: () => (null == W ? void 0 : W(!0)),
                            onMouseLeave: () => (null == W ? void 0 : W(!1)),
                            children: J
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          application: x,
                                          iconClassName: v,
                                          guildId: C,
                                          channelId: D,
                                          userId: k.id,
                                      },
                                      "".concat(k.id, "-game"),
                                  )
                                : (0, r.jsx)(R, {
                                      userId: k.id,
                                      hangStatusActivity: U,
                                      iconClassName: v,
                                      isSelf: F,
                                      onAddHangStatusClicked: z,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let U = /^(14256|21552)$/.test(n.j)
    ? function (e) {
          var t, n, l;
          let i,
              s,
              o,
              c,
              {
                  avatarContainerClass: f = L.H,
                  userNameClassName: m = L.gr,
                  size: b = P.OSZ.SMALL,
                  selected: A = !1,
                  disabled: O = !1,
                  isOverlay: I = !1,
                  ref: E,
              } = e,
              N = (function (e, t) {
                  if (null == e) return {};
                  var n,
                      r,
                      l,
                      i = {};
                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                          (r = n[l]),
                              !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                      return i;
                  }
                  if (
                      ((i = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              l = {},
                              i = Object.getOwnPropertyNames(e);
                          for (r = 0; r < i.length; r++)
                              (n = i[r]),
                                  !(t.indexOf(n) >= 0) &&
                                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                                      (l[n] = e[n]);
                          return l;
                      })(e, t)),
                      Object.getOwnPropertySymbols)
                  )
                      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                          (r = n[l]),
                              !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                  return i;
              })(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]),
              {
                  onClick: T,
                  onKeyDown: R,
                  onDoubleClick: k,
                  onContextMenu: U,
                  onMouseLeave: G,
                  onMouseDown: V,
                  priority: F,
                  speaking: W = !1,
                  latched: H,
                  collapsed: z,
                  mute: K,
                  serverMute: B,
                  guildId: Y,
                  nick: J,
                  isGuest: Z,
                  flipped: X,
                  className: q,
                  overlap: $,
                  "aria-label": Q,
                  ringing: ee,
                  user: et,
              } = N,
              en = (0, _.A)({
                  userId: et.id,
                  guildId: Y,
              }),
              er = (0, h.a)({
                  displayNameStyles: en,
              }),
              el = (0, y.A)(et.id),
              ei = (0, g.v)({
                  isSpeaking: W,
                  isLatched: H && !K && !B,
                  voiceDb: el,
              }),
              ea = (0, u.bG)([j.A], () => j.A.getProgressForUserId(et.id), [et.id]),
              es = (0, S.Uk)("VoiceUser") && null != ea;
          return (0, r.jsx)(p.sqX, {
              ref: E,
              className: a()(q, {
                  [L.q7]: !0,
                  [L.EF]: $,
                  [L.wH]: A,
                  [L.vk]: null != T,
                  [L.L9]: b === P.OSZ.SMALL,
                  [L.p8]: b === P.OSZ.LARGE,
                  [L.r9]: !A && O,
                  [L.DF]: ee,
              }),
              onClick: (e) => {
                  null == T || T(e, et);
              },
              onDoubleClick: (e) => {
                  null == k || k(e, et);
              },
              onContextMenu: (e) => {
                  null == U || U(e, et);
              },
              onMouseLeave: (e) => {
                  null == G || G(e, et);
              },
              onMouseDown: (e) => {
                  null == V || V(e, et);
              },
              onKeyDown: R,
              "aria-label": null != (t = null != Q ? Q : J) ? t : et.username,
              focusProps: {
                  offset: {
                      right: 4,
                  },
              },
              children: (0, r.jsxs)("div", {
                  className: a()(L.Qs, {
                      [L.zq]: X,
                  }),
                  children: [
                      F && !z
                          ? (0, r.jsx)(d.m, {
                                text: w.intl.string(w.t.BVK71i),
                                children: (0, r.jsx)("div", {
                                    className: a()(L.G, {
                                        [L.g4]: !K && !B && W,
                                    }),
                                }),
                            })
                          : null,
                      ((i = a()(L.my, {
                          [L.Jb]: b === P.OSZ.LARGE,
                          [L.dT]: b === P.OSZ.SMALL,
                      })),
                      (s = D(
                          {
                              backgroundImage: "url(".concat(et.getAvatarURL(Y, b === P.OSZ.LARGE ? 38 : 24), ")"),
                          },
                          ei,
                      )),
                      es
                          ? (0, r.jsx)(x.A, {
                                userId: et.id,
                                wrapperClassName: f,
                                children: (0, r.jsx)("div", {
                                    className: i,
                                    style: s,
                                }),
                            })
                          : (0, r.jsx)("div", {
                                className: a()(f, i),
                                style: s,
                            })),
                      ((o = (0, r.jsxs)("div", {
                          className: a()(m, L.Xh, er, {
                              [L.Pi]: !K && !B && W,
                          }),
                          children: [
                              null != J ? J : C.Ay.getName(et),
                              Z
                                  ? (0, r.jsxs)("span", {
                                        className: L.IW,
                                        children: ["\xa0", w.intl.string(w.t["pFO/Ph"])],
                                    })
                                  : "",
                          ],
                      })),
                      (c = {
                          primaryGuild: et.primaryGuild,
                          userId: et.id,
                          contextGuildId: Y,
                          isOverlay: I,
                          disableTooltip: !0,
                          className: a()(L.fc, I && L.zW),
                          profileViewedAnalytics: {
                              source: I ? P.JJy.OVERLAY : P.ThZ.VOICE_PANEL,
                          },
                      }),
                      !z || I
                          ? (0, r.jsx)(
                                v.A,
                                ((n = D({}, c)),
                                (l = l =
                                    {
                                        children: o,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n),
                            )
                          : null),
                      (0, r.jsx)(
                          M,
                          D(
                              {
                                  disabled: O,
                              },
                              N,
                          ),
                      ),
                  ],
              }),
          });
      }
    : null;

function G(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: o, userId: c } = e,
        [u, p] = l.useState(!1),
        f = (0, s.K)((e) => p(e));
    return (
        l.useEffect(() => {
            u &&
                m.Ay.trackWithMetadata(P.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: i,
                    user_id: c,
                });
        }, [t.id, o, i, c, u]),
        (0, r.jsx)(d.m, {
            text: w.intl.formatToPlainString(w.t.Sq9xJ7, {
                game: t.name,
            }),
            "aria-label": w.intl.formatToPlainString(w.t.Sq9xJ7, {
                game: t.name,
            }),
            children: (0, r.jsx)(A.A, {
                ref: f,
                className: a()(L.Kk, L.Gt, n),
                game: t,
                size: A.M.XSMALL,
                onMouseEnter: () => {
                    m.Ay.trackWithMetadata(P.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: i,
                        game_name: t.name,
                        user_id: c,
                    });
                },
            }),
        })
    );
}
