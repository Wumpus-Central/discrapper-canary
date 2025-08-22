r.d(t, { H: () => d }), r(388685);
var n = r(951288),
    o = r(647438),
    c = r(120356),
    l = r.n(c),
    i = r(481060),
    s = r(572004),
    a = r(388032),
    u = r(198473);
function d(e) {
    var { chunks: t, className: r, onCopy: c } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++)
                    (r = c[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["chunks", "className", "onCopy"]);
    let f = o.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
        [p, b] = o.useState(!1),
        O = o.useCallback(() => {
            (0, s.JG)(f, () => {
                b(!0), null == c || c();
            });
        }, [c, f]),
        y = p ? i.owK : i.TIy;
    return (0, n.jsx)(i.P3F, {
        className: l()(u.container, r),
        onClick: O,
        children: (0, n.jsx)(i.ua7, {
            text: p ? a.intl.string(a.t["t5VZ8/"]) : a.intl.string(a.t.OpuAlJ),
            children: (e) => {
                var t, r;
                return (0, n.jsx)(
                    y,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
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
                    })({}, d, e)),
                    (r = r =
                        {
                            size: "xxs",
                            color: p ? i.TVs.colors.TEXT_FEEDBACK_POSITIVE : i.TVs.colors.INTERACTIVE_NORMAL,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t),
                );
            },
        }),
    });
}
