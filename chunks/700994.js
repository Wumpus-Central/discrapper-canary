n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    o = n(846027),
    c = n(131951),
    s = n(594174),
    a = n(36703),
    u = n(358085),
    d = n(65154),
    b = n(388032);
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        f = (0, r.e7)([c.Z], () => c.Z.getLocalVolume(e, n), [e, n]),
        g = e === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id),
        j = n === d.Yn.STREAM;
    return g
        ? null
        : (0, i.jsx)(l.II_, {
              id: "user-volume",
              label: j ? b.intl.string(b.t.t4JBnJ) : b.intl.string(b.t.m7TNdH),
              control: (t, r) => {
                  var c, s;
                  return (0, i.jsx)(
                      l._wy,
                      ((c = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })({}, t)),
                      (s = s =
                          {
                              ref: r,
                              value: (0, a.P)(f),
                              maxValue: u.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => o.Z.setLocalVolume(e, (0, a.A)(t), n),
                              "aria-label": j ? b.intl.string(b.t.t4JBnJ) : b.intl.string(b.t.m7TNdH),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      c),
                  );
              },
          });
}
