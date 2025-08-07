t.d(n, { Z: () => s });
var r = t(255367);
t(73800);
var o = t(120356),
    i = t.n(o),
    a = t(755721),
    l = t(481060),
    c = t(813197);
function s(e) {
    var n,
        t,
        {
            buttonCTA: o,
            onChange: s,
            onFileSizeError: d,
            "aria-label": u,
            multiple: _ = !1,
            disabled: b = !1,
            submitting: p = !1,
            maxFileSizeBytes: f,
            filters: h,
            className: m,
        } = e,
        g = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (t = i[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
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
    return (0, r.jsx)(l.tEY, {
        within: !0,
        children: (0, r.jsxs)("div", {
            className: i()(
                (0, a.nY)(
                    ((n = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (n) {
                                    var r;
                                    (r = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[n] = r);
                                });
                        }
                        return e;
                    })({}, g)),
                    (t = t =
                        {
                            submitting: p,
                            disabled: b,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                        : (function (e, n) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, r);
                              }
                              return t;
                          })(Object(t)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                          }),
                    n),
                ),
                m,
            ),
            style: { width: "max-content" },
            "aria-disabled": b,
            children: [
                (0, r.jsx)("span", {
                    "aria-hidden": !0,
                    children: o,
                }),
                (0, r.jsx)(c.ZP, {
                    tabIndex: 0,
                    onChange: s,
                    onFileSizeError: d,
                    multiple: _,
                    maxFileSizeBytes: f,
                    filters: h,
                    "aria-label": null != u ? u : o,
                    disabled: b,
                }),
            ],
        }),
    });
}
