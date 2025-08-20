n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(131951),
    l = n(36703),
    c = n(358085),
    u = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
    let t = (0, i.e7)([s.Z], () => (0, l.P)(s.Z.getOutputVolume()));
    return (0, r.jsx)(a.II_, {
        id: "output",
        label: u.intl.string(u.t.eATD2N),
        control: (n, i) =>
            (0, r.jsx)(
                a._wy,
                p(f({}, n), {
                    ref: i,
                    value: t,
                    maxValue: c.isPlatformEmbedded ? 200 : 100,
                    onChange: (t) => o.Z.setOutputVolume((0, l.A)(t), { analyticsLocations: e }),
                    "aria-label": u.intl.string(u.t.eATD2N),
                }),
            ),
    });
}
