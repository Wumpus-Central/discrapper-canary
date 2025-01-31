n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(153867),
    s = n(468026),
    o = n(740492),
    l = n(388032);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        n = () => {
            a.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), e();
        };
    o.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, r.h7j)((r) =>
              (0, i.jsx)(s.default, {
                  confirmText: l.intl.string(l.t.efSOLC),
                  secondaryConfirmText: l.intl.string(l.t['JdIQ/f']),
                  title: l.intl.string(l.t.pVr7Cg),
                  cancelText: l.intl.string(l.t.EwoEOT),
                  onConfirm: e,
                  onConfirmSecondary: n,
                  onCancel: t,
                  body: l.intl.string(l.t.Tfj539),
                  ...r
              })
          );
}
