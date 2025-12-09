r.d(t, { Z: () => f });
var n = r(54381),
    o = r(473749),
    i = r(392711),
    l = r(481060),
    c = r(765250),
    a = r(444295),
    u = r(388032);
let s = (0, i.throttle)((e, t) => {
    (0, a.JS)(e.type, { opacity: t });
}, 1000);
function f(e) {
    let t = o.useCallback((t) => s(e, t), [e]);
    return (0, n.jsx)(l.II_, {
        id: "opacity",
        "aria-haspopup": !0,
        label: u.intl.string(u.t.OVovCb),
        control: (r, o) => {
            var i, a;
            return (0, n.jsx)(
                l._wy,
                ((i = (function (e) {
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
                (a = a =
                    {
                        ref: o,
                        value: 100 * e.opacity,
                        maxValue: 100,
                        onChange: (r) => {
                            (0, c.nv)({
                                widgetId: e.id,
                                opacity: r / 100,
                            }),
                                t(Math.floor(r));
                        },
                        "aria-label": u.intl.string(u.t.kbFsAD),
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
                i),
            );
        },
    });
}
