n.d(t, { Z: () => u }), n(388685);
var a = n(200651);
n(192379);
var r = n(866442),
    l = n(442837),
    i = n(692547),
    s = n(481060),
    o = n(607070),
    c = n(297700),
    d = n(388032);
function u(e) {
    let t,
        { color: n, size: u, forcedIconColor: m, className: x, iconClassName: h, tooltipText: p } = e,
        [b, f] = (0, l.Wu)([o.Z], () => [o.Z.desaturateUserColors, o.Z.saturation]),
        v = (0, s.dQu)(i.Z.unsafe_rawColors.PRIMARY_300).hex(),
        j = (0, r._i)(null != n ? n : v),
        g = (0, r.ho)(j, !1, b ? f : null);
    return (
        (t = null != m ? m : 0.3 > (0, r.Bd)(j) ? i.Z.unsafe_rawColors.PRIMARY_630.css : i.Z.unsafe_rawColors.WHITE_500.css),
        (0, a.jsx)(s.ua7, {
            text: null != p ? p : d.NW.string(d.t.T3PvV1),
            children: (e) => {
                var n, r;
                return (0, a.jsx)(
                    c.Z,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            className: x,
                            color: g,
                            size: u,
                            children: (0, a.jsx)(s.kmB, {
                                size: 'custom',
                                color: t,
                                height: u,
                                width: u,
                                className: h
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, a);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n)
                );
            }
        })
    );
}
