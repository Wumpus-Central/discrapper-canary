n.d(t, { A: () => C, F: () => g });
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
    x = n(621191);
function g(e) {
    if (e < 200) return { numericAvatarSize: 16, avatarSize: s._3.SIZE_16 };
    if (e < 300) return { numericAvatarSize: 20, avatarSize: s._3.SIZE_20 };
    if (e < 400) return { numericAvatarSize: 32, avatarSize: s._3.SIZE_32 };
    if (e < 500) return { numericAvatarSize: 40, avatarSize: s._3.SIZE_40 };
    if (e < 550) return { numericAvatarSize: 44, avatarSize: s._3.SIZE_44 };
    else if (e < 770) return { numericAvatarSize: 56, avatarSize: s._3.SIZE_56 };
    return { numericAvatarSize: 72, avatarSize: s._3.SIZE_72 };
}
function f(e) {
    let { userId: t, channelId: n, x: s, y: A, numericAvatarSize: g, avatarSize: f } = e,
        C = (0, a.bG)([u.default], () => u.default.getUser(t)),
        y = (0, a.bG)([d.A], () => d.A.getChannel(n)?.guild_id),
        E = (0, a.bG)([p.A], () => p.A.getVoiceState(y, t)),
        N = (0, o.A)({ userId: t }),
        j = (0, a.bG)([h.A], () => h.A.isFocused()),
        v = (0, m.tx)(y, n, C),
        I = (0, r.z)({ x: s, y: A, config: { ...l.config.default, duration: 250 } });
    return null == C
        ? null
        : (0, i.jsx)(l.animated.div, {
              "aria-label": v,
              className: x.f,
              style: {
                  left: I.x.to((e) => `calc(${e}% - ${g / 2}px)`),
                  top: I.y.to((e) => `calc(${e}% - ${g / 2}px)`),
              },
              children: (0, i.jsx)(c.A, {
                  userId: C.id,
                  src: C.getAvatarURL(y, g, N && j),
                  size: f,
                  muted: E?.isVoiceMuted() ?? !1,
                  deafen: E?.isVoiceDeafened() ?? !1,
                  speaking: N,
                  ringing: !1,
              }),
          });
}
function C(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, a.yK)([A.A], () => A.A.getRoom(t)?.users ?? []),
        { numericAvatarSize: s, avatarSize: r } = g(n);
    return 0 === l.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.map((e) => {
                  let { userId: n, position: l } = e;
                  return (0, i.jsx)(
                      f,
                      { userId: n, channelId: t, x: l.x, y: l.y, numericAvatarSize: s, avatarSize: r },
                      `${n}`,
                  );
              }),
          });
}
