n.d(t, { V: () => d });
var r = n(951288);
n(647438);
var i = n(402453),
    a = n(595824),
    o = n(571155);
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
    let t = (0, i.A)("HoistedStylesCheckbox"),
        { className: n, isIndicator: s = !1 } = e,
        u = c(e, ["className", "isIndicator"]);
    return t
        ? s
            ? (0, r.jsx)("div", {
                  className: n,
                  children: (0, r.jsx)(o.F, {
                      checked: !!u.checked,
                      disabled: u.disabled,
                  }),
              })
            : (0, r.jsx)("div", {
                  className: n,
                  children: (0, r.jsx)(a.X, l({}, u)),
              })
        : (0, r.jsx)(a.h, l({ className: n }, u));
}
