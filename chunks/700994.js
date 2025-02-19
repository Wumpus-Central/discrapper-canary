n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(846027),
    a = n(131951),
    u = n(594174),
    s = n(36703),
    c = n(358085),
    d = n(65154),
    f = n(388032);
function g(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        g = (0, l.e7)([a.Z], () => a.Z.getLocalVolume(e, n), [e, n]),
        b = e === (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
        Z = n === d.Yn.STREAM;
    return b
        ? null
        : (0, i.jsx)(r.II_, {
              id: 'user-volume',
              label: Z ? f.NW.string(f.t.t4JBnJ) : f.NW.string(f.t.m7TNdH),
              control: (t, l) => {
                  var a, u;
                  return (0, i.jsx)(
                      r._wy,
                      ((a = (function (e) {
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
                      (u = u =
                          {
                              ref: l,
                              value: (0, s.P)(g),
                              maxValue: c.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => o.Z.setLocalVolume(e, (0, s.A)(t), n),
                              'aria-label': Z ? f.NW.string(f.t.t4JBnJ) : f.NW.string(f.t.m7TNdH)
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(u)).forEach(function (e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e));
                            }),
                      a)
                  );
              }
          });
}
