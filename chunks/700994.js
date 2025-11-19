n.d(t, { Z: () => f });
var i = n(54381);
n(473749);
var l = n(442837),
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
        b = (0, l.e7)([o.Z], () => o.Z.getLocalVolume(e, n), [e, n]),
        Z = e === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id),
        p = n === c.Yn.STREAM;
    return Z
        ? null
        : (0, i.jsx)(r.II_, {
              id: "user-volume",
              label: p ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF),
              control: (t, l) => {
                  var o, s;
                  return (0, i.jsx)(
                      r._wy,
                      ((o = (function (e) {
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
                              ref: l,
                              value: (0, u.P)(b),
                              maxValue: d.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => {
                                  a.Z.setLocalVolume(e, (0, u.A)(t), n), null == f || f(t);
                              },
                              "aria-label": p ? g.intl.string(g.t.t4JBnI) : g.intl.string(g.t.m7TNdF),
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
                      o),
                  );
              },
          });
}
