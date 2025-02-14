n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(468363),
    o = n(561308),
    l = n(158776),
    u = n(885110),
    c = n(456644),
    d = n(308406),
    f = n(369566),
    _ = n(565640),
    p = n(29899),
    h = n(151545),
    m = n(744802),
    g = n(493043),
    E = n(864141),
    v = n(231338);
function y(e) {
    let { user: t, currentUser: n, displayProfile: y, guildId: I, className: T, onClose: b } = e,
        { live: S, recent: A, stream: N } = (0, f.Z)(t.id),
        [C] = S,
        { voiceChannel: R, voiceActivity: O } = (0, p.Z)({
            userId: t.id,
            guildId: I,
            surface: 'user-profile-featured-activity'
        }),
        D = null != C && C === O,
        L = t.id === n.id,
        x = (0, a.e7)([u.Z, l.Z], () => {
            let e = L ? u.Z.getStatus() : l.Z.getStatus(t.id, I);
            return e === v.Sk.OFFLINE || e === v.Sk.INVISIBLE;
        }),
        { recentActivityEnabled: P } = (0, c.i)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityStatusEnabled: w } = (0, s.U)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityCardEnabled: M } = (0, d.o)({ location: 'UserProfileFeaturedActivity' }),
        k = w || M,
        U = (0, _.Z)(t.id, 'UserProfileFeaturedActivity'),
        G = r.useMemo(() => (L ? A.find(o.Ae) : U), [L, A, U]);
    return x || null == N
        ? !k || x || null == R || D
            ? x || null == C
                ? P && null != G
                    ? (0, i.jsx)(m.Z, {
                          location: 'UserProfileFeaturedActivity',
                          user: t,
                          currentUser: n,
                          entry: G,
                          profileGuildId: null == y ? void 0 : y.guildId,
                          className: T,
                          onClose: b
                      })
                    : null
                : (0, i.jsx)(h.Z, {
                      user: t,
                      currentUser: n,
                      activity: C,
                      profileGuildId: null == y ? void 0 : y.guildId,
                      className: T,
                      onClose: b
                  })
            : (0, i.jsx)(E.Z, {
                  user: t,
                  voiceChannel: R,
                  className: T,
                  onClose: b
              })
        : (0, i.jsx)(g.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: N,
              profileGuildId: null == y ? void 0 : y.guildId,
              className: T,
              onClose: b
          });
}
