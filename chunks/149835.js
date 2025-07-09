n.d(e, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    c = n(58642),
    o = n(283595),
    u = n(417363),
    s = n(626135),
    d = n(630388),
    b = n(981631),
    p = n(388032);
function f(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                ((r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r));
            }));
    }
    return t;
}
function O(t, e) {
    let n = (0, i.e7)([u.Z], () => u.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        O = (0, i.e7)([o.Z], () => !o.Z.hasRemovedLibraryApplicationThisSession);
    if (n && !t.isHidden()) return null;
    function y() {
        let e = (0, d.x9)(t.getFlags(), b.eHb.HIDDEN);
        (c.h(t.id, t.branchId, e), s.default.track(b.rMx.APPLICATION_SETTINGS_UPDATED, f({ hidden_enabled: (0, d.yE)(e, b.eHb.HIDDEN) }, t.getAnalyticsData())));
    }
    return (0, r.jsx)(a.sNh, {
        id: 'in-library',
        label: t.isHidden() ? p.intl.string(p.t['0dnEUF']) : p.intl.string(p.t.TuJXLy),
        action: function () {
            null != t &&
                null != e &&
                (t.isHidden() || !O
                    ? y()
                    : (0, a.h7j)((t) => {
                          var n, i;
                          return (0, r.jsx)(
                              a.ConfirmModal,
                              ((n = f(
                                  {
                                      header: p.intl.string(p.t.oB7isr),
                                      confirmText: p.intl.string(p.t.OWjIiY),
                                      cancelText: p.intl.string(p.t['ETE/oK']),
                                      onConfirm: () => y(),
                                      confirmButtonColor: l.zx.Colors.BRAND
                                  },
                                  t
                              )),
                              (i = i =
                                  {
                                      children: (0, r.jsx)(a.Text, {
                                          variant: 'text-md/normal',
                                          children: p.intl.format(p.t.HXfjKi, { name: e.name })
                                      })
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
                              n)
                          );
                      }));
        }
    });
}
