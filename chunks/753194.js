n.d(t, { Z: () => d }), n(388685);
var r = n(200651);
n(192379);
var i = n(866442),
    l = n(442837),
    o = n(692547),
    a = n(481060),
    s = n(607070),
    c = n(297700),
    u = n(388032);
function d(e) {
    let t,
        { color: n, size: d, forcedIconColor: p, className: h, iconClassName: f, tooltipText: g } = e,
        [m, b] = (0, l.Wu)([s.Z], () => [s.Z.desaturateUserColors, s.Z.saturation]),
        y = (0, a.dQu)(o.Z.unsafe_rawColors.PRIMARY_300).hex(),
        _ = (0, i._i)(null != n ? n : y),
        v = (0, i.ho)(_, !1, m ? b : null);
    return (
        (t = null != p ? p : 0.3 > (0, i.Bd)(_) ? o.Z.unsafe_rawColors.PRIMARY_630.css : o.Z.unsafe_rawColors.WHITE_500.css),
        (0, r.jsx)(a.ua7, {
            text: null != g ? g : u.NW.string(u.t.T3PvV1),
            children: (e) => {
                var n, i;
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
                    (i = i =
                        {
                            className: h,
                            color: v,
                            size: d,
                            children: (0, r.jsx)(a.kmB, {
                                size: 'custom',
                                color: t,
                                height: d,
                                width: d,
                                className: f
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n)
                );
            }
        })
    );
}
