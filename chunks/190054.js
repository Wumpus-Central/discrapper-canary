n.d(t, { H: () => d }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(572004),
    u = n(388032),
    c = n(798665);
function d(e) {
    var { chunks: t, className: n, onCopy: i } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['chunks', 'className', 'onCopy']);
    let f = r.useMemo(() => (null == t ? void 0 : t.join(' ')), [t]),
        [h, g] = r.useState(!1),
        p = r.useCallback(() => {
            (0, s.JG)(f, () => {
                g(!0), null == i || i();
            });
        }, [i, f]),
        y = h ? o.owK : o.TIy;
    return (0, l.jsx)(o.P3F, {
        className: a()(c.container, n),
        onClick: p,
        children: (0, l.jsx)(o.ua7, {
            text: h ? u.intl.string(u.t['t5VZ8/']) : u.intl.string(u.t.OpuAlJ),
            children: (e) => {
                var t, n;
                return (0, l.jsx)(
                    y,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, d, e)),
                    (n = n =
                        {
                            size: 'xxs',
                            color: h ? o.TVs.colors.TEXT_POSITIVE : o.TVs.colors.INTERACTIVE_NORMAL
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
                    t)
                );
            }
        })
    });
}
