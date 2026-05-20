n.d(e, { U: () => r });
var i = n(627968);
n(64700);
var a = n(192308),
    l = n(157559),
    s = n(818348),
    o = n(375708);
let r = (t, e) => {
    let r = `group-dm-edit-modal-${t}`,
        c = !1,
        d = (t) => {
            c = t;
        },
        h = () => {
            c
                ? l.A.show({
                      title: o.intl.string(o.t.pvRCSu),
                      body: o.intl.string(o.t.DRi46S),
                      confirmText: o.intl.string(o.t["6GQDFu"]),
                      confirmVariant: "critical-primary",
                      cancelText: o.intl.string(o.t.DmDzZB),
                      onConfirm: () => (0, a.closeModal)(r),
                      onCancel: s.tE,
                  })
                : (0, a.closeModal)(r);
        };
    (0, a.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([n.e("8516"), n.e("41567"), n.e("95067"), n.e("42455")]).then(
                n.bind(n, 66442),
            );
            return (n) =>
                (0, i.jsx)(a, {
                    closeOrShowDiscardChangesAlert: h,
                    setHasPendingChanges: d,
                    channelId: t,
                    location: e,
                    ...n,
                });
        },
        { modalKey: r, onCloseRequest: h },
    );
};
