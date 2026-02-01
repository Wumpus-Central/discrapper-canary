n.d(t, {
    A: () => z,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(990078),
    u = n(397927),
    c = n(387755),
    d = n(945830),
    h = n(47167),
    p = n(713654),
    f = n(461678),
    g = n(95550),
    m = n(95701),
    y = n(734057),
    A = n(383501),
    v = n(994500),
    b = n(543465),
    E = n(287809),
    O = n(810412),
    x = n(914853),
    _ = n(129537),
    S = n(578093),
    I = n(145567),
    j = n(922611),
    T = n(34307),
    C = n(652215),
    N = n(895867),
    w = n(985018),
    P = n(532165);

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function k(e, t) {
    if (null == e) return {};
    var n,
        i,
        r,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.getOwnPropertyNames(e);
            for (i = 0; i < l.length; i++)
                (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l;
}

function M(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}

function L(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: l, onRequestClosePinsPopout: a } = e,
        s = r.useRef(null);
    return (null == t ? void 0 : t.id) == null
        ? null
        : (0, i.jsx)(u.YNO, {
              targetElementRef: s,
              shouldShow: n,
              animation: u.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: a,
              renderPopout: (e) =>
                  (0, i.jsx)(
                      d.A,
                      R(D({}, e), {
                          channel: t,
                          onJump: () => {},
                      }),
                  ),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t } = e,
                      n = k(e, ["onClick"]);
                  return (0, i.jsx)("div", {
                      ref: s,
                      children: (0, i.jsx)(o.m, {
                          text: w.intl.string(w.t["mp1N/2"]),
                          "aria-label": w.intl.string(w.t["mp1N/2"]),
                          children: (0, i.jsx)(
                              u.K0,
                              R(D({}, n), {
                                  icon: u.tsw,
                                  "aria-label": w.intl.string(w.t["mp1N/2"]),
                                  size: "sm",
                                  variant: "icon-only",
                                  onClick: l,
                              }),
                          ),
                      }),
                  });
              },
          });
}

function U(e) {
    var t;
    let { channel: n } = e,
        l = r.useRef(null),
        a = null != (t = null == n ? void 0 : n.id) ? t : null,
        c = (null == n ? void 0 : n.guild_id) != null,
        [d, h] = (0, s.yK)(
            [b.Ay],
            () =>
                c && null != a && null != n
                    ? [b.Ay.isChannelMuted(n.getGuildId(), n.id), b.Ay.resolvedMessageNotifications(n)]
                    : [!1, C.orn.ALL_MESSAGES],
            [n, a, c],
        ),
        [p, g] = r.useState(!1),
        m = r.useCallback(() => {
            g((e) => !e);
        }, []),
        y = w.intl.string(w.t.h850Ss),
        A = d || h !== C.orn.ALL_MESSAGES ? u.a_I : u.XFE;
    return c && null != n
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: l,
              shouldShow: p,
              animation: u.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => g(!1),
              renderPopout: (e) =>
                  (0, i.jsx)(
                      f.A,
                      R(D({}, e), {
                          channel: n,
                          navId: "overlay-channel-context",
                          label: w.intl.string(w.t.Xm41aV),
                      }),
                  ),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t } = e,
                      n = k(e, ["onClick"]);
                  return (0, i.jsx)("div", {
                      ref: l,
                      children: (0, i.jsx)(o.m, {
                          text: y,
                          "aria-label": y,
                          children: (0, i.jsx)(
                              u.K0,
                              R(D({}, n), {
                                  icon: A,
                                  "aria-label": y,
                                  size: "sm",
                                  variant: "icon-only",
                                  onClick: m,
                              }),
                          ),
                      }),
                  });
              },
          })
        : null;
}

function G(e) {
    let {
        channel: t,
        isConnectedToVoiceChannel: n,
        onStartPrivateCall: r,
        pinsOpen: l,
        onTogglePinsPopout: a,
        onRequestClosePinsPopout: s,
    } = e;
    return M(t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  !n &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(o.m, {
                                  text: w.intl.string(w.t.JJogjm),
                                  "aria-label": w.intl.string(w.t.JJogjm),
                                  children: (0, i.jsx)(u.K0, {
                                      icon: u._jp,
                                      "aria-label": w.intl.string(w.t.JJogjm),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => r(!1),
                                  }),
                              }),
                              (0, i.jsx)(o.m, {
                                  text: w.intl.string(w.t.oCqlGG),
                                  "aria-label": w.intl.string(w.t.oCqlGG),
                                  children: (0, i.jsx)(u.K0, {
                                      icon: u.npA,
                                      "aria-label": w.intl.string(w.t.oCqlGG),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => r(!0),
                                  }),
                              }),
                          ],
                      }),
                  (0, i.jsx)(L, {
                      channel: t,
                      pinsOpen: l,
                      onTogglePinsPopout: a,
                      onRequestClosePinsPopout: s,
                  }),
                  (0, i.jsx)(o.m, {
                      text: t.isDM() ? w.intl.string(w.t.Xjlbvs) : w.intl.string(w.t["LR+Ptf"]),
                      "aria-label": t.isDM() ? w.intl.string(w.t.Xjlbvs) : w.intl.string(w.t["LR+Ptf"]),
                      children: (0, i.jsx)(u.K0, {
                          icon: t.isDM() ? u.ggM : u.DpX,
                          "aria-label": t.isDM() ? w.intl.string(w.t.Xjlbvs) : w.intl.string(w.t["LR+Ptf"]),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => {
                              (0, O.YX)(C.uss.TEXT_CHAT_V3, {
                                  type: O.Z5.INVITE,
                                  value: O.IP.PANEL_OPENED,
                                  secondaryValue: t.isDM() ? "add_friends" : "add_members",
                              }),
                                  (0, g.Jz)({
                                      channel: t,
                                      onComplete: (e) => {
                                          (0, I.D$)({
                                              channelId: e,
                                              source: T.B.MANUAL,
                                              guildId: null,
                                              messageId: null,
                                              widgetType: C.uss.TEXT_CHAT_V3,
                                          });
                                      },
                                  });
                          },
                      }),
                  }),
              ],
          })
        : null;
}

