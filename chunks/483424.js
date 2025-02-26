n.d(t, { Z: () => h }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(468363),
    a = n(158776),
    s = n(885110),
    l = n(308406),
    c = n(369566),
    u = n(29899),
    d = n(151545),
    f = n(493043),
    _ = n(864141),
    p = n(231338);
function h(e) {
    let { user: t, currentUser: n, displayProfile: h, guildId: g, className: m, onClose: E } = e,
        { live: v, stream: b } = (0, c.Z)(t.id),
        [y] = v,
        { voiceChannel: O, voiceActivity: S } = (0, u.Z)({
            userId: t.id,
            guildId: g,
            surface: 'user-profile-featured-activity'
        }),
        I = null != y && y === S,
        T = t.id === n.id,
        N = (0, i.e7)([s.Z, a.Z], () => {
            let e = T ? s.Z.getStatus() : a.Z.getStatus(t.id, g);
            return e === p.Sk.OFFLINE || e === p.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: A } = (0, o.U)({ location: 'UserProfileFeaturedActivity' }),
        { voiceActivityCardEnabled: C } = (0, l.o)({ location: 'UserProfileFeaturedActivity' }),
        R = A || C;
    return N || null == b
        ? !R || N || null == O || I
            ? N || null == y
                ? null
                : (0, r.jsx)(d.Z, {
                      user: t,
                      currentUser: n,
                      activity: y,
                      profileGuildId: null == h ? void 0 : h.guildId,
                      className: m,
                      onClose: E
                  })
            : (0, r.jsx)(_.Z, {
                  user: t,
                  voiceChannel: O,
                  className: m,
                  onClose: E
              })
        : (0, r.jsx)(f.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: b,
              profileGuildId: null == h ? void 0 : h.guildId,
              className: m,
              onClose: E
          });
}
