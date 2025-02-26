n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(410030),
    l = n(906732),
    o = n(769654),
    a = n(785717),
    s = n(806729),
    c = n(483517),
    u = n(502762),
    d = n(171368),
    p = n(389190),
    h = n(428927),
    f = n(638785),
    m = n(388032),
    g = n(589834);
function b(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(),
        { context: b } = (0, a.KZ)(),
        _ = (0, i.ZP)(),
        {
            mutualFriends: C,
            mutualGuilds: v,
            isFetching: y
        } = (0, s.Z)(t, {
            fetch: !0,
            type: 'panel'
        }),
        x = !t.bot && null != C && C.length > 0,
        j = null != v && v.length > 0;
    return x || j
        ? (0, r.jsxs)(u.Z.Overlay, {
              className: g.overlay,
              children: [
                  j &&
                      (0, r.jsx)(f.Z, {
                          section: 'MUTUAL_GUILDS',
                          header: m.NW.string(m.t['4lTDZm']),
                          isLoading: y,
                          listClassName: g.list,
                          items: v.map((e) => {
                              let { guild: n, nick: i } = e;
                              return (0, r.jsx)(
                                  h.D,
                                  {
                                      user: t,
                                      guild: n,
                                      nick: i,
                                      theme: _,
                                      onSelect: () => (0, o.X)(n.id)
                                  },
                                  n.id
                              );
                          })
                      }),
                  j && x && (0, r.jsx)(c.Z, { className: g.divider }),
                  x &&
                      (0, r.jsx)(f.Z, {
                          section: 'MUTUAL_FRIENDS',
                          header: m.NW.string(m.t['0mTJ3t']),
                          isLoading: y,
                          listClassName: g.list,
                          items: C.map((e) => {
                              let { key: t, user: i, status: l } = e;
                              return (0, r.jsx)(
                                  p.T,
                                  {
                                      user: i,
                                      status: l,
                                      onSelect: () => {
                                          var e, t;
                                          (0, d.openUserProfileModal)(
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
                                              })({}, b)),
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
