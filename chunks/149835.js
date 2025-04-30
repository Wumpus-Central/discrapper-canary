n.d(e, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(58642),
    c = n(283595),
    o = n(417363),
    u = n(626135),
    s = n(630388),
    d = n(981631),
    b = n(388032);
function p(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function f(t, e) {
    let n = (0, i.e7)([o.Z], () => o.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        f = (0, i.e7)([c.Z], () => !c.Z.hasRemovedLibraryApplicationThisSession);
    if (n && !t.isHidden()) return null;
    function O() {
        let e = (0, s.x9)(t.getFlags(), d.eHb.HIDDEN);
        a.h(t.id, t.branchId, e), u.default.track(d.rMx.APPLICATION_SETTINGS_UPDATED, p({ hidden_enabled: (0, s.yE)(e, d.eHb.HIDDEN) }, t.getAnalyticsData()));
    }
    return (0, r.jsx)(l.sNh, {
        id: 'in-library',
        label: t.isHidden() ? b.intl.string(b.t['0dnEUF']) : b.intl.string(b.t.TuJXLy),
        action: function () {
            null != t &&
                null != e &&
                (t.isHidden() || !f
                    ? O()
                    : (0, l.h7j)((t) => {
                          var n, i;
                          return (0, r.jsx)(
                              l.ConfirmModal,
                              ((n = p(
                                  {
                                      header: b.intl.string(b.t.oB7isr),
                                      confirmText: b.intl.string(b.t.OWjIiY),
                                      cancelText: b.intl.string(b.t['ETE/oK']),
                                      onConfirm: () => O(),
                                      confirmButtonColor: l.zxk.Colors.BRAND
                                  },
                                  t
                              )),
                              (i = i =
                                  {
                                      children: (0, r.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          children: b.intl.format(b.t.HXfjKi, { name: e.name })
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
