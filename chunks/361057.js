n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(871499),
    a = n(447564),
    s = n(304388);
function c() {
    return (c =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
let u = i.forwardRef((e, t) => {
    let { channel: n, glow: i } = e;
    return (0, r.jsx)(s.Z, {
        renderPopout: () => null,
        children: (e) => {
            var s = c(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            let { onClick: u } = s,
                d = (function (e, t) {
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
                })(s, ['onClick']);
            return (0, r.jsx)(
                o.Z,
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
                        buttonRef: t,
                        iconComponent: l.hh5,
                        iconColor: i ? '#eb90f1' : void 0,
                        onClick: (e) => {
                            (0, a.k)(n, 'ActionBar'), e.stopPropagation(), u(e);
                        }
                    },
                    d
                )
            );
        }
    });
});
u.displayName = 'ActionBarHDStreamingConsumableButton';
let d = u;
