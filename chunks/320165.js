n.d(t, { A: () => H });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(459192),
    d = n(990078),
    u = n(397927),
    c = n(387755),
    h = n(945830),
    g = n(47167),
    m = n(713654),
    p = n(461678),
    A = n(95550),
    x = n(95701),
    f = n(734057),
    E = n(383501),
    S = n(994500),
    I = n(543465),
    T = n(287809),
    v = n(810412),
    C = n(914853),
    j = n(589051),
    y = n(129537),
    w = n(578093),
    _ = n(145567),
    O = n(922611),
    N = n(201479),
    b = n(691761),
    R = n(256688),
    M = n(652215),
    L = n(895867),
    z = n(985018),
    D = n(580884);
function k(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function P(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: l, onRequestClosePinsPopout: r } = e,
        a = s.useRef(null);
    return t?.id == null
        ? null
        : (0, i.jsx)(u.YNO, {
              targetElementRef: a,
              shouldShow: n,
              animation: u.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: r,
              renderPopout: (e) =>
                  (0, i.jsx)(h.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, v.YX)(M.uss.TEXT_CHAT_V3, {
                              type: v.Z5.TEXT_CHAT,
                              value: v.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)("div", {
                      ref: a,
                      children: (0, i.jsx)(d.m, {
                          text: z.intl.string(z.t["mp1N/2"]),
                          "aria-label": z.intl.string(z.t["mp1N/2"]),
                          children: (0, i.jsx)(u.K0, {
                              ...n,
                              icon: u.tsw,
                              "aria-label": z.intl.string(z.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: l,
                          }),
                      }),
                  });
              },
          });
}
function G(e) {
    let { channel: t } = e,
        n = s.useRef(null),
        l = t?.id ?? null,
        r = t?.guild_id != null,
        [o, c] = (0, a.yK)(
            [I.Ay],
            () =>
                r && null != l && null != t
                    ? [I.Ay.isChannelMuted(t.getGuildId(), t.id), I.Ay.resolvedMessageNotifications(t)]
                    : [!1, M.orn.ALL_MESSAGES],
            [t, l, r],
        ),
        [h, g] = s.useState(!1),
        m = s.useCallback(() => {
            g((e) => !e),
                (0, v.YX)(M.uss.TEXT_CHAT_V3, {
                    type: v.Z5.TEXT_CHAT,
                    value: v.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                });
        }, []),
        A = z.intl.string(z.t.h850Ss),
        x = o || c !== M.orn.ALL_MESSAGES ? u.a_I : u.XFE;
    return r && null != t
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: n,
              shouldShow: h,
              animation: u.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => g(!1),
              renderPopout: (e) =>
                  (0, i.jsx)(p.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: z.intl.string(z.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...s } = e;
                  return (0, i.jsx)("div", {
                      ref: n,
                      children: (0, i.jsx)(d.m, {
                          text: A,
                          "aria-label": A,
                          children: (0, i.jsx)(u.K0, {
                              ...s,
                              icon: x,
                              "aria-label": A,
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
function V(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: s, onTogglePinsPopout: l, onRequestClosePinsPopout: r } = e;
    return k(t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.m, {
                      text: z.intl.string(z.t.JJogjm),
                      "aria-label": z.intl.string(z.t.JJogjm),
                      children: (0, i.jsx)(u.K0, {
                          icon: u._jp,
                          "aria-label": z.intl.string(z.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, i.jsx)(P, { channel: t, pinsOpen: s, onTogglePinsPopout: l, onRequestClosePinsPopout: r }),
                  t.isMultiUserDM()
                      ? (0, i.jsx)(d.m, {
                            text: z.intl.string(z.t["LR+Ptf"]),
                            "aria-label": z.intl.string(z.t["LR+Ptf"]),
                            children: (0, i.jsx)(u.K0, {
                                icon: u.DpX,
                                "aria-label": z.intl.string(z.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, v.YX)(M.uss.TEXT_CHAT_V3, {
                                        type: v.Z5.INVITE,
                                        value: v.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, A.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, _.D$)({
                                                    target: {
                                                        kind: _.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: R.B.MANUAL,
                                                    widgetType: M.uss.TEXT_CHAT_V3,
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
function U(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: s, onRequestClosePinsPopout: l } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(G, { channel: t }),
                  (0, i.jsx)(P, { channel: t, pinsOpen: n, onTogglePinsPopout: s, onRequestClosePinsPopout: l }),
              ],
          });
}
function H(e) {
    let { channel: t, user: n, guild: l, title: h, dragStart: p, dragging: A } = e,
        { hasFriendList: I } = (0, j.M8)("TextChatHeader"),
        [P, G] = s.useState(!1),
        H = (0, a.bG)([E.A], () => E.A.getChannelId(), []),
        Y = t?.isDM() ? (n?.id ?? null) : null,
        Z = (0, b.p)(Y),
        W = H === t?.id,
        X = z.intl.string(L.default.tYPfF2),
        F = (0, a.bG)([f.A], () => (t?.isThread() && null != t.parent_id ? f.A.getChannel(t.parent_id) : null), [t]),
        K = (0, a.bG)([T.default, S.A], () => (null != F ? (0, g.m1)(F, T.default, S.A) : null), [F]),
        B = (0, a.bG)([], () => {
            var e, i;
            return (
                (e = t),
                (i = n),
                null == e
                    ? null
                    : e.isDM() && null != i
                      ? S.A.isFriend(i.id)
                          ? { tab: C.x.FRIENDS, targetId: i.id }
                          : null
                      : (0, x.ke)(e.type)
                        ? { tab: C.x.MESSAGES, targetId: e.id }
                        : (0, x.ay)(e.type)
                          ? { tab: C.x.VOICE, targetId: e.id }
                          : null
            );
        }, [t, n]),
        Q = s.useCallback(
            (e) => {
                k(t) &&
                    ((0, v.YX)(M.uss.TEXT_CHAT_V3, {
                        type: v.Z5.CALL_BUTTON,
                        value: v.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    c.A.call(t.id, e, !0, t.isDM() ? t.getRecipientId() : null));
            },
            [t],
        ),
        q = s.useCallback(() => {
            t?.id != null &&
                G((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, v.YX)(M.uss.TEXT_CHAT_V3, {
                                type: v.Z5.TEXT_CHAT,
                                value: v.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [t?.id]);
    return (0, i.jsxs)("div", {
        className: r()(D.XV, A && D.cB),
        onMouseDown: (e) => {
            0 === e.button && p(y.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, i.jsxs)("div", {
                className: D.LD,
                children: [
                    (0, i.jsx)("div", {
                        className: D.gr,
                        children: (0, i.jsx)(N.J, {
                            application: Z,
                            fallback: (0, i.jsx)(O.g, { channel: null, user: n, guild: l, size: O.c.SIZE_24 }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: D.G1,
                        children: [
                            (() => {
                                if (null != Y) return null;
                                let e = (0, m.gU)(t, l);
                                return null != e ? (0, i.jsx)(e, { className: D.gr, size: "xs" }) : null;
                            })(),
                            null != F && null != K
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.DUT, {
                                              className: D.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, _.D$)({
                                                          target: {
                                                              kind: _.bB.CHANNEL,
                                                              channelId: F.id,
                                                              guildId: F.getGuildId?.() ?? F.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: R.B.MANUAL,
                                                          widgetType: M.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: K,
                                              }),
                                          }),
                                          (0, i.jsx)(u._BQ, {
                                              className: D.ln,
                                              size: "xs",
                                              color: u.LU0.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsxs)(u.Text, {
                                className: D.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    h,
                                    Z?.name != null && "" !== Z.name
                                        ? (0, i.jsx)(u.Text, {
                                              tag: "span",
                                              className: D.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: z.intl.formatToPlainString(L.default.x1k3cO, {
                                                  gameName: Z.name,
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
                className: D.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(V, {
                        channel: t,
                        onStartPrivateCall: Q,
                        pinsOpen: P,
                        onTogglePinsPopout: q,
                        onRequestClosePinsPopout: () => G(!1),
                    }),
                    (0, i.jsx)(U, {
                        channel: t,
                        pinsOpen: P,
                        onTogglePinsPopout: q,
                        onRequestClosePinsPopout: () => G(!1),
                    }),
                    I &&
                        null != B &&
                        (0, i.jsx)(w.j, {
                            tab: B.tab,
                            targetId: B.targetId,
                            widgetType: M.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    t?.id != null &&
                        (W
                            ? (0, i.jsx)(d.m, {
                                  text: X,
                                  "aria-label": X,
                                  children: (0, i.jsx)(u.K0, {
                                      icon: u.gR,
                                      "aria-label": X,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, v.YX)(M.uss.TEXT_CHAT_V3, {
                                              type: v.Z5.TEXT_CHAT,
                                              value: v.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, _.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, i.jsx)(o.u, {
                                  title: z.intl.string(L.default.ERApc4),
                                  body: z.intl.string(L.default.PBVXVW),
                                  children: (0, i.jsx)(u.K0, {
                                      icon: u.PGe,
                                      "aria-label": z.intl.string(L.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, v.YX)(M.uss.TEXT_CHAT_V3, {
                                                    type: v.Z5.TEXT_CHAT,
                                                    value: v.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, _.$p)())
                                              : (0, _.lu)({
                                                    channelId: t.id,
                                                    widgetType: M.uss.TEXT_CHAT_V3,
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
