n.d(e, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(95015),
    l = n(442837),
    a = n(755721),
    c = n(481060),
    o = n(58642),
    u = n(283595),
    s = n(417363),
    b = n(626135),
    d = n(981631),
    f = n(388032);
function p(t) {
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
}
function O(t, e) {
    let n = (0, l.e7)([s.Z], () => s.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        O = (0, l.e7)([u.Z], () => !u.Z.hasRemovedLibraryApplicationThisSession);
    if (n && !t.isHidden()) return null;
    function y() {
        let e = (0, i.x9)(t.getFlags(), d.eHb.HIDDEN);
        o.h(t.id, t.branchId, e),
            b.default.track(
                d.rMx.APPLICATION_SETTINGS_UPDATED,
                p({ hidden_enabled: (0, i.yE)(e, d.eHb.HIDDEN) }, t.getAnalyticsData()),
            );
    }
    return (0, r.jsx)(c.sNh, {
        id: "in-library",
        label: t.isHidden() ? f.intl.string(f.t["0dnEUJ"]) : f.intl.string(f.t.TuJXLx),
        action: function () {
            null != t &&
                null != e &&
                (t.isHidden() || !O
                    ? y()
                    : (0, c.h7j)((t) => {
                          var n, i;
                          return (0, r.jsx)(
                              c.ConfirmModal,
                              ((n = p(
                                  {
                                      header: f.intl.string(f.t.oB7isi),
                                      confirmText: f.intl.string(f.t.OWjIiV),
                                      cancelText: f.intl.string(f.t["ETE/oC"]),
                                      onConfirm: () => y(),
                                      confirmButtonColor: a.zx.Colors.BRAND,
                                  },
                                  t,
                              )),
                              (i = i =
                                  {
                                      children: (0, r.jsx)(c.Text, {
                                          variant: "text-md/normal",
                                          children: f.intl.format(f.t.HXfjKt, { name: e.name }),
                                      }),
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (t, e) {
                                        var n = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(t);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (t) {
                                        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
                                    }),
                              n),
                          );
                      }));
        },
    });
}
