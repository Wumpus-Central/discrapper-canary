n.d(t, { Z: () => s });
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(906732),
    c = n(335131),
    a = n(475413),
    l = n(388032);
function s(e) {
    var { onClose: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                o,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        o,
                        r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++) (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['onClose']);
    let { analyticsLocations: s, newestAnalyticsLocation: d } = (0, i.ZP)();
    return (0, o.jsx)(
        a.ef,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    o.forEach(function (t) {
                        var o;
                        (o = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = o);
                    });
            }
            return e;
        })(
            {
                action: 'VISIT_SHOP',
                icon: r.EOn,
                tooltipText: l.intl.string(l.t.b2d0Nz),
                themeColor: 'secondary',
                onClick: () => {
                    (0, c.mK)({
                        analyticsLocations: s,
                        openInLayer: !1,
                        analyticsSource: d
                    }),
                        null == t || t();
                }
            },
            n
        )
    );
}
