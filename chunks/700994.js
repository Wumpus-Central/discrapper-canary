n.d(t, { Z: () => g });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(846027),
    a = n(131951),
    u = n(594174),
    c = n(36703),
    s = n(358085),
    d = n(65154),
    f = n(388032);
function g(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        g = (0, r.e7)([a.Z], () => a.Z.getLocalVolume(e, n), [e, n]),
        b = e === (null == (t = u.default.getCurrentUser()) ? void 0 : t.id),
        O = n === d.Yn.STREAM;
    return b
        ? null
        : (0, l.jsx)(i.II_, {
              id: 'user-volume',
              label: O ? f.intl.string(f.t.t4JBnJ) : f.intl.string(f.t.m7TNdH),
              control: (t, r) => {
                  var a, u;
                  return (0, l.jsx)(
                      i._wy,
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
                      (u = u =
                          {
                              ref: r,
                              value: (0, c.P)(g),
                              maxValue: s.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => o.Z.setLocalVolume(e, (0, c.A)(t), n),
                              'aria-label': O ? f.intl.string(f.t.t4JBnJ) : f.intl.string(f.t.m7TNdH)
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l);
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
