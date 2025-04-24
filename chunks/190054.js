n.d(t, { H: () => d }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    u = n.n(i),
    s = n(481060),
    a = n(572004),
    o = n(388032),
    c = n(798665);
function d(e) {
    var { chunks: t, className: n, onCopy: i } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['chunks', 'className', 'onCopy']);
    let f = l.useMemo(() => (null == t ? void 0 : t.join(' ')), [t]),
        [E, g] = l.useState(!1),
        _ = l.useCallback(() => {
            (0, a.JG)(f, () => {
                g(!0), null == i || i();
            });
        }, [i, f]),
        y = E ? s.owK : s.TIy;
    return (0, r.jsx)(s.P3F, {
        className: u()(c.container, n),
        onClick: _,
        children: (0, r.jsx)(s.ua7, {
            text: E ? o.intl.string(o.t['t5VZ8/']) : o.intl.string(o.t.OpuAlJ),
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    y,
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
                    })({}, d, e)),
                    (n = n =
                        {
                            size: 'xxs',
                            color: E ? s.TVs.colors.TEXT_POSITIVE : s.TVs.colors.INTERACTIVE_NORMAL
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
