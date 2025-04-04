n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(864094),
    o = n(871499),
    a = n(388032);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    return e ? a.NW.string(a.t.S5anIS) : a.NW.string(a.t.q3O3Jy);
}
function f(e) {
    var { isSelfStream: t, centerButton: n = !1, onMouseEnter: a, onMouseLeave: s } = e,
        u = c(e, ['isSelfStream', 'centerButton', 'onMouseEnter', 'onMouseLeave']);
    let f = n ? o.d : o.Z,
        { Component: _, events: p } = (0, i.P)('disable');
    return (0, r.jsx)(
        f,
        l(
            {
                label: d(t),
                iconComponent: _,
                onMouseEnter: (e) => {
                    null == a || a(e), p.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == s || s(e), p.onMouseLeave();
                }
            },
            u
        )
    );
}
