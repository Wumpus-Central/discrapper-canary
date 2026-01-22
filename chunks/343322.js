n.d(e, { A: () => A });
var r = n(627968);
n(64700);
var i = n(665260),
    l = n(311907),
    a = n(314116),
    c = n(397927),
    o = n(59636),
    u = n(189081),
    d = n(194871),
    b = n(954571),
    s = n(652215),
    p = n(985018);
function A(t, e) {
    let n = (0, l.bG)([d.A], () => d.A.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        A = (0, l.bG)([u.A], () => !u.A.hasRemovedLibraryApplicationThisSession);
    if (n && !t.isHidden()) return null;
    function f() {
        let e = (0, i.PQ)(t.getFlags(), s.hM6.HIDDEN);
        o.V(t.id, t.branchId, e),
            b.default.track(
                s.HAw.APPLICATION_SETTINGS_UPDATED,
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            r.forEach(function (e) {
                                var r;
                                (r = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = r);
                            });
                    }
                    return t;
                })({ hidden_enabled: (0, i.Lt)(e, s.hM6.HIDDEN) }, t.getAnalyticsData()),
            );
    }
    return (0, r.jsx)(c.Drp, {
        id: "in-library",
        label: t.isHidden() ? p.intl.string(p.t["0dnEUJ"]) : p.intl.string(p.t.TuJXLx),
        action: function () {
            null != t &&
                null != e &&
                (t.isHidden() || !A
                    ? f()
                    : (0, a.A)({
                          title: p.intl.string(p.t.oB7isi),
                          subtitle: p.intl.format(p.t.HXfjKt, { name: e.name }),
                          variant: "primary",
                          confirmText: p.intl.string(p.t.OWjIiV),
                          onConfirm: () => f(),
                      }));
        },
    });
}
