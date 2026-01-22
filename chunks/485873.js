r.d(t, { A: () => s });
var n = r(627968);
r(64700);
var o = r(311907),
    u = r(397927),
    i = r(827343),
    l = r(430452),
    a = r(824744),
    c = r(985018);
function s(e) {
    let t = (0, o.bG)([l.A], () => (0, a.M)(l.A.getInputVolume()));
    return (0, n.jsx)(u.aK1, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        control: (r, o) => {
            var l, s;
            return (0, n.jsx)(
                u.i42,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, r)),
                (s = s =
                    {
                        ref: o,
                        value: t,
                        onChange: (t) => i.A.setInputVolume((0, a.w)(t), { analyticsLocations: e }),
                        "aria-label": c.intl.string(c.t.OX2Bnr),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                l),
            );
        },
    });
}
