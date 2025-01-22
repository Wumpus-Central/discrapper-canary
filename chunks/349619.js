r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(153867),
    s = r(468026),
    l = r(740492),
    u = r(388032);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        r = () => {
            o.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), e();
        };
    l.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, a.openModal)((a) =>
              (0, i.jsx)(s.default, {
                  confirmText: u.intl.string(u.t.efSOLC),
                  secondaryConfirmText: u.intl.string(u.t['JdIQ/f']),
                  title: u.intl.string(u.t.pVr7Cg),
                  cancelText: u.intl.string(u.t.EwoEOT),
                  onConfirm: e,
                  onConfirmSecondary: r,
                  onCancel: n,
                  body: u.intl.string(u.t.Tfj539),
                  ...a
              })
          );
}
