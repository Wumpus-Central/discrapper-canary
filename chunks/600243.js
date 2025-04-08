n.d(t, { Z: () => d });
var r = n(200651),
    i = n(134632),
    o = n(481060),
    a = n(823379);
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
    var { label: t } = e,
        n = c(e, ['label']);
    switch (t) {
        case i.w.LISTEN:
            return (0, r.jsx)(o.RZG, l({}, n));
        case i.w.WATCH:
            return (0, r.jsx)(o.ARS, l({}, n));
        case i.w.PLAY:
            return (0, r.jsx)(o.iWm, l({}, n));
        case i.w.THINK:
            return (0, r.jsx)(o.WGR, l({}, n));
        case i.w.LOVE:
            return (0, r.jsx)(o.h_8, l({}, n));
        default:
            (0, a.vE)(t);
    }
}
