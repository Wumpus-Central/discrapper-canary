n.d(t, { H: () => u }), n(388685);
var r = n(255367),
    o = n(73800),
    c = n(120356),
    i = n.n(c),
    l = n(481060),
    s = n(572004),
    a = n(388032),
    d = n(798665);
function u(e) {
    var { chunks: t, className: n, onCopy: c } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['chunks', 'className', 'onCopy']);
    let h = o.useMemo(() => (null == t ? void 0 : t.join(' ')), [t]),
        [f, p] = o.useState(!1),
        m = o.useCallback(() => {
            (0, s.JG)(h, () => {
                p(!0), null == c || c();
            });
        }, [c, h]),
        b = f ? l.owK : l.TIy;
    return (0, r.jsx)(l.P3F, {
        className: i()(d.container, n),
        onClick: m,
        children: (0, r.jsx)(l.ua7, {
            text: f ? a.intl.string(a.t['t5VZ8/']) : a.intl.string(a.t.OpuAlJ),
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    b,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, u, e)),
                    (n = n =
                        {
                            size: 'xxs',
                            color: f ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.INTERACTIVE_NORMAL
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
                    t)
                );
            }
        })
    });
}
