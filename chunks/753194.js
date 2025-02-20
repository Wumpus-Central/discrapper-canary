n.d(t, { Z: () => u }), n(47120);
var r = n(200651);
n(192379);
var l = n(866442),
    i = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(607070),
    c = n(297700),
    d = n(388032);
function u(e) {
    let t,
        { color: n, size: u, forcedIconColor: m, className: x, iconClassName: p, tooltipText: f } = e,
        [b, h] = (0, i.Wu)([s.Z], () => [s.Z.desaturateUserColors, s.Z.saturation]),
        _ = (0, o.dQu)(a.Z.unsafe_rawColors.PRIMARY_300).hex(),
        g = (0, l._i)(null != n ? n : _),
        v = (0, l.ho)(g, !1, b ? h : null);
    return (
        (t = null != m ? m : 0.3 > (0, l.Bd)(g) ? a.Z.unsafe_rawColors.PRIMARY_630.css : a.Z.unsafe_rawColors.WHITE_500.css),
        (0, r.jsx)(o.ua7, {
            text: null != f ? f : d.NW.string(d.t.T3PvV1),
            children: (e) => {
                var n, l;
                return (0, r.jsx)(
                    c.Z,
                    ((n = (function (e) {
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
                    })({}, e)),
                    (l = l =
                        {
                            className: x,
                            color: v,
                            size: u,
                            children: (0, r.jsx)(o.kmB, {
                                size: 'custom',
                                color: t,
                                height: u,
                                width: u,
                                className: p
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    n)
                );
            }
        })
    );
}
