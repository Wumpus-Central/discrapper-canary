n.d(t, { A: () => y, F: () => f });
var i = n(627968),
    l = n(308186),
    a = n(17928),
    s = n(778712),
    r = n(717421),
    o = n(717558),
    c = n(85448),
    d = n(734057),
    u = n(287809),
    p = n(977997),
    h = n(531685),
    m = n(562153),
    A = n(558076),
    x = n(765402),
    g = n(621191);
function f(e) {
    if (e < 200) return { numericAvatarSize: 16, avatarSize: s._3.SIZE_16 };
    if (e < 300) return { numericAvatarSize: 20, avatarSize: s._3.SIZE_20 };
    if (e < 400) return { numericAvatarSize: 32, avatarSize: s._3.SIZE_32 };
    if (e < 500) return { numericAvatarSize: 40, avatarSize: s._3.SIZE_40 };
    if (e < 550) return { numericAvatarSize: 44, avatarSize: s._3.SIZE_44 };
    else if (e < 770) return { numericAvatarSize: 56, avatarSize: s._3.SIZE_56 };
    return { numericAvatarSize: 72, avatarSize: s._3.SIZE_72 };
}
function C(e) {
    let { userId: t, channelId: n, x: s, y: A, numericAvatarSize: f, avatarSize: C } = e,
        y = (0, a.bG)([u.default], () => u.default.getUser(t)),
        E = (0, a.bG)([d.A], () => d.A.getChannel(n)?.guild_id),
        N = (0, a.bG)([p.A], () => p.A.getVoiceState(E, t)),
        v = (0, o.A)({ userId: t }),
        j = (0, a.bG)([h.A], () => h.A.isFocused()),
        I = (0, m.tx)(E, n, y),
        { seats: T } = x.iX[x.I3.DEFAULT],
        _ = T.find((e) => e.position.x === s && e.position.y === A),
        S = (0, r.z)({ x: s, y: A, config: { ...l.config.default, duration: 250 } });
    return null == y
        ? null
        : (0, i.jsx)(l.animated.div, {
              "aria-label": I,
              className: g.f,
              style: {
                  left: S.x.to((e) => `calc(${e}% - ${f / 2}px)`),
                  top: S.y.to((e) => `calc(${e}% - ${f / 2}px)`),
              },
              children: (0, i.jsx)(c.A, {
                  userId: y.id,
                  src: y.getAvatarURL(E, f, v && j),
                  size: C,
                  muted: N?.isVoiceMuted() ?? !1,
                  deafen: N?.isVoiceDeafened() ?? !1,
                  speaking: v,
                  ringing: !1,
                  className: _?.dim ? g.r : void 0,
              }),
          });
}
function y(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, a.bG)([A.A], () => A.A.getRoomUsers(t)),
        { numericAvatarSize: s, avatarSize: r } = f(n);
    return 0 === l.size
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.entries().map((e) => {
                  let [n, l] = e;
                  return (0, i.jsx)(
                      C,
                      {
                          userId: n,
                          channelId: t,
                          x: l.position?.x ?? 0,
                          y: l.position?.y ?? 0,
                          numericAvatarSize: s,
                          avatarSize: r,
                      },
                      `${n}`,
                  );
              }),
          });
}
