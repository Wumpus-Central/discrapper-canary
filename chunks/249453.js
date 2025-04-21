r.d(t, { Z: () => s });
var n = r(200651),
    o = r(192379),
    i = r(392711),
    c = r(481060),
    l = r(765250),
    a = r(444295),
    u = r(388032);
let f = (0, i.throttle)((e, t) => {
    (0, a.JS)(e.type, { opacity: t });
}, 1000);
function s(e) {
    let t = o.useCallback((t) => f(e, t), [e]);
    return (0, n.jsx)(c.II_, {
        id: 'opacity',
        'aria-haspopup': !0,
        label: u.intl.string(u.t.OVovCQ),
        control: (r, o) => {
            var i, a;
            return (0, n.jsx)(
                c._wy,
                ((i = (function (e) {
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
                (a = a =
                    {
                        ref: o,
                        value: 100 * e.opacity,
                        maxValue: 100,
                        onChange: (r) => {
                            (0, l.nv)({
                                widgetId: e.id,
                                opacity: r / 100
                            }),
                                t(Math.floor(r));
                        },
                        'aria-label': u.intl.string(u.t.kbFsAA)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                i)
            );
        }
    });
}
