n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(846027),
    o = n(131951),
    s = n(594174),
    u = n(36703),
    c = n(358085),
    d = n(65154),
    g = n(388032);
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        f = (0, l.e7)([o.Z], () => o.Z.getLocalVolume(e, n), [e, n]),
        b = e === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id),
        Z = n === d.Yn.STREAM;
    return b
        ? null
        : (0, i.jsx)(r.II_, {
              id: 'user-volume',
              label: Z ? g.NW.string(g.t.t4JBnJ) : g.NW.string(g.t.m7TNdH),
              control: (t, l) => {
                  var o, s;
                  return (0, i.jsx)(
                      r._wy,
                      ((o = (function (e) {
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
                      (s = s =
                          {
                              ref: l,
                              value: (0, u.P)(f),
                              maxValue: c.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => a.Z.setLocalVolume(e, (0, u.A)(t), n),
                              'aria-label': Z ? g.NW.string(g.t.t4JBnJ) : g.NW.string(g.t.m7TNdH)
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      o)
                  );
              }
          });
}
