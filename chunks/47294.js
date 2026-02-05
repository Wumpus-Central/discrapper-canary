"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(817281),
    l = n(964404),
    u = n(985018);
function c(e) {
    let { onConfirm: t, onCancel: n, ...l } = e,
        [c, d] = i.useState(!1);
    i.useEffect(() => {
        o.Ay.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: c });
    }, [c]);
    let _ = () => {
            n?.(), l.onClose();
        },
        f = () => {
            t(), l.onClose();
        };
    return (0, r.jsx)(a.Modal, {
        ...l,
        size: "md",
        title: u.intl.string(u.t.ye21jI),
        subtitle: u.intl.string(u.t.hbagWD),
        actions: [
            { text: u.intl.string(u.t.B8pz37), onClick: _, variant: "secondary" },
            { text: u.intl.string(u.t.makWn9), onClick: f, variant: "primary" },
        ],
        actionBarInput: (0, r.jsx)(s.Checkbox, { checked: c, onChange: (e) => d(e), label: u.intl.string(u.t.wGAwOS) }),
    });
}
function d(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: i = !1 } = e;
    l.Ay.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, s.qfG)((e) => (0, r.jsx)(c, { ...e, onConfirm: t, onCancel: n }), {}, i ? s.KX8 : void 0);
}
