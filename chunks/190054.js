n.d(t, { H: () => d }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(572004),
    u = n(388032),
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
    let h = l.useMemo(() => (null == t ? void 0 : t.join(' ')), [t]),
        [p, f] = l.useState(!1),
        g = l.useCallback(() => {
            (0, s.JG)(h, () => {
                f(!0), null == i || i();
            });
        }, [i, h]),
        y = p ? a.owK : a.TIy;
    return (0, r.jsx)(a.P3F, {
        className: o()(c.container, n),
        onClick: g,
        children: (0, r.jsx)(a.ua7, {
            text: p ? u.NW.string(u.t['t5VZ8/']) : u.NW.string(u.t.OpuAlJ),
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
                            color: p ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.INTERACTIVE_NORMAL
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
