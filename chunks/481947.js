n.d(t, {
    Ay: () => D,
    Kc: () => L,
    Wr: () => C,
}),
    n(321073),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(172218),
    o = n(665260),
    c = n(934551),
    u = n(990078),
    d = n(397927),
    p = n(440594),
    f = n(58149),
    m = n(659974),
    g = n(863089),
    _ = n(402216),
    y = n(609425),
    A = n(73392),
    b = n(769015),
    h = n(217356),
    v = n(559405),
    O = n(790381),
    j = n(266080),
    S = n(427262),
    I = n(652215),
    x = n(806931),
    E = n(544105),
    P = n(985018),
    N = n(77615);

function T(e) {
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
let w = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: l, userId: s } = e,
            o = (e) => {
                e.stopPropagation(), null == l || l();
            };
        return i && null == t
            ? (0, r.jsx)(d.DUT, {
                  onClick: o,
                  className: N.Pt,
                  children: (0, r.jsx)(d.nm2, {
                      color: "currentColor",
                      className: a()(N.Kk, N.G8, n),
                  }),
              })
            : (0, r.jsx)(d.DUT, {
                  onClick: o,
                  className: N.Pt,
                  children: (0, r.jsx)(v.A, {
                      userId: s,
                      size: 16,
                      hangStatusActivity: t,
                      className: a()(N.Kk, n),
                  }),
              });
    },
    C = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: a()(i, N.p_, n ? N.GT : N.m3),
            role: "group",
            children: t,
        });
    };

