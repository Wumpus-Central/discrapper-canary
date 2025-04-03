n.d(t, { Z: () => m });
var r = n(200651),
    i = n(442837),
    s = n(481060),
    a = n(626562),
    l = n(885110),
    o = n(51144),
    c = n(231338),
    d = n(388032),
    u = n(287400);
function m() {
    var e;
    let t = (0, i.e7)([l.Z], () => l.Z.getStatus()),
        n = null != (e = (0, o.u5)(t)) ? e : '',
        m = t === c.Sk.INVISIBLE || t === c.Sk.OFFLINE,
        g = (0, a.V)({ location: 'AccountProfilePopoutMenuItemStatusLabel' });
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            n,
            n.length > 0 &&
                g &&
                m &&
                (0, r.jsx)(s.ua7, {
                    text: d.NW.string(d.t.L99HQk),
                    children: (e) =>
                        (0, r.jsx)(
                            s.P4T,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    size: 'xs',
                                    color: s.TVs.colors.STATUS_WARNING
                                },
                                e
                            )
                        )
                })
        ]
    });
}
