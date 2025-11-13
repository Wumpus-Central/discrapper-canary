n.d(t, { Z: () => c });
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(755721),
    o = n(481060),
    s = n(53281);
function c(e) {
    var t,
        n,
        {
            children: r,
            className: c,
            innerClassName: u,
            onChange: d,
            "aria-label": p,
            "aria-describedby": h,
            filters: f,
            multiple: m = !1,
            disabled: g = !1,
            submitting: b = !1,
        } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
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
    return (0, i.jsx)(o.tEY, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: l()(
                c,
                (0, a.nY)(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, y)),
                    (n = n =
                        {
                            submitting: b,
                            disabled: g,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
            ),
            "aria-disabled": g,
            children: [
                (0, i.jsx)("span", {
                    "aria-hidden": !0,
                    className: u,
                    children: r,
                }),
                (0, i.jsx)(s.Z, {
                    tabIndex: 0,
                    onChange: d,
                    filters: f,
                    multiple: m,
                    "aria-label": p,
                    "aria-describedby": h,
                    disabled: g,
                }),
            ],
        }),
    });
}
