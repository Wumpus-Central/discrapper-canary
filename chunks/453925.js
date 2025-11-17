n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(442837),
    o = n(481060),
    l = n(846027),
    a = n(131951),
    s = n(36703),
    c = n(388032);
function u(e) {
    let t = (0, i.e7)([a.Z], () => (0, s.P)(a.Z.getInputVolume()));
    return (0, r.jsx)(o.II_, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        control: (n, i) => {
            var a, u;
            return (0, r.jsx)(
                o._wy,
                ((a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n)),
                (u = u =
                    {
                        ref: i,
                        value: t,
                        onChange: (t) => l.Z.setInputVolume((0, s.A)(t), { analyticsLocations: e }),
                        "aria-label": c.intl.string(c.t.OX2Bnr),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(u)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e));
                      }),
                a),
            );
        },
    });
}
