n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(580929),
    s = n(17928),
    r = n(717421),
    o = n(939249),
    c = n(717558),
    d = n(85448),
    u = n(734057),
    p = n(287809),
    h = n(977997),
    m = n(531685),
    A = n(562153),
    x = n(920639),
    g = n(558076),
    f = n(996752),
    C = n(683864),
    y = n(621191);
function E(e) {
    let { userId: t, channelId: n, x: g, y: f, numericAvatarSize: E, avatarSize: v } = e,
        j = (0, s.bG)([p.default], () => p.default.getUser(t)),
        N = (0, s.bG)([u.A], () => u.A.getChannel(n)?.guild_id),
        I = (0, s.bG)([h.A], () => h.A.getVoiceState(N, t)),
        T = (0, c.A)({ userId: t }),
        _ = (0, s.bG)([m.A], () => m.A.isFocused()),
        S = (0, A.tx)(N, n, j),
        { seats: R } = C.iX[C.I3.DEFAULT],
        b = R.find((e) => e.position.x === g && e.position.y === f),
        P = (0, r.z)({ x: g, y: f, config: { ...a.config.default, duration: 250 } }),
        O = l.useCallback(() => {
            null != N && (0, x.EB)({ guildId: N, channelId: n, targetUserId: t, interactionType: "clicked" });
        }, [t, N, n]),
        L = l.useCallback(() => {
            null != N && (0, x.EB)({ guildId: N, channelId: n, targetUserId: t, interactionType: "hovered" });
        }, [t, N, n]);
    return null == j || null == N
        ? null
        : (0, i.jsx)(a.animated.div, {
              "aria-label": S,
              className: y.f,
              style: {
                  left: P.x.to((e) => `calc(${e}% - ${E / 2}px)`),
                  top: P.y.to((e) => `calc(${e}% - ${E / 2}px)`),
              },
              children: (0, i.jsx)(o.D, {
                  onMouseEnter: L,
                  onClick: O,
                  children: (0, i.jsx)(d.A, {
                      userId: j.id,
                      src: j.getAvatarURL(N, E, T && _),
                      size: v,
                      muted: I?.isVoiceMuted() ?? !1,
                      deafen: I?.isVoiceDeafened() ?? !1,
                      speaking: T,
                      ringing: !1,
                      className: b?.dim ? y.r : void 0,
                  }),
              }),
          });
}
function v(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, s.bG)([g.A], () => g.A.getRoomUsers(t)),
        { numericAvatarSize: a, avatarSize: r } = (0, f.F)(n);
    return 0 === l.size
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.entries().map((e) => {
                  let [n, l] = e;
                  return (0, i.jsx)(
                      E,
                      {
                          userId: n,
                          channelId: t,
                          x: l.position?.x ?? 0,
                          y: l.position?.y ?? 0,
                          numericAvatarSize: a,
                          avatarSize: r,
                      },
                      `${n}`,
                  );
              }),
          });
}
