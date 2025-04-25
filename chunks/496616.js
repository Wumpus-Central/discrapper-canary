n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(153867),
    l = n(468026),
    s = n(740492),
    c = n(388032);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        n = (t) => {
            o.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), t(), e();
        };
    s.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, r.h7j)(
              (r) =>
                  (0, i.jsx)(
                      l.default,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })(
                          {
                              confirmText: c.intl.string(c.t.efSOLC),
                              secondaryConfirmText: c.intl.string(c.t['JdIQ/f']),
                              title: c.intl.string(c.t.pVr7Cg),
                              cancelText: c.intl.string(c.t.EwoEOT),
                              onConfirm: () => {
                                  r.onClose(), e();
                              },
                              onCancel: t,
                              onConfirmSecondary: () => n(r.onClose),
                              body: c.intl.string(c.t.ugSbNT)
                          },
                          r
                      )
                  ),
              {},
              r.u1M
          );
}
