n.d(t, { Z: () => f });
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.isInstalled(e.id, e.branchId), [e.branchId, e.id]),
        f = (0, i.e7)([c.Z], () => !c.Z.hasRemovedLibraryApplicationThisSession);
    if (n && !e.isHidden()) return null;
    function O() {
        let t = (0, s.x9)(e.getFlags(), d.eHb.HIDDEN);
        a.h(e.id, e.branchId, t), u.default.track(d.rMx.APPLICATION_SETTINGS_UPDATED, p({ hidden_enabled: (0, s.yE)(t, d.eHb.HIDDEN) }, e.getAnalyticsData()));
    }
    return (0, r.jsx)(l.sNh, {
        id: 'in-library',
        label: e.isHidden() ? b.NW.string(b.t['0dnEUF']) : b.NW.string(b.t.TuJXLy),
        action: function () {
            null != e &&
                null != t &&
                (e.isHidden() || !f
                    ? O()
                    : (0, l.h7j)((e) => {
                          var n, i;
                          return (0, r.jsx)(
                              l.ConfirmModal,
                              ((n = p(
                                  {
                                      header: b.NW.string(b.t.oB7isr),
                                      confirmText: b.NW.string(b.t.OWjIiY),
                                      cancelText: b.NW.string(b.t['ETE/oK']),
                                      onConfirm: () => O(),
                                      confirmButtonColor: l.zxk.Colors.BRAND
                                  },
                                  e
                              )),
                              (i = i =
                                  {
                                      children: (0, r.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          children: b.NW.format(b.t.HXfjKi, { name: t.name })
                                      })
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n)
                          );
                      }));
        }
    });
}
