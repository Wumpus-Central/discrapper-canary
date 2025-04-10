n.d(t, { Z: () => g });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    o = n(846027),
    a = n(131951),
    s = n(594174),
    u = n(36703),
    d = n(358085),
    c = n(65154),
    f = n(388032);
function g(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        g = (0, i.e7)([a.Z], () => a.Z.getLocalVolume(e, n), [e, n]),
        Z = e === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id),
        b = n === c.Yn.STREAM;
    return Z
        ? null
        : (0, l.jsx)(r.II_, {
              id: 'user-volume',
              label: b ? f.NW.string(f.t.t4JBnJ) : f.NW.string(f.t.m7TNdH),
              control: (t, i) => {
                  var a, s;
                  return (0, l.jsx)(
                      r._wy,
                      ((a = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  l = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (l = l.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  l.forEach(function (t) {
                                      var l;
                                      (l = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: l,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = l);
                                  });
                          }
                          return e;
                      })({}, t)),
                      (s = s =
                          {
                              ref: i,
                              value: (0, u.P)(g),
                              maxValue: d.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => o.Z.setLocalVolume(e, (0, u.A)(t), n),
                              'aria-label': b ? f.NW.string(f.t.t4JBnJ) : f.NW.string(f.t.m7TNdH)
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l);
                                }
                                return n;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      a)
                  );
              }
          });
}
