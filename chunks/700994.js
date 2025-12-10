n.d(t, { Z: () => b });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    o = n(846027),
    c = n(131951),
    s = n(594174),
    a = n(36703),
    u = n(358085),
    d = n(65154),
    f = n(388032);
function b(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        g = (0, r.e7)([c.Z], () => c.Z.getLocalVolume(e, n), [e, n]),
        j = e === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id),
        m = n === d.Yn.STREAM;
    return j
        ? null
        : (0, i.jsx)(l.II_, {
              id: "user-volume",
              label: m ? f.intl.string(f.t.t4JBnI) : f.intl.string(f.t.m7TNdF),
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
                              value: (0, a.P)(g),
                              maxValue: u.isPlatformEmbedded ? 200 : 100,
                              onChange: (t) => {
                                  o.Z.setLocalVolume(e, (0, a.A)(t), n), null == b || b(t);
                              },
                              "aria-label": m ? f.intl.string(f.t.t4JBnI) : f.intl.string(f.t.m7TNdF),
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
