n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(561308),
    o = n(158776),
    l = n(456644),
    u = n(308406),
    c = n(369566),
    d = n(565640),
    f = n(29899),
    _ = n(151545),
    p = n(744802),
    h = n(493043),
    m = n(864141),
    g = n(231338);
function E(e) {
    let { user: t, currentUser: n, displayProfile: E, guildId: v, className: y, onClose: I } = e,
        { live: b, recent: T, stream: S } = (0, c.Z)(t.id),
        [A] = b,
        { voiceChannel: N, voiceActivity: C } = (0, f.Z)({
            userId: t.id,
            guildId: v
        }),
        R = null != A && A === C,
        O = (0, a.e7)([o.Z], () => {
            let e = o.Z.getStatus(t.id, v);
            return e === g.Sk.OFFLINE || e === g.Sk.INVISIBLE;
        }),
        { recentActivityEnabled: D } = (0, l.i)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityCardEnabled: x } = (0, u.o)({ location: 'UserProfileFeaturedActivity' }),
        L = t.id === n.id,
        P = (0, d.Z)(t.id, 'UserProfileFeaturedActivity'),
        w = r.useMemo(() => (L ? T.find(s.Ae) : P), [L, T, P]);
    return O || null == S
        ? O || !x || null == N || R
            ? O || null == A
                ? D && null != w
                    ? (0, i.jsx)(p.Z, {
                          location: 'UserProfileFeaturedActivity',
                          user: t,
                          currentUser: n,
                          entry: w,
                          profileGuildId: null == E ? void 0 : E.guildId,
                          className: y,
                          onClose: I
                      })
                    : null
                : (0, i.jsx)(_.Z, {
                      user: t,
                      currentUser: n,
                      activity: A,
                      profileGuildId: null == E ? void 0 : E.guildId,
                      className: y,
                      onClose: I
                  })
            : (0, i.jsx)(m.Z, {
                  user: t,
                  voiceChannel: N,
                  className: y,
                  onClose: I
              })
        : (0, i.jsx)(h.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: S,
              profileGuildId: null == E ? void 0 : E.guildId,
              className: y,
              onClose: I
          });
}
