n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(153867),
    a = n(468026),
    o = n(740492),
    s = n(388032);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        n = (t) => {
            l.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), t(), e();
        };
    o.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, i.h7j)(
              (i) =>
                  (0, r.jsx)(
                      a.default,
                      (function (e) {
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
                      })(
                          {
                              confirmText: s.NW.string(s.t.efSOLC),
                              secondaryConfirmText: s.NW.string(s.t['JdIQ/f']),
                              title: s.NW.string(s.t.pVr7Cg),
                              cancelText: s.NW.string(s.t.EwoEOT),
                              onConfirm: () => {
                                  i.onClose(), e();
                              },
                              onCancel: t,
                              onConfirmSecondary: () => n(i.onClose),
                              body: s.NW.string(s.t.ugSbNT)
                          },
                          i
                      )
                  ),
              {},
              i.u1M
          );
}
