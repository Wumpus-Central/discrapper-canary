n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(153867),
    o = n(468026),
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
    let { onConfirm: t, onCancel: n, usesPopoutContext: c = !1 } = e,
        d = () => {
            a.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 });
        };
    s.ZP.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, i.h7j)(
              (e) =>
                  (0, r.jsx)(
                      o.default,
                      u(
                          {
                              confirmText: l.intl.string(l.t.makWn5),
                              secondaryConfirmText: l.intl.string(l.t.wGAwOT),
                              title: l.intl.string(l.t.ye21jI),
                              cancelText: l.intl.string(l.t.B8pz39),
                              onConfirm: t,
                              onConfirmSecondary: d,
                              onCancel: n,
                              body: l.intl.string(l.t.hbagWF)
                          },
                          e
                      )
                  ),
              {},
              c ? i.u1M : void 0
          );
}
