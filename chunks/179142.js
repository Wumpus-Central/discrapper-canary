n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var l = n(410030),
    a = n(906732),
    r = n(769654),
    s = n(785717),
    o = n(697927),
    c = n(200634),
    d = n(483517),
    u = n(502762),
    h = n(171368),
    p = n(389190),
    m = n(428927),
    f = n(638785),
    g = n(388032),
    _ = n(341855);
function C(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(),
        { context: C } = (0, s.KZ)(),
        x = (0, l.ZP)(),
        { mutualFriends: v, isFetching: E } = (0, o.Z)(t.id, !t.bot),
        { mutualGuilds: I, isFetching: b } = (0, c.Z)(t.id, !0),
        Z = !t.bot && null != v && v.length > 0,
        N = null != I && I.length > 0;
    return Z || N
        ? (0, i.jsxs)(u.Z.Overlay, {
              className: _.overlay,
              children: [
                  N &&
                      (0, i.jsx)(f.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: g.intl.string(g.t['4lTDZm']),
                          isLoading: b,
                          listClassName: _.list,
                          items: I.map((e) => {
                              let { guild: n, nick: l } = e;
                              return (0, i.jsx)(
                                  m.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: l,
                                      theme: x,
                                      onSelect: () => (0, r.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  N && Z && (0, i.jsx)(d.Z, { className: _.divider }),
                  Z &&
                      (0, i.jsx)(f.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: g.intl.string(g.t['0mTJ3t']),
                          isLoading: E,
                          listClassName: _.list,
                          items: v.map((e) => {
                              let { key: t, user: l, status: a } = e;
                              return (0, i.jsx)(
                                  p.T,
                                  {
                                      user: l,
                                      status: a,
                                      onSelect: () => {
                                          (0, h.openUserProfileModal)({
                                              ...C,
                                              userId: l.id,
                                              sourceAnalyticsLocations: n
                                          });
                                      }
                                  },
                                  t
                              );
                          })
                      })
              ]
          })
        : null;
}
