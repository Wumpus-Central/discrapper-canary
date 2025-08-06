n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(481060),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
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
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function d(e) {
    var { popoutWindowAlwaysOnTop: t, onToggleStayOnTop: n } = e,
        s = c(e, ['popoutWindowAlwaysOnTop', 'onToggleStayOnTop']);
    let u = t ? a.intl.string(a.t.YdyDMz) : a.intl.string(a.t.ZVGHwM),
        d = t ? i.QVc : i.k5M;
    return (0, r.jsx)(
        o.Z,
        l(
            {
                onClick: () => n(!t),
                label: u,
                iconComponent: d
            },
            s
        )
    );
}