function V(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: r, onRequestClosePinsPopout: l } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(U, {
                      channel: t,
                  }),
                  (0, i.jsx)(L, {
                      channel: t,
                      pinsOpen: n,
                      onTogglePinsPopout: r,
                      onRequestClosePinsPopout: l,
                  }),
              ],
          });
}

function z(e) {
    let t,
        { channel: n, user: l, guild: d, title: f, dragStart: g, dragging: b } = e,
        [D, R] = r.useState(!1),
        k = (0, s.bG)([A.A], () => A.A.getChannelId(), []) === (null == n ? void 0 : n.id),
        L = (0, s.bG)(
            [y.A],
            () => ((null == n ? void 0 : n.isThread()) && null != n.parent_id ? y.A.getChannel(n.parent_id) : null),
            [n],
        ),
        U = (0, s.bG)([E.default, v.A], () => (null != L ? (0, h.m1)(L, E.default, v.A) : null), [L]),
        z = (0, s.bG)([], () => {
            var e, t;
            return (
                (e = n),
                (t = l),
                null == e
                    ? null
                    : e.isDM() && null != t
                      ? v.A.isFriend(t.id)
                          ? {
                                tab: x.x.FRIENDS,
                                targetId: t.id,
                            }
                          : null
                      : (0, m.ke)(e.type)
                        ? {
                              tab: x.x.MESSAGES,
                              targetId: e.id,
                          }
                        : (0, m.ay)(e.type)
                          ? {
                                tab: x.x.VOICE,
                                targetId: e.id,
                            }
                          : null
            );
        }, [n, l]),
        F = r.useCallback(
            (e) => {
                M(n) &&
                    ((0, O.YX)(C.uss.TEXT_CHAT_V3, {
                        type: O.Z5.CALL_BUTTON,
                        value: O.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    c.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        H = r.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                R((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, O.YX)(C.uss.TEXT_CHAT_V3, {
                                type: O.Z5.TEXT_CHAT,
                                value: O.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [null == n ? void 0 : n.id]);
    return (0, i.jsxs)("div", {
        className: a()(P.XV, b && P.cB),
        onMouseDown: (e) => {
            0 === e.button && g(_.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, i.jsxs)("div", {
                className: P.LD,
                children: [
                    (0, i.jsx)("div", {
                        className: P.gr,
                        children: (0, i.jsx)(j.g, {
                            channel: null,
                            user: l,
                            guild: d,
                            size: j.c.SIZE_24,
                        }),
                    }),
                    null != (t = (0, p.gU)(n, d))
                        ? (0, i.jsx)(t, {
                              className: P.gr,
                              size: "sm",
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: P.G1,
                        children: [
                            null != L && null != U
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.DUT, {
                                              className: P.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  var t, n, i;
                                                  e.stopPropagation(),
                                                      (0, I.D$)({
                                                          channelId: L.id,
                                                          source: T.B.MANUAL,
                                                          guildId:
                                                              null !=
                                                              (t =
                                                                  null !=
                                                                  (n = null == (i = L.getGuildId) ? void 0 : i.call(L))
                                                                      ? n
                                                                      : L.guild_id)
                                                                  ? t
                                                                  : null,
                                                          messageId: null,
                                                          widgetType: C.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: U,
                                              }),
                                          }),
                                          (0, i.jsx)(u._BQ, {
                                              className: P.ln,
                                              size: "xs",
                                              color: u.LU0.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(u.Text, {
                                className: P.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: f,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: P.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(G, {
                        channel: n,
                        isConnectedToVoiceChannel: k,
                        onStartPrivateCall: F,
                        pinsOpen: D,
                        onTogglePinsPopout: H,
                        onRequestClosePinsPopout: () => R(!1),
                    }),
                    (0, i.jsx)(V, {
                        channel: n,
                        pinsOpen: D,
                        onTogglePinsPopout: H,
                        onRequestClosePinsPopout: () => R(!1),
                    }),
                    null != z &&
                        (0, i.jsx)(S.j, {
                            tab: z.tab,
                            targetId: z.targetId,
                            widgetType: C.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    (null == n ? void 0 : n.id) != null &&
                        (0, i.jsx)(o.m, {
                            text: w.intl.string(N.default.ERApc4),
                            "aria-label": w.intl.string(N.default.ERApc4),
                            children: (0, i.jsx)(u.K0, {
                                icon: u.PGe,
                                "aria-label": w.intl.string(N.default.ERApc4),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, I.lu)({
                                        channelId: n.id,
                                        widgetType: C.uss.TEXT_CHAT_V3,
                                        secondaryValue: "close_button",
                                    });
                                },
                            }),
                        }),
                ],
            }),
        ],
    });
}
