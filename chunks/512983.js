n.d(t, { v: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(711493);
function l(e, t, n) {
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
function c(e) {
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
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    let t;
    var { tag: n = "h5", children: i, className: l, disabled: u, required: p = !1, error: _, errorId: m } = e,
        h = f(e, ["tag", "children", "className", "disabled", "required", "error", "errorId"]);
    return (
        (t = "legend" === n ? n : o.H),
        (0, r.jsxs)(
            t,
            d(
                c(
                    {
                        className: a()(s[n], "h5" !== n ? s.defaultColor : null, l, {
                            [s["defaultMargin".concat(n)]]: null == l,
                            [s.disabled]: u,
                            [s.error]: null != _,
                        }),
                    },
                    h,
                ),
                {
                    children: [
                        i,
                        p && null == _
                            ? (0, r.jsx)("span", {
                                  className: s.required,
                                  children: "*",
                              })
                            : null,
                        null != _
                            ? (0, r.jsxs)("span", {
                                  id: m,
                                  className: s.errorMessage,
                                  children: [
                                      null != i
                                          ? (0, r.jsx)("span", {
                                                className: s.errorSeparator,
                                                children: "-",
                                            })
                                          : null,
                                      _,
                                  ],
                              })
                            : null,
                    ],
                },
            ),
        )
    );
}
