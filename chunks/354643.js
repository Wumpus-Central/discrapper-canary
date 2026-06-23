i.d(n, { default: () => l });
var e = i(627968),
    o = i(64700),
    r = i(732159),
    a = i(72152),
    c = i(770376),
    s = i(375708);
function l(t) {
    let [n, i] = o.useState(!1);
    return (0, e.jsx)(r.ConfirmModal, {
        ...t,
        title: s.intl.string(s.t["pjYu0/"]),
        subtitle: s.intl.format(s.t["0eydyj"], {}),
        confirmText: s.intl.string(s.t.zVZXRU),
        cancelText: s.intl.string(s.t["ETE/oC"]),
        onConfirm: function () {
            (0, a.Z)(!0);
        },
        onCloseCallback: function () {
            n && (0, c.f)();
        },
        variant: "primary",
        checkboxProps: { checked: n, onChange: (t) => i(t) },
    });
}
