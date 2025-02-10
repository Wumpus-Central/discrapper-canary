n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(561308),
    o = n(158776),
    l = n(885110),
    u = n(456644),
    c = n(308406),
    d = n(369566),
    f = n(565640),
    _ = n(29899),
    p = n(151545),
    h = n(744802),
    m = n(493043),
    g = n(864141),
    E = n(231338);
function v(e) {
    let { user: t, currentUser: n, displayProfile: v, guildId: y, className: I, onClose: T } = e,
        { live: b, recent: S, stream: A } = (0, d.Z)(t.id),
        [N] = b,
        { voiceChannel: C, voiceActivity: R } = (0, _.Z)({
            userId: t.id,
            guildId: y
        }),
        O = null != N && N === R,
        D = t.id === n.id,
        L = (0, a.e7)([l.Z, o.Z], () => {
            let e = D ? l.Z.getStatus() : o.Z.getStatus(t.id, y);
            return e === E.Sk.OFFLINE || e === E.Sk.INVISIBLE;
        }),
        { recentActivityEnabled: x } = (0, u.i)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityCardEnabled: P } = (0, c.o)({ location: 'UserProfileFeaturedActivity' }),
        w = (0, f.Z)(t.id, 'UserProfileFeaturedActivity'),
        M = r.useMemo(() => (D ? S.find(s.Ae) : w), [D, S, w]);
    return L || null == A
        ? L || !P || null == C || O
            ? L || null == N
                ? x && null != M
                    ? (0, i.jsx)(h.Z, {
                          location: 'UserProfileFeaturedActivity',
                          user: t,
                          currentUser: n,
                          entry: M,
                          profileGuildId: null == v ? void 0 : v.guildId,
                          className: I,
                          onClose: T
                      })
                    : null
                : (0, i.jsx)(p.Z, {
                      user: t,
                      currentUser: n,
                      activity: N,
                      profileGuildId: null == v ? void 0 : v.guildId,
                      className: I,
                      onClose: T
                  })
            : (0, i.jsx)(g.Z, {
                  user: t,
                  voiceChannel: C,
                  className: I,
                  onClose: T
              })
        : (0, i.jsx)(m.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: A,
              profileGuildId: null == v ? void 0 : v.guildId,
              className: I,
              onClose: T
          });
}
