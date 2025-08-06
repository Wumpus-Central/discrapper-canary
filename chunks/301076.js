n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(562129),
    o = n(871499);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            }));
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function u(e) {
    var { isActivityActive: t, onMouseEnter: n, onMouseLeave: a, onClick: c } = e,
        u = l(e, ['isActivityActive', 'onMouseEnter', 'onMouseLeave', 'onClick']);
    let { Component: d, events: f, play: _ } = (0, i.Z)('ActivityButton');
    return (0, r.jsx)(
        o.d,
        s(
            {
                isTrayButton: !0,
                isActive: t,
                color: t ? 'green' : void 0,
                iconComponent: d,
                onMouseEnter: (e) => {
                    (null == n || n(e), f.onMouseEnter());
                },
                onMouseLeave: (e) => {
                    (null == a || a(e), f.onMouseLeave());
                },
                onClick: (e) => {
                    (null == c || c(e), _());
                }
            },
            u
        )
    );
}
