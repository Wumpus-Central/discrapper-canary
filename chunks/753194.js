(n.d(t, { Z: () => h }), n(388685));
var r = n(255367);
n(73800);
var i = n(866442),
    o = n(442837),
    a = n(692547),
    s = n(481060),
    l = n(607070),
    c = n(297700),
    u = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let t,
        { color: n, size: d, forcedIconColor: _, className: h, iconClassName: m, tooltipText: g } = e,
        [E, b] = (0, o.Wu)([l.Z], () => [l.Z.desaturateUserColors, l.Z.saturation]),
        y = (0, s.dQu)(a.Z.unsafe_rawColors.PRIMARY_300).hex(),
        O = (0, i._i)(null != n ? n : y),
        v = (0, i.ho)(O, !1, E ? b : null);
    return (
        (t = null != _ ? _ : 0.3 > (0, i.Bd)(O) ? a.Z.unsafe_rawColors.PRIMARY_630.css : a.Z.unsafe_rawColors.WHITE_500.css),
        (0, r.jsx)(s.ua7, {
            text: null != g ? g : u.intl.string(u.t.T3PvV1),
            children: (e) =>
                (0, r.jsx)(
                    c.Z,
                    p(f({}, e), {
                        className: h,
                        color: v,
                        size: d,
                        children: (0, r.jsx)(s.kmB, {
                            size: 'custom',
                            color: t,
                            height: d,
                            width: d,
                            className: m
                        })
                    })
                )
        })
    );
}
