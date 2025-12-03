n.d(e, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(95015),
    l = n(442837),
    a = n(248514),
    c = n(481060),
    o = n(58642),
    u = n(283595),
    s = n(417363),
    d = n(626135),
    b = n(981631),
    f = n(388032);
function p(t, e) {
    let n = (0, l.e7)([s.Z], () => s.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        p = (0, l.e7)([u.Z], () => !u.Z.hasRemovedLibraryApplicationThisSession);
    if (n && !t.isHidden()) return null;
    function O() {
        let e = (0, i.x9)(t.getFlags(), b.eHb.HIDDEN);
        o.h(t.id, t.branchId, e),
            d.default.track(
                b.rMx.APPLICATION_SETTINGS_UPDATED,
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
                })({ hidden_enabled: (0, i.yE)(e, b.eHb.HIDDEN) }, t.getAnalyticsData()),
            );
    }
    return (0, r.jsx)(c.sNh, {
        id: "in-library",
        label: t.isHidden() ? f.intl.string(f.t["0dnEUJ"]) : f.intl.string(f.t.TuJXLx),
        action: function () {
            null != t &&
                null != e &&
                (t.isHidden() || !p
                    ? O()
                    : (0, a.Z)({
                          title: f.intl.string(f.t.oB7isi),
                          subtitle: f.intl.format(f.t.HXfjKt, { name: e.name }),
                          variant: "primary",
                          confirmText: f.intl.string(f.t.OWjIiV),
                          onConfirm: () => O(),
                      }));
        },
    });
}
