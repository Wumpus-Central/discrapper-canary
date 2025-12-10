n.d(t, { H: () => f }), n(388685);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(28664),
    s = n(481060),
    u = n(572004),
    c = n(388032),
    d = n(198473);
function f(e) {
    var t,
        n,
        { chunks: r, className: f, onCopy: g } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        i = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["chunks", "className", "onCopy"]);
    let p = i.useMemo(() => (null == r ? void 0 : r.join(" ")), [r]),
        [E, N] = i.useState(!1),
        O = i.useCallback(() => {
            (0, u.JG)(p, () => {
                N(!0), null == g || g();
            });
        }, [g, p]),
        y = E ? s.owK : s.TIy;
    return (0, l.jsx)(s.P3F, {
        className: a()(d.container, f),
        onClick: O,
        children: (0, l.jsx)(o.u, {
            text: E ? c.intl.string(c.t.t5VZ88) : c.intl.string(c.t.OpuAlK),
            children: (0, l.jsx)(
                y,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, h)),
                (n = n =
                    {
                        size: "xxs",
                        color: E ? s.TVs.colors.TEXT_FEEDBACK_POSITIVE : s.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        }),
    });
}
