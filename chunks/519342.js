n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(617498),
    o = n(821578),
    c = n(17928),
    d = n(717421),
    u = n(939249),
    h = n(22231),
    p = n(442433),
    m = n(717558),
    A = n(85448),
    x = n(734057),
    f = n(287809),
    g = n(977997),
    C = n(531685),
    y = n(562153),
    j = n(446243),
    v = n(920639),
    E = n(558076),
    N = n(360729),
    I = n(996752),
    T = n(610274),
    b = n(655413),
    _ = n(884863),
    R = n(971954),
    S = n(662731),
    P = n(375708),
    L = n(820447);
function O(e) {
    let { userId: t, channelId: a, x: E, y: N, statusId: I, numericAvatarSize: O, avatarSize: w, experimental: M } = e,
        D = (0, c.bG)([f.default], () => f.default.getUser(t)),
        U = (0, c.bG)([f.default], () => f.default.getCurrentUser()?.id === t),
        [V, k] = l.useState(!1),
        G = (0, c.bG)([x.A], () => x.A.getChannel(a)?.guild_id),
        B = (0, c.bG)([g.A], () => g.A.getVoiceState(G, t)),
        H = (0, m.A)({ userId: t }),
        F = (0, c.bG)([C.A], () => C.A.isFocused()),
        z = (0, y.tx)(G, a, D),
        { seats: W } = R.iX[o.I.DEFAULT],
        Y = W.find((e) => e.position.x === E && e.position.y === N),
        K = (0, d.z)({ x: E, y: N, config: { ...r.config.default, duration: 250 } }),
        X = l.useCallback(() => {
            null != G && (0, v.EB)({ guildId: G, channelId: a, targetUserId: t, interactionType: "clicked" });
        }, [t, G, a]),
        $ = l.useCallback(
            (e) => {
                let t = x.A.getChannel(a);
                if (null != G && null != D && null != t)
                    return (0, p.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97705"),
                            n.e("26132"),
                            n.e("46652"),
                            n.e("93190"),
                            n.e("8757"),
                            n.e("85968"),
                            n.e("89673"),
                            n.e("29787"),
                            n.e("82073"),
                            n.e("97558"),
                            n.e("91994"),
                            n.e("76665"),
                            n.e("24198"),
                            n.e("45996"),
                            n.e("23427"),
                            n.e("49145"),
                            n.e("29422"),
                            n.e("7059"),
                            n.e("43116"),
                            n.e("70314"),
                            n.e("70515"),
                            n.e("4524"),
                            n.e("54148"),
                            n.e("66939"),
                            n.e("17334"),
                            n.e("84841"),
                        ]).then(n.bind(n, 107632));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                showMediaItems: !0,
                                showChannelCallItems: !0,
                                showChatItems: !1,
                                user: D,
                                channel: t,
                                guildId: G,
                                showModalItems: !0,
                            });
                    });
            },
            [G, D, a],
        ),
        Z = l.useCallback(() => {
            null != G && (0, v.EB)({ guildId: G, channelId: a, targetUserId: t, interactionType: "hovered" });
        }, [t, G, a]);
    if (null == D || null == G) return null;
    let q = (0, i.jsx)(A.A, {
            userId: D.id,
            src: D.getAvatarURL(G, O, H && F),
            size: w,
            muted: B?.isVoiceMuted() ?? !1,
            deafen: B?.isVoiceDeafened() ?? !1,
            speaking: H,
            ringing: !1,
            className: Y?.dim ? L.r3 : void 0,
        }),
        Q = { left: K.x.to((e) => `calc(${e}% - ${O / 2}px)`), top: K.y.to((e) => `calc(${e}% - ${O / 2}px)`) };
    if (!M)
        return (0, i.jsx)(r.animated.div, {
            "aria-label": z,
            className: L.f1,
            style: Q,
            children: (0, i.jsx)(u.D, { onMouseEnter: Z, onClick: X, onContextMenu: $, children: q }),
        });
    let J = T.x.find((e) => e.id === I),
        ee = J?.icon,
        et = (0, i.jsxs)("div", {
            className: L.R3,
            children: [
                q,
                null != J &&
                    null != ee &&
                    (0, i.jsx)("div", {
                        className: s()(L.qS, L.Od),
                        children: (0, i.jsx)(ee, { size: "xxs", color: "currentColor" }),
                    }),
                U &&
                    (0, i.jsx)("div", {
                        className: s()(L.qS, L.Gk),
                        children: (0, i.jsx)(h.R, { size: "xxs", color: "currentColor" }),
                    }),
            ],
        });
    return (0, i.jsx)(r.animated.div, {
        "aria-label": z,
        className: L.f1,
        style: Q,
        children: U
            ? (0, i.jsxs)(_.T, {
                  isOpen: V,
                  onOpenChange: k,
                  children: [
                      (0, i.jsx)(_.T.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e;
                              return (0, i.jsx)(b.A, {
                                  name: z,
                                  status: J,
                                  shouldShow: !V,
                                  children: (0, i.jsx)(u.D, {
                                      ...l,
                                      className: s()(L.hZ, { [L.Zu]: V }),
                                      innerRef: (e) => {
                                          t.current = e;
                                      },
                                      onMouseEnter: Z,
                                      onClick: () => {
                                          n(), X();
                                      },
                                      onContextMenu: $,
                                      children: et,
                                  }),
                              });
                          },
                      }),
                      (0, i.jsx)(_.T.Popup, {
                          "aria-label": P.intl.string(S.default.LTAf2V),
                          children: T.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  _.T.Item,
                                  {
                                      text: P.intl.string(e.label),
                                      icon: t,
                                      selected: I === e.id,
                                      onClick: () => {
                                          let t = I === e.id;
                                          (0, j.AQ)(G, a, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : P.intl.string(e.label),
                                          });
                                      },
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : (0, i.jsx)(b.A, {
                  name: z,
                  status: J,
                  children: (0, i.jsx)(u.D, { onMouseEnter: Z, onClick: X, onContextMenu: $, children: et }),
              }),
    });
}
function w(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { experimental: r } = N.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
    return (0, i.jsx)(i.Fragment, {
        children: l.entries().map((e) => {
            let [n, l] = e;
            return (0, i.jsx)(
                O,
                {
                    userId: n,
                    channelId: t,
                    x: l.position?.x ?? 0,
                    y: l.position?.y ?? 0,
                    statusId: l.statusId,
                    numericAvatarSize: a,
                    avatarSize: s,
                    experimental: r,
                },
                `${n}`,
            );
        }),
    });
}
function M(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([x.A], () => x.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([E.A], () => E.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, I.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(w, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
