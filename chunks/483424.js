n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(468363),
    s = n(561308),
    l = n(158776),
    c = n(885110),
    u = n(456644),
    d = n(308406),
    f = n(369566),
    p = n(565640),
    _ = n(29899),
    h = n(151545),
    m = n(744802),
    g = n(493043),
    E = n(864141),
    v = n(231338);
function b(e) {
    let { user: t, currentUser: n, displayProfile: b, guildId: y, className: O, onClose: S } = e,
        { live: I, recent: T, stream: N } = (0, f.Z)(t.id),
        [A] = I,
        { voiceChannel: C, voiceActivity: R } = (0, _.Z)({
            userId: t.id,
            guildId: y,
            surface: 'user-profile-featured-activity'
        }),
        P = null != A && A === R,
        w = t.id === n.id,
        D = (0, o.e7)([c.Z, l.Z], () => {
            let e = w ? c.Z.getStatus() : l.Z.getStatus(t.id, y);
            return e === v.Sk.OFFLINE || e === v.Sk.INVISIBLE;
        }),
        { recentActivityEnabled: x } = (0, u.i)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityStatusEnabled: L } = (0, a.U)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityCardEnabled: M } = (0, d.o)({ location: 'UserProfileFeaturedActivity' }),
        k = L || M,
        j = (0, p.Z)(t.id, 'UserProfileFeaturedActivity'),
        U = i.useMemo(() => (w ? T.find(s.Ae) : j), [w, T, j]);
    return D || null == N
        ? !k || D || null == C || P
            ? D || null == A
                ? x && null != U
                    ? (0, r.jsx)(m.Z, {
                          location: 'UserProfileFeaturedActivity',
                          user: t,
                          currentUser: n,
                          entry: U,
                          profileGuildId: null == b ? void 0 : b.guildId,
                          className: O,
                          onClose: S
                      })
                    : null
                : (0, r.jsx)(h.Z, {
                      user: t,
                      currentUser: n,
                      activity: A,
                      profileGuildId: null == b ? void 0 : b.guildId,
                      className: O,
                      onClose: S
                  })
            : (0, r.jsx)(E.Z, {
                  user: t,
                  voiceChannel: C,
                  className: O,
                  onClose: S
              })
        : (0, r.jsx)(g.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: N,
              profileGuildId: null == b ? void 0 : b.guildId,
              className: O,
              onClose: S
          });
}
