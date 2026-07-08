n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(580929),
    s = n(821578),
    r = n(17928),
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
    C = n(996752),
    y = n(971954),
    E = n(621191);
function v(e) {
    let { userId: t, channelId: n, x: f, y: C, numericAvatarSize: v, avatarSize: j } = e,
        N = (0, r.bG)([h.default], () => h.default.getUser(t)),
        I = (0, r.bG)([p.A], () => p.A.getChannel(n)?.guild_id),
        T = (0, r.bG)([m.A], () => m.A.getVoiceState(I, t)),
        _ = (0, d.A)({ userId: t }),
        S = (0, r.bG)([A.A], () => A.A.isFocused()),
        R = (0, x.tx)(I, n, N),
        { seats: b } = y.iX[s.I.DEFAULT],
        P = b.find((e) => e.position.x === f && e.position.y === C),
        O = (0, o.z)({ x: f, y: C, config: { ...a.config.default, duration: 250 } }),
        L = l.useCallback(() => {
            null != I && (0, g.EB)({ guildId: I, channelId: n, targetUserId: t, interactionType: "clicked" });
        }, [t, I, n]),
        D = l.useCallback(() => {
            null != I && (0, g.EB)({ guildId: I, channelId: n, targetUserId: t, interactionType: "hovered" });
        }, [t, I, n]);
    return null == N || null == I
        ? null
        : (0, i.jsx)(a.animated.div, {
              "aria-label": R,
              className: E.f,
              style: {
                  left: O.x.to((e) => `calc(${e}% - ${v / 2}px)`),
                  top: O.y.to((e) => `calc(${e}% - ${v / 2}px)`),
              },
              children: (0, i.jsx)(c.D, {
                  onMouseEnter: D,
                  onClick: L,
                  children: (0, i.jsx)(u.A, {
                      userId: N.id,
                      src: N.getAvatarURL(I, v, _ && S),
                      size: j,
                      muted: T?.isVoiceMuted() ?? !1,
                      deafen: T?.isVoiceDeafened() ?? !1,
                      speaking: _,
                      ringing: !1,
                      className: P?.dim ? E.r : void 0,
                  }),
              }),
          });
}
function j(e) {
    let { channelId: t, roomWidth: n } = e,
        l = (0, r.bG)([f.A], () => f.A.getRoomUsers(t)),
        { numericAvatarSize: a, avatarSize: s } = (0, C.F)(n);
    return 0 === l.size
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.entries().map((e) => {
                  let [n, l] = e;
                  return (0, i.jsx)(
                      v,
                      {
                          userId: n,
                          channelId: t,
                          x: l.position?.x ?? 0,
                          y: l.position?.y ?? 0,
                          numericAvatarSize: a,
                          avatarSize: s,
                      },
                      `${n}`,
                  );
              }),
          });
}
