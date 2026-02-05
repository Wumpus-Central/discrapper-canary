n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    u = n(387755),
    c = n(945830),
    h = n(47167),
    A = n(713654),
    m = n(461678),
    g = n(95550),
    p = n(95701),
    f = n(734057),
    _ = n(383501),
    E = n(994500),
    x = n(543465),
    S = n(287809),
    I = n(810412),
    T = n(914853),
    C = n(589051),
    v = n(129537),
    y = n(578093),
    N = n(145567),
    O = n(922611),
    b = n(201479),
    j = n(691761),
    w = n(34307),
    L = n(652215),
    R = n(895867),
    D = n(985018),
    M = n(532165);
function k(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function z(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: a, onRequestClosePinsPopout: s } = e,
        r = l.useRef(null);
    return t?.id == null
        ? null
        : (0, i.jsx)(d.YNO, {
              targetElementRef: r,
              shouldShow: n,
              animation: d.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: s,
              renderPopout: (e) => (0, i.jsx)(c.A, { ...e, channel: t, onJump: () => {} }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)("div", {
                      ref: r,
                      children: (0, i.jsx)(o.m, {
                          text: D.intl.string(D.t["mp1N/2"]),
                          "aria-label": D.intl.string(D.t["mp1N/2"]),
                          children: (0, i.jsx)(d.K0, {
                              ...n,
                              icon: d.tsw,
                              "aria-label": D.intl.string(D.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: a,
                          }),
                      }),
                  });
              },
          });
}
function V(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        a = t?.id ?? null,
        s = t?.guild_id != null,
        [u, c] = (0, r.yK)(
            [x.Ay],
            () =>
                s && null != a && null != t
                    ? [x.Ay.isChannelMuted(t.getGuildId(), t.id), x.Ay.resolvedMessageNotifications(t)]
                    : [!1, L.orn.ALL_MESSAGES],
            [t, a, s],
        ),
        [h, A] = l.useState(!1),
        g = l.useCallback(() => {
            A((e) => !e);
        }, []),
        p = D.intl.string(D.t.h850Ss),
        f = u || c !== L.orn.ALL_MESSAGES ? d.a_I : d.XFE;
    return s && null != t
        ? (0, i.jsx)(d.YNO, {
              targetElementRef: n,
              shouldShow: h,
              animation: d.YNO.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => A(!1),
              renderPopout: (e) =>
                  (0, i.jsx)(m.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: D.intl.string(D.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...l } = e;
                  return (0, i.jsx)("div", {
                      ref: n,
                      children: (0, i.jsx)(o.m, {
                          text: p,
                          "aria-label": p,
                          children: (0, i.jsx)(d.K0, {
                              ...l,
                              icon: f,
                              "aria-label": p,
                              size: "sm",
                              variant: "icon-only",
                              onClick: g,
                          }),
                      }),
                  });
              },
          })
        : null;
}
function U(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: l, onTogglePinsPopout: a, onRequestClosePinsPopout: s } = e;
    return k(t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.m, {
                      text: D.intl.string(D.t.JJogjm),
                      "aria-label": D.intl.string(D.t.JJogjm),
                      children: (0, i.jsx)(d.K0, {
                          icon: d._jp,
                          "aria-label": D.intl.string(D.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, i.jsx)(z, { channel: t, pinsOpen: l, onTogglePinsPopout: a, onRequestClosePinsPopout: s }),
                  t.isMultiUserDM()
                      ? (0, i.jsx)(o.m, {
                            text: D.intl.string(D.t["LR+Ptf"]),
                            "aria-label": D.intl.string(D.t["LR+Ptf"]),
                            children: (0, i.jsx)(d.K0, {
                                icon: d.DpX,
                                "aria-label": D.intl.string(D.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, I.YX)(L.uss.TEXT_CHAT_V3, {
                                        type: I.Z5.INVITE,
                                        value: I.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, g.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, N.D$)({
                                                    target: {
                                                        kind: N.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: w.B.MANUAL,
                                                    widgetType: L.uss.TEXT_CHAT_V3,
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
function P(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: l, onRequestClosePinsPopout: a } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(V, { channel: t }),
                  (0, i.jsx)(z, { channel: t, pinsOpen: n, onTogglePinsPopout: l, onRequestClosePinsPopout: a }),
              ],
          });
}
function G(e) {
    let { channel: t, user: n, guild: a, title: c, dragStart: m, dragging: g } = e,
        { hasFriendList: x } = (0, C.M8)("TextChatHeader"),
        [z, V] = l.useState(!1),
        G = (0, r.bG)([_.A], () => _.A.getChannelId(), []),
        H = t?.isDM() ? (n?.id ?? null) : null,
        Y = (0, j.p)(H),
        F = G === t?.id,
        W = D.intl.string(R.default.tYPfF2),
        K = (0, r.bG)([f.A], () => (t?.isThread() && null != t.parent_id ? f.A.getChannel(t.parent_id) : null), [t]),
        Z = (0, r.bG)([S.default, E.A], () => (null != K ? (0, h.m1)(K, S.default, E.A) : null), [K]),
        B = (0, r.bG)([], () => {
            var e, i;
            return (
                (e = t),
                (i = n),
                null == e
                    ? null
                    : e.isDM() && null != i
                      ? E.A.isFriend(i.id)
                          ? { tab: T.x.FRIENDS, targetId: i.id }
                          : null
                      : (0, p.ke)(e.type)
                        ? { tab: T.x.MESSAGES, targetId: e.id }
                        : (0, p.ay)(e.type)
                          ? { tab: T.x.VOICE, targetId: e.id }
                          : null
            );
        }, [t, n]),
        X = l.useCallback(
            (e) => {
                k(t) &&
                    ((0, I.YX)(L.uss.TEXT_CHAT_V3, {
                        type: I.Z5.CALL_BUTTON,
                        value: I.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    u.A.call(t.id, e, !0, t.isDM() ? t.getRecipientId() : null));
            },
            [t],
        ),
        J = l.useCallback(() => {
            t?.id != null &&
                V((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, I.YX)(L.uss.TEXT_CHAT_V3, {
                                type: I.Z5.TEXT_CHAT,
                                value: I.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [t?.id]);
    return (0, i.jsxs)("div", {
        className: s()(M.XV, g && M.cB),
        onMouseDown: (e) => {
            0 === e.button && m(v.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, i.jsxs)("div", {
                className: M.LD,
                children: [
                    (0, i.jsx)("div", {
                        className: M.gr,
                        children: (0, i.jsx)(b.J, {
                            application: Y,
                            fallback: (0, i.jsx)(O.g, { channel: null, user: n, guild: a, size: O.c.SIZE_24 }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: M.G1,
                        children: [
                            (() => {
                                if (null != H) return null;
                                let e = (0, A.gU)(t, a);
                                return null != e ? (0, i.jsx)(e, { className: M.gr, size: "xs" }) : null;
                            })(),
                            null != K && null != Z
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(d.DUT, {
                                              className: M.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, N.D$)({
                                                          target: {
                                                              kind: N.bB.CHANNEL,
                                                              channelId: K.id,
                                                              guildId: K.getGuildId?.() ?? K.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: w.B.MANUAL,
                                                          widgetType: L.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, i.jsx)(d.Text, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: Z,
                                              }),
                                          }),
                                          (0, i.jsx)(d._BQ, {
                                              className: M.ln,
                                              size: "xs",
                                              color: d.LU0.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, i.jsxs)(d.Text, {
                                className: M.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    c,
                                    Y?.name != null && "" !== Y.name
                                        ? (0, i.jsx)(d.Text, {
                                              tag: "span",
                                              className: M.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: D.intl.formatToPlainString(R.default.x1k3cO, {
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
                className: M.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, i.jsx)(U, {
                        channel: t,
                        onStartPrivateCall: X,
                        pinsOpen: z,
                        onTogglePinsPopout: J,
                        onRequestClosePinsPopout: () => V(!1),
                    }),
                    (0, i.jsx)(P, {
                        channel: t,
                        pinsOpen: z,
                        onTogglePinsPopout: J,
                        onRequestClosePinsPopout: () => V(!1),
                    }),
                    x &&
                        null != B &&
                        (0, i.jsx)(y.j, {
                            tab: B.tab,
                            targetId: B.targetId,
                            widgetType: L.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    t?.id != null &&
                        (0, i.jsx)(o.m, {
                            text: F ? W : D.intl.string(R.default.ERApc4),
                            "aria-label": F ? W : D.intl.string(R.default.ERApc4),
                            children: (0, i.jsx)(d.K0, {
                                icon: F ? d.gR : d.PGe,
                                "aria-label": F ? W : D.intl.string(R.default.ERApc4),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    if (F) {
                                        (0, I.YX)(L.uss.TEXT_CHAT_V3, {
                                            type: I.Z5.TEXT_CHAT,
                                            value: I.IP.CLOSED_TEXT_CHAT,
                                            secondaryValue: "minimize_voice",
                                        }),
                                            (0, N.S$)({ minimized: !0 });
                                        return;
                                    }
                                    (0, N.lu)({
                                        channelId: t.id,
                                        widgetType: L.uss.TEXT_CHAT_V3,
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
