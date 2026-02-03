n.d(t, {
    A: () => Y,
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
    _ = n(589051),
    S = n(129537),
    I = n(578093),
    j = n(145567),
    T = n(922611),
    C = n(201479),
    N = n(691761),
    w = n(34307),
    P = n(652215),
    D = n(895867),
    R = n(985018),
    k = n(532165);

function M(e) {
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

function L(e, t) {
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

function U(e, t) {
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

function G(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}

function V(e) {
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
                      L(M({}, e), {
                          channel: t,
                          onJump: () => {},
                      }),
                  ),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t } = e,
                      n = U(e, ["onClick"]);
                  return (0, i.jsx)("div", {
                      ref: s,
                      children: (0, i.jsx)(o.m, {
                          text: R.intl.string(R.t["mp1N/2"]),
                          "aria-label": R.intl.string(R.t["mp1N/2"]),
                          children: (0, i.jsx)(
                              u.K0,
                              L(M({}, n), {
                                  icon: u.tsw,
                                  "aria-label": R.intl.string(R.t["mp1N/2"]),
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

function z(e) {
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
                    : [!1, P.orn.ALL_MESSAGES],
            [n, a, c],
        ),
        [p, g] = r.useState(!1),
        m = r.useCallback(() => {
            g((e) => !e);
        }, []),
        y = R.intl.string(R.t.h850Ss),
        A = d || h !== P.orn.ALL_MESSAGES ? u.a_I : u.XFE;
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
                      L(M({}, e), {
                          channel: n,
                          navId: "overlay-channel-context",
                          label: R.intl.string(R.t.Xm41aV),
                      }),
                  ),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t } = e,
                      n = U(e, ["onClick"]);
                  return (0, i.jsx)("div", {
                      ref: l,
                      children: (0, i.jsx)(o.m, {
                          text: y,
                          "aria-label": y,
                          children: (0, i.jsx)(
                              u.K0,
                              L(M({}, n), {
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

function F(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: r, onTogglePinsPopout: l, onRequestClosePinsPopout: a } = e;
    return G(t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.m, {
                      text: R.intl.string(R.t.JJogjm),
                      "aria-label": R.intl.string(R.t.JJogjm),
                      children: (0, i.jsx)(u.K0, {
                          icon: u._jp,
                          "aria-label": R.intl.string(R.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, i.jsx)(V, {
                      channel: t,
                      pinsOpen: r,
                      onTogglePinsPopout: l,
                      onRequestClosePinsPopout: a,
                  }),
                  t.isMultiUserDM()
                      ? (0, i.jsx)(o.m, {
                            text: R.intl.string(R.t["LR+Ptf"]),
                            "aria-label": R.intl.string(R.t["LR+Ptf"]),
                            children: (0, i.jsx)(u.K0, {
                                icon: u.DpX,
                                "aria-label": R.intl.string(R.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, O.YX)(P.uss.TEXT_CHAT_V3, {
                                        type: O.Z5.INVITE,
                                        value: O.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, g.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, j.D$)({
                                                    target: {
                                                        kind: j.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: w.B.MANUAL,
                                                    widgetType: P.uss.TEXT_CHAT_V3,
                                                });
                                            },
                                        });
                                },
                            }),
                        })
                      : null,
              ],
          })
        : null;
}

function H(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: r, onRequestClosePinsPopout: l } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(z, {
                      channel: t,
                  }),
                  (0, i.jsx)(V, {
                      channel: t,
                      pinsOpen: n,
                      onTogglePinsPopout: r,
                      onRequestClosePinsPopout: l,
                  }),
              ],
          });
}

function Y(e) {
    var t;
    let { channel: n, user: l, guild: d, title: f, dragStart: g, dragging: b } = e,
        { hasFriendList: M } = (0, _.M8)("TextChatHeader"),
        [L, U] = r.useState(!1),
        V = (0, s.bG)([A.A], () => A.A.getChannelId(), []),
        z = (null == n ? void 0 : n.isDM()) && null != (t = null == l ? void 0 : l.id) ? t : null,
        Y = (0, N.p)(z),
        W = V === (null == n ? void 0 : n.id),
        K = R.intl.string(D.default.tYPfF2),
        B = (0, s.bG)(
            [y.A],
            () => ((null == n ? void 0 : n.isThread()) && null != n.parent_id ? y.A.getChannel(n.parent_id) : null),
            [n],
        ),
        Z = (0, s.bG)([E.default, v.A], () => (null != B ? (0, h.m1)(B, E.default, v.A) : null), [B]),
        X = (0, s.bG)([], () => {
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
        J = r.useCallback(
            (e) => {
                G(n) &&
                    ((0, O.YX)(P.uss.TEXT_CHAT_V3, {
                        type: O.Z5.CALL_BUTTON,
                        value: O.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    c.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        Q = r.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                U((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, O.YX)(P.uss.TEXT_CHAT_V3, {
                                type: O.Z5.TEXT_CHAT,
                                value: O.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [null == n ? void 0 : n.id]);
    return (0, i.jsxs)("div", {
        className: a()(k.XV, b && k.cB),
        onMouseDown: (e) => {
            0 === e.button && g(S.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, i.jsxs)("div", {
                className: k.LD,
                children: [
                    (0, i.jsx)("div", {
                        className: k.gr,
                        children: (0, i.jsx)(C.J, {
                            application: Y,
                            fallback: (0, i.jsx)(T.g, {
                                channel: null,
                                user: l,
                                guild: d,
                                size: T.c.SIZE_24,
                            }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: k.G1,
                        children: [
                            (() => {
                                if (null != z) return null;
                                let e = (0, p.gU)(n, d);
                                return null != e
                                    ? (0, i.jsx)(e, {
                                          className: k.gr,
                                          size: "xs",
                                      })
                                    : null;
                            })(),
                            null != B && null != Z
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.DUT, {
                                              className: k.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  var t, n, i;
                                                  e.stopPropagation(),
                                                      (0, j.D$)({
                                                          target: {
                                                              kind: j.bB.CHANNEL,
                                                              channelId: B.id,
                                                              guildId:
                                                                  null !=
                                                                  (t =
                                                                      null !=
                                                                      (n =
                                                                          null == (i = B.getGuildId)
                                                                              ? void 0
                                                                              : i.call(B))
                                                                          ? n
                                                                          : B.guild_id)
                                                                      ? t
                                                                      : null,
                                                              messageId: null,
                                                          },
                                                          source: w.B.MANUAL,
                                                          widgetType: P.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: Z,
                                              }),
                                          }),
                                          (0, i.jsx)(u._BQ, {
                                              className: k.ln,
                                              size: "xs",
                                              color: u.LU0.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsxs)(u.Text, {
                                className: k.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    f,
                                    (null == Y ? void 0 : Y.name) != null && "" !== Y.name
                                        ? (0, i.jsx)(u.Text, {
                                              tag: "span",
                                              className: k.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: R.intl.formatToPlainString(D.default.x1k3cO, {
                                                  gameName: Y.name,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: k.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(F, {
                        channel: n,
                        onStartPrivateCall: J,
                        pinsOpen: L,
                        onTogglePinsPopout: Q,
                        onRequestClosePinsPopout: () => U(!1),
                    }),
                    (0, i.jsx)(H, {
                        channel: n,
                        pinsOpen: L,
                        onTogglePinsPopout: Q,
                        onRequestClosePinsPopout: () => U(!1),
                    }),
                    M &&
                        null != X &&
                        (0, i.jsx)(I.j, {
                            tab: X.tab,
                            targetId: X.targetId,
                            widgetType: P.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    (null == n ? void 0 : n.id) != null &&
                        (0, i.jsx)(o.m, {
                            text: W ? K : R.intl.string(D.default.ERApc4),
                            "aria-label": W ? K : R.intl.string(D.default.ERApc4),
                            children: (0, i.jsx)(u.K0, {
                                icon: W ? u.gR : u.PGe,
                                "aria-label": W ? K : R.intl.string(D.default.ERApc4),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    if (W) {
                                        (0, O.YX)(P.uss.TEXT_CHAT_V3, {
                                            type: O.Z5.TEXT_CHAT,
                                            value: O.IP.CLOSED_TEXT_CHAT,
                                            secondaryValue: "minimize_voice",
                                        }),
                                            (0, j.S$)({
                                                minimized: !0,
                                            });
                                        return;
                                    }
                                    (0, j.lu)({
                                        channelId: n.id,
                                        widgetType: P.uss.TEXT_CHAT_V3,
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
