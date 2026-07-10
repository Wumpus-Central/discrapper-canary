n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(580929),
    o = n(821578),
    c = n(17928),
    d = n(717421),
    u = n(939249),
    h = n(22231),
    p = n(717558),
    m = n(85448),
    A = n(734057),
    x = n(287809),
    g = n(977997),
    f = n(531685),
    C = n(562153),
    j = n(446243),
    y = n(920639),
    v = n(558076),
    E = n(360729),
    N = n(996752),
    I = n(610274),
    T = n(655413),
    _ = n(884863),
    S = n(971954),
    b = n(662731),
    R = n(375708),
    P = n(621191);
function O(e) {
    let { userId: t, channelId: n, x: a, y: v, statusId: E, numericAvatarSize: N, avatarSize: O, experimental: L } = e,
        w = (0, c.bG)([x.default], () => x.default.getUser(t)),
        D = (0, c.bG)([x.default], () => x.default.getCurrentUser()?.id === t),
        [M, U] = l.useState(!1),
        V = (0, c.bG)([A.A], () => A.A.getChannel(n)?.guild_id),
        k = (0, c.bG)([g.A], () => g.A.getVoiceState(V, t)),
        B = (0, p.A)({ userId: t }),
        G = (0, c.bG)([f.A], () => f.A.isFocused()),
        H = (0, C.tx)(V, n, w),
        { seats: F } = S.iX[o.I.DEFAULT],
        z = F.find((e) => e.position.x === a && e.position.y === v),
        W = (0, d.z)({ x: a, y: v, config: { ...r.config.default, duration: 250 } }),
        Y = l.useCallback(() => {
            null != V && (0, y.EB)({ guildId: V, channelId: n, targetUserId: t, interactionType: "clicked" });
        }, [t, V, n]),
        K = l.useCallback(() => {
            null != V && (0, y.EB)({ guildId: V, channelId: n, targetUserId: t, interactionType: "hovered" });
        }, [t, V, n]);
    if (null == w || null == V) return null;
    let X = (0, i.jsx)(m.A, {
            userId: w.id,
            src: w.getAvatarURL(V, N, B && G),
            size: O,
            muted: k?.isVoiceMuted() ?? !1,
            deafen: k?.isVoiceDeafened() ?? !1,
            speaking: B,
            ringing: !1,
            className: z?.dim ? P.r3 : void 0,
        }),
        Z = { left: W.x.to((e) => `calc(${e}% - ${N / 2}px)`), top: W.y.to((e) => `calc(${e}% - ${N / 2}px)`) };
    if (!L)
        return (0, i.jsx)(r.animated.div, {
            "aria-label": H,
            className: P.f1,
            style: Z,
            children: (0, i.jsx)(u.D, { onMouseEnter: K, onClick: Y, children: X }),
        });
    let q = I.x.find((e) => e.id === E),
        Q = q?.icon,
        $ = (0, i.jsxs)("div", {
            className: P.R3,
            children: [
                X,
                null != q &&
                    null != Q &&
                    (0, i.jsx)("div", {
                        className: s()(P.qS, P.Af),
                        children: (0, i.jsx)(Q, { size: "sm", color: "currentColor" }),
                    }),
                D &&
                    (0, i.jsx)("div", {
                        className: s()(P.qS, P.Gk),
                        children: (0, i.jsx)(h.R, { size: "xs", color: "currentColor" }),
                    }),
            ],
        });
    return (0, i.jsx)(r.animated.div, {
        "aria-label": H,
        className: P.f1,
        style: Z,
        children: D
            ? (0, i.jsxs)(_.T, {
                  isOpen: M,
                  onOpenChange: U,
                  children: [
                      (0, i.jsx)(_.T.Trigger, {
                          children: (e) => {
                              let { ref: t, onClick: n, ...l } = e;
                              return (0, i.jsx)(T.A, {
                                  name: H,
                                  status: q,
                                  shouldShow: !M,
                                  children: (0, i.jsx)(u.D, {
                                      ...l,
                                      className: s()(P.hZ, { [P.Zu]: M }),
                                      innerRef: (e) => {
                                          t.current = e;
                                      },
                                      onMouseEnter: K,
                                      onClick: () => {
                                          n(), Y();
                                      },
                                      children: $,
                                  }),
                              });
                          },
                      }),
                      (0, i.jsx)(_.T.Popup, {
                          "aria-label": R.intl.string(b.default.LTAf2V),
                          children: I.x.map((e) => {
                              let t = e.icon;
                              return (0, i.jsx)(
                                  _.T.Item,
                                  {
                                      icon: null != t ? (0, i.jsx)(t, { size: "sm", color: "currentColor" }) : null,
                                      selected: E === e.id,
                                      onClick: () => {
                                          let t = E === e.id;
                                          (0, j.AQ)(V, n, {
                                              user_status_id: t ? 0 : e.id,
                                              user_status_text: t ? "" : R.intl.string(e.label),
                                          });
                                      },
                                      children: R.intl.string(e.label),
                                  },
                                  e.id,
                              );
                          }),
                      }),
                  ],
              })
            : (0, i.jsx)(T.A, {
                  name: H,
                  status: q,
                  children: (0, i.jsx)(u.D, { onMouseEnter: K, onClick: Y, children: $ }),
              }),
    });
}
function L(e) {
    let { channelId: t, guildId: n, users: l, numericAvatarSize: a, avatarSize: s } = e,
        { experimental: r } = E.A.useExperiment({ guildId: n, location: "GuildRoomUserList" });
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
function w(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, c.bG)([A.A], () => A.A.getChannel(t)?.guild_id),
        a = (0, c.bG)([v.A], () => v.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = (0, N.F)(n);
    return 0 === a.size || null == l
        ? null
        : (0, i.jsx)(L, { channelId: t, guildId: l, users: a, numericAvatarSize: s, avatarSize: r });
}
