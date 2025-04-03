r.d(t, { H: () => u }), r(47120);
var n = r(200651),
    o = r(192379),
    c = r(120356),
    i = r.n(c),
    s = r(481060),
    l = r(572004),
    a = r(388032),
    d = r(798665);
function u(e) {
    var { chunks: t, className: r, onCopy: c } = e,
        u = (function (e, t) {
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
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['chunks', 'className', 'onCopy']);
    let h = o.useMemo(() => (null == t ? void 0 : t.join(' ')), [t]),
        [f, p] = o.useState(!1),
        m = o.useCallback(() => {
            p(!0), (0, l.JG)(h), null == c || c();
        }, [c, h]),
        b = f ? s.owK : s.TIy;
    return (0, n.jsx)(s.P3F, {
        className: i()(d.container, r),
        onClick: m,
        children: (0, n.jsx)(s.ua7, {
            text: f ? a.NW.string(a.t['t5VZ8/']) : a.NW.string(a.t.OpuAlJ),
            children: (e) => {
                var t, r;
                return (0, n.jsx)(
                    b,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, u, e)),
                    (r = r =
                        {
                            size: 'xxs',
                            color: f ? s.TVs.colors.TEXT_POSITIVE : s.TVs.colors.INTERACTIVE_NORMAL
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
                    t)
                );
            }
        })
    });
}
