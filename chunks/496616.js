n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(153867),
    a = n(468026),
    s = n(740492),
    o = n(388032);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        n = (t) => {
            r.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), t(), e();
        };
    s.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, i.h7j)(
              (i) =>
                  (0, l.jsx)(a.default, {
                      confirmText: o.intl.string(o.t.efSOLC),
                      secondaryConfirmText: o.intl.string(o.t['JdIQ/f']),
                      title: o.intl.string(o.t.pVr7Cg),
                      cancelText: o.intl.string(o.t.EwoEOT),
                      onConfirm: () => {
                          i.onClose(), e();
                      },
                      onCancel: t,
                      onConfirmSecondary: () => n(i.onClose),
                      body: o.intl.string(o.t.ugSbNT),
                      ...i
                  }),
              {},
              i.u1M
          );
}
