n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(846027),
    s = n(131951),
    a = n(594174),
    d = n(36703),
    c = n(358085),
    u = n(65154),
    g = n(388032);
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        f = (0, r.e7)([s.Z], () => s.Z.getLocalVolume(e, n), [e, n]),
        m = e === (null == (t = a.default.getCurrentUser()) ? void 0 : t.id),
        Z = n === u.Yn.STREAM;
    return m
        ? null
        : (0, i.jsx)(l.II_, {
              id: 'user-volume',
              label: Z ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
              control: (t, r) => {
                  var s, a;
                  return (0, i.jsx)(
                      l._wy,
                      ((s = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })({}, t)),
                      (a = a =
                          {
                              ref: r,
                              value: (0, d.P)(f),
                              maxValue: c.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => o.Z.setLocalVolume(e, (0, d.A)(t), n),
                              'aria-label': Z ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH)
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
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
