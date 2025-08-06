n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(846027),
    s = n(131951),
    l = n(36703),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let t = (0, i.e7)([s.Z], () => (0, l.P)(s.Z.getInputVolume()));
    return (0, r.jsx)(o.II_, {
        id: 'input',
        label: c.intl.string(c.t.OX2Bnp),
        control: (n, i) =>
            (0, r.jsx)(
                o._wy,
                _(d({}, n), {
                    ref: i,
                    value: t,
                    onChange: (t) => a.Z.setInputVolume((0, l.A)(t), { analyticsLocations: e }),
                    'aria-label': c.intl.string(c.t.OX2Bnp)
                })
            )
    });
}
