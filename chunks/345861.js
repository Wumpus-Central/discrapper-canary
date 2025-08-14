n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(755721),
    s = n(481060),
    c = n(813197);
function a(e) {
    var t,
        n,
        {
            buttonCTA: i,
            onChange: a,
            onFileSizeError: u,
            "aria-label": d,
            multiple: f = !1,
            disabled: p = !1,
            submitting: b = !1,
            maxFileSizeBytes: O,
            filters: m,
            className: h,
        } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "buttonCTA",
            "onChange",
            "onFileSizeError",
            "aria-label",
            "multiple",
            "disabled",
            "submitting",
            "maxFileSizeBytes",
            "filters",
            "className",
        ]);
    return (0, r.jsx)(s.tEY, {
        within: !0,
        children: (0, r.jsxs)("div", {
            className: l()(
                (0, o.nY)(
                    ((t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, g)),
                    (n = n =
                        {
                            submitting: b,
                            disabled: p,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
                h,
            ),
            style: { width: "max-content" },
            "aria-disabled": p,
            children: [
                (0, r.jsx)("span", {
                    "aria-hidden": !0,
                    children: i,
                }),
                (0, r.jsx)(c.ZP, {
                    tabIndex: 0,
                    onChange: a,
                    onFileSizeError: u,
                    multiple: f,
                    maxFileSizeBytes: O,
                    filters: m,
                    "aria-label": null != d ? d : i,
                    disabled: p,
                }),
            ],
        }),
    });
}
