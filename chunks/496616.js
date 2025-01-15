n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(153867),
    r = n(468026),
    s = n(740492),
    o = n(388032);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        n = (t) => {
            a.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), t(), e();
        };
    s.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, l.openModal)(
              (l) =>
                  (0, i.jsx)(r.default, {
                      confirmText: o.intl.string(o.t.efSOLC),
                      secondaryConfirmText: o.intl.string(o.t['JdIQ/f']),
                      title: o.intl.string(o.t.pVr7Cg),
                      cancelText: o.intl.string(o.t.EwoEOT),
                      onConfirm: () => {
                          l.onClose(), e();
                      },
                      onCancel: t,
                      onConfirmSecondary: () => n(l.onClose),
                      body: o.intl.string(o.t.ugSbNT),
                      ...l
                  }),
              {},
              l.POPOUT_MODAL_CONTEXT
          );
}
