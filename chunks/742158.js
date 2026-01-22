n.d(t, {
    z: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(949296);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function _(e) {
    let t,
        { tag: n = "h5", children: i, className: l, disabled: u, required: p = !1, error: _, errorId: h } = e,
        m = f(e, ["tag", "children", "className", "disabled", "required", "error", "errorId"]);
    return (
        (t = "legend" === n ? n : s.H),
        (0, r.jsxs)(
            t,
            d(
                c(
                    {
                        className: a()(o[n], "h5" !== n ? o.defaultColor : null, l, {
                            [o["defaultMargin".concat(n)]]: null == l,
                            [o.disabled]: u,
                            [o.error]: null != _,
                        }),
                    },
                    m,
                ),
                {
                    children: [
                        i,
                        p && null == _
                            ? (0, r.jsx)("span", {
                                  className: o.required,
                                  children: "*",
                              })
                            : null,
                        null != _
                            ? (0, r.jsxs)("span", {
                                  id: h,
                                  className: o.errorMessage,
                                  children: [
                                      null != i
                                          ? (0, r.jsx)("span", {
                                                className: o.errorSeparator,
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
