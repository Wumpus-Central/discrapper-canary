n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
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
        : (0, i.h7j)(
              (i) =>
                  (0, r.jsx)(
                      l.default,
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
                              confirmText: c.NW.string(c.t.efSOLC),
                              secondaryConfirmText: c.NW.string(c.t['JdIQ/f']),
                              title: c.NW.string(c.t.pVr7Cg),
                              cancelText: c.NW.string(c.t.EwoEOT),
                              onConfirm: () => {
                                  i.onClose(), e();
                              },
                              onCancel: t,
                              onConfirmSecondary: () => n(i.onClose),
                              body: c.NW.string(c.t.ugSbNT)
                          },
                          i
                      )
                  ),
              {},
              i.u1M
          );
}
