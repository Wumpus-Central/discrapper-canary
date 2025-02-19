n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(153867),
    a = n(468026),
    s = n(740492),
    l = n(388032);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        n = () => {
            o.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), e();
        };
    s.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, i.h7j)((i) =>
              (0, r.jsx)(
                  a.default,
                  u(
                      {
                          confirmText: l.NW.string(l.t.efSOLC),
                          secondaryConfirmText: l.NW.string(l.t['JdIQ/f']),
                          title: l.NW.string(l.t.pVr7Cg),
                          cancelText: l.NW.string(l.t.EwoEOT),
                          onConfirm: e,
                          onConfirmSecondary: n,
                          onCancel: t,
                          body: l.NW.string(l.t.Tfj539)
                      },
                      i
                  )
              )
          );
}
