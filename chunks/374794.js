A.d(t, { Z: () => s });
var n = A(951288);
A(647438);
var r = A(120356),
    a = A.n(r),
    i = A(755721),
    l = A(481060),
    o = A(53281);
function s(e) {
    var t,
        A,
        {
            children: r,
            className: s,
            innerClassName: d,
            onChange: u,
            "aria-label": c,
            "aria-describedby": g,
            filters: f,
            multiple: p = !1,
            disabled: m = !1,
            submitting: h = !1,
        } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var A,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var A,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (A = a[n]), t.indexOf(A) >= 0 || (r[A] = e[A]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (A = a[n]),
                        !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]);
            }
            return r;
        })(e, [
            "children",
            "className",
            "innerClassName",
            "onChange",
            "aria-label",
            "aria-describedby",
            "filters",
            "multiple",
            "disabled",
            "submitting",
        ]);
    return (0, n.jsx)(l.tEY, {
        within: !0,
        children: (0, n.jsxs)("div", {
            className: a()(
                s,
                (0, i.nY)(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var A = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(A);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(A).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = A[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, v)),
                    (A = A =
                        {
                            submitting: h,
                            disabled: m,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(A))
                        : (function (e, t) {
                              var A = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  A.push.apply(A, n);
                              }
                              return A;
                          })(Object(A)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(A, e));
                          }),
                    t),
                ),
            ),
            "aria-disabled": m,
            children: [
                (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: d,
                    children: r,
                }),
                (0, n.jsx)(o.Z, {
                    tabIndex: 0,
                    onChange: u,
                    filters: f,
                    multiple: p,
                    "aria-label": c,
                    "aria-describedby": g,
                    disabled: m,
                }),
            ],
        }),
    });
}
