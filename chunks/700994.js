n.d(t, { Z: () => f });
var l = n(951288);
n(647438);
var i = n(442837),
    r = n(481060),
    a = n(846027),
    o = n(131951),
    s = n(594174),
    u = n(36703),
    d = n(358085),
    c = n(65154),
    g = n(388032);
function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        b = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, n), [e, n]),
        Z = e === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id),
        m = n === c.Yn.STREAM;
    return Z
        ? null
        : (0, l.jsx)(r.II_, {
              id: "user-volume",
              label: m ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
              control: (t, i) => {
                  var o, s;
                  return (0, l.jsx)(
                      r._wy,
                      ((o = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  l = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (l = l.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  l.forEach(function (t) {
                                      var l;
                                      (l = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: l,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = l);
                                  });
                          }
                          return e;
                      })({}, t)),
                      (s = s =
                          {
                              ref: i,
                              value: (0, u.P)(b),
                              maxValue: d.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => {
                                  a.Z.setLocalVolume(e, (0, u.A)(t), n), null == f || f(t);
                              },
                              "aria-label": m ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l);
                                }
                                return n;
                            })(Object(s)).forEach(function (e) {
                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                            }),
                      o),
                  );
              },
          });
}
