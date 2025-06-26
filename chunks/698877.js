n.d(t, { O: () => s });
var r = n(255367),
    i = n(73800),
    l = n(864094),
    o = n(871499),
    a = n(388032);
function s(e) {
    let t, n;
    var { hasPermission: s, streamActive: c, isSelfStream: u, centerButton: d, onMouseEnter: p, onMouseLeave: h, renderNUXHighlight: f, buttonRef: m } = e,
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['hasPermission', 'streamActive', 'isSelfStream', 'centerButton', 'onMouseEnter', 'onMouseLeave', 'renderNUXHighlight', 'buttonRef']);
    let b = d ? o.d : o.Z;
    t = c ? (u ? a.intl.string(a.t.S5anIS) : a.intl.string(a.t.q3O3Jy)) : s ? a.intl.string(a.t.fjBNo6) : a.intl.string(a.t.uQn9Bw);
    let { Component: _, events: y, play: C } = (0, l.P)(c ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => C(), [c, C]),
        (0, r.jsx)(
            b,
            (function (e) {
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
            })(
                {
                    buttonRef: m,
                    isTrayButton: !0,
                    label: t,
                    disabled: !s,
                    iconComponent: _,
                    isActive: c,
                    color: (f ? (n = 'premiumGradient') : c && (n = 'green'), n),
                    onMouseEnter: (e) => {
                        null == p || p(e), y.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == h || h(e), y.onMouseLeave();
                    }
                },
                g
            )
        )
    );
}
