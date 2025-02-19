n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(410030),
    l = n(906732),
    o = n(769654),
    a = n(785717),
    s = n(697927),
    c = n(200634),
    u = n(483517),
    d = n(502762),
    p = n(171368),
    h = n(389190),
    f = n(428927),
    m = n(638785),
    g = n(388032),
    b = n(589834);
function _(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(),
        { context: _ } = (0, a.KZ)(),
        C = (0, i.ZP)(),
        { mutualFriends: v, isFetching: y } = (0, s.Z)(t.id, !t.bot),
        { mutualGuilds: x, isFetching: j } = (0, c.Z)(t.id, !0),
        O = !t.bot && null != v && v.length > 0,
        N = null != x && x.length > 0;
    return O || N
        ? (0, r.jsxs)(d.Z.Overlay, {
              className: b.overlay,
              children: [
                  N &&
                      (0, r.jsx)(m.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: g.NW.string(g.t['4lTDZm']),
                          isLoading: j,
                          listClassName: b.list,
                          items: x.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, r.jsx)(
                                  f.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: i,
                                      theme: C,
                                      onSelect: () => (0, o.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  N && O && (0, r.jsx)(u.Z, { className: b.divider }),
                  O &&
                      (0, r.jsx)(m.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: g.NW.string(g.t['0mTJ3t']),
                          isLoading: y,
                          listClassName: b.list,
                          items: v.map((e) => {
                              let { key: t, user: i, status: l } = e;
                              return (0, r.jsx)(
                                  h.T,
                                  {
                                      user: i,
                                      status: l,
                                      onSelect: () => {
                                          var e, t;
                                          (0, p.openUserProfileModal)(
                                              ((e = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      'function' == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                              })
                                                          )),
                                                          r.forEach(function (t) {
                                                              var r;
                                                              (r = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: r,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0
                                                                        })
                                                                      : (e[t] = r);
                                                          });
                                                  }
                                                  return e;
                                              })({}, _)),
                                              (t = t =
                                                  {
                                                      userId: i.id,
                                                      sourceAnalyticsLocations: n
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(t)).forEach(function (n) {
                                                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                    }),
                                              e)
                                          );
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
