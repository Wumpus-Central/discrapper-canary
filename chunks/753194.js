n.d(t, { Z: () => u }), n(388685);
var r = n(951288);
n(647438);
var a = n(866442),
    i = n(442837),
    o = n(692547),
    l = n(481060),
    s = n(607070),
    c = n(297700),
    d = n(388032);
function u(e) {
    let t,
        { color: n, size: u, forcedIconColor: _, className: m, iconClassName: p, tooltipText: g } = e,
        [f, b] = (0, i.Wu)([s.Z], () => [s.Z.desaturateUserColors, s.Z.saturation]),
        h = (0, l.dQu)(o.Z.unsafe_rawColors.PRIMARY_300).hex(),
        x = (0, a._i)(null != n ? n : h),
        v = (0, a.ho)(x, !1, f ? b : null);
    return (
        (t =
            null != _
                ? _
                : 0.3 > (0, a.Bd)(x)
                  ? o.Z.unsafe_rawColors.PRIMARY_630.css
                  : o.Z.unsafe_rawColors.WHITE_500.css),
        (0, r.jsx)(l.ua7, {
            text: null != g ? g : d.intl.string(d.t.T3PvV1),
            children: (e) => {
                var n, a;
                return (0, r.jsx)(
                    c.Z,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (a = a =
                        {
                            className: m,
                            color: v,
                            size: u,
                            children: (0, r.jsx)(l.kmB, {
                                size: "custom",
                                color: t,
                                height: u,
                                width: u,
                                className: p,
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    n),
                );
            },
        })
    );
}
