"use strict";
n.d(t, { U: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(157559),
    s = n(818348),
    a = n(985018);
let o = (e, t) => {
    let o = `group-dm-edit-modal-${e}`,
        E = !1,
        c = (e) => {
            E = e;
        },
        _ = () => {
            E
                ? l.A.show({
                      title: a.intl.string(a.t.pvRCSu),
                      body: a.intl.string(a.t.DRi46S),
                      confirmText: a.intl.string(a.t["6GQDFu"]),
                      confirmVariant: "critical-primary",
                      cancelText: a.intl.string(a.t.DmDzZB),
                      onConfirm: () => (0, r.OoC)(o),
                      onCancel: s.tE,
                  })
                : (0, r.OoC)(o);
        };
    (0, r.mMO)(
        async () => {
            let { default: r } = await n.e("42455").then(n.bind(n, 66442));
            return (n) =>
                (0, i.jsx)(r, {
                    closeOrShowDiscardChangesAlert: _,
                    setHasPendingChanges: c,
                    channelId: e,
                    location: t,
                    ...n,
                });
        },
        { modalKey: o, onCloseRequest: _ },
    );
};
