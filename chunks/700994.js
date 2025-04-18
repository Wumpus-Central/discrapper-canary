n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(846027),
    s = n(131951),
    a = n(594174),
    d = n(36703),
    c = n(358085),
    u = n(65154),
    g = n(388032);
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        f = (0, i.e7)([s.Z], () => s.Z.getLocalVolume(e, n), [e, n]),
        m = e === (null == (t = a.default.getCurrentUser()) ? void 0 : t.id),
        Z = n === u.Yn.STREAM;
    return m
        ? null
        : (0, r.jsx)(o.II_, {
              id: 'user-volume',
              label: Z ? g.NW.string(g.t.t4JBnJ) : g.NW.string(g.t.m7TNdH),
              control: (t, i) => {
                  var s, a;
                  return (0, r.jsx)(
                      o._wy,
                      ((s = (function (e) {
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
                      })({}, t)),
                      (a = a =
                          {
                              ref: i,
                              value: (0, d.P)(f),
                              maxValue: c.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => l.Z.setLocalVolume(e, (0, d.A)(t), n),
                              'aria-label': Z ? g.NW.string(g.t.t4JBnJ) : g.NW.string(g.t.m7TNdH)
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      s)
                  );
              }
          });
}
