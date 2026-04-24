"use strict";
n.d(t, { U: () => o });
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(157559),
    s = n(818348),
    l = n(985018);
let o = (e, t) => {
    let o = `group-dm-edit-modal-${e}`,
        c = !1,
        d = (e) => {
            c = e;
        },
        u = () => {
            c
                ? a.A.show({
                      title: l.intl.string(l.t.pvRCSu),
                      body: l.intl.string(l.t.DRi46S),
                      confirmText: l.intl.string(l.t["6GQDFu"]),
                      confirmVariant: "critical-primary",
                      cancelText: l.intl.string(l.t.DmDzZB),
                      onConfirm: () => (0, i.closeModal)(o),
                      onCancel: s.tE,
                  })
                : (0, i.closeModal)(o);
        };
    (0, i.openModalLazy)(
        async () => {
            let { default: i } = await n.e("42455").then(n.bind(n, 66442));
            return (n) =>
                (0, r.jsx)(i, {
                    closeOrShowDiscardChangesAlert: u,
                    setHasPendingChanges: d,
                    channelId: e,
                    location: t,
                    ...n,
                });
        },
        { modalKey: o, onCloseRequest: u },
    );
};
