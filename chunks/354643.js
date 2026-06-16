i.d(n, { default: () => l });
var e = i(627968),
    r = i(64700),
    a = i(732159),
    o = i(72152),
    s = i(770376),
    c = i(375708);
function l(t) {
    let [n, i] = r.useState(!1);
    return (0, e.jsx)(a.ConfirmModal, {
        ...t,
        title: c.intl.string(c.t["pjYu0/"]),
        subtitle: c.intl.format(c.t["0eydyj"], {}),
        confirmText: c.intl.string(c.t.zVZXRU),
        cancelText: c.intl.string(c.t["ETE/oC"]),
        onConfirm: () => {
            (0, o.Z)(!0);
        },
        onCloseCallback: () => {
            n && (0, s.f)();
        },
        variant: "primary",
        checkboxProps: { checked: n, onChange: (t) => i(t) },
    });
}
