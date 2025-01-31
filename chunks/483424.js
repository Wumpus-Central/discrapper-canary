n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(561308),
    s = n(456644),
    o = n(369566),
    l = n(565640),
    u = n(151545),
    c = n(744802),
    d = n(493043);
function f(e) {
    let { user: t, currentUser: n, profileGuildId: f, className: _, onClose: p } = e,
        { live: h, recent: m, stream: g } = (0, o.Z)(t.id),
        [E] = h,
        { recentActivityEnabled: v } = (0, s.i)({ location: 'UserProfileFeaturedActivity' }),
        y = t.id === n.id,
        I = (0, l.Z)(t.id, 'UserProfileFeaturedActivity'),
        b = r.useMemo(() => (y ? m.find(a.Ae) : I), [y, m, I]);
    return null != g
        ? (0, i.jsx)(d.Z, {
              location: 'UserProfileFeaturedActivity',
              user: t,
              currentUser: n,
              stream: g,
              profileGuildId: f,
              className: _,
              onClose: p
          })
        : null != E
          ? (0, i.jsx)(u.Z, {
                user: t,
                currentUser: n,
                activity: E,
                profileGuildId: f,
                className: _,
                onClose: p
            })
          : v && null != b
            ? (0, i.jsx)(c.Z, {
                  location: 'UserProfileFeaturedActivity',
                  user: t,
                  currentUser: n,
                  entry: b,
                  profileGuildId: f,
                  className: _,
                  onClose: p
              })
            : null;
}
