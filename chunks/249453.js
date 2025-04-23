r.d(e, { Z: () => p });
var n = r(200651),
    o = r(192379),
    i = r(392711),
    a = r(481060),
    c = r(765250),
    l = r(444295),
    u = r(388032);
let s = (0, i.throttle)((t, e) => {
    (0, l.JS)(t.type, { opacity: e });
}, 1000);
function p(t) {
    let e = o.useCallback((e) => s(t, e), [t]);
    return (0, n.jsx)(a.II_, {
        id: 'opacity',
        'aria-haspopup': !0,
        label: u.intl.string(u.t.OVovCQ),
        control: (r, o) => {
            var i, l;
            return (0, n.jsx)(
                a._wy,
                ((i = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                })
                            )),
                            n.forEach(function (e) {
                                var n;
                                (n = r[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = n);
                            });
                    }
                    return t;
                })({}, r)),
                (l = l =
                    {
                        ref: o,
                        value: 100 * t.opacity,
                        maxValue: 100,
                        onChange: (r) => {
                            (0, c.nv)({
                                widgetId: t.id,
                                opacity: r / 100
                            }),
                                e(Math.floor(r));
                        },
                        'aria-label': u.intl.string(u.t.kbFsAA)
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (t, e) {
                          var r = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(t);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(l)).forEach(function (t) {
                          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t));
                      }),
                i)
            );
        }
    });
}
