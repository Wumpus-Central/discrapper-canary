n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(561308),
    s = n(456644),
    o = n(308406),
    l = n(369566),
    u = n(565640),
    c = n(29899),
    d = n(151545),
    f = n(744802),
    _ = n(493043),
    p = n(864141);
function h(e) {
    let { user: t, currentUser: n, displayProfile: h, guildId: m, className: g, onClose: E } = e,
        { live: v, recent: y, stream: I } = (0, l.Z)(t.id),
        [b] = v,
        { voiceChannel: T, voiceActivity: S } = (0, c.Z)({
            userId: t.id,
            guildId: m
        }),
        A = null != b && b === S,
        { recentActivityEnabled: N } = (0, s.i)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityCardEnabled: C } = (0, o.o)({ location: 'UserProfileFeaturedActivity' }),
        R = t.id === n.id,
        O = (0, u.Z)(t.id, 'UserProfileFeaturedActivity'),
        D = r.useMemo(() => (R ? y.find(a.Ae) : O), [R, y, O]);
    return null != I
        ? (0, i.jsx)(_.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: I,
              profileGuildId: null == h ? void 0 : h.guildId,
              className: g,
              onClose: E
          })
        : C && null != T && !A
          ? (0, i.jsx)(p.Z, {
                user: t,
                voiceChannel: T,
                className: g,
                onClose: E
            })
          : null != b
            ? (0, i.jsx)(d.Z, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  profileGuildId: null == h ? void 0 : h.guildId,
                  className: g,
                  onClose: E
              })
            : N && null != D
              ? (0, i.jsx)(f.Z, {
                    location: 'UserProfileFeaturedActivity',
                    user: t,
                    currentUser: n,
                    entry: D,
                    profileGuildId: null == h ? void 0 : h.guildId,
                    className: g,
                    onClose: E
                })
              : null;
}
