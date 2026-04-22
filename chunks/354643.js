n.d(e, { default: () => c });
var i = n(627968),
    o = n(64700),
    r = n(732159),
    l = n(72152),
    s = n(770376),
    a = n(985018);
function c(t) {
    let [e, n] = o.useState(!1);
    return (0, i.jsx)(r.ConfirmModal, {
        ...t,
        title: a.intl.string(a.t["pjYu0/"]),
        subtitle: a.intl.format(a.t["0eydyj"], {}),
        confirmText: a.intl.string(a.t.zVZXRU),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onConfirm: () => {
            (0, l.Z)(!0);
        },
        onCloseCallback: () => {
            e && (0, s.f)();
        },
        variant: "primary",
        checkboxProps: { checked: e, onChange: (t) => n(t) },
    });
}
