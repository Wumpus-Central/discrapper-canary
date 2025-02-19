r.d(t, { Z: () => p });
var n = r(200651),
    o = r(192379),
    a = r(392711),
    c = r(481060),
    i = r(765250),
    l = r(444295),
    u = r(388032);
let s = (0, a.throttle)((e, t) => {
    (0, l.JS)(e.type, { opacity: t });
}, 1000);
function p(e) {
    let t = o.useCallback((t) => s(e, t), [e]);
    return (0, n.jsx)(c.II_, {
        id: 'opacity',
        'aria-haspopup': !0,
        label: u.NW.string(u.t.OVovCQ),
        control: (r, o) => {
            var a, l;
            return (0, n.jsx)(
                c._wy,
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
                (l = l =
                    {
                        ref: o,
                        value: 100 * e.opacity,
                        maxValue: 100,
                        onChange: (r) => {
                            (0, i.nv)({
                                widgetId: e.id,
                                opacity: r / 100
                            }),
                                t(Math.floor(r));
                        },
                        'aria-label': u.NW.string(u.t.kbFsAA)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                a)
            );
        }
    });
}
