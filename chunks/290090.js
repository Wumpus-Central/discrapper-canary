t.d(l, { A: () => f });
var n = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    s = t(688810),
    a = t(979286),
    o = t(958805),
    d = t(61881),
    c = t(993401),
    u = t(985018);
function f(e) {
    let { onClose: l } = e,
        t = (function (e, l) {
            if (null == e) return {};
            var t,
                n,
                i,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, t = Reflect.ownKeys(e); i < t.length; i++)
                    (n = t[i]),
                        !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r;
            }
            if (
                ((r = (function (e, l) {
                    if (null == e) return {};
                    var t,
                        n,
                        i = {},
                        r = Object.getOwnPropertyNames(e);
                    for (n = 0; n < r.length; n++)
                        (t = r[n]),
                            !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
                    return i;
                })(e, l)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
                    (n = t[i]),
                        !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, ["onClose"]),
        { analyticsLocations: f, newestAnalyticsLocation: p } = (0, s.Ay)(),
        m = (0, i.bG)([d.A], () => d.A.hasUnsavedChanges());
    return (0, n.jsx)(
        c.q3,
        (function (e) {
            for (var l = 1; l < arguments.length; l++) {
                var t = null != arguments[l] ? arguments[l] : {},
                    n = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    n.forEach(function (l) {
                        var n;
                        (n = t[l]),
                            l in e
                                ? Object.defineProperty(e, l, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[l] = n);
                    });
            }
            return e;
        })(
            {
                action: "VISIT_SHOP",
                icon: r.U1X,
                tooltipText: u.intl.string(u.t.b2d0N0),
                onClick: () => {
                    m
                        ? o.A.notifyUnsavedWidgets()
                        : ((0, a.Cz)({
                              analyticsLocations: f,
                              analyticsSource: p,
                          }),
                          null == l || l());
                },
            },
            t,
        ),
    );
}
