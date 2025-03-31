r.d(t, { Z: () => s });
var n = r(200651);
r(192379);
var o = r(481060),
    c = r(906732),
    l = r(36703),
    i = r(208049),
    a = r(242291),
    u = r(388032);
function s() {
    let e = (0, a.pI)(),
        { analyticsLocations: t } = (0, c.ZP)();
    return (0, n.jsx)(o.II_, {
        id: 'user-volume',
        'aria-haspopup': !0,
        label: u.NW.string(u.t.kbFsAA),
        control: (r, c) => {
            var a, s;
            return (0, n.jsx)(
                o._wy,
                ((a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, r)),
                (s = s =
                    {
                        ref: c,
                        value: (0, l.P)(e),
                        maxValue: 100,
                        onChange: (e) => (0, i.xz)((0, l.A)(e), t),
                        'aria-label': u.NW.string(u.t.kbFsAA)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                a)
            );
        }
    });
}
