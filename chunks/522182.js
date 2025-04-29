t.d(n, { Z: () => s });
var o = t(200651);
t(192379);
var r = t(481060),
    i = t(906732),
    c = t(335131),
    a = t(475413),
    l = t(388032);
function s(e) {
    var { onClose: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++) (t = i[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['onClose']);
    let { analyticsLocations: s, newestAnalyticsLocation: d } = (0, i.ZP)();
    return (0, o.jsx)(
        a.ef,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    o.forEach(function (n) {
                        var o;
                        (o = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = o);
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
                        null == n || n();
                }
            },
            t
        )
    );
}
