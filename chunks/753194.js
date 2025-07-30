(a.d(t, { Z: () => u }), a(388685));
var n = a(255367);
a(73800);
var r = a(866442),
    l = a(442837),
    i = a(692547),
    s = a(481060),
    o = a(607070),
    c = a(297700),
    d = a(388032);
function u(e) {
    let t,
        { color: a, size: u, forcedIconColor: m, className: x, iconClassName: p, tooltipText: h } = e,
        [b, f] = (0, l.Wu)([o.Z], () => [o.Z.desaturateUserColors, o.Z.saturation]),
        v = (0, s.dQu)(i.Z.unsafe_rawColors.PRIMARY_300).hex(),
        g = (0, r._i)(null != a ? a : v),
        j = (0, r.ho)(g, !1, b ? f : null);
    return (
        (t = null != m ? m : 0.3 > (0, r.Bd)(g) ? i.Z.unsafe_rawColors.PRIMARY_630.css : i.Z.unsafe_rawColors.WHITE_500.css),
        (0, n.jsx)(s.ua7, {
            text: null != h ? h : d.intl.string(d.t.T3PvV1),
            children: (e) => {
                var a, r;
                return (0, n.jsx)(
                    c.Z,
                    ((a = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            className: x,
                            color: j,
                            size: u,
                            children: (0, n.jsx)(s.kmB, {
                                size: 'custom',
                                color: t,
                                height: u,
                                width: u,
                                className: p
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var a = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  a.push.apply(a, n);
                              }
                              return a;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    a)
                );
            }
        })
    );
}
