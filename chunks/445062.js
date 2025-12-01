n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(864094),
    a = n(871499),
    o = n(388032);
function s(e, t, n) {
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
function l(e) {
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    return e ? o.intl.string(o.t.S5anIc) : o.intl.string(o.t.q3O3J8);
}
function f(e) {
    var { isSelfStream: t, centerButton: n = !1, onMouseEnter: o, onMouseLeave: s } = e,
        u = c(e, ["isSelfStream", "centerButton", "onMouseEnter", "onMouseLeave"]);
    let f = n ? a.d : a.Z,
        { Component: p, events: _ } = (0, i.P)("disable");
    return (0, r.jsx)(
        f,
        l(
            {
                label: d(t),
                isTrayButton: !1,
                iconComponent: p,
                onMouseEnter: (e) => {
                    null == o || o(e), _.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == s || s(e), _.onMouseLeave();
                },
            },
            u,
        ),
    );
}
