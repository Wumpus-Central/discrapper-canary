n.d(t, { A: () => ee });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(459192),
    d = n(990078),
    c = n(265872),
    u = n(408278),
    h = n(366605),
    m = n(780338),
    p = n(782603),
    g = n(978940),
    f = n(241541),
    _ = n(939249),
    x = n(834730),
    A = n(320448),
    E = n(827734),
    S = n(446576),
    I = n(789645),
    v = n(387755),
    b = n(945830),
    C = n(47167),
    T = n(713654),
    j = n(461678),
    y = n(95550),
    w = n(95701),
    N = n(734057),
    R = n(383501),
    M = n(994500),
    O = n(543465),
    k = n(287809),
    D = n(810412),
    z = n(914853),
    P = n(589051),
    L = n(129537),
    V = n(578093),
    G = n(145567),
    U = n(922611),
    H = n(201479),
    F = n(691761),
    W = n(34307),
    Z = n(652215),
    Y = n(499214),
    X = n(985018),
    B = n(657956);
function K(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function q(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: a, onRequestClosePinsPopout: s } = e,
        l = r.useRef(null);
    return t?.id == null
        ? null
        : (0, i.jsx)(c.Y, {
              targetElementRef: l,
              shouldShow: n,
              animation: c.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: s,
              renderPopout: (e) =>
                  (0, i.jsx)(b.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, D.YX)(Z.uss.TEXT_CHAT_V3, {
                              type: D.Z5.TEXT_CHAT,
                              value: D.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)("div", {
                      ref: l,
                      children: (0, i.jsx)(d.m, {
                          text: X.intl.string(X.t["mp1N/2"]),
                          "aria-label": X.intl.string(X.t["mp1N/2"]),
                          children: (0, i.jsx)(u.K, {
                              ...n,
                              icon: h.t,
                              "aria-label": X.intl.string(X.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: a,
                          }),
                      }),
                  });
              },
          });
}
function Q(e) {
    let { channel: t } = e,
        n = r.useRef(null),
        a = t?.id ?? null,
        s = t?.guild_id != null,
        [o, h] = (0, l.yK)(
            [O.Ay],
            () =>
                s && null != a && null != t
                    ? [O.Ay.isChannelMuted(t.getGuildId(), t.id), O.Ay.resolvedMessageNotifications(t)]
                    : [!1, Z.orn.ALL_MESSAGES],
            [t, a, s],
        ),
        [g, f] = r.useState(!1),
        _ = r.useCallback(() => {
            f((e) => !e),
                (0, D.YX)(Z.uss.TEXT_CHAT_V3, {
                    type: D.Z5.TEXT_CHAT,
                    value: D.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                });
        }, []),
        x = X.intl.string(X.t.h850Ss),
        A = o || h !== Z.orn.ALL_MESSAGES ? m.a : p.X;
    return s && null != t
        ? (0, i.jsx)(c.Y, {
              targetElementRef: n,
              shouldShow: g,
              animation: c.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => f(!1),
              renderPopout: (e) =>
                  (0, i.jsx)(j.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: X.intl.string(X.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...r } = e;
                  return (0, i.jsx)("div", {
                      ref: n,
                      children: (0, i.jsx)(d.m, {
                          text: x,
                          "aria-label": x,
                          children: (0, i.jsx)(u.K, {
                              ...r,
                              icon: A,
                              "aria-label": x,
                              size: "sm",
                              variant: "icon-only",
                              onClick: _,
                          }),
                      }),
                  });
              },
          })
        : null;
}
function $(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: r, onTogglePinsPopout: a, onRequestClosePinsPopout: s } = e;
    return K(t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.m, {
                      text: X.intl.string(X.t.JJogjm),
                      "aria-label": X.intl.string(X.t.JJogjm),
                      children: (0, i.jsx)(u.K, {
                          icon: g._,
                          "aria-label": X.intl.string(X.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, i.jsx)(q, { channel: t, pinsOpen: r, onTogglePinsPopout: a, onRequestClosePinsPopout: s }),
                  t.isMultiUserDM()
                      ? (0, i.jsx)(d.m, {
                            text: X.intl.string(X.t["LR+Ptf"]),
                            "aria-label": X.intl.string(X.t["LR+Ptf"]),
                            children: (0, i.jsx)(u.K, {
                                icon: f.D,
                                "aria-label": X.intl.string(X.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, D.YX)(Z.uss.TEXT_CHAT_V3, {
                                        type: D.Z5.INVITE,
                                        value: D.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, y.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, G.D$)({
                                                    target: {
                                                        kind: G.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: W.B.MANUAL,
                                                    widgetType: Z.uss.TEXT_CHAT_V3,
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
function J(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: r, onRequestClosePinsPopout: a } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(Q, { channel: t }),
                  (0, i.jsx)(q, { channel: t, pinsOpen: n, onTogglePinsPopout: r, onRequestClosePinsPopout: a }),
              ],
          });
}
function ee(e) {
    let { channel: t, user: n, guild: a, title: c, dragStart: h, dragging: m } = e,
        { hasFriendList: p } = (0, P.M8)("TextChatHeader"),
        [g, f] = r.useState(!1),
        b = (0, l.bG)([R.A], () => R.A.getChannelId(), []),
        j = t?.isDM() ? (n?.id ?? null) : null,
        y = (0, F.p)(j),
        O = b === t?.id,
        q = X.intl.string(Y.default.tYPfF2),
        Q = (0, l.bG)([N.A], () => (t?.isThread() && null != t.parent_id ? N.A.getChannel(t.parent_id) : null), [t]),
        ee = (0, l.bG)([k.default, M.A], () => (null != Q ? (0, C.m1)(Q, k.default, M.A) : null), [Q]),
        et = (0, l.bG)([], () => {
            var e, i;
            return (
                (e = t),
                (i = n),
                null == e
                    ? null
                    : e.isDM() && null != i
                      ? M.A.isFriend(i.id)
                          ? { tab: z.x.FRIENDS, targetId: i.id }
                          : null
                      : (0, w.ke)(e.type)
                        ? { tab: z.x.MESSAGES, targetId: e.id }
                        : (0, w.ay)(e.type)
                          ? { tab: z.x.VOICE, targetId: e.id }
                          : null
            );
        }, [t, n]),
        en = r.useCallback(
            (e) => {
                K(t) &&
                    ((0, D.YX)(Z.uss.TEXT_CHAT_V3, {
                        type: D.Z5.CALL_BUTTON,
                        value: D.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    v.A.call(t.id, e, !0, t.isDM() ? t.getRecipientId() : null));
            },
            [t],
        ),
        ei = r.useCallback(() => {
            t?.id != null &&
                f((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, D.YX)(Z.uss.TEXT_CHAT_V3, {
                                type: D.Z5.TEXT_CHAT,
                                value: D.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [t?.id]);
    return (0, i.jsxs)("div", {
        className: s()(B.XV, m && B.cB),
        onMouseDown: (e) => {
            0 === e.button && h(L.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, i.jsxs)("div", {
                className: B.LD,
                children: [
                    (0, i.jsx)("div", {
                        className: B.gr,
                        children: (0, i.jsx)(H.J, {
                            application: y,
                            fallback: (0, i.jsx)(U.g, { channel: null, user: n, guild: a, size: U.c.SIZE_24 }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: B.G1,
                        children: [
                            (() => {
                                if (null != j) return null;
                                let e = (0, T.gU)(t, a);
                                return null != e ? (0, i.jsx)(e, { className: B.gr, size: "xs" }) : null;
                            })(),
                            null != Q && null != ee
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(_.D, {
                                              className: B.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, G.D$)({
                                                          target: {
                                                              kind: G.bB.CHANNEL,
                                                              channelId: Q.id,
                                                              guildId: Q.getGuildId?.() ?? Q.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: W.B.MANUAL,
                                                          widgetType: Z.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, i.jsx)(x.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: ee,
                                              }),
                                          }),
                                          (0, i.jsx)(A._, {
                                              className: B.ln,
                                              size: "xs",
                                              color: E.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsxs)(x.E, {
                                className: B.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    c,
                                    y?.name != null && "" !== y.name
                                        ? (0, i.jsx)(x.E, {
                                              tag: "span",
                                              className: B.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: X.intl.formatToPlainString(Y.default.x1k3cO, {
                                                  gameName: y.name,
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
                className: B.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, i.jsx)($, {
                        channel: t,
                        onStartPrivateCall: en,
                        pinsOpen: g,
                        onTogglePinsPopout: ei,
                        onRequestClosePinsPopout: () => f(!1),
                    }),
                    (0, i.jsx)(J, {
                        channel: t,
                        pinsOpen: g,
                        onTogglePinsPopout: ei,
                        onRequestClosePinsPopout: () => f(!1),
                    }),
                    p &&
                        null != et &&
                        (0, i.jsx)(V.j, {
                            tab: et.tab,
                            targetId: et.targetId,
                            widgetType: Z.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    t?.id != null &&
                        (O
                            ? (0, i.jsx)(d.m, {
                                  text: q,
                                  "aria-label": q,
                                  children: (0, i.jsx)(u.K, {
                                      icon: S.g,
                                      "aria-label": q,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, D.YX)(Z.uss.TEXT_CHAT_V3, {
                                              type: D.Z5.TEXT_CHAT,
                                              value: D.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, G.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, i.jsx)(o.u, {
                                  title: X.intl.string(Y.default.ERApc4),
                                  body: X.intl.string(Y.default.PBVXVW),
                                  children: (0, i.jsx)(u.K, {
                                      icon: I.P,
                                      "aria-label": X.intl.string(Y.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, D.YX)(Z.uss.TEXT_CHAT_V3, {
                                                    type: D.Z5.TEXT_CHAT,
                                                    value: D.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, G.$p)())
                                              : (0, G.lu)({
                                                    channelId: t.id,
                                                    widgetType: Z.uss.TEXT_CHAT_V3,
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
