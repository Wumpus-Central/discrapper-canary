n.d(t, { Z: () => p }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(468363),
    a = n(158776),
    s = n(885110),
    l = n(369566),
    c = n(29899),
    u = n(151545),
    d = n(493043),
    f = n(864141),
    _ = n(231338);
function p(e) {
    let { user: t, currentUser: n, displayProfile: p, guildId: h, className: m, onClose: g } = e,
        { live: E, stream: b } = (0, l.Z)(t.id),
        [y] = E,
        { voiceChannel: v } = (0, c.Z)({
            userId: t.id,
            guildId: h,
            surface: 'user-profile-featured-activity'
        }),
        O = t.id === n.id,
        I = (0, i.e7)([s.Z, a.Z], () => {
            let e = O ? s.Z.getStatus() : a.Z.getStatus(t.id, h);
            return e === _.Sk.OFFLINE || e === _.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: S } = (0, o.U)({ location: 'UserProfileFeaturedActivity' });
    return I || null == b
        ? I || null == y
            ? S && !I && null != v
                ? (0, r.jsx)(f.Z, {
                      user: t,
                      currentUser: n,
                      voiceChannel: v,
                      className: m,
                      onClose: g
                  })
                : null
            : (0, r.jsx)(u.Z, {
                  user: t,
                  currentUser: n,
                  activity: y,
                  profileGuildId: null == p ? void 0 : p.guildId,
                  className: m,
                  onClose: g
              })
        : (0, r.jsx)(d.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: b,
              profileGuildId: null == p ? void 0 : p.guildId,
              className: m,
              onClose: g
          });
}