function L(e) {
    let {
        className: t,
        mute: n,
        localMute: i,
        localVideoDisabled: l,
        serverMute: s,
        deaf: f,
        serverDeaf: m,
        collapsed: g,
        video: y,
        isStreaming: A,
        disabled: b,
        isWatching: h,
        iconClassName: v,
        embeddedApplication: S,
        otherClientSessionType: T,
        voicePlatform: C,
        application: L,
        guildId: D,
        channelId: G,
        user: R,
        disconnected: M,
        hangStatusActivity: V,
        showHangStatus: U,
        isSelf: W,
        handleHoverHangStatus: F,
        handleHoverIcons: z,
        onAddHangStatusClicked: K,
    } = e;
    if (g || b) return null;
    let H = [],
        Y = (function (e) {
            let { iconClassName: t, mute: n, localMute: i, serverMute: l, deaf: s, serverDeaf: o } = e,
                c = [];
            if (n) {
                let e;
                e = l || i ? d.O1p : d.z0P;
                let n = (0, r.jsx)(e, {
                    className: a()(N.Kk, t, {
                        [N.DU]: l,
                    }),
                    color: "currentColor",
                });
                c.push(
                    (0, r.jsx)(
                        u.m,
                        {
                            text: i
                                ? P.intl.string(P.t.Q8Uzof)
                                : l
                                  ? P.intl.string(P.t.uLddbQ)
                                  : P.intl.string(P.t.tjtv3P),
                            children: n,
                        },
                        "mute",
                    ),
                );
            }
            if (o || s) {
                let e = o ? d.TJE : d.cQT,
                    n = (0, r.jsx)(e, {
                        className: a()(N.Kk, t, {
                            [N.DU]: o,
                        }),
                        color: "currentColor",
                    });
                c.push(
                    (0, r.jsx)(
                        u.m,
                        {
                            text: o ? P.intl.string(P.t.btxSdB) : P.intl.string(P.t.NjmiOL),
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
            localMute: i,
            serverMute: s,
            deaf: f,
            serverDeaf: m,
        });
    y &&
        (l
            ? H.push(
                  (0, r.jsx)(
                      u.m,
                      {
                          text: P.intl.string(P.t["PXMZ/+"]),
                          children: (0, r.jsx)(d.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: a()(N.Kk, v),
                              colorClass: N.of,
                          }),
                      },
                      "video",
                  ),
              )
            : H.push(
                  (0, r.jsx)(
                      u.m,
                      {
                          text: P.intl.string(P.t.FlNoSV),
                          children: (0, r.jsx)(d.npA, {
                              size: "md",
                              color: "currentColor",
                              className: a()(N.Kk, v),
                          }),
                      },
                      "video",
                  ),
              )),
        M &&
            H.push(
                (0, r.jsx)(
                    u.m,
                    {
                        text: P.intl.string(P.t.HFwRpk),
                        children: (0, r.jsx)(d.EpV, {
                            className: a()(N.Kk, v),
                            color: d.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != S &&
            H.push(
                (0, r.jsx)(
                    u.m,
                    {
                        text: (0, p.A)(S.name),
                        children: (0, r.jsx)(d.k9F, {
                            size: "md",
                            color: "currentColor",
                            className: a()(N.Kk, v),
                        }),
                    },
                    "activity",
                ),
            ),
        T === E.f$.XBOX || C === x.J7.XBOX
            ? H.push(
                  (0, r.jsx)(
                      j.A,
                      {
                          className: a()(N.Kk, v),
                      },
                      "xbox",
                  ),
              )
            : T === E.f$.PLAYSTATION || C === x.J7.PLAYSTATION
              ? H.push(
                    (0, r.jsx)(
                        O.A,
                        {
                            className: a()(N.Kk, v),
                        },
                        "playstation",
                    ),
                )
              : C === x.J7.QUEST &&
                H.push(
                    (0, r.jsx)(
                        c.VrHeadsetIcon,
                        {
                            size: "xs",
                            color: "currentColor",
                            className: a()(N.Kk, v),
                        },
                        "quest",
                    ),
                ),
        h &&
            H.push(
                (0, r.jsx)(
                    u.m,
                    {
                        text: P.intl.string(P.t["JH1SJ+"]),
                        children: (0, r.jsx)(d.bMW, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(N.Kk, v),
                        }),
                    },
                    "watch",
                ),
            ),
        A &&
            H.push(
                (0, r.jsx)(
                    _.Ay,
                    {
                        size: _.Ay.Sizes.SMALL,
                    },
                    "stream",
                ),
            );
    let B = null != L && !(0, o.Lt)(L.flags, I.gfo.EMBEDDED),
        J = null == V && B;
    return 0 !== H.length || 0 !== Y.length || U || J
        ? (0, r.jsxs)("div", {
              className: a()(N.Pt, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: N.RL,
                      onMouseEnter: () => (null == z ? void 0 : z(!0)),
                      onMouseLeave: () => (null == z ? void 0 : z(!1)),
                      children: [Y, H],
                  }),
                  U || J
                      ? (0, r.jsx)("div", {
                            className: N.RL,
                            onMouseEnter: () => (null == F ? void 0 : F(!0)),
                            onMouseLeave: () => (null == F ? void 0 : F(!1)),
                            children: J
                                ? (0, r.jsx)(
                                      k,
                                      {
                                          application: L,
                                          iconClassName: v,
                                          guildId: D,
                                          channelId: G,
                                          userId: R.id,
                                      },
                                      "".concat(R.id, "-game"),
                                  )
                                : (0, r.jsx)(w, {
                                      userId: R.id,
                                      hangStatusActivity: V,
                                      iconClassName: v,
                                      isSelf: W,
                                      onAddHangStatusClicked: K,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let D = /^(14256|21552)$/.test(n.j)
    ? function (e) {
          var t, n, i;
          let l,
              s,
              {
                  avatarContainerClass: o = N.H,
                  userNameClassName: c = N.gr,
                  size: p = I.OSZ.SMALL,
                  selected: f = !1,
                  disabled: _ = !1,
                  isOverlay: b = !1,
                  ref: v,
              } = e,
              O = (function (e, t) {
                  if (null == e) return {};
                  var n,
                      r,
                      i,
                      l = {};
                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                          (r = n[i]),
                              !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                      return l;
                  }
                  if (
                      ((l = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i = {},
                              l = Object.getOwnPropertyNames(e);
                          for (r = 0; r < l.length; r++)
                              (n = l[r]),
                                  !(t.indexOf(n) >= 0) &&
                                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                                      (i[n] = e[n]);
                          return i;
                      })(e, t)),
                      Object.getOwnPropertySymbols)
                  )
                      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                          (r = n[i]),
                              !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                  return l;
              })(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]),
              {
                  onClick: j,
                  onKeyDown: x,
                  onDoubleClick: E,
                  onContextMenu: w,
                  onMouseLeave: C,
                  onMouseDown: D,
                  priority: k,
                  speaking: G = !1,
                  latched: R,
                  collapsed: M,
                  mute: V,
                  serverMute: U,
                  guildId: W,
                  nick: F,
                  isGuest: z,
                  flipped: K,
                  className: H,
                  overlap: Y,
                  "aria-label": B,
                  ringing: J,
                  user: Z,
              } = O,
              X = (0, y.A)({
                  userId: Z.id,
                  guildId: W,
              }),
              q = (0, A.a)({
                  displayNameStyles: X,
              }),
              $ = (0, g.A)(Z.id),
              Q = (0, m.v)({
                  isSpeaking: G,
                  isLatched: R && !V && !U,
                  voiceDb: $,
              });
          return (0, r.jsx)(d.sqX, {
              ref: v,
              className: a()(H, {
                  [N.q7]: !0,
                  [N.EF]: Y,
                  [N.wH]: f,
                  [N.vk]: null != j,
                  [N.L9]: p === I.OSZ.SMALL,
                  [N.p8]: p === I.OSZ.LARGE,
                  [N.r9]: !f && _,
                  [N.DF]: J,
              }),
              onClick: (e) => {
                  null == j || j(e, Z);
              },
              onDoubleClick: (e) => {
                  null == E || E(e, Z);
              },
              onContextMenu: (e) => {
                  null == w || w(e, Z);
              },
              onMouseLeave: (e) => {
                  null == C || C(e, Z);
              },
              onMouseDown: (e) => {
                  null == D || D(e, Z);
              },
              onKeyDown: x,
              "aria-label": null != (t = null != B ? B : F) ? t : Z.username,
              focusProps: {
                  offset: {
                      right: 4,
                  },
              },
              children: (0, r.jsxs)("div", {
                  className: a()(N.Qs, {
                      [N.zq]: K,
                  }),
                  children: [
                      k && !M
                          ? (0, r.jsx)(u.m, {
                                text: P.intl.string(P.t.BVK71i),
                                children: (0, r.jsx)("div", {
                                    className: a()(N.G, {
                                        [N.g4]: !V && !U && G,
                                    }),
                                }),
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(o, N.my, {
                              [N.Jb]: p === I.OSZ.LARGE,
                              [N.dT]: p === I.OSZ.SMALL,
                          }),
                          style: T(
                              {
                                  backgroundImage: "url(".concat(Z.getAvatarURL(W, p === I.OSZ.LARGE ? 38 : 24), ")"),
                              },
                              Q,
                          ),
                      }),
                      ((l = (0, r.jsxs)("div", {
                          className: a()(c, N.Xh, q, {
                              [N.Pi]: !V && !U && G,
                          }),
                          children: [
                              null != F ? F : S.Ay.getName(Z),
                              z
                                  ? (0, r.jsxs)("span", {
                                        className: N.IW,
                                        children: ["\xa0", P.intl.string(P.t["pFO/Ph"])],
                                    })
                                  : "",
                          ],
                      })),
                      (s = {
                          primaryGuild: Z.primaryGuild,
                          userId: Z.id,
                          contextGuildId: W,
                          isOverlay: b,
                          disableTooltip: !0,
                          className: a()(N.fc, b && N.zW),
                          profileViewedAnalytics: {
                              source: b ? I.JJy.OVERLAY : I.ThZ.VOICE_PANEL,
                          },
                      }),
                      !M || b
                          ? (0, r.jsx)(
                                h.A,
                                ((n = T({}, s)),
                                (i = i =
                                    {
                                        children: l,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n),
                            )
                          : null),
                      (0, r.jsx)(
                          L,
                          T(
                              {
                                  disabled: _,
                              },
                              O,
                          ),
                      ),
                  ],
              }),
          });
      }
    : null;

function k(e) {
    let { application: t, iconClassName: n, guildId: l, channelId: o, userId: c } = e,
        [d, p] = i.useState(!1),
        m = (0, s.K)((e) => p(e));
    return (
        i.useEffect(() => {
            d &&
                f.Ay.trackWithMetadata(I.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: c,
                });
        }, [t.id, o, l, c, d]),
        (0, r.jsx)(u.m, {
            text: P.intl.formatToPlainString(P.t.Sq9xJ7, {
                game: t.name,
            }),
            "aria-label": P.intl.formatToPlainString(P.t.Sq9xJ7, {
                game: t.name,
            }),
            children: (0, r.jsx)(b.A, {
                ref: m,
                className: a()(N.Kk, N.Gt, n),
                game: t,
                size: b.M.XSMALL,
                onMouseEnter: () => {
                    f.Ay.trackWithMetadata(I.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                        channel_id: o,
                        guild_id: l,
                        game_name: t.name,
                        user_id: c,
                    });
                },
            }),
        })
    );
}
