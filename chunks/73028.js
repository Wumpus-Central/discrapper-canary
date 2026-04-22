n.d(t, { U: () => o });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(157559),
    a = n(818348),
    r = n(985018);
let o = (e, t) => {
    let o = `group-dm-edit-modal-${e}`,
        d = !1,
        c = (e) => {
            d = e;
        },
        u = () => {
            d
                ? s.A.show({
                      title: r.intl.string(r.t.pvRCSu),
                      body: r.intl.string(r.t.DRi46S),
                      confirmText: r.intl.string(r.t["6GQDFu"]),
                      confirmVariant: "critical-primary",
                      cancelText: r.intl.string(r.t.DmDzZB),
                      onConfirm: () => (0, l.closeModal)(o),
                      onCancel: a.tE,
                  })
                : (0, l.closeModal)(o);
        };
    (0, l.openModalLazy)(
        async () => {
            let { default: l } = await n.e("42455").then(n.bind(n, 66442));
            return (n) =>
                (0, i.jsx)(l, {
                    closeOrShowDiscardChangesAlert: u,
                    setHasPendingChanges: c,
                    channelId: e,
                    location: t,
                    ...n,
                });
        },
        { modalKey: o, onCloseRequest: u },
    );
};
