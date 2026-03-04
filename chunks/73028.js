n.d(t, { U: () => o });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(157559),
    a = n(818348),
    s = n(985018);
let o = (e, t) => {
    let o = `group-dm-edit-modal-${e}`,
        c = !1,
        _ = (e) => {
            c = e;
        },
        E = () => {
            c
                ? r.A.show({
                      title: s.intl.string(s.t.pvRCSu),
                      body: s.intl.string(s.t.DRi46S),
                      confirmText: s.intl.string(s.t["6GQDFu"]),
                      confirmVariant: "critical-primary",
                      cancelText: s.intl.string(s.t.DmDzZB),
                      onConfirm: () => (0, l.OoC)(o),
                      onCancel: a.tE,
                  })
                : (0, l.OoC)(o);
        };
    (0, l.mMO)(
        async () => {
            let { default: l } = await n.e("42455").then(n.bind(n, 66442));
            return (n) =>
                (0, i.jsx)(l, {
                    closeOrShowDiscardChangesAlert: E,
                    setHasPendingChanges: _,
                    channelId: e,
                    location: t,
                    ...n,
                });
        },
        { modalKey: o, onCloseRequest: E },
    );
};
