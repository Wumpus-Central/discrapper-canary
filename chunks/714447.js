r.d(t, { Z: () => u });
var n = r(200651);
r(192379);
var o = r(481060),
    c = r(36703),
    l = r(208049),
    a = r(242291),
    i = r(388032);
function u() {
    let e = (0, a.pI)();
    return (0, n.jsx)(o.II_, {
        id: 'user-volume',
        'aria-haspopup': !0,
        label: i.NW.string(i.t.kbFsAA),
        control: (t, r) => {
            var a, u;
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
                })({}, t)),
                (u = u =
                    {
                        ref: r,
                        value: (0, c.P)(e),
                        maxValue: 100,
                        onChange: (e) => (0, l.xz)((0, c.A)(e)),
                        'aria-label': i.NW.string(i.t.kbFsAA)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(u)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e));
                      }),
                a)
            );
        }
    });
}
