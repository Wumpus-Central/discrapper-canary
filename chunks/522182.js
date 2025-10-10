t.d(n, { Z: () => m });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    o = t(906732),
    s = t(335131),
    a = t(592183),
    c = t(224724),
    d = t(475413),
    u = t(388032);
function m(e) {
    var { onClose: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        i = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (t = r[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++)
                    (t = r[l]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["onClose"]);
    let { analyticsLocations: m, newestAnalyticsLocation: p } = (0, o.ZP)(),
        f = (0, i.e7)([c.Z], () => c.Z.hasSaveablePendingChanges());
    return (0, l.jsx)(
        d.ef,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    l.forEach(function (n) {
                        var l;
                        (l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = l);
                    });
            }
            return e;
        })(
            {
                action: "VISIT_SHOP",
                icon: r.EOn,
                tooltipText: u.intl.string(u.t.b2d0Nz),
                themeColor: "secondary",
                onClick: () => {
                    if (f) return void a.Z.notifyPendingWidgets();
                    (0, s.mK)({
                        analyticsLocations: m,
                        openInLayer: !1,
                        analyticsSource: p,
                    }),
                        null == n || n();
                },
            },
            t,
        ),
    );
}
