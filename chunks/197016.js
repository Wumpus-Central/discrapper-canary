n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(685072),
    o = n(287734),
    a = n(871499),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var { centerButton: t = !1, onClick: n, onMouseEnter: l, onMouseLeave: u } = e,
        _ = f(e, ['centerButton', 'onClick', 'onMouseEnter', 'onMouseLeave']);
    let p = t ? a.d : a.Z,
        h = () => {
            null == n || n(), o.default.disconnect();
        },
        m = () => s.NW.string(s.t['6vrfgo']),
        { Component: g, events: E } = (0, i.K)();
    return (0, r.jsx)(
        p,
        d(c({}, _), {
            onClick: h,
            iconComponent: g,
            onMouseEnter: (e) => {
                null == l || l(e), E.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == u || u(e), E.onMouseLeave();
            },
            label: m()
        })
    );
}
