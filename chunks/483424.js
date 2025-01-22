r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(561308),
    l = r(456644),
    u = r(369566),
    c = r(565640),
    d = r(151545),
    f = r(744802),
    p = r(493043);
function h(e) {
    let { user: n, currentUser: r, profileGuildId: i, className: h, onClose: _ } = e,
        { live: m, recent: g, stream: E } = (0, u.Z)(n.id),
        [v] = m,
        { recentActivityEnabled: y } = (0, l.i)({ location: 'UserProfileFeaturedActivity' }),
        b = n.id === r.id,
        I = (0, c.Z)(n.id, 'UserProfileFeaturedActivity'),
        T = o.useMemo(() => (b ? g.find(s.Ae) : I), [b, g, I]);
    return null != E
        ? (0, a.jsx)(p.Z, {
              location: 'UserProfileFeaturedActivity',
              user: n,
              currentUser: r,
              stream: E,
              profileGuildId: i,
              className: h,
              onClose: _
          })
        : null != v
          ? (0, a.jsx)(d.Z, {
                user: n,
                currentUser: r,
                activity: v,
                profileGuildId: i,
                className: h,
                onClose: _
            })
          : y && null != T
            ? (0, a.jsx)(f.Z, {
                  location: 'UserProfileFeaturedActivity',
                  user: n,
                  currentUser: r,
                  entry: T,
                  profileGuildId: i,
                  className: h,
                  onClose: _
              })
            : null;
}
