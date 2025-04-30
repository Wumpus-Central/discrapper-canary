n.d(t, { Z: () => m });
var i = n(200651),
    r = n(442837),
    s = n(481060),
    l = n(626562),
    a = n(885110),
    o = n(51144),
    c = n(231338),
    d = n(388032),
    u = n(596993);
function m() {
    var e;
    let t = (0, r.e7)([a.Z], () => a.Z.getStatus()),
        n = null != (e = (0, o.u5)(t)) ? e : '',
        m = t === c.Sk.INVISIBLE || t === c.Sk.OFFLINE,
        p = (0, l.V)({ location: 'UserProfileAccountPopoutMenuItemStatusLabel' });
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            n,
            n.length > 0 &&
                p &&
                m &&
                (0, i.jsx)(s.ua7, {
                    text: d.intl.string(d.t.L99HQk),
                    children: (e) =>
                        (0, i.jsx)(
                            s.P4T,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
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
