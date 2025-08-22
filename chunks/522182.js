t.d(n, { Z: () => f });
var r = t(951288);
t(647438);
var l = t(442837),
    o = t(481060),
    i = t(906732),
    c = t(335131),
    s = t(592183),
    a = t(224724),
    d = t(475413),
    u = t(388032);
function f(e) {
    var { onClose: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                l = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (t = o[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
            }
            return l;
        })(e, ["onClose"]);
    let { analyticsLocations: f, newestAnalyticsLocation: m } = (0, i.ZP)(),
        p = (0, l.e7)([a.Z], () => a.Z.hasSaveablePendingChanges());
    return (0, r.jsx)(
        d.ef,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = r);
                    });
            }
            return e;
        })(
            {
                action: "VISIT_SHOP",
                icon: o.EOn,
                tooltipText: u.intl.string(u.t.b2d0Nz),
                themeColor: "secondary",
                onClick: () => {
                    if (p) return void s.Z.notifyPendingWidgets();
                    (0, c.mK)({
                        analyticsLocations: f,
                        openInLayer: !1,
                        analyticsSource: m,
                    }),
                        null == n || n();
                },
            },
            t,
        ),
    );
}
