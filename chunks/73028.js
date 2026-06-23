e.d(t, { U: () => r });
var i = e(627968);
e(64700);
var a = e(192308),
    o = e(157559),
    s = e(818348),
    l = e(375708);
function r(n, t) {
    let r = `group-dm-edit-modal-${n}`,
        c = !1;
    function d(n) {
        c = n;
    }
    function u() {
        c
            ? o.A.show({
                  title: l.intl.string(l.t.pvRCSu),
                  body: l.intl.string(l.t.DRi46S),
                  confirmText: l.intl.string(l.t["6GQDFu"]),
                  confirmVariant: "critical-primary",
                  cancelText: l.intl.string(l.t.DmDzZB),
                  onConfirm: () => (0, a.closeModal)(r),
                  onCancel: s.tE,
              })
            : (0, a.closeModal)(r);
    }
    (0, a.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([e.e("24126"), e.e("41567"), e.e("95067"), e.e("42455")]).then(
                e.bind(e, 66442),
            );
            return (e) =>
                (0, i.jsx)(a, {
                    closeOrShowDiscardChangesAlert: u,
                    setHasPendingChanges: d,
                    channelId: n,
                    location: t,
                    ...e,
                });
        },
        { modalKey: r, onCloseRequest: u },
    );
}
