n.d(t, { A: () => v, F: () => E });
var i = n(627968),
    l = n(64700),
    a = n(580929),
    s = n(17928),
    r = n(778712),
    o = n(717421),
    c = n(939249),
    d = n(717558),
    u = n(85448),
    p = n(734057),
    h = n(287809),
    m = n(977997),
    A = n(531685),
    x = n(562153),
    g = n(920639),
    f = n(558076),
    C = n(765402),
    y = n(621191);
function E(e) {
    if (e < 200) return { numericAvatarSize: 16, avatarSize: r._3.SIZE_16 };
    if (e < 300) return { numericAvatarSize: 20, avatarSize: r._3.SIZE_20 };
    if (e < 400) return { numericAvatarSize: 32, avatarSize: r._3.SIZE_32 };
    if (e < 500) return { numericAvatarSize: 40, avatarSize: r._3.SIZE_40 };
    if (e < 550) return { numericAvatarSize: 44, avatarSize: r._3.SIZE_44 };
    else if (e < 770) return { numericAvatarSize: 56, avatarSize: r._3.SIZE_56 };
    return { numericAvatarSize: 72, avatarSize: r._3.SIZE_72 };
}
function N(e) {
    let { userId: t, channelId: n, x: r, y: f, numericAvatarSize: E, avatarSize: N } = e,
        v = (0, s.bG)([h.default], () => h.default.getUser(t)),
        j = (0, s.bG)([p.A], () => p.A.getChannel(n)?.guild_id),
        I = (0, s.bG)([m.A], () => m.A.getVoiceState(j, t)),
        T = (0, d.A)({ userId: t }),
        _ = (0, s.bG)([A.A], () => A.A.isFocused()),
        S = (0, x.tx)(j, n, v),
        { seats: R } = C.iX[C.I3.DEFAULT],
        P = R.find((e) => e.position.x === r && e.position.y === f),
        b = (0, o.z)({ x: r, y: f, config: { ...a.config.default, duration: 250 } }),
        O = l.useCallback(() => {
            null != j && (0, g.EB)({ guildId: j, channelId: n, targetUserId: t, interactionType: "clicked" });
        }, [t, j, n]),
        L = l.useCallback(() => {
            null != j && (0, g.EB)({ guildId: j, channelId: n, targetUserId: t, interactionType: "hovered" });
        }, [t, j, n]);
    return null == v || null == j
        ? null
        : (0, i.jsx)(a.animated.div, {
              "aria-label": S,
              className: y.f,
              style: {
                  left: b.x.to((e) => `calc(${e}% - ${E / 2}px)`),
                  top: b.y.to((e) => `calc(${e}% - ${E / 2}px)`),
              },
              children: (0, i.jsx)(c.D, {
                  onMouseEnter: L,
                  onClick: O,
                  children: (0, i.jsx)(u.A, {
                      userId: v.id,
                      src: v.getAvatarURL(j, E, T && _),
                      size: N,
                      muted: I?.isVoiceMuted() ?? !1,
                      deafen: I?.isVoiceDeafened() ?? !1,
                      speaking: T,
                      ringing: !1,
                      className: P?.dim ? y.r : void 0,
                  }),
              }),
          });
}
function v(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, s.bG)([f.A], () => f.A.getRoomUsers(t)),
        { numericAvatarSize: a, avatarSize: r } = E(n);
    return 0 === l.size
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.entries().map((e) => {
                  let [n, l] = e;
                  return (0, i.jsx)(
                      N,
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
