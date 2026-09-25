i.d(n, { default: () => u });
var e = i(477900),
    c = i(582128),
    r = i(732159),
    a = i(72152),
    o = i(770376),
    s = i(375708);
function u(t) {
    let [n, i] = c.useState(!1);
    return (0, e.jsx)(r.u, {
        ...t,
        title: s.intl.string(s.t["pjYu0/"]),
        subtitle: s.intl.format(s.t["0eydyj"], {}),
        confirmText: s.intl.string(s.t.zVZXRU),
        cancelText: s.intl.string(s.t["ETE/oC"]),
        onConfirm: function () {
            (0, a.Z)(!0);
        },
        onCloseCallback: function () {
            n && (0, o.f)();
        },
        variant: "primary",
        checkboxProps: { checked: n, onChange: (t) => i(t) },
    });
}
