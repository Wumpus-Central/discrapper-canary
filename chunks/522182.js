n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var l = n(481060),
    o = n(906732),
    i = n(335131),
    a = n(475413),
    c = n(388032);
function s(e) {
    var { onClose: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['onClose']);
    let { analyticsLocations: s, newestAnalyticsLocation: d } = (0, o.ZP)();
    return (0, r.jsx)(
        a.ef,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {
                action: 'VISIT_SHOP',
                icon: l.EOn,
                tooltipText: c.intl.string(c.t.b2d0Nz),
                themeColor: 'secondary',
                onClick: () => {
                    ((0, i.mK)({
                        analyticsLocations: s,
                        openInLayer: !1,
                        analyticsSource: d
                    }),
                        null == t || t());
                }
            },
            n
        )
    );
}
