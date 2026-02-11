n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(459192),
    d = n(990078),
    u = n(397927),
    c = n(387755),
    h = n(945830),
    A = n(47167),
    m = n(713654),
    g = n(461678),
    p = n(95550),
    f = n(95701),
    _ = n(734057),
    E = n(383501),
    x = n(994500),
    S = n(543465),
    I = n(287809),
    T = n(810412),
    C = n(914853),
    v = n(589051),
    y = n(129537),
    N = n(578093),
    O = n(145567),
    j = n(922611),
    b = n(201479),
    w = n(691761),
    L = n(34307),
    R = n(652215),
    D = n(895867),
    M = n(985018),
    k = n(532165);
function z(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function V(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: a, onRequestClosePinsPopout: s } = e,
        r = l.useRef(null);
    return t?.id == null
        ? null
        : (0, i.jsx)(u.YNO, {
              targetElementRef: r,
              shouldShow: n,
              animation: u.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: s,
              renderPopout: (e) =>
                  (0, i.jsx)(h.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, T.YX)(R.uss.TEXT_CHAT_V3, {
                              type: T.Z5.TEXT_CHAT,
                              value: T.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)("div", {
                      ref: r,
                      children: (0, i.jsx)(d.m, {
                          text: M.intl.string(M.t["mp1N/2"]),
                          "aria-label": M.intl.string(M.t["mp1N/2"]),
                          children: (0, i.jsx)(u.K0, {
                              ...n,
                              icon: u.tsw,
                              "aria-label": M.intl.string(M.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: a,
                          }),
                      }),
                  });
              },
          });
}
function P(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        a = t?.id ?? null,
        s = t?.guild_id != null,
        [o, c] = (0, r.yK)(
            [S.Ay],
            () =>
                s && null != a && null != t
                    ? [S.Ay.isChannelMuted(t.getGuildId(), t.id), S.Ay.resolvedMessageNotifications(t)]
                    : [!1, R.orn.ALL_MESSAGES],
            [t, a, s],
        ),
        [h, A] = l.useState(!1),
        m = l.useCallback(() => {
            A((e) => !e),
                (0, T.YX)(R.uss.TEXT_CHAT_V3, {
                    type: T.Z5.TEXT_CHAT,
                    value: T.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                });
        }, []),
        p = M.intl.string(M.t.h850Ss),
        f = o || c !== R.orn.ALL_MESSAGES ? u.a_I : u.XFE;
    return s && null != t
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: n,
              shouldShow: h,
              animation: u.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => A(!1),
              renderPopout: (e) =>
                  (0, i.jsx)(g.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: M.intl.string(M.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...l } = e;
                  return (0, i.jsx)("div", {
                      ref: n,
                      children: (0, i.jsx)(d.m, {
                          text: p,
                          "aria-label": p,
                          children: (0, i.jsx)(u.K0, {
                              ...l,
                              icon: f,
                              "aria-label": p,
                              size: "sm",
                              variant: "icon-only",
                              onClick: m,
                          }),
                      }),
                  });
              },
          })
        : null;
}
function U(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: l, onTogglePinsPopout: a, onRequestClosePinsPopout: s } = e;
    return z(t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.m, {
                      text: M.intl.string(M.t.JJogjm),
                      "aria-label": M.intl.string(M.t.JJogjm),
                      children: (0, i.jsx)(u.K0, {
                          icon: u._jp,
                          "aria-label": M.intl.string(M.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, i.jsx)(V, { channel: t, pinsOpen: l, onTogglePinsPopout: a, onRequestClosePinsPopout: s }),
                  t.isMultiUserDM()
                      ? (0, i.jsx)(d.m, {
                            text: M.intl.string(M.t["LR+Ptf"]),
                            "aria-label": M.intl.string(M.t["LR+Ptf"]),
                            children: (0, i.jsx)(u.K0, {
                                icon: u.DpX,
                                "aria-label": M.intl.string(M.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, T.YX)(R.uss.TEXT_CHAT_V3, {
                                        type: T.Z5.INVITE,
                                        value: T.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, p.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, O.D$)({
                                                    target: {
                                                        kind: O.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: L.B.MANUAL,
                                                    widgetType: R.uss.TEXT_CHAT_V3,
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
function G(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: l, onRequestClosePinsPopout: a } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(P, { channel: t }),
                  (0, i.jsx)(V, { channel: t, pinsOpen: n, onTogglePinsPopout: l, onRequestClosePinsPopout: a }),
              ],
          });
}
function H(e) {
    let { channel: t, user: n, guild: a, title: h, dragStart: g, dragging: p } = e,
        { hasFriendList: S } = (0, v.M8)("TextChatHeader"),
        [V, P] = l.useState(!1),
        H = (0, r.bG)([E.A], () => E.A.getChannelId(), []),
        Y = t?.isDM() ? (n?.id ?? null) : null,
        F = (0, w.p)(Y),
        W = H === t?.id,
        Z = M.intl.string(D.default.tYPfF2),
        X = (0, r.bG)([_.A], () => (t?.isThread() && null != t.parent_id ? _.A.getChannel(t.parent_id) : null), [t]),
        K = (0, r.bG)([I.default, x.A], () => (null != X ? (0, A.m1)(X, I.default, x.A) : null), [X]),
        B = (0, r.bG)([], () => {
            var e, i;
            return (
                (e = t),
                (i = n),
                null == e
                    ? null
                    : e.isDM() && null != i
                      ? x.A.isFriend(i.id)
                          ? { tab: C.x.FRIENDS, targetId: i.id }
                          : null
                      : (0, f.ke)(e.type)
                        ? { tab: C.x.MESSAGES, targetId: e.id }
                        : (0, f.ay)(e.type)
                          ? { tab: C.x.VOICE, targetId: e.id }
                          : null
            );
        }, [t, n]),
        J = l.useCallback(
            (e) => {
                z(t) &&
                    ((0, T.YX)(R.uss.TEXT_CHAT_V3, {
                        type: T.Z5.CALL_BUTTON,
                        value: T.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    c.A.call(t.id, e, !0, t.isDM() ? t.getRecipientId() : null));
            },
            [t],
        ),
        Q = l.useCallback(() => {
            t?.id != null &&
                P((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, T.YX)(R.uss.TEXT_CHAT_V3, {
                                type: T.Z5.TEXT_CHAT,
                                value: T.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [t?.id]);
    return (0, i.jsxs)("div", {
        className: s()(k.XV, p && k.cB),
        onMouseDown: (e) => {
            0 === e.button && g(y.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, i.jsxs)("div", {
                className: k.LD,
                children: [
                    (0, i.jsx)("div", {
                        className: k.gr,
                        children: (0, i.jsx)(b.J, {
                            application: F,
                            fallback: (0, i.jsx)(j.g, { channel: null, user: n, guild: a, size: j.c.SIZE_24 }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: k.G1,
                        children: [
                            (() => {
                                if (null != Y) return null;
                                let e = (0, m.gU)(t, a);
                                return null != e ? (0, i.jsx)(e, { className: k.gr, size: "xs" }) : null;
                            })(),
                            null != X && null != K
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.DUT, {
                                              className: k.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, O.D$)({
                                                          target: {
                                                              kind: O.bB.CHANNEL,
                                                              channelId: X.id,
                                                              guildId: X.getGuildId?.() ?? X.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: L.B.MANUAL,
                                                          widgetType: R.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: K,
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
                                    h,
                                    F?.name != null && "" !== F.name
                                        ? (0, i.jsx)(u.Text, {
                                              tag: "span",
                                              className: k.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: M.intl.formatToPlainString(D.default.x1k3cO, {
                                                  gameName: F.name,
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
                    (0, i.jsx)(U, {
                        channel: t,
                        onStartPrivateCall: J,
                        pinsOpen: V,
                        onTogglePinsPopout: Q,
                        onRequestClosePinsPopout: () => P(!1),
                    }),
                    (0, i.jsx)(G, {
                        channel: t,
                        pinsOpen: V,
                        onTogglePinsPopout: Q,
                        onRequestClosePinsPopout: () => P(!1),
                    }),
                    S &&
                        null != B &&
                        (0, i.jsx)(N.j, {
                            tab: B.tab,
                            targetId: B.targetId,
                            widgetType: R.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    t?.id != null &&
                        (W
                            ? (0, i.jsx)(d.m, {
                                  text: Z,
                                  "aria-label": Z,
                                  children: (0, i.jsx)(u.K0, {
                                      icon: u.gR,
                                      "aria-label": Z,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, T.YX)(R.uss.TEXT_CHAT_V3, {
                                              type: T.Z5.TEXT_CHAT,
                                              value: T.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, O.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, i.jsx)(o.u, {
                                  title: M.intl.string(D.default.ERApc4),
                                  body: M.intl.string(D.default.PBVXVW),
                                  children: (0, i.jsx)(u.K0, {
                                      icon: u.PGe,
                                      "aria-label": M.intl.string(D.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, T.YX)(R.uss.TEXT_CHAT_V3, {
                                                    type: T.Z5.TEXT_CHAT,
                                                    value: T.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, O.$p)())
                                              : (0, O.lu)({
                                                    channelId: t.id,
                                                    widgetType: R.uss.TEXT_CHAT_V3,
                                                    secondaryValue: "close_button",
                                                });
                                      },
                                  }),
                              })),
                ],
            }),
        ],
    });
}
